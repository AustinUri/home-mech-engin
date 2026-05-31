import { ClipboardList, Gauge, Hammer, PlayCircle, BookOpen, Search, CheckCircle2, Route, ListChecks, Target, Layers } from 'lucide-react';
import { courseLessons } from '../data/courseLessons.js';

export default function ModulesPage({ query, setQuery, modules, selectedModule, setSelectedModuleId, progress, onToggleComplete, onSetConfidence, onSetNote }) {
  // Use the real lesson reader as the single source of truth for lesson counts and lesson names.
  // This prevents the module card from showing planned lessons that do not exist yet.
  const moduleLessons = courseLessons.filter((lesson) => lesson.moduleId === selectedModule.id);
  const prerequisiteItems = buildPrerequisiteItems(moduleLessons);
  const checkpointItems = buildCheckpointItems(selectedModule, moduleLessons);

  return (
    <section className="modules-page page-stack">
      <div className="panel module-browser">
        <div className="module-browser-head">
          <div>
            <span className="badge"><Search size={15} /> מפת הקורס</span>
            <h2>מסלול הלימוד</h2>
            <p>כאן רואים את מפת הקורס: הנושאים הגדולים, הסדר המומלץ, מטרות כל מודול והשיעורים ששייכים אליו.</p>
          </div>
          <label className="module-search-box">
            <span>חיפוש</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="חשמל, גיר, סירה, מומנט..."
              className="search-input"
            />
          </label>
        </div>

        <div className="module-picker-grid">
          {modules.map((module) => {
            const Icon = module.icon;
            const active = selectedModule.id === module.id;
            const done = progress.completed?.[module.id];
            const realLessonCount = courseLessons.filter((lesson) => lesson.moduleId === module.id).length;
            return (
              <button
                type="button"
                key={module.id}
                className={`module-picker-card ${active ? 'active' : ''} ${done ? 'done' : ''}`}
                onClick={() => setSelectedModuleId(module.id)}
              >
                <span className="module-picker-icon">{done ? <CheckCircle2 size={22} /> : <Icon size={22} />}</span>
                <span className="module-picker-content">
                  <strong>{module.shortTitle}</strong>
                  <small>{module.level}</small>
                  <small>{realLessonCount} שיעורים בפועל</small>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <article className={`module-detail panel theme-${selectedModule.theme}`}>
        <div className="module-detail-header improved">
          <div className="module-title-block">
            <span className="badge"><PlayCircle size={16} /> {selectedModule.level}</span>
            <h2>{selectedModule.title}</h2>
            <p>{selectedModule.goal}</p>
          </div>
          <div className="module-actions-card">
            <button className="primary-btn" onClick={() => onToggleComplete(selectedModule.id)}>
              {progress.completed?.[selectedModule.id] ? 'בטל השלמה' : 'סמן כהושלם'}
            </button>
            <div className="confidence-inline">
              <span>רמת ביטחון</span>
              {['נמוכה', 'בינונית', 'גבוהה'].map((level) => (
                <button
                  key={level}
                  className={`confidence-btn compact ${progress.confidence?.[selectedModule.id] === level ? 'selected' : ''}`}
                  onClick={() => onSetConfidence(selectedModule.id, level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="info-grid improved-info-grid">
          <InfoBox icon={Gauge} title="משך" text={selectedModule.duration} />
          <InfoBox icon={Hammer} title="פרויקט" text={selectedModule.project} />
          <InfoBox icon={ClipboardList} title="מבחן" text={selectedModule.test} />
        </div>

        <div className="module-roadmap-panel">
          <div className="section-title-row">
            <Route size={22} />
            <div>
              <h3>איך להשתמש במודול הזה</h3>
              <p>זה לא אזור תרגול כפול. זה אזור ניווט: מה לומדים, באיזה סדר, ומה צריך לסמן לעצמך לפני שעוברים הלאה.</p>
            </div>
          </div>
          <div className="roadmap-steps-grid">
            <RoadmapStep number="01" title="קרא את מפת הנושאים" text="תבין מה המודול מכסה לפני שאתה נכנס לשיעור הראשון." />
            <RoadmapStep number="02" title="למד לפי סדר השיעורים" text="השיעורים מסודרים כך שבסיס מגיע לפני אבחון וחישובים מתקדמים." />
            <RoadmapStep number="03" title="פתור רק בשיעורים ותרגול" text="כל התרגילים נמצאים בעמוד שיעורים ותרגול כדי שלא תהיה כפילות." />
            <RoadmapStep number="04" title="סיים בפרויקט ובמבחן" text="הפרויקט והמבחן בודקים אם אתה יודע לחבר את החומר, לא רק לזכור מילים." />
          </div>
        </div>

        <div className="module-study-map expanded">
          <section className="module-study-card">
            <h3><BookOpen size={18} /> שיעורים במודול</h3>
            <div className="module-lesson-list">
              {moduleLessons.length ? moduleLessons.map((lesson, index) => (
                <div className="module-lesson-pill" key={lesson.id}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{lesson.title}</strong>
                    <small>{lesson.duration} · {lesson.level}</small>
                  </div>
                </div>
              )) : (
                <div className="module-lesson-pill empty">
                  <span>!</span>
                  <strong>עדיין לא נכתבו שיעורים אמיתיים למודול הזה</strong>
                </div>
              )}
            </div>
          </section>

          <section className="module-study-card">
            <h3><Layers size={18} /> נושאים שהמודול מכסה</h3>
            <div className="topic-cloud bigger">
              {selectedModule.topics.map((topic) => <span key={topic}>{topic}</span>)}
            </div>
          </section>
        </div>

        <div className="module-overview-grid">
          <section className="module-overview-card">
            <h3><Target size={18} /> ידע קודם שכדאי שיהיה</h3>
            <ul>
              {prerequisiteItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="module-overview-card">
            <h3><ListChecks size={18} /> צ׳ק־ליסט לפני מבחן</h3>
            <ul>
              {checkpointItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </div>

        <div className="module-end-goals panel">
          <div className="section-title-row">
            <ClipboardList size={22} />
            <div>
              <h3>מה אמור לצאת לך מהמודול?</h3>
              <p>
                בסוף המודול אתה אמור לדעת להסביר את המערכת במילים שלך, לזהות את המושגים המרכזיים,
                להבין באיזה שיעור למצוא את התרגול, ולהיות מוכן לפרויקט ולמבחן של המודול.
              </p>
            </div>
          </div>
          <div className="module-end-goal-grid">
            <div><strong>תוצר למידה</strong><span>הבנה מסודרת של {selectedModule.shortTitle}</span></div>
            <div><strong>תוצר מעשי</strong><span>{selectedModule.project}</span></div>
            <div><strong>בדיקה מסכמת</strong><span>{selectedModule.test}</span></div>
          </div>
        </div>

        <div className="module-workspace improved-workspace">
          <div>
            <label>הערות אישיות למודול</label>
            <textarea
              value={progress.notes?.[selectedModule.id] || ''}
              onChange={(event) => onSetNote(selectedModule.id, event.target.value)}
              placeholder="מה למדת? מה לא ברור? מה לבדוק שוב?"
            />
          </div>
        </div>
      </article>
    </section>
  );
}

function InfoBox({ icon: Icon, title, text }) {
  return (
    <div className="info-box">
      <strong><Icon size={18} /> {title}</strong>
      <p>{text}</p>
    </div>
  );
}

function RoadmapStep({ number, title, text }) {
  return (
    <div className="roadmap-step-card">
      <span>{number}</span>
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}

function buildPrerequisiteItems(lessons) {
  const unique = [...new Set(
    lessons
      .map((lesson) => lesson.prerequisite)
      .filter(Boolean)
      .filter((item) => !item.includes('אין דרישות'))
  )];

  if (unique.length) return unique.slice(0, 4);

  return [
    'להכיר את שמות הנושאים המרכזיים של המודול.',
    'לעבור על רשימת השיעורים לפני שמתחילים לפתור שאלות.',
    'לא לקפוץ לאבחון לפני שמבינים איך המערכת עובדת.'
  ];
}

function buildCheckpointItems(module, lessons) {
  const firstLessons = lessons.slice(0, 3).map((lesson) => `אני יודע להסביר את הרעיון של: ${lesson.title}`);
  const topicCheckpoint = module.topics.length ? `אני מזהה את המושגים המרכזיים: ${module.topics.slice(0, 4).join(', ')}` : 'אני מזהה את המושגים המרכזיים של המודול.';

  return [
    topicCheckpoint,
    ...firstLessons,
    `אני מבין מה הפרויקט דורש: ${module.project}`,
    `אני יודע איזה מבחן מסכם מחכה לי: ${module.test}`
  ].slice(0, 6);
}
