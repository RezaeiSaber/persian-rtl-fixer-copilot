# Contributing | مشارکت

<div dir="rtl">

## 🇮🇷 راهنمای مشارکت - فارسی

از اینکه می‌خواهید در این پروژه مشارکت کنید متشکریم! 🎉

### چگونه مشارکت کنیم؟

#### 1️⃣ گزارش باگ

اگر باگی پیدا کردید:

1. ابتدا [Issues](https://github.com/RezaeiSaber/persian-rtl-fixer-copilot/issues) را جستجو کنید ببینید قبلاً گزارش شده یا نه
2. اگر نه، یک Issue جدید باز کنید با این اطلاعات:
   - **عنوان واضح**: توضیح مختصر مشکل
   - **مراحل تکرار**: چطور می‌توان باگ را تکرار کرد
   - **نتیجه مورد انتظار**: چه چیزی باید اتفاق می‌افتاد
   - **نتیجه واقعی**: چه اتفاقی افتاد
   - **اطلاعات محیط**: مرورگر، سیستم‌عامل، نسخه اسکریپت
   - **اسکرین‌شات**: در صورت امکان

#### 2️⃣ پیشنهاد ویژگی جدید

اگر ایده‌ای برای ویژگی جدید دارید:

1. یک Issue با label `enhancement` باز کنید
2. توضیح دهید:
   - ویژگی چیست
   - چرا مفید است
   - چگونه باید کار کند
   - مثال‌های استفاده

#### 3️⃣ ارسال Pull Request

##### مرحله 1: Setup

```bash
# Fork کردن repository
# سپس clone کنید:
git clone https://github.com/YOUR-USERNAME/persian-rtl-fixer-copilot.git
cd persian-rtl-fixer-copilot

# اضافه کردن upstream remote
git remote add upstream https://github.com/ORIGINAL-OWNER/persian-rtl-fixer-copilot.git
```

##### مرحله 2: ساخت Branch

```bash
# آپدیت کردن branch اصلی
git checkout main
git pull upstream main

# ساخت branch جدید
git checkout -b feature/my-new-feature
# یا برای باگ:
git checkout -b fix/bug-description
```

##### مرحله 3: انجام تغییرات

1. کد خود را بنویسید
2. از قوانین کدنویسی پیروی کنید
3. کامنت‌های مناسب اضافه کنید
4. تست کنید که همه چیز کار می‌کند

##### مرحله 4: Commit

```bash
git add .
git commit -m "Add: توضیح مختصر تغییرات"
```

**قالب Commit Message:**
- `Add: ویژگی جدید` - برای ویژگی جدید
- `Fix: رفع باگ` - برای رفع باگ
- `Update: بهبود کد` - برای بهبود کد موجود  
- `Docs: آپدیت مستندات` - برای تغییرات مستندات
- `Style: اصلاح استایل` - برای تغییرات ظاهری

##### مرحله 5: Push و Pull Request

```bash
git push origin feature/my-new-feature
```

سپس:
1. به repository خود در GitHub بروید
2. روی "Compare & pull request" کلیک کنید
3. توضیحات کامل بنویسید:
   - چه تغییری دادید
   - چرا این تغییر لازم بود
   - چگونه تست کردید
4. Pull Request را submit کنید



</div>

---

## 🇺🇸 Contributing Guide - English

Thank you for wanting to contribute to this project! 🎉

### How to Contribute?

#### 1️⃣ Report Bugs

If you find a bug:

1. First search [Issues](https://github.com/RezaeiSaber/persian-rtl-fixer-copilot/issues) to see if it's already reported
2. If not, open a new Issue with:
   - **Clear title**: Brief description of the problem
   - **Steps to reproduce**: How to reproduce the bug
   - **Expected result**: What should happen
   - **Actual result**: What actually happened
   - **Environment info**: Browser, OS, script version
   - **Screenshots**: If applicable

#### 2️⃣ Suggest New Features

If you have an idea for a new feature:

1. Open an Issue with `enhancement` label
2. Describe:
   - What the feature is
   - Why it's useful
   - How it should work
   - Usage examples

#### 3️⃣ Submit Pull Request

##### Step 1: Setup

```bash
# Fork the repository
# Then clone:
git clone https://github.com/YOUR-USERNAME/persian-rtl-fixer-copilot.git
cd persian-rtl-fixer-copilot

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL-OWNER/persian-rtl-fixer-copilot.git
```

##### Step 2: Create Branch

```bash
# Update main branch
git checkout main
git pull upstream main

# Create new branch
git checkout -b feature/my-new-feature
# Or for bugs:
git checkout -b fix/bug-description
```

##### Step 3: Make Changes

1. Write your code
2. Follow code style guidelines
3. Add appropriate comments
4. Test that everything works

##### Step 4: Commit

```bash
git add .
git commit -m "Add: brief description of changes"
```

**Commit Message Format:**
- `Add: new feature` - for new features
- `Fix: bug fix` - for bug fixes
- `Update: code improvement` - for improving existing code
- `Docs: update documentation` - for documentation changes
- `Style: style fix` - for visual changes

##### Step 5: Push & Pull Request

```bash
git push origin feature/my-new-feature
```

Then:
1. Go to your repository on GitHub
2. Click "Compare & pull request"
3. Write complete description:
   - What changed
   - Why this change was needed
   - How you tested it
4. Submit the Pull Request

---

### 🌟 Thank you for contributing!
