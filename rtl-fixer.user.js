// ==UserScript==
// @name         GitHub Copilot RTL Fixer
// @name:fa      رفع مشکل RTL در GitHub Copilot
// @namespace    https://github.com/RezaeiSaber/persian-rtl-fixer-copilot
// @version      1.0.0
// @description  Automatically detects and applies RTL/LTR direction for Persian/Arabic and English text in GitHub Copilot Chat
// @description:fa  تشخیص خودکار و اعمال جهت RTL/LTR برای متن‌های فارسی/عربی و انگلیسی در GitHub Copilot Chat
// @author       Saber Rezaei
// @match        *://github.com/*
// @grant        none
// @license      MIT
// @homepage     https://github.com/RezaeiSaber/persian-rtl-fixer-copilot
// @supportURL   https://github.com/RezaeiSaber/persian-rtl-fixer-copilot/issues
// @downloadURL  https://raw.githubusercontent.com/RezaeiSaber/persian-rtl-fixer-copilot/main/rtl-fixer.user.js
// @updateURL    https://raw.githubusercontent.com/RezaeiSaber/persian-rtl-fixer-copilot/main/rtl-fixer.user.js
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0Zjg1ZjQiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTMgMTJoMThtMCAwbC00IDQgbTQtNGwtNC00Ii8+PC9zdmc+
// @run-at       document-end
// ==/UserScript==

/**
 * GitHub Copilot RTL Fixer
 * Automatically detects and applies RTL/LTR direction for Persian/Arabic and English text
 * 
 * @version 1.0.0
 * @author Saber Rezaei
 * @license MIT
 */

(function() {
  'use strict';

  // ==================== Configuration ====================
  const CONFIG = {
    persian: {
      fontSize: 18,
      bold: false,
      fontName: 'B Nazanin',
      fallbackFonts: ['Nazanin', 'vazirmatn', 'Tahoma', 'sans-serif']
    },
    english: {
      fontSize: 16,
      bold: false,
      fontName: '', // Empty string means default font
      fallbackFonts: ['sans-serif']
    },
    // Selector for target elements
    targetSelector: '.rendered-markdown > *:not(div)',
    // Observer configuration
    observerConfig: {
      childList: true,
      subtree: true,
      characterData: true
    },
    // Debounce delay for observer (ms)
    debounceDelay: 50
  };

  // Persian/Arabic Unicode ranges
  const PERSIAN_ARABIC_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;

  // ==================== Utility Functions ====================
  
  /**
   * Create font-family string with fallbacks
   */
  function createFontFamily(fontName, fallbacks) {
    if (!fontName) return fallbacks.join(', ');
    return `'${fontName}', ${fallbacks.join(', ')}`;
  }

  /**
   * Generate CSS rules
   */
  function generateCSS() {
    const persianFont = createFontFamily(CONFIG.persian.fontName, CONFIG.persian.fallbackFonts);
    const englishFont = CONFIG.english.fontName 
      ? createFontFamily(CONFIG.english.fontName, CONFIG.english.fallbackFonts)
      : '';

    return `
/* ==================== COPILOT BIDIRECTIONAL TEXT PATCH ==================== */

/* Persian/Arabic text - RTL */
${CONFIG.targetSelector}[dir="rtl"] {
  direction: rtl !important;
  text-align: right !important;
  ${CONFIG.persian.fontName ? `font-family: ${persianFont} !important;` : ''}
  font-size: ${CONFIG.persian.fontSize}px !important;
  font-weight: ${CONFIG.persian.bold ? 'bold' : 'normal'} !important;
}

/* English text - LTR */
${CONFIG.targetSelector}[dir="ltr"] {
  direction: ltr !important;
  text-align: left !important;
  ${englishFont ? `font-family: ${englishFont} !important;` : ''}
  font-size: ${CONFIG.english.fontSize}px !important;
  font-weight: ${CONFIG.english.bold ? 'bold' : 'normal'} !important;
}

/* Default style for elements without explicit direction */
${CONFIG.targetSelector}:not([dir]) {
  direction: ltr !important;
  text-align: left !important;
  ${englishFont ? `font-family: ${englishFont} !important;` : ''}
  font-size: ${CONFIG.english.fontSize}px !important;
  font-weight: ${CONFIG.english.bold ? 'bold' : 'normal'} !important;
}
`;
  }

  /**
   * Inject CSS into document head
   */
  function injectCSS() {
    const styleId = 'copilot-rtl-fixer-styles';
    
    // Remove existing style if present
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    // Create and inject new style element
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = generateCSS();
    document.head.appendChild(style);
    
    console.log('[RTL Fixer] CSS injected successfully');
  }

  /**
   * Detect if text starts with Persian/Arabic characters
   */
  function isPersianArabic(text) {
    if (!text || text.length === 0) return false;
    
    // Find first non-whitespace character
    const trimmedText = text.trim();
    if (trimmedText.length === 0) return false;
    
    // Check first character
    const firstChar = trimmedText.charAt(0);
    return PERSIAN_ARABIC_REGEX.test(firstChar);
  }

  /**
   * Apply direction and styles to a single element
   */
  function applyStylesToElement(element) {
    const text = element.textContent;
    if (!text || text.trim().length === 0) return;
    
    const isRTL = isPersianArabic(text);
    const direction = isRTL ? 'rtl' : 'ltr';
    
    // Only update if direction changed
    if (element.getAttribute('dir') !== direction) {
      element.setAttribute('dir', direction);
      
      // Apply inline styles as backup
      element.style.direction = direction;
      element.style.textAlign = isRTL ? 'right' : 'left';
      
      if (isRTL) {
        if (CONFIG.persian.fontName) {
          element.style.fontFamily = createFontFamily(
            CONFIG.persian.fontName, 
            CONFIG.persian.fallbackFonts
          );
        }
        element.style.fontSize = `${CONFIG.persian.fontSize}px`;
        element.style.fontWeight = CONFIG.persian.bold ? 'bold' : 'normal';
      } else {
        if (CONFIG.english.fontName) {
          element.style.fontFamily = createFontFamily(
            CONFIG.english.fontName, 
            CONFIG.english.fallbackFonts
          );
        } else {
          element.style.fontFamily = '';
        }
        element.style.fontSize = `${CONFIG.english.fontSize}px`;
        element.style.fontWeight = CONFIG.english.bold ? 'bold' : 'normal';
      }
    }
  }

  /**
   * Detect and apply direction to all matching elements
   */
  function detectAndApplyDirection() {
    const elements = document.querySelectorAll(CONFIG.targetSelector);
    elements.forEach(applyStylesToElement);
  }

  /**
   * Debounce function to limit execution frequency
   */
  function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // ==================== Initialization ====================
  
  /**
   * Initialize the RTL fixer
   */
  function init() {
    console.log('[RTL Fixer] Initializing...');
    
    // Inject CSS
    injectCSS();
    
    // Apply direction to existing elements
    detectAndApplyDirection();
    
    // Set up MutationObserver with debouncing
    const debouncedDetect = debounce(detectAndApplyDirection, CONFIG.debounceDelay);
    
    const observer = new MutationObserver(debouncedDetect);
    observer.observe(document.body, CONFIG.observerConfig);
    
    console.log('[RTL Fixer] Initialization complete. Observing DOM changes...');
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose configuration for dynamic updates
  window.CopilotRTLFixer = {
    version: '1.0.0',
    config: CONFIG,
    refresh: () => {
      injectCSS();
      detectAndApplyDirection();
      console.log('[RTL Fixer] Configuration refreshed');
    }
  };

})();
