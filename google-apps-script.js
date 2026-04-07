// ============================================================
// GOOGLE APPS SCRIPT — Wedding RSVP Backend
// Dianne & Darren · May 2, 2026
// ============================================================
// SETUP INSTRUCTIONS:
// 1. Go to https://script.google.com → New Project
// 2. Paste this entire file
// 3. Replace SPREADSHEET_ID below with your Google Sheet ID
// 4. Click Deploy → New Deployment → Web App
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Copy the Web App URL and paste it into index.html (SHEET_URL)
// ============================================================

const SPREADSHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
const SHEET_NAME = 'RSVP Responses';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getOrCreateSheet();

    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('en-PH'),
      data.name,
      data.email,
      data.attendance === 'yes' ? 'ATTENDING' : 'DECLINED',
      data.guestCount || '',
      data.meal || '',
      data.dietary || '',
      data.song || '',
      data.note || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Returns a summary count (useful for testing)
  const sheet = getOrCreateSheet();
  const data = sheet.getDataRange().getValues();
  const attending = data.slice(1).filter(r => r[3] === 'ATTENDING').length;
  const declined = data.slice(1).filter(r => r[3] === 'DECLINED').length;
  return ContentService
    .createTextOutput(JSON.stringify({ total: data.length - 1, attending, declined }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Add headers
    sheet.appendRow([
      'Timestamp', 'Full Name', 'Email', 'Attendance',
      'Guest Count', 'Meal Preference', 'Dietary Restrictions',
      'Song Request', 'Message/Note'
    ]);
    // Style headers
    const headerRange = sheet.getRange(1, 1, 1, 9);
    headerRange.setBackground('#5A7DB0');
    headerRange.setFontColor('#FFFFFF');
    headerRange.setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.setColumnWidths(1, 9, 160);
  }

  return sheet;
}
