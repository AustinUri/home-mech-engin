const STORAGE_KEY = 'home-mechanic-engineering-progress-v3';
const THEME_KEY = 'home-mechanic-engineering-theme-v1';

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw
      ? JSON.parse(raw)
      : { completed: {}, confidence: {}, notes: {}, testAnswers: {}, testSubmitted: {} };
  } catch {
    return { completed: {}, confidence: {}, notes: {}, testAnswers: {}, testSubmitted: {} };
  }
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function loadTheme() {
  try {
    return localStorage.getItem(THEME_KEY) || 'light';
  } catch {
    return 'light';
  }
}

export function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Ignore storage failures; the UI can still function.
  }
}
