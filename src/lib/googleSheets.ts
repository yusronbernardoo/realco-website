import { google } from 'googleapis';

const getAuthClient = () => {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!clientEmail || !privateKey) {
    throw new Error('Missing Google Service Account credentials');
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return auth;
};

export async function appendBookingToSheet(bookingData: {
  bookingCode: string;
  customerName: string;
  customerWhatsapp: string;
  serviceName: string;
  barberName: string;
  date: string;
  time: string;
  price: number;
}) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId) {
    console.warn('GOOGLE_SHEET_ID is not configured. Skipping Google Sheets update.');
    return;
  }

  const auth = getAuthClient();
  const sheets = google.sheets({ version: 'v4', auth });

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:J', 
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toLocaleString('id-ID'), // Waktu Booking
            bookingData.bookingCode,            // Kode Booking
            bookingData.customerName,           // Nama Pelanggan
            bookingData.customerWhatsapp,       // No WA
            bookingData.serviceName,            // Layanan
            bookingData.barberName,             // Capster
            bookingData.date,                   // Tanggal
            bookingData.time,                   // Waktu
            bookingData.price,                  // Harga
            "CONFIRMED"                         // Status
          ],
        ],
      },
    });
    console.log('[GOOGLE_SHEETS] Successfully appended booking to sheet.');
  } catch (error) {
    console.error('[GOOGLE_SHEETS] Error appending to sheet:', error);
  }
}
