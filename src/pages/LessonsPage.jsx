import { useMemo, useState } from 'react';
import { BookOpen, CheckCircle2, Lightbulb, PlayCircle, Target } from 'lucide-react';
import PageTitle from '../components/PageTitle.jsx';
import LessonDiagram from '../components/LessonDiagram.jsx';
import { courseLessons } from '../data/courseLessons.js';
import { modules } from '../data/modules.js';

export default function LessonsPage() {
  const [selectedModuleId, setSelectedModuleId] = useState('m0');
  const [selectedLessonId, setSelectedLessonId] = useState(courseLessons[0]?.id || '');
  const [revealedPractice, setRevealedPractice] = useState(false);

  const filteredLessons = useMemo(() => {
    return courseLessons.filter((lesson) => lesson.moduleId === selectedModuleId);
  }, [selectedModuleId]);

  const selectedLesson = useMemo(() => {
    return courseLessons.find((lesson) => lesson.id === selectedLessonId) || filteredLessons[0] || courseLessons[0];
  }, [filteredLessons, selectedLessonId]);

  function chooseModule(moduleId) {
    const firstLesson = courseLessons.find((lesson) => lesson.moduleId === moduleId);
    setSelectedModuleId(moduleId);
    setSelectedLessonId(firstLesson?.id || '');
    setRevealedPractice(false);
  }

  function chooseLesson(lessonId) {
    setSelectedLessonId(lessonId);
    setRevealedPractice(false);
  }

  return (
    <section className="page-stack lessons-reader-page">
      <PageTitle
        icon={Lightbulb}
        title="שיעורים — לא רק מושגים"
        subtitle="כאן מתחיל הלימוד האמיתי: כל שיעור כולל מטרה, הסבר, תרשים גדול, דוגמה, תרגול ובדיקת הבנה."
      />

      <div className="lesson-module-strip panel">
        <div className="lesson-module-strip-head">
          <span className="badge"><BookOpen size={15} /> בחר מודול</span>
          <p>אל תקפוץ לאבחון לפני שהבנת את המערכת. המודולים מסודרים לפי תלות לימודית.</p>
        </div>
        <div className="lesson-module-buttons">
          {modules.map((module) => {
            const active = module.id === selectedModuleId;
            const lessonCount = courseLessons.filter((lesson) => lesson.moduleId === module.id).length;
            return (
              <button
                key={module.id}
                className={`lesson-module-button ${active ? 'active' : ''}`}
                onClick={() => chooseModule(module.id)}
                type="button"
              >
                <strong>{module.shortTitle}</strong>
                <small>{lessonCount} שיעורים</small>
              </button>
            );
          })}
        </div>
      </div>

      <div className="lesson-reader-layout">
        <aside className="panel lesson-table-of-contents">
          <span className="badge"><PlayCircle size={15} /> שיעורי המודול</span>
          <h3>{selectedLesson?.moduleTitle}</h3>
          <div className="lesson-toc-list">
            {filteredLessons.length ? filteredLessons.map((lesson, index) => (
              <button
                key={lesson.id}
                className={`lesson-toc-item ${lesson.id === selectedLesson.id ? 'active' : ''}`}
                onClick={() => chooseLesson(lesson.id)}
                type="button"
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{lesson.title}</strong>
                  <small>{lesson.duration} · {lesson.level}</small>
                </div>
              </button>
            )) : (
              <p className="empty-lessons-note">עדיין לא נכתבו שיעורים למודול הזה. זה בסדר — נבנה אותם בהדרגה.</p>
            )}
          </div>
        </aside>

        {selectedLesson && (
          <article className="panel full-lesson-panel">
            <header className="full-lesson-header">
              <div>
                <span className="badge dark"><Target size={14} /> {selectedLesson.level}</span>
                <h2>{selectedLesson.title}</h2>
                <p>{selectedLesson.objective}</p>
              </div>
              <div className="lesson-duration-box">
                <strong>{selectedLesson.duration}</strong>
                <span>זמן לימוד משוער</span>
              </div>
            </header>

            <div className="lesson-core-grid">
              <section className="lesson-reading-block">
                <h3>פתיחה</h3>
                <p>{selectedLesson.intro}</p>
                <h3>הרעיון המרכזי</h3>
                <div className="core-idea-box">{selectedLesson.coreIdea}</div>
              </section>
              <LessonDiagram type={selectedLesson.diagram} />
            </div>

            <section className="lesson-section-card">
              <h3>שלבי ההבנה</h3>
              <div className="lesson-steps-grid">
                {selectedLesson.steps.map((step, index) => (
                  <div className="lesson-step-card" key={step}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="lesson-example-practice-grid">
              <div className="lesson-section-card example-card-strong">
                <h3>דוגמה</h3>
                <p>{selectedLesson.example}</p>
              </div>
              <div className="lesson-section-card practice-card-strong">
                <h3>תרגול</h3>
                <p>{selectedLesson.practice}</p>
                <button className="ghost-btn lesson-answer-btn" onClick={() => setRevealedPractice(!revealedPractice)} type="button">
                  {revealedPractice ? 'הסתר בדיקת כיוון' : 'הצג בדיקת כיוון'}
                </button>
                {revealedPractice && <div className="practice-hint">תשובה טובה צריכה להיות לפי סדר בדיקות, לא לפי ניחוש. קודם סימפטום, אחר כך מערכת, ואז בדיקה שאפשר למדוד.</div>}
              </div>
            </section>

            <section className="lesson-section-card mini-quiz-card">
              <h3>בדיקת הבנה קצרה</h3>
              <div className="mini-quiz-grid">
                {selectedLesson.miniQuiz.map((item) => (
                  <details key={item.question} className="mini-quiz-item">
                    <summary>{item.question}</summary>
                    <p><CheckCircle2 size={16} /> {item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>
        )}
      </div>
    </section>
  );
}
