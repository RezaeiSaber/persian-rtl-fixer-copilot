# Configuration Examples | مثال‌های تنظیمات

<div dir="rtl">

## 🇮🇷 نمونه تنظیمات - فارسی

### حالت پیش‌فرض
```javascript
const CONFIG = {
  persian: {
    fontSize: 18,
    bold: false,
    fontName: 'B Nazanin'
  },
  english: {
    fontSize: 16,
    bold: false,
    fontName: ''
  }
};
```

### فونت بزرگتر برای فارسی
```javascript
const CONFIG = {
  persian: {
    fontSize: 20,        // اندازه بزرگتر
    bold: false,
    fontName: 'B Nazanin'
  },
  english: {
    fontSize: 16,
    bold: false,
    fontName: ''
  }
};
```

### استفاده از Vazirmatn
```javascript
const CONFIG = {
  persian: {
    fontSize: 18,
    bold: false,
    fontName: 'Vazirmatn'    // فونت Vazirmatn
  },
  english: {
    fontSize: 16,
    bold: false,
    fontName: ''
  }
};
```

### متن فارسی بولد
```javascript
const CONFIG = {
  persian: {
    fontSize: 18,
    bold: true,          // فعال کردن بولد
    fontName: 'B Nazanin'
  },
  english: {
    fontSize: 16,
    bold: false,
    fontName: ''
  }
};
```

### استفاده از فونت سفارشی برای انگلیسی
```javascript
const CONFIG = {
  persian: {
    fontSize: 18,
    bold: false,
    fontName: 'B Nazanin'
  },
  english: {
    fontSize: 16,
    bold: false,
    fontName: 'Consolas'   // فونت Consolas برای انگلیسی
  }
};
```

### تنظیمات برای نمایشگر کوچک
```javascript
const CONFIG = {
  persian: {
    fontSize: 14,        // اندازه کوچکتر
    bold: false,
    fontName: 'Tahoma'   // فونت کوچکتر
  },
  english: {
    fontSize: 13,
    bold: false,
    fontName: ''
  }
};
```

### تنظیمات برای نمایشگر بزرگ
```javascript
const CONFIG = {
  persian: {
    fontSize: 22,        // اندازه بزرگتر
    bold: false,
    fontName: 'Iranian Sans'
  },
  english: {
    fontSize: 18,
    bold: false,
    fontName: ''
  }
};
```

### هر دو زبان بولد
```javascript
const CONFIG = {
  persian: {
    fontSize: 18,
    bold: true,          // بولد
    fontName: 'B Nazanin'
  },
  english: {
    fontSize: 16,
    bold: true,          // بولد
    fontName: ''
  }
};
```

### تنظیمات حداقل (بدون فونت سفارشی)
```javascript
const CONFIG = {
  persian: {
    fontSize: 16,
    bold: false,
    fontName: ''         // فونت پیش‌فرض سیستم
  },
  english: {
    fontSize: 16,
    bold: false,
    fontName: ''
  }
};
```

</div>

---

## 🇺🇸 Configuration Examples - English

### Default Settings
```javascript
const CONFIG = {
  persian: {
    fontSize: 18,
    bold: false,
    fontName: 'B Nazanin'
  },
  english: {
    fontSize: 16,
    bold: false,
    fontName: ''
  }
};
```

### Larger Font for Persian
```javascript
const CONFIG = {
  persian: {
    fontSize: 20,        // Larger size
    bold: false,
    fontName: 'B Nazanin'
  },
  english: {
    fontSize: 16,
    bold: false,
    fontName: ''
  }
};
```

### Using Vazirmatn Font
```javascript
const CONFIG = {
  persian: {
    fontSize: 18,
    bold: false,
    fontName: 'Vazirmatn'    // Vazirmatn font
  },
  english: {
    fontSize: 16,
    bold: false,
    fontName: ''
  }
};
```

### Bold Persian Text
```javascript
const CONFIG = {
  persian: {
    fontSize: 18,
    bold: true,          // Enable bold
    fontName: 'B Nazanin'
  },
  english: {
    fontSize: 16,
    bold: false,
    fontName: ''
  }
};
```

### Custom English Font
```javascript
const CONFIG = {
  persian: {
    fontSize: 18,
    bold: false,
    fontName: 'B Nazanin'
  },
  english: {
    fontSize: 16,
    bold: false,
    fontName: 'Consolas'   // Consolas font for English
  }
};
```

### Settings for Small Display
```javascript
const CONFIG = {
  persian: {
    fontSize: 14,        // Smaller size
    bold: false,
    fontName: 'Tahoma'   // Smaller font
  },
  english: {
    fontSize: 13,
    bold: false,
    fontName: ''
  }
};
```

### Settings for Large Display
```javascript
const CONFIG = {
  persian: {
    fontSize: 22,        // Larger size
    bold: false,
    fontName: 'Iranian Sans'
  },
  english: {
    fontSize: 18,
    bold: false,
    fontName: ''
  }
};
```

### Both Languages Bold
```javascript
const CONFIG = {
  persian: {
    fontSize: 18,
    bold: true,          // Bold
    fontName: 'B Nazanin'
  },
  english: {
    fontSize: 16,
    bold: true,          // Bold
    fontName: ''
  }
};
```

### Minimal Settings (No Custom Fonts)
```javascript
const CONFIG = {
  persian: {
    fontSize: 16,
    bold: false,
    fontName: ''         // System default font
  },
  english: {
    fontSize: 16,
    bold: false,
    fontName: ''
  }
};
```

---

## 🔧 Advanced Configuration

### Custom Target Selector
```javascript
const CONFIG = {
  // ... other settings ...
  targetSelector: '.my-custom-selector > p',  // Custom selector
};
```

### Adjust Observer Settings
```javascript
const CONFIG = {
  // ... other settings ...
  observerConfig: {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true      // Also watch for attribute changes
  },
};
```

### Change Debounce Delay
```javascript
const CONFIG = {
  // ... other settings ...
  debounceDelay: 100,    // Increase delay for better performance
};
```

### Custom Fallback Fonts
```javascript
const CONFIG = {
  persian: {
    fontSize: 18,
    bold: false,
    fontName: 'B Nazanin',
    fallbackFonts: ['Iranian Sans', 'Tahoma', 'Arial']  // Custom fallbacks
  },
  // ...
};
```
