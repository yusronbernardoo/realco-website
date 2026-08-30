// Minimal Google Calendar Client using raw fetch to save disk space 
// and avoid the massive googleapis dependency

export type CalendarEvent = {
  id: string;
  start: { dateTime: string };
  end: { dateTime: string };
};

import { JWT } from 'google-auth-library';

// Mocks the access token generation for the service account
async function getAccessToken(): Promise<string> {
  if (!process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_CLIENT_EMAIL) {
    return "mock-access-token";
  }

  // Handle potential formatting issues with the private key from .env
  const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

  const client = new JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });

  const { token } = await client.getAccessToken();
  if (!token) throw new Error("Failed to get Google Calendar access token");
  return token;
}

export async function getEvents(calendarId: string, timeMin: string, timeMax: string): Promise<CalendarEvent[]> {
  // Check if we are running in a real environment
  if (!process.env.GOOGLE_PRIVATE_KEY) {
    console.warn("GOOGLE_PRIVATE_KEY is missing. Mocking Google Calendar getEvents.");
    return [];
  }

  const token = await getAccessToken();
  const url = new URL(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`);
  url.searchParams.append('timeMin', timeMin);
  url.searchParams.append('timeMax', timeMax);
  url.searchParams.append('singleEvents', 'true');
  url.searchParams.append('orderBy', 'startTime');

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) {
    throw new Error(`Google Calendar API Error: ${res.statusText}`);
  }

  const data = await res.json();
  return data.items || [];
}

export type EventInput = {
  summary: string;
  description: string;
  start: { dateTime: string };
  end: { dateTime: string };
  attendees?: { email: string }[];
  reminders?: {
    useDefault: boolean;
    overrides: { method: string; minutes: number }[];
  };
};

export async function createEvent(calendarId: string, event: EventInput): Promise<CalendarEvent> {
  if (!process.env.GOOGLE_PRIVATE_KEY) {
    console.warn("GOOGLE_PRIVATE_KEY is missing. Mocking Google Calendar createEvent.");
    return { id: "mock-event-id", start: event.start, end: event.end };
  }

  const token = await getAccessToken();
  const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event)
  });

  if (!res.ok) {
    throw new Error(`Google Calendar API Error: ${res.statusText}`);
  }

  return res.json();
}
