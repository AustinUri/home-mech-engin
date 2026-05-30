const STORAGE_KEY = 'home-mechanic-engineering-progress-v3';

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
