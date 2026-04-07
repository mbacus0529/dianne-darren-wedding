# 💙 Wedding RSVP Website — Setup Guide
## Dianne & Darren · May 2, 2026

---

## 📁 FILES IN THIS PACKAGE

| File | Purpose |
|------|---------|
| `index.html` | Main wedding website (edit this) |
| `email-accepted.html` | Email template for guests who say YES |
| `email-declined.html` | Email template for guests who say NO |
| `google-apps-script.js` | Backend to save RSVPs to Google Sheets |
| `SETUP-GUIDE.md` | This guide |

---

## 🖼️ IMAGE FILE NAMES

When you upload your photos, name them exactly like this and place them in the same folder as `index.html`:

| File name | Where it appears |
|-----------|-----------------|
| `photo-1.jpg` | Gallery — tall left photo (portrait, hero shot) |
| `photo-2.jpg` | Gallery — top right |
| `photo-3.jpg` | Gallery — middle right |
| `photo-4.jpg` | Gallery — bottom row left |
| `photo-5.jpg` | Gallery — bottom row middle |
| `photo-6.jpg` | Gallery — bottom row right |

**Tips:**
- Use JPG or WEBP format for smaller file sizes
- Ideal size: under 800KB per photo
- Landscape or portrait both work, but photo-1 looks best as portrait (tall image)

---

## 🎬 VIDEO SETUP

Your Google Drive video link needs to be the **embed/preview** version.

1. Open Google Drive → right-click your video → **Share** → set to "Anyone with the link"
2. Copy the link. It looks like: `https://drive.google.com/file/d/ABCDEFGH/view`
3. Change `view` to `preview`: `https://drive.google.com/file/d/ABCDEFGH/preview`
4. Open `index.html`, find this line:
   ```
   const VIDEO_SRC = 'https://drive.google.com/file/d/1oUNLy1tdmIc9hPbbRmMucOKfPTytafTR/preview';
   ```
5. Replace the URL with your preview URL

---

## 📊 STEP 1 — Google Sheets Setup (Free RSVP Database)

1. Go to [sheets.google.com](https://sheets.google.com) → create a new blank spreadsheet
2. Name it: **Dianne & Darren RSVP**
3. Copy the spreadsheet ID from the URL:
   - URL: `https://docs.google.com/spreadsheets/d/`**`THIS_IS_YOUR_ID`**`/edit`
4. Go to [script.google.com](https://script.google.com) → **New Project**
5. Delete everything and paste the entire contents of `google-apps-script.js`
6. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual ID
7. Click **Save** (disk icon), then **Deploy → New Deployment**
   - Type: **Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
8. Click **Deploy** → copy the **Web App URL**
9. Open `index.html`, find:
   ```
   const SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
   Replace with your Web App URL

---

## 📧 STEP 2 — EmailJS Setup (Free Email Sending)

EmailJS lets you send emails from the browser — no server needed. Free plan = 200 emails/month.

### A. Create your account
1. Go to [emailjs.com](https://www.emailjs.com) → Sign Up (free)
2. Go to **Email Services** → **Add New Service** → choose Gmail or Outlook
3. Connect your email account → note your **Service ID** (e.g. `service_abc123`)

### B. Create the email templates
1. Go to **Email Templates** → **Create New Template**

**Template 1 — Accepted (name it: `rsvp_accepted`)**
- Subject: `💙 We'll see you there, {{to_name}}!`
- Body: Copy and paste the HTML from `email-accepted.html`
- Note your **Template ID** (e.g. `template_abc123`)

**Template 2 — Declined (name it: `rsvp_declined`)**
- Subject: `We'll miss you, {{to_name}} 🌸`
- Body: Copy and paste the HTML from `email-declined.html`
- Note your **Template ID**

### C. Get your Public Key
- Go to **Account → API Keys** → copy your **Public Key**

### D. Update index.html
Find these lines and replace:
```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ACCEPT = 'YOUR_TEMPLATE_ACCEPT_ID';
const EMAILJS_TEMPLATE_DECLINE = 'YOUR_TEMPLATE_DECLINE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

---

## 🚀 STEP 3 — Host on GitHub Pages (Free Forever)

1. Create a free account at [github.com](https://github.com) if you don't have one
2. Click **+** → **New Repository**
   - Name: `dianne-darren-wedding` (or any name)
   - Set to **Public**
   - Click **Create repository**
3. Upload your files:
   - Click **uploading an existing file**
   - Drag and drop: `index.html`, all `photo-X.jpg` files
   - Click **Commit changes**
4. Go to **Settings** → **Pages** (left sidebar)
5. Under **Source** → select **main branch** → click **Save**
6. Your website will be live at:
   `https://YOUR-USERNAME.github.io/dianne-darren-wedding`

**It may take 1–5 minutes to go live after first deploy.**

---

## 🔗 Custom Domain (Optional, Free with GitHub Pages)

If you want a URL like `www.dianneandarren.com`:
1. Buy a domain at [namecheap.com](https://namecheap.com) (~$10–15/year)
2. In GitHub Pages settings, enter your custom domain
3. Follow the DNS setup instructions shown there

---

## ✅ CHECKLIST

- [ ] Photos named correctly and uploaded to GitHub
- [ ] Video URL updated in `index.html`
- [ ] Google Sheet created and Apps Script deployed
- [ ] `SHEET_URL` updated in `index.html`
- [ ] EmailJS account created and both templates added
- [ ] All 4 EmailJS constants updated in `index.html`
- [ ] All files uploaded to GitHub repository
- [ ] GitHub Pages enabled → website is live
- [ ] Test the RSVP form with your own email!

---

## 💡 TIPS

- **Test first**: Fill out the RSVP form yourself before sharing the link
- **RSVP deadline**: Set in the website as April 20, 2026 — change in `index.html` if needed
- **Track guests**: Check your Google Sheet regularly — it updates in real time
- **Share the link**: Copy your GitHub Pages URL and share it on Facebook, Viber, or in the invitation card

---

*Made with love for Dianne & Darren · May 2, 2026*
