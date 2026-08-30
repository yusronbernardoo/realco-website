import { getEvents, CalendarEvent } from './googleCalendar';
import { BARBERS } from './data';

const OPENING_HOURS = {
  // 1 = Monday, 7 = Sunday
  1: { start: 9, end: 21 },
  2: { start: 9, end: 21 },
  3: { start: 9, end: 21 },
  4: { start: 9, end: 21 },
  5: { start: 13, end: 21 }, // Friday
  6: { start: 9, end: 21 },
  7: { start: 9, end: 21 },
};

export async function generateAvailableSlots(barberId: string, dateStr: string, durationMinutes: number) {
  // 1. Get Barber Calendar ID
  // In the future, you can add a 'calendarId' property to the BARBERS array in data.ts for each capster
  const barber = BARBERS.find(b => b.id === barberId);
  const calendarId = (barber as { calendarId?: string })?.calendarId || process.env.GOOGLE_CALENDAR_ID || 'primary';

  const targetDate = new Date(dateStr);
  const dayOfWeek = targetDate.getDay() === 0 ? 7 : targetDate.getDay();
  const hours = OPENING_HOURS[dayOfWeek as keyof typeof OPENING_HOURS];

  if (!hours) return [];

  // Generate all possible slots for the day (e.g., every 30 mins or 60 mins)
  // Let's generate slots based on service duration or every 30 mins
  const slotInterval = 30; // minutes
  const slots: { time: string; start: Date; end: Date; available: boolean }[] = [];

  const startTime = new Date(dateStr);
  startTime.setHours(hours.start, 0, 0, 0);

  const endTime = new Date(dateStr);
  endTime.setHours(hours.end, 0, 0, 0);

  let currentSlot = new Date(startTime);

  while (currentSlot < endTime) {
    const slotEnd = new Date(currentSlot.getTime() + durationMinutes * 60000);
    
    // Don't add slot if it ends after closing time
    if (slotEnd > endTime) {
      break;
    }

    const timeString = `${currentSlot.getHours().toString().padStart(2, '0')}:${currentSlot.getMinutes().toString().padStart(2, '0')}`;
    slots.push({
      time: timeString,
      start: new Date(currentSlot),
      end: slotEnd,
      available: true,
    });

    currentSlot = new Date(currentSlot.getTime() + slotInterval * 60000);
  }

  // 2. Fetch existing events from Google Calendar
  const timeMin = startTime.toISOString();
  const timeMax = endTime.toISOString();
  let events: CalendarEvent[] = [];
  try {
    events = await getEvents(calendarId, timeMin, timeMax);
  } catch (e: unknown) {
    console.error("Failed to fetch calendar events:", e);
    const errorMessage = e instanceof Error ? e.message : 'Unknown error';
    throw new Error(`Google Calendar Error: ${errorMessage}`);
  }

  // 3. Mark slots overlapping with existing events as unavailable
  for (const slot of slots) {
    for (const event of events) {
      if (!event.start?.dateTime || !event.end?.dateTime) continue;
      const eventStart = new Date(event.start.dateTime);
      const eventEnd = new Date(event.end.dateTime);

      // Overlap condition: slot.start < event.end AND slot.end > event.start
      if (slot.start < eventEnd && slot.end > eventStart) {
        slot.available = false;
        break;
      }
    }

    // Also mark past slots as unavailable if it's today
    if (slot.start < new Date()) {
      slot.available = false;
    }
  }

  return slots.map(s => ({ time: s.time, available: s.available }));
}
