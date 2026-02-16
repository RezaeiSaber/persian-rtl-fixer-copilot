# Installation Guide | راهنمای نصب

<div dir="rtl">

## 🇮🇷 راهنمای نصب - فارسی

### روش 1️⃣: استفاده از Tampermonkey (توصیه می‌شود)

#### مرحله 1: نصب Tampermonkey

1. بسته به مرورگر خود، Tampermonkey را نصب کنید:
   - **Chrome/Edge**: [Tampermonkey در Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - **Firefox**: [Tampermonkey در Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - **Safari**: [Tampermonkey در App Store](https://apps.apple.com/us/app/tampermonkey/id1482490089)
   - **Opera**: [Tampermonkey در Opera Add-ons](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)

#### مرحله 2: نصب اسکریپت

**گزینه A: استفاده از فایل Userscript آماده**

1. فایل `rtl-fixer.user.js` را باز کنید
2. روی آیکون Tampermonkey در toolbar کلیک کنید
3. "Create a new script" را انتخاب کنید
4. محتوای فایل `rtl-fixer.user.js` را کپی و جایگزین کنید
5. `Ctrl + S` (یا `Cmd + S` در Mac) را برای ذخیره بزنید

**گزینه B: استفاده از URL مستقیم (اگر در GitHub Pages منتشر کردید)**

1. به این لینک بروید: `https://rezaeisaber.github.io/persian-rtl-fixer-copilot/rtl-fixer.user.js`
2. Tampermonkey به صورت خودکار صفحه نصب را نمایش می‌دهد
3. روی "Install" کلیک کنید

#### مرحله 3: تست

1. به [GitHub Copilot Chat](https://github.com/copilot) بروید
2. یک متن فارسی یا عربی تایپ کنید
3. باید به صورت RTL و با فونت مشخص شده نمایش داده شود

---

### روش 2️⃣: استفاده از Developer Console

این روش موقتی است و هربار باید تکرار شود:

#### مرحله 1: باز کردن کنسول

1. به [GitHub Copilot](https://github.com/copilot) بروید
2. کلید `F12` را بزنید (یا `Ctrl + Shift + I` در Windows/Linux یا `Cmd + Option + I` در Mac)
3. تب "Console" را انتخاب کنید

#### مرحله 2: اجرای اسکریپت

1. فایل `rtl-fixer.js` را باز کنید
2. تمام محتوا را کپی کنید
3. در Console paste کنید و Enter بزنید

---

### روش 3️⃣: ساخت Extension سفارشی Chrome/Edge

#### مرحله 1: ساخت ساختار Extension

1. یک پوشه جدید به نام `copilot-rtl-extension` بسازید
2. فایل‌های زیر را در آن ایجاد کنید:

**manifest.json:**
```json
{
  "manifest_version": 3,
  "name": "GitHub Copilot RTL Fixer",
  "version": "1.0.0",
  "description": "Fix RTL text display in GitHub Copilot",
  "permissions": ["activeTab"],
  "content_scripts": [
    {
      "matches": ["*://github.com/*"],
      "js": ["rtl-fixer.js"],
      "run_at": "document_end"
    }
  ],
  "icons": {
    "16": "icon16.png",
    "48": "icon48.png",
    "128": "icon128.png"
  }
}
```

3. فایل `rtl-fixer.js` را در این پوشه کپی کنید

#### مرحله 2: نصب Extension

**Chrome/Edge:**
1. به `chrome://extensions` بروید (یا `edge://extensions`)
2. "Developer mode" را فعال کنید
3. روی "Load unpacked" کلیک کنید
4. پوشه `copilot-rtl-extension` را انتخاب کنید

**Firefox:**
1. به `about:debugging#/runtime/this-firefox` بروید
2. "Load Temporary Add-on" را کلیک کنید
3. فایل `manifest.json` را انتخاب کنید

---

### ⚙️ تنظیمات سفارشی

برای تغییر فونت، اندازه یا سایر تنظیمات:

1. فایل `rtl-fixer.js` (یا `rtl-fixer.user.js`) را باز کنید
2. بخش `CONFIG` را پیدا کنید:

```javascript
const CONFIG = {
  persian: {
    fontSize: 18,          // اندازه فونت را تغییر دهید
    bold: false,           // true کنید برای بولد
    fontName: 'B Nazanin'  // فونت دلخواه خود را بنویسید
  },
  english: {
    fontSize: 16,
    bold: false,
    fontName: ''           // برای استفاده از فونت پیش‌فرض خالی بگذارید
  }
};
```

3. تغییرات را ذخیره کنید
4. صفحه را Refresh کنید

---

### 🔧 عیب‌یابی

#### اسکریپت کار نمی‌کند

1. **بررسی کنسول**: F12 را بزنید و تب Console را چک کنید. باید پیام `[RTL Fixer] Initialization complete` را ببینید
2. **بررسی Tampermonkey**: مطمئن شوید اسکریپت فعال است و domain صحیح است
3. **Clear Cache**: Cache مرورگر را پاک کنید و دوباره امتحان کنید

#### فونت نمایش داده نمی‌شود

1. مطمئن شوید فونت مورد نظر روی سیستم شما نصب است
2. نام فونت را دقیقاً مانند نام نصب شده بنویسید
3. از fallback fonts استفاده کنید

#### متن هنوز LTR است

1. مطمئن شوید متن با حروف فارسی/عربی شروع می‌شود
2. کنسول را چک کنید برای خطاهای احتمالی
3. صفحه را Refresh کنید

---

### 📱 تماس با ما

اگر مشکلی دارید:
- Issue در GitHub باز کنید
- در بخش Discussions سوال بپرسید

</div>

---

## 🇺🇸 Installation Guide - English

### Method 1️⃣: Using Tampermonkey (Recommended)

#### Step 1: Install Tampermonkey

1. Install Tampermonkey for your browser:
   - **Chrome/Edge**: [Tampermonkey on Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - **Firefox**: [Tampermonkey on Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - **Safari**: [Tampermonkey on App Store](https://apps.apple.com/us/app/tampermonkey/id1482490089)
   - **Opera**: [Tampermonkey on Opera Add-ons](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)

#### Step 2: Install Script

**Option A: Using the Userscript File**

1. Open the `rtl-fixer.user.js` file
2. Click on the Tampermonkey icon in your toolbar
3. Select "Create a new script"
4. Copy and paste the contents of `rtl-fixer.user.js`
5. Press `Ctrl + S` (or `Cmd + S` on Mac) to save

**Option B: Using Direct URL (if published on GitHub Pages)**

1. Visit: `https://rezaeisaber.github.io/persian-rtl-fixer-copilot/rtl-fixer.user.js`
2. Tampermonkey will automatically show the installation page
3. Click "Install"

#### Step 3: Test

1. Go to [GitHub Copilot Chat](https://github.com/copilot)
2. Type some Persian or Arabic text
3. It should display in RTL with the specified font

---

### Method 2️⃣: Using Developer Console

This method is temporary and must be repeated each time:

#### Step 1: Open Console

1. Go to [GitHub Copilot](https://github.com/copilot)
2. Press `F12` (or `Ctrl + Shift + I` on Windows/Linux or `Cmd + Option + I` on Mac)
3. Select the "Console" tab

#### Step 2: Run Script

1. Open the `rtl-fixer.js` file
2. Copy all contents
3. Paste in the Console and press Enter

---

### Method 3️⃣: Create Custom Chrome/Edge Extension

#### Step 1: Create Extension Structure

1. Create a new folder named `copilot-rtl-extension`
2. Create these files inside:

**manifest.json:**
```json
{
  "manifest_version": 3,
  "name": "GitHub Copilot RTL Fixer",
  "version": "1.0.0",
  "description": "Fix RTL text display in GitHub Copilot",
  "permissions": ["activeTab"],
  "content_scripts": [
    {
      "matches": ["*://github.com/*"],
      "js": ["rtl-fixer.js"],
      "run_at": "document_end"
    }
  ],
  "icons": {
    "16": "icon16.png",
    "48": "icon48.png",
    "128": "icon128.png"
  }
}
```

3. Copy `rtl-fixer.js` into this folder

#### Step 2: Install Extension

**Chrome/Edge:**
1. Go to `chrome://extensions` (or `edge://extensions`)
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `copilot-rtl-extension` folder

**Firefox:**
1. Go to `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. Select the `manifest.json` file

---

### ⚙️ Custom Configuration

To change font, size, or other settings:

1. Open `rtl-fixer.js` (or `rtl-fixer.user.js`)
2. Find the `CONFIG` section:

```javascript
const CONFIG = {
  persian: {
    fontSize: 18,          // Change font size
    bold: false,           // Set to true for bold
    fontName: 'B Nazanin'  // Write your preferred font
  },
  english: {
    fontSize: 16,
    bold: false,
    fontName: ''           // Leave empty for default font
  }
};
```

3. Save changes
4. Refresh the page

---

### 🔧 Troubleshooting

#### Script Not Working

1. **Check Console**: Press F12 and check Console tab. You should see `[RTL Fixer] Initialization complete`
2. **Check Tampermonkey**: Make sure the script is enabled and domain is correct
3. **Clear Cache**: Clear browser cache and try again

#### Font Not Displaying

1. Make sure the font is installed on your system
2. Write the exact font name as installed
3. Use fallback fonts

#### Text Still LTR

1. Make sure text starts with Persian/Arabic characters
2. Check console for errors
3. Refresh the page

---

### 📱 Contact

If you have issues:
- Open an issue on GitHub
- Ask in Discussions section
