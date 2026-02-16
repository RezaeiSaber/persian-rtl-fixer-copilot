# GitHub Copilot RTL Fixer | رفع مشکل RTL در GitHub Copilot

<div dir="rtl">

## 🇮🇷 فارسی

### 📖 درباره پروژه

این اسکریپت به صورت خودکار متن‌های فارسی/عربی و انگلیسی را در رابط GitHub Copilot Chat تشخیص داده و جهت نمایش (RTL/LTR) و فونت مناسب را اعمال می‌کند.

### ✨ ویژگی‌ها

- 🔄 **تشخیص خودکار**: تشخیص هوشمند متن فارسی/عربی و انگلیسی
- 🎨 **فونت سفارشی**: پشتیبانی از فونت‌های دلخواه برای هر زبان
- ⚡ **کارایی بالا**: استفاده از Debounce و MutationObserver بهینه‌سازی شده
- 🔧 **قابل تنظیم**: امکان تغییر آسان تنظیمات فونت، اندازه و وزن
- 🌐 **پشتیبانی کامل RTL/LTR**: اعمال صحیح جهت متن و تراز
- 📦 **سبک و مستقل**: بدون وابستگی به کتابخانه‌های خارجی

### 🚀 نصب و راه‌اندازی

#### روش 1: استفاده از Browser Extension

1. یک افزونه مدیریت اسکریپت مانند [Tampermonkey](https://www.tampermonkey.net/) یا [Violentmonkey](https://violentmonkey.github.io/) نصب کنید
2. فایل `rtl-fixer.js` را در یک اسکریپت جدید کپی کنید
3. Domain را به `*://github.com/*` تنظیم کنید
4. اسکریپت را ذخیره و فعال کنید

#### روش 2: استفاده از DevTools Console

1. GitHub Copilot Chat را باز کنید
2. کنسول توسعه‌دهنده (F12) را باز کنید
3. محتوای فایل `rtl-fixer.js` را در Console کپی و اجرا کنید

#### روش 3: استفاده از Custom Browser Extension

1. یک Extension سفارشی Chrome/Edge بسازید
2. فایل `rtl-fixer.js` را به عنوان Content Script اضافه کنید
3. Extension را نصب کنید

### ⚙️ تنظیمات

برای تغییر تنظیمات، فایل `rtl-fixer.js` را ویرایش کنید:

```javascript
const CONFIG = {
  persian: {
    fontSize: 18,        // اندازه فونت فارسی
    bold: false,         // بولد بودن متن فارسی
    fontName: 'B Nazanin' // نام فونت فارسی
  },
  english: {
    fontSize: 16,        // اندازه فونت انگلیسی
    bold: false,         // بولد بودن متن انگلیسی
    fontName: ''         // نام فونت انگلیسی (خالی = پیش‌فرض)
  }
};
```

### 🎯 نحوه استفاده

پس از نصب، اسکریپت به صورت خودکار فعال می‌شود و:

- متن‌های فارسی/عربی را با جهت RTL و فونت مشخص شده نمایش می‌دهد
- متن‌های انگلیسی را با جهت LTR نمایش می‌دهد
- تغییرات DOM را رصد کرده و جهت متن را به روزرسانی می‌کند

### 🔧 API

اسکریپت یک شیء global در دسترس قرار می‌دهد:

```javascript
// بروزرسانی تنظیمات
window.CopilotRTLFixer.config.persian.fontSize = 20;

// اعمال تغییرات
window.CopilotRTLFixer.refresh();

// بررسی نسخه
console.log(window.CopilotRTLFixer.version);
```

### 📋 فونت‌های پیشنهادی فارسی

- **B Nazanin** (پیش‌فرض)
- Vazirmatn
- Iranian Sans
- Samim
- Shabnam
- Tahoma

### 🐛 گزارش مشکلات

اگر مشکلی را مشاهده کردید یا پیشنهادی دارید، لطفاً در بخش [Issues](https://github.com/RezaeiSaber/persian-rtl-fixer-copilot/issues) گزارش دهید.

### 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است - فایل [LICENSE](LICENSE) را برای جزئیات بیشتر مشاهده کنید.

### 🤝 مشارکت

مشارکت شما در بهبود این پروژه بسیار ارزشمند است! لطفاً Pull Request ارسال کنید.

---

</div>

## 🇺🇸 English

### 📖 About

This script automatically detects Persian/Arabic and English text in GitHub Copilot Chat interface and applies appropriate text direction (RTL/LTR) and fonts.

### ✨ Features

- 🔄 **Auto-detection**: Intelligent detection of Persian/Arabic and English text
- 🎨 **Custom fonts**: Support for custom fonts for each language
- ⚡ **High performance**: Optimized with Debounce and MutationObserver
- 🔧 **Configurable**: Easy configuration of font, size, and weight
- 🌐 **Full RTL/LTR support**: Correct text direction and alignment
- 📦 **Lightweight & standalone**: No external dependencies

### 🚀 Installation

#### Method 1: Using Browser Extension

1. Install a userscript manager like [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/)
2. Copy `rtl-fixer.js` content into a new userscript
3. Set the domain to `*://github.com/*`
4. Save and enable the script

#### Method 2: Using DevTools Console

1. Open GitHub Copilot Chat
2. Open Developer Console (F12)
3. Copy and paste the content of `rtl-fixer.js` into the Console

#### Method 3: Using Custom Browser Extension

1. Create a custom Chrome/Edge extension
2. Add `rtl-fixer.js` as a content script
3. Install the extension

### ⚙️ Configuration

Edit `rtl-fixer.js` to change settings:

```javascript
const CONFIG = {
  persian: {
    fontSize: 18,        // Persian font size
    bold: false,         // Persian text bold
    fontName: 'B Nazanin' // Persian font name
  },
  english: {
    fontSize: 16,        // English font size
    bold: false,         // English text bold
    fontName: ''         // English font name (empty = default)
  }
};
```

### 🎯 Usage

After installation, the script automatically:

- Displays Persian/Arabic text with RTL direction and specified font
- Displays English text with LTR direction
- Monitors DOM changes and updates text direction automatically

### 🔧 API

The script exposes a global object:

```javascript
// Update configuration
window.CopilotRTLFixer.config.persian.fontSize = 20;

// Apply changes
window.CopilotRTLFixer.refresh();

// Check version
console.log(window.CopilotRTLFixer.version);
```

### 📋 Recommended Persian Fonts

- **B Nazanin** (default)
- Vazirmatn
- Iranian Sans
- Samim
- Shabnam
- Tahoma

### 🐛 Bug Reports

If you encounter any issues or have suggestions, please report them in the [Issues](https://github.com/RezaeiSaber/persian-rtl-fixer-copilot/issues) section.

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 🤝 Contributing

Your contributions to improve this project are highly appreciated! Please submit a Pull Request.

---

### 🌟 Star this repository if you find it useful!

**Made with ❤️ for the Persian developer community**
