/**
 * TypeMaster — app.js
 * Shared utilities used across pages.
 * Each page also has inline scripts for page-specific logic.
 */

// Prevent default on arrow keys to avoid page scroll during typing
window.addEventListener('keydown', e => {
  if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(e.key)) {
    const active = document.activeElement;
    if (!active || active.tagName === 'BODY' || active.id === 'type-text') {
      e.preventDefault();
    }
  }
}, { passive: false });
