import { Bot, RotateCcw, Send, Wifi, WifiOff } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const DEFAULT_SERVER_URL = import.meta.env.VITE_AI_SERVER_URL || 'http://localhost:8787';
const RECOMMENDED_HEBREW_MODEL = 'aya-expanse:8b';
const FALLBACK_HEBREW_MODEL = 'qwen2.5:7b';

const DEFAULT_QUESTIONS = [
  'תסביר לי את השיעור במילים פשוטות יותר',
  'תן לי דוגמה יומיומית אחת לנושא הזה, ב-3 שורות מקסימום',
  'תן לי רמז לתרגול בלי לגלות את כל הפתרון',
  'מה הטעות הכי נפוצה בנושא הזה?'
];

export default function AiTutorPanel({ lesson }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState({ checking: true, ok: false, models: [], message: 'בודק חיבור...' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const lessonPayload = useMemo(() => ({
    id: lesson?.id,
    moduleTitle: lesson?.moduleTitle,
    title: lesson?.title,
    objective: lesson?.objective,
    intro: lesson?.intro,
    coreIdea: lesson?.coreIdea,
    teacherExplanation: lesson?.teacherExplanation,
    steps: lesson?.steps,
    source: lesson?.source
  }), [lesson]);

  useEffect(() => {
    let cancelled = false;
    async function checkStatus() {
      setStatus((current) => ({ ...current, checking: true }));
      try {
        const response = await fetch(`${DEFAULT_SERVER_URL}/api/ollama/status`);
        const data = await response.json();
        if (cancelled) return;
        if (data.ok) {
          const models = data.models || [];
          setStatus({ checking: false, ok: true, models, message: 'Ollama מחובר' });
          const preferred = models.find((model) => model.startsWith(RECOMMENDED_HEBREW_MODEL)) || models.find((model) => model.startsWith(FALLBACK_HEBREW_MODEL)) || data.recommendedModel || data.defaultModel || models[0] || RECOMMENDED_HEBREW_MODEL;
          setSelectedModel((current) => current || preferred);
        } else {
          setStatus({ checking: false, ok: false, models: [], message: data.message || 'Ollama לא זמין' });
        }
      } catch {
        if (!cancelled) {
          setStatus({ checking: false, ok: false, models: [], message: 'שרת ה-AI המקומי לא רץ' });
        }
      }
    }
    checkStatus();
    return () => { cancelled = true; };
  }, []);

  async function askTutor(customQuestion = question) {
    const cleanQuestion = customQuestion.trim();
    if (!cleanQuestion) {
      setError('תכתוב שאלה קודם. ה-AI לא קורא מחשבות, לפחות עדיין לא.');
      return;
    }

    setLoading(true);
    setError('');
    setAnswer('');
    try {
      const response = await fetch(`${DEFAULT_SERVER_URL}/api/ai-tutor`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: cleanQuestion, lesson: lessonPayload, model: selectedModel || undefined })
      });
      const data = await response.json();
      if (!response.ok || !data.ok) {
        throw new Error(data.message || data.details || 'לא התקבלה תשובה תקינה');
      }
      setAnswer(data.answer);
    } catch (err) {
      setError(`${err.message}. ודא שהרצת: ollama serve וגם npm run dev:server`);
    } finally {
      setLoading(false);
    }
  }

  function clearTutor() {
    setQuestion('');
    setAnswer('');
    setError('');
  }

  return (
    <section className="lesson-section-card ai-tutor-card">
      <div className="ai-tutor-header">
        <div>
          <span className="badge"><Bot size={15} /> מורה AI מקומי</span>
          <h3>שאל את המורה AI על השיעור הזה</h3>
          <p>ה-AI משתמש ב-Ollama שרץ על המחשב שלך. אין API key ואין תשלום, אבל צריך להריץ שרת מקומי.</p>
        </div>
        <div className={`ai-status-pill ${status.ok ? 'connected' : 'offline'}`}>
          {status.ok ? <Wifi size={16} /> : <WifiOff size={16} />}
          <span>{status.checking ? 'בודק...' : status.message}</span>
        </div>
      </div>

      <div className="ai-tutor-setup-note">
        <strong>לפני השימוש:</strong>
        <code>ollama pull aya-expanse:8b</code>
        <code>npm run dev:server</code>
        <small>לעברית עדיף aya-expanse:8b. אם המחשב חלש מדי, נסה qwen2.5:7b. אם Ollama כבר רץ ברקע, לא צריך להריץ ollama serve.</small>
      </div>

      {(selectedModel?.startsWith('llama3.2') || selectedModel?.startsWith('qwen2.5:3b')) && (
        <div className="ai-warning-box">
          המודל שנבחר חלש יחסית בעברית ועלול להחזיר ג׳יבריש. מומלץ להריץ: <code>ollama pull aya-expanse:8b</code> ואז לבחור aya-expanse:8b.
        </div>
      )}

      {status.models.length > 0 && (
        <label className="ai-model-select">
          <span>מודל</span>
          <select value={selectedModel} onChange={(event) => setSelectedModel(event.target.value)}>
            {status.models.map((model) => <option key={model} value={model}>{model}{model.startsWith('aya-expanse:8b') ? ' — מומלץ לעברית' : model.startsWith('qwen2.5:7b') ? ' — חלופה סבירה' : model.startsWith('qwen2.5:3b') ? ' — חלש בעברית' : model.startsWith('llama3.2') ? ' — חלש בעברית' : ''}</option>)}
          </select>
        </label>
      )}

      <div className="ai-suggested-questions">
        {DEFAULT_QUESTIONS.map((item) => (
          <button key={item} type="button" onClick={() => { setQuestion(item); askTutor(item); }}>
            {item}
          </button>
        ))}
      </div>

      <label className="ai-question-box">
        <span>השאלה שלך</span>
        <textarea
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="למשל: לא הבנתי למה מתח הוא לא זרם. תסביר עם דוגמה מהרכב."
        />
      </label>

      <div className="lesson-answer-actions">
        <button className="primary-btn small-action" type="button" onClick={() => askTutor()} disabled={loading}>
          <Send size={14} /> {loading ? 'חושב...' : 'שאל את ה-AI'}
        </button>
        <button className="secondary-btn small-action" type="button" onClick={clearTutor}>
          <RotateCcw size={14} /> נקה
        </button>
      </div>

      {error && <div className="ai-error-box">{error}</div>}
      {answer && <div className="ai-answer-box"><strong>תשובת המורה:</strong><p>{answer}</p></div>}
    </section>
  );
}
