import { ClipboardList, Gauge, Hammer, PlayCircle, BookOpen, Target, Wrench, Search, CheckCircle2 } from 'lucide-react';
import { courseLessons } from '../data/courseLessons.js';

export default function ModulesPage({ query, setQuery, modules, selectedModule, setSelectedModuleId, progress, onToggleComplete, onSetConfidence, onSetNote }) {
  // Use the real lesson reader as the single source of truth for lesson counts and lesson names.
  // This prevents the module card from showing 5 planned lessons when only 3 real lessons exist.
  const moduleLessons = courseLessons.filter((lesson) => lesson.moduleId === selectedModule.id);

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

        <div className="module-study-map">
          <section className="module-study-card">
            <h3>שיעורים במודול</h3>
            <div className="module-lesson-list">
              {moduleLessons.length ? moduleLessons.map((lesson, index) => (
                <div className="module-lesson-pill" key={lesson.id}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{lesson.title}</strong>
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
            <h3>נושאים</h3>
            <div className="topic-cloud bigger">
              {selectedModule.topics.map((topic) => <span key={topic}>{topic}</span>)}
            </div>
          </section>
        </div>

        <div className="detailed-lessons-section">
          <div className="section-title-row">
            <BookOpen size={22} />
            <div>
              <h3>שיעורים מפורטים למודול</h3>
              <p>כאן מוצגים אותם שיעורים שמופיעים בעמוד השיעורים. אין יותר ספירה מזויפת או רשימה מתוכננת שלא קיימת בפועל.</p>
            </div>
          </div>
          <div className="detailed-lesson-grid readable">
            {moduleLessons.length ? moduleLessons.map((lesson, index) => (
              <article className="detailed-lesson-card readable" key={lesson.id}>
                <header className="readable-lesson-header">
                  <span className="lesson-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h4>{lesson.title}</h4>
                    <div className="lesson-objective"><Target size={16} /> {lesson.objective}</div>
                  </div>
                </header>

                <div className="readable-lesson-body">
                  <div className="lesson-main-text">
                    <strong className="mini-heading">פתיחה</strong>
                    <p>{lesson.intro}</p>
                    <strong className="mini-heading">רעיון מרכזי</strong>
                    <p>{lesson.coreIdea}</p>
                    <div className="lesson-example"><strong>דוגמה:</strong> {lesson.example}</div>
                  </div>
                  <div className="lesson-side-text">
                    <strong className="mini-heading">שלבי הבנה</strong>
                    <ul>
                      {(lesson.steps || []).slice(0, 5).map((point) => <li key={point}>{point}</li>)}
                    </ul>
                    <div className="lesson-practice"><Wrench size={15} /> <strong>תרגול:</strong> {lesson.practice}</div>
                  </div>
                </div>
              </article>
            )) : (
              <article className="detailed-lesson-card readable">
                <header className="readable-lesson-header">
                  <span className="lesson-number">!</span>
                  <div>
                    <h4>אין עדיין שיעורים אמיתיים למודול הזה</h4>
                    <div className="lesson-objective"><Target size={16} /> המודול קיים כמסגרת, אבל צריך לכתוב לו שיעורים לפני שסופרים אותו כחומר לימוד.</div>
                  </div>
                </header>
              </article>
            )}
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
