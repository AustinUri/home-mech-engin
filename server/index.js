const http = require('http');

const PORT = Number(process.env.AI_SERVER_PORT || 8787);
const OLLAMA_URL = process.env.OLLAMA_URL || 'http://127.0.0.1:11434';
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'aya-expanse:8b';

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(payload));
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error('Request body is too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

function trimText(value, maxLength = 900) {
  const clean = String(value || '').replace(/\s+/g, ' ').trim();
  return clean.length > maxLength ? `${clean.slice(0, maxLength)}...` : clean;
}

function buildPrompt({ question, lesson }) {
  const lessonTitle = trimText(lesson?.title, 140) || 'לא נבחר שיעור';
  const moduleTitle = trimText(lesson?.moduleTitle, 120) || 'לא נבחר מודול';
  const objective = trimText(lesson?.objective, 350);
  const intro = trimText(lesson?.intro, 550);
  const coreIdea = trimText(lesson?.coreIdea, 550);
  const explanation = Array.isArray(lesson?.teacherExplanation)
    ? lesson.teacherExplanation.map((item) => `- ${trimText(item, 450)}`).slice(0, 5).join('\n')
    : '';
  const steps = Array.isArray(lesson?.steps)
    ? lesson.steps.map((step, index) => `${index + 1}. ${trimText(step, 250)}`).slice(0, 6).join('\n')
    : '';
  const cleanQuestion = trimText(question, 500);

  return `ענה בעברית פשוטה וברורה בלבד.
השתמש רק באותיות עבריות, מספרים, סימני פיסוק ויחידות טכניות כמו V, A, Ω, Nm.
אסור לערבב שפות. אסור לכתוב אנגלית במשפטים.

כללי תשובה קשיחים:
1. ענה ב-2 עד 5 שורות או נקודות בלבד.
2. אל תחזור על אותה מילה או משפט פעמיים.
3. אל תיצור רשימה ארוכה. מקסימום 5 נקודות.
4. אל תצטט את השאלה ואל תכתוב "התלמיד שאל".
5. אם ביקשו דוגמה יומיומית — תן דוגמה אחת ברורה ואז הסבר קצר.
6. אם חסר מידע בשיעור, כתוב: "בחומר השיעור אין מספיק מידע מלא, אבל העיקרון הוא..."
7. אל תיתן הוראות עבודה מסוכנות בפועל. לימוד תאורטי בלבד.

הקשר מהשיעור:
מודול: ${moduleTitle}
שיעור: ${lessonTitle}
מטרה: ${objective}
פתיחה: ${intro}
רעיון מרכזי: ${coreIdea}
הסבר מורחב:
${explanation}
שלבי הבנה:
${steps}

שאלת התלמיד:
${cleanQuestion}

כתוב תשובה טובה עכשיו. קצר, ברור, בעברית בלבד, בלי לולאות ובלי שפה זרה.`;
}

function looksWrongLanguage(text) {
  const clean = String(text || '').trim();
  if (clean.length < 20) return false;
  const hebrewChars = (clean.match(/[\u0590-\u05FF]/g) || []).length;
  const latinChars = (clean.match(/[A-Za-z]/g) || []).length;
  const suspiciousChars = (clean.match(/[ぁ-ゟ゠-ヿ一-龯가-힣@#$%^*_~=<>\\]/g) || []).length;
  const letters = hebrewChars + latinChars + suspiciousChars;
  if (letters < 12) return false;
  const allowedTechnicalLatin = (clean.match(/\b(V|A|W|Ω|Nm|rpm|bar|Pa|kW|hp|OBD|CAN|PWM|ECU)\b/g) || []).join('').length;
  const effectiveLatin = Math.max(0, latinChars - allowedTechnicalLatin);
  return hebrewChars / Math.max(letters, 1) < 0.45 || effectiveLatin > hebrewChars * 0.35 || suspiciousChars > 3;
}

function looksRepetitive(text) {
  const clean = String(text || '').trim();
  if (!clean) return true;
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length < 8) return false;

  const counts = new Map();
  for (const word of words) {
    const normalized = word.replace(/["'׳״.,:;!?()\[\]{}]/g, '').toLowerCase();
    if (!normalized) continue;
    counts.set(normalized, (counts.get(normalized) || 0) + 1);
  }

  const mostCommon = Math.max(...counts.values());
  if (mostCommon / words.length > 0.22 && words.length > 45) return true;

  const lines = clean.split('\n').map((line) => line.trim()).filter(Boolean);
  const uniqueLines = new Set(lines);
  if (lines.length > 10 && uniqueLines.size / lines.length < 0.55) return true;

  return /(\b\S+\b)(?:\s+[-–—]?\s*\1){8,}/i.test(clean);
}

function cleanAnswer(answer) {
  let clean = String(answer || '').trim();
  clean = clean.replace(/^\s*תשובת המורה\s*[:：]?\s*/i, '').trim();
  clean = clean.replace(/^\s*(נראה|הנה),?\s*התלמיד\s+שאל\s*[:：]?\s*/i, '').trim();
  clean = clean.replace(/\n{3,}/g, '\n\n');
  const lines = clean.split('\n').map((line) => line.trim()).filter(Boolean);
  if (lines.length > 8) clean = lines.slice(0, 8).join('\n');
  return clean;
}

async function askOllama(payload) {
  const prompt = buildPrompt(payload);
  const response = await fetch(`${OLLAMA_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: payload.model || OLLAMA_MODEL,
      stream: false,
      messages: [
        {
          role: 'system',
          content: 'You are a strict Hebrew technical tutor. Answer ONLY in Hebrew. Do not mix languages. Be concise. Do not repeat yourself. Maximum 5 bullets. If you cannot answer, say so in Hebrew.'
        },
        { role: 'user', content: prompt }
      ],
      options: {
        temperature: 0,
        top_p: 0.35,
        repeat_penalty: 1.55,
        repeat_last_n: 384,
        num_predict: 120,
        num_ctx: 4096,
        seed: 7,
        stop: ['\n\n\n', 'שאלת התלמיד:', 'התלמיד שאל:', 'The student asked']
      }
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Ollama error ${response.status}: ${text}`);
  }

  const data = await response.json();
  const answer = cleanAnswer(data?.message?.content || 'לא התקבלה תשובה מהמודל.');

  if (looksWrongLanguage(answer)) {
    return 'המודל המקומי החזיר טקסט לא עברי או ג׳יבריש, אז עצרתי את התשובה. תריץ: ollama pull aya-expanse:8b ואז בחר aya-expanse:8b. אם המחשב חלש, נסה qwen2.5:7b או עבור למצב תשובות באנגלית פשוטה.';
  }

  if (looksRepetitive(answer)) {
    return 'המודל המקומי התחיל לחזור על עצמו, אז עצרתי את התשובה. נסה לשאול קצר יותר. אם זה חוזר, השתמש ב-aya-expanse:8b או qwen2.5:7b.';
  }

  return answer;
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    return sendJson(res, 204, {});
  }

  if (req.method === 'GET' && req.url === '/api/ollama/status') {
    try {
      const response = await fetch(`${OLLAMA_URL}/api/tags`);
      const data = await response.json();
      return sendJson(res, 200, {
        ok: true,
        ollamaUrl: OLLAMA_URL,
        defaultModel: OLLAMA_MODEL,
        recommendedModel: 'aya-expanse:8b',
        fallbackModels: ['qwen2.5:7b', 'gemma3:4b'],
        models: (data.models || []).map((model) => model.name)
      });
    } catch (error) {
      return sendJson(res, 503, {
        ok: false,
        message: 'Ollama לא זמין. ודא ש-Ollama מותקן ורץ ברקע.',
        details: error.message
      });
    }
  }

  if (req.method === 'POST' && req.url === '/api/ai-tutor') {
    try {
      const body = await readJsonBody(req);
      if (!body.question || !String(body.question).trim()) {
        return sendJson(res, 400, { ok: false, message: 'חסרה שאלה.' });
      }
      const answer = await askOllama(body);
      return sendJson(res, 200, { ok: true, answer, model: body.model || OLLAMA_MODEL });
    } catch (error) {
      return sendJson(res, 500, {
        ok: false,
        message: 'השרת המקומי לא הצליח לקבל תשובה מ-Ollama.',
        details: error.message
      });
    }
  }

  return sendJson(res, 404, { ok: false, message: 'Route not found' });
});

server.listen(PORT, () => {
  console.log(`AI tutor server running at http://localhost:${PORT}`);
  console.log(`Using Ollama at ${OLLAMA_URL}`);
  console.log(`Default model: ${OLLAMA_MODEL}`);
  console.log('Recommended Hebrew model: ollama pull aya-expanse:8b');
  console.log('Fallback: ollama pull qwen2.5:7b');
});
