import { NextResponse } from 'next/server';
import { z } from 'zod';
import { appendBookingToSheet } from '@/lib/googleSheets';
import { generateAvailableSlots } from '@/lib/availability';
import { createEvent, EventInput } from '@/lib/googleCalendar';
import { SERVICES, BARBERS } from '@/lib/data';

export const dynamic = 'force-dynamic';

const bookingSchema = z.object({
  serviceId: z.string().min(1),
  barberId: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  time: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format"),
  customer: z.object({
    name: z.string().min(2, "Nama terlalu pendek").max(100),
    whatsapp: z.string().min(9, "Nomor WA tidak valid").max(20).regex(/^[0-9+-\s]+$/, "Format nomor tidak valid"),
    email: z.string().email("Email tidak valid").optional().or(z.literal('')),
    notes: z.string().max(500).optional(),
  }),
});

export async function POST(request: Request) {
  let createdEventId: string | null = null;
  let calendarId: string | null = null;

  try {
    const rawBody = await request.json();
    
    // 1. Validate Input
    const parseResult = bookingSchema.safeParse(rawBody);
    if (!parseResult.success) {
      return NextResponse.json({ 
        error: 'Data booking tidak valid. Periksa kembali informasi yang kamu masukkan.',
        details: parseResult.error.format()
      }, { status: 400 });
    }
    const data = parseResult.data;

    // 2. Validate Service and Barber (Get details from static data)
    const service = SERVICES.find(s => s.id === data.serviceId);
    const barber = BARBERS.find(b => b.id === data.barberId);

    if (!service || !barber) {
      return NextResponse.json({ error: 'Layanan atau Barber tidak ditemukan.' }, { status: 404 });
    }

    calendarId = (barber as { calendar_id?: string }).calendar_id || process.env.GOOGLE_CALENDAR_ID || 'primary';

    // 3. Server Recheck - Validate Date/Time
    const slots = await generateAvailableSlots(data.barberId, data.date, service.duration);
    const requestedSlot = slots.find(s => s.time === data.time);
    
    if (!requestedSlot || !requestedSlot.available) {
      return NextResponse.json({ error: 'Jadwal tersebut sudah tidak tersedia. Silakan pilih waktu lain.' }, { status: 400 });
    }

    // Calculate times
    const startTime = new Date(`${data.date}T${data.time}:00+07:00`); // Assuming WIB / GMT+7
    const endTime = new Date(startTime.getTime() + service.duration * 60000);
    const bookingCode = `RC${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    console.log(`[BOOKING_ATTEMPT] bookingCode: ${bookingCode}, Phone: ***${data.customer.whatsapp.slice(-4)}`);

    // 4. Create Google Calendar Event
    const eventParams: EventInput = {
      summary: `REAL.CO — ${service.name}`,
      description: `Customer: ${data.customer.name}
WhatsApp: ${data.customer.whatsapp}
Barber: ${barber.name}
Service: ${service.name}
Duration: ${service.duration} min
Price: Rp ${barber.price}
Booking ID: ${bookingCode}
${data.customer.notes ? `\nNotes: ${data.customer.notes}` : ''}`,
      start: { dateTime: startTime.toISOString() },
      end: { dateTime: endTime.toISOString() },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 2 * 60 }
        ]
      }
    };

    if (data.customer.email) {
      eventParams.attendees = [{ email: data.customer.email }];
    }

    const gCalEvent = await createEvent(calendarId as string, eventParams);
    createdEventId = gCalEvent.id;
    console.log(`[CALENDAR_EVENT_CREATION] Success. Event ID: ${createdEventId}`);

    // 5. Save Booking to Google Sheets
    await appendBookingToSheet({
      bookingCode,
      customerName: data.customer.name,
      customerWhatsapp: data.customer.whatsapp,
      serviceName: service.name,
      barberName: barber.name,
      date: data.date,
      time: data.time,
      price: barber.price
    });

    // 6. Owner Notification (Email)
    if (!process.env.RESEND_API_KEY) {
      console.log(`[NOTIFICATION_RESULT] BLOCKED - NEEDS CONFIGURATION. Booking Code: ${bookingCode}`);
    } else {
      try {
        const ownerEmail = process.env.OWNER_EMAIL || 'hallidbaabdillah@gmail.com';
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Acme <onboarding@resend.dev>', // Resend test email
            to: [ownerEmail],
            subject: `New Booking: ${service.name} - ${bookingCode}`,
            html: `
              <h2>Booking Baru Masuk!</h2>
              <p><strong>Booking ID:</strong> ${bookingCode}</p>
              <p><strong>Layanan:</strong> ${service.name}</p>
              <p><strong>Barber:</strong> ${barber.name}</p>
              <p><strong>Waktu:</strong> ${data.date} ${data.time}</p>
              <br/>
              <p><strong>Customer:</strong> ${data.customer.name}</p>
              <p><strong>WA:</strong> ${data.customer.whatsapp}</p>
            `
          })
        });
        console.log(`[NOTIFICATION_RESULT] Email sent to Owner (${ownerEmail}). Booking Code: ${bookingCode}`);
      } catch (err) {
        console.error(`[NOTIFICATION_RESULT] Failed to send email:`, err);
      }
    }

    return NextResponse.json({ 
      success: true, 
      bookingCode 
    });

  } catch (error) {
    const err = error instanceof Error ? error : new Error("Unknown error");
    console.error(`[ERROR_REASON] ${err.message}`);
    
    // 6. Failure Recovery (Cleanup orphan Google Calendar Event)
    if (createdEventId && calendarId && err.message.includes('DB_SAVE_FAILED')) {
      try {
        console.log(`[FAILURE_RECOVERY] Cleaning up orphan event ${createdEventId}...`);
      } catch (cleanupError) {
        console.error("[CRITICAL] Failed to clean up orphan event", cleanupError);
      }
    }

    // Handle Idempotency / Race Condition DB constraint error
    if (err.message.includes('duplicate key value') || err.message.includes('no_overlapping_bookings')) {
      return NextResponse.json({ 
        error: 'Maaf, slot tersebut baru saja diambil. Silakan pilih waktu lain.' 
      }, { status: 409 });
    }

    return NextResponse.json({ 
      error: 'Booking belum berhasil dibuat. Silakan coba lagi.' 
    }, { status: 500 });
  }
}
