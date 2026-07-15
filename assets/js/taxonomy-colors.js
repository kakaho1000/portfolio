(function () {
  const STORAGE_KEY = 'taxonomy-color-settings';
  const defaults = {
    categoryEntries: '',
    tagEntries: ''
  };

  function hexToRgba(hex, alpha) {
    const normalized = String(hex || '').replace('#', '');
    const value = normalized.length === 3
      ? normalized.split('').map((char) => char + char).join('')
      : normalized;

    const intValue = parseInt(value, 16);
    const r = (intValue >> 16) & 255;
    const g = (intValue >> 8) & 255;
    const b = intValue & 255;

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  function slugify(value) {
    return String(value || '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function parseEntries(rawText) {
    const entries = {};

    (rawText || '').split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return;
      }

      const match = trimmed.match(/^([^:=|]+?)\s*[:=|]\s*#?([0-9a-fA-F]{3,8})\s*$/);
      if (!match) {
        return;
      }

      const name = match[1].trim();
      const hex = `#${match[2]}`;
      const key = slugify(name);
      if (key) {
        entries[key] = hex;
      }
    });

    return entries;
  }

  function applySettings(settings) {
    const categoryColors = parseEntries(settings.categoryEntries || '');
    const tagColors = parseEntries(settings.tagEntries || '');

    document.querySelectorAll('.page__taxonomy-item.p-category').forEach((item) => {
      const term = item.dataset.taxonomyTerm || slugify(item.dataset.taxonomyLabel || item.textContent);
      const color = categoryColors[term];
      if (color) {
        item.style.color = color;
        item.style.backgroundColor = hexToRgba(color, 0.12);
        item.style.borderColor = color;
      } else {
        item.style.removeProperty('color');
        item.style.removeProperty('background-color');
        item.style.removeProperty('border-color');
      }
    });

    document.querySelectorAll('.page__taxonomy-item.p-tag').forEach((item) => {
      const term = item.dataset.taxonomyTerm || slugify(item.dataset.taxonomyLabel || item.textContent);
      const color = tagColors[term];
      if (color) {
        item.style.color = color;
        item.style.backgroundColor = hexToRgba(color, 0.12);
        item.style.borderColor = color;
      } else {
        item.style.removeProperty('color');
        item.style.removeProperty('background-color');
        item.style.removeProperty('border-color');
      }
    });

    document.querySelectorAll('[data-taxonomy-color-input]').forEach((input) => {
      const key = input.dataset.taxonomyColorInput;
      if (key && settings[key] !== undefined) {
        input.value = settings[key];
      }
    });
  }

  function saveSettings(settings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }

  function loadSettings() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaults;
    } catch (error) {
      return defaults;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('taxonomy-color-form');
    const resetButton = document.getElementById('taxonomy-color-reset');

    if (!form) {
      return;
    }

    const settings = loadSettings();
    applySettings(settings);

    form.addEventListener('input', (event) => {
      const input = event.target;
      const key = input.dataset.taxonomyColorInput;
      if (!key) {
        return;
      }

      const nextSettings = { ...loadSettings(), [key]: input.value };
      saveSettings(nextSettings);
      applySettings(nextSettings);
    });

    if (resetButton) {
      resetButton.addEventListener('click', () => {
        saveSettings(defaults);
        applySettings(defaults);
      });
    }
  });
})();
