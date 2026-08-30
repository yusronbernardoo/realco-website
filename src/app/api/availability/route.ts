import { NextResponse } from 'next/server';
import { generateAvailableSlots } from '@/lib/availability';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const barberId = searchParams.get('barberId');
    const date = searchParams.get('date');
    const durationStr = searchParams.get('duration');

    if (!barberId || !date || !durationStr) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    const duration = parseInt(durationStr, 10);
    
    // Check credentials logic removed so we can use mocks if env is missing
    const slots = await generateAvailableSlots(barberId, date, duration);

    return NextResponse.json({ slots });
  } catch (error) {
    console.error("Availability API Error:", error);
    const message = error instanceof Error ? error.message : "Jadwal sedang tidak dapat dimuat. Silakan coba lagi.";
    return NextResponse.json({ error: message }, { status: 503 });
  }
}
