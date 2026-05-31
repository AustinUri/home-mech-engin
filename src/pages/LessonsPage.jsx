import { useMemo, useState } from 'react';
import { BookOpen, Calculator, CheckCircle2, Lightbulb, PlayCircle, RotateCcw, Target } from 'lucide-react';
import PageTitle from '../components/PageTitle.jsx';
import LessonDiagram from '../components/LessonDiagram.jsx';
import MathExerciseDiagram from '../components/MathExerciseDiagram.jsx';
import AiTutorPanel from '../components/AiTutorPanel.jsx';
import { courseLessons } from '../data/courseLessons.js';
import { modules } from '../data/modules.js';
import { mathExercises } from '../data/mathExercises.js';

export default function LessonsPage() {
  const [selectedModuleId, setSelectedModuleId] = useState('m0');
  const [selectedLessonId, setSelectedLessonId] = useState(courseLessons[0]?.id || '');
  const [revealedPractice, setRevealedPractice] = useState(false);
  const [exerciseAnswers, setExerciseAnswers] = useState({});
  const [checkedExercises, setCheckedExercises] = useState({});
  const [practiceAnswer, setPracticeAnswer] = useState('');
  const [practiceChecked, setPracticeChecked] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [checkedQuiz, setCheckedQuiz] = useState({});

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
    setCheckedExercises({});
    setPracticeAnswer('');
    setPracticeChecked(false);
    setQuizAnswers({});
    setCheckedQuiz({});
    setPracticeAnswer('');
    setPracticeChecked(false);
    setQuizAnswers({});
    setCheckedQuiz({});
  }

  function chooseLesson(lessonId) {
    setSelectedLessonId(lessonId);
    setRevealedPractice(false);
    setCheckedExercises({});
    setPracticeAnswer('');
    setPracticeChecked(false);
    setQuizAnswers({});
    setCheckedQuiz({});
  }

  function updateExerciseAnswer(exerciseId, value) {
    setExerciseAnswers((current) => ({ ...current, [exerciseId]: value }));
    setCheckedExercises((current) => ({ ...current, [exerciseId]: false }));
  }

  function checkExercise(exerciseId) {
    setCheckedExercises((current) => ({ ...current, [exerciseId]: true }));
  }

  function resetExercise(exerciseId) {
    setExerciseAnswers((current) => {
      const next = { ...current };
      delete next[exerciseId];
      return next;
    });
    setCheckedExercises((current) => {
      const next = { ...current };
      delete next[exerciseId];
      return next;
    });
  }


  function updateQuizAnswer(question, value) {
    setQuizAnswers((current) => ({ ...current, [question]: value }));
    setCheckedQuiz((current) => ({ ...current, [question]: false }));
  }

  function checkQuizAnswer(question) {
    setCheckedQuiz((current) => ({ ...current, [question]: true }));
  }

  function resetQuizAnswer(question) {
    setQuizAnswers((current) => {
      const next = { ...current };
      delete next[question];
      return next;
    });
    setCheckedQuiz((current) => {
      const next = { ...current };
      delete next[question];
      return next;
    });
  }

  function checkPracticeAnswer() {
    setPracticeChecked(true);
    setRevealedPractice(true);
  }

  function resetPracticeAnswer() {
    setPracticeAnswer('');
    setPracticeChecked(false);
    setRevealedPractice(false);
  }

  function buildPracticeChecklist(lesson) {
    if (lesson.practiceChecklist?.length) return lesson.practiceChecklist;
    return [
      'להתייחס בדיוק למה שנשאל, לא לברוח לנושא אחר.',
      'להשתמש במושגים המרכזיים של השיעור.',
      'לכתוב תשובה לפי סדר הגיוני, לא כרשימת מילים זרוקה.',
      lesson.steps?.[0] ? `לכלול לפחות רעיון אחד מתוך שלבי ההבנה: ${lesson.steps[0]}` : 'לכלול בדיקה או הסבר שאפשר להוכיח.'
    ];
  }

  function buildModelPracticeAnswer(lesson) {
    if (lesson.practiceAnswer) return lesson.practiceAnswer;
    const usefulSteps = (lesson.steps || []).slice(0, 3).join(' ');
    return `תשובה טובה צריכה להתחיל מהרעיון המרכזי: ${lesson.coreIdea} לאחר מכן להשתמש בשלבים הרלוונטיים: ${usefulSteps} בסוף צריך לענות ישירות לתרגול: ${lesson.practice}`;
  }

  const lessonMathExercises = useMemo(() => {
    const exact = mathExercises.filter((exercise) => exercise.lessonId === selectedLesson?.id);
    if (exact.length) return exact;
    return mathExercises.filter((exercise) => exercise.moduleId === selectedModuleId).slice(0, 2);
  }, [selectedLesson?.id, selectedModuleId]);

  return (
    <section className="page-stack lessons-reader-page">
      <PageTitle
        icon={Lightbulb}
        title="שיעורים ותרגול"
        subtitle="כאן לומדים בפועל: נכנסים לשיעור מסוים, קוראים הסבר, מסתכלים על תרשים, פותרים תרגול ובודקים הבנה."
      />

      <div className="lesson-module-strip panel">
        <div className="lesson-module-strip-head">
          <span className="badge"><BookOpen size={15} /> בחר נושא מתוך המסלול</span>
          <p>בחר את הנושא הגדול, ואז למד את השיעורים שלו לפי הסדר. לא קופצים לאבחון לפני שמבינים איך המערכת עובדת.</p>
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

            <section className="lesson-prerequisite-source-grid">
              <div className="lesson-meta-card prerequisite-card">
                <strong>ידע קודם לפני השיעור</strong>
                <p>{selectedLesson.prerequisite || 'אין דרישות קודמות מיוחדות.'}</p>
              </div>
              <div className="lesson-meta-card source-card">
                <strong>מקורות בית ספר לשיעור</strong>
                <div className="lesson-source-list">
                  {(selectedLesson.source || []).map((source) => <span key={source}>{source}</span>)}
                </div>
              </div>
            </section>

            <div className="lesson-core-grid">
              <section className="lesson-reading-block">
                <h3>פתיחה</h3>
                <p>{selectedLesson.intro}</p>
                <h3>הרעיון המרכזי</h3>
                <div className="core-idea-box">{selectedLesson.coreIdea}</div>
              </section>
              <LessonDiagram type={selectedLesson.diagram} />
            </div>

            {selectedLesson.teacherExplanation?.length > 0 && (
              <section className="lesson-section-card teacher-explanation-card">
                <h3>הסבר מורחב</h3>
                <p className="teacher-explanation-intro">כאן לא מסתפקים בהגדרה קצרה. זה ההסבר שצריך לקרוא כדי באמת להבין את הנושא לפני שעוברים לתרגול.</p>
                <div className="teacher-explanation-list">
                  {selectedLesson.teacherExplanation.map((paragraph, index) => (
                    <div className="teacher-explanation-paragraph" key={paragraph}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <p>{paragraph}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <AiTutorPanel lesson={selectedLesson} />

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
                <div className="non-math-practice-checker">
                  <label>
                    <span>כתוב כאן את התשובה שלך</span>
                    <textarea
                      value={practiceAnswer}
                      onChange={(event) => {
                        setPracticeAnswer(event.target.value);
                        setPracticeChecked(false);
                      }}
                      placeholder="כתוב תשובה מלאה, לא מילה אחת. למשל: מה בודקים, למה, ומה המסקנה האפשרית."
                    />
                  </label>
                  <div className="lesson-answer-actions">
                    <button className="primary-btn small-action" onClick={checkPracticeAnswer} type="button">בדוק כיוון</button>
                    <button className="secondary-btn small-action" onClick={resetPracticeAnswer} type="button"><RotateCcw size={14} /> נקה</button>
                    <button className="ghost-btn small-action" onClick={() => setRevealedPractice(!revealedPractice)} type="button">
                      {revealedPractice ? 'הסתר פתרון לדוגמה' : 'הצג פתרון לדוגמה'}
                    </button>
                  </div>

                  {practiceChecked && (
                    <div className={`conceptual-feedback ${practiceAnswer.trim().length > 25 ? 'good' : 'needs-work'}`}>
                      {practiceAnswer.trim().length > 25
                        ? 'יש תשובה לעבוד איתה. עכשיו תשווה אותה לרשימת הבדיקה ולפתרון לדוגמה.'
                        : 'התשובה קצרה מדי. בתרגול כזה צריך הסבר, סדר פעולה או נימוק — לא רק מילת מפתח.'}
                    </div>
                  )}

                  {revealedPractice && (
                    <div className="practice-rubric-panel">
                      <strong>תשובה טובה צריכה לכלול:</strong>
                      <ul>{buildPracticeChecklist(selectedLesson).map((item) => <li key={item}>{item}</li>)}</ul>
                      <strong>פתרון לדוגמה:</strong>
                      <p>{buildModelPracticeAnswer(selectedLesson)}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>


            {lessonMathExercises.length > 0 && (
              <section className="lesson-section-card math-practice-section">
                <div className="math-practice-heading">
                  <div>
                    <span className="badge"><Calculator size={14} /> תרגילים מתמטיים</span>
                    <h3>תרגול כמו בבית ספר</h3>
                    <p>כל תרגיל מתחיל מסרטוט, ממשיך לנתונים, ואז להצבה בנוסחה. לא מדלגים ישר לתשובה.</p>
                  </div>
                </div>
                <div className="math-exercise-grid">
                  {lessonMathExercises.map((exercise) => {
                    const rawAnswer = exerciseAnswers[exercise.id] ?? '';
                    const wasChecked = checkedExercises[exercise.id];
                    const userNumber = Number(rawAnswer);
                    const hasNumber = rawAnswer !== '' && Number.isFinite(userNumber);
                    const isCorrect = hasNumber && Math.abs(userNumber - exercise.numericAnswer) <= exercise.tolerance;
                    const answerState = !wasChecked ? '' : isCorrect ? 'correct' : 'wrong';

                    return (
                      <article className={`math-exercise-card ${answerState}`} key={exercise.id}>
                        <h4>{exercise.title}</h4>
                        <MathExerciseDiagram type={exercise.type} />
                        <div className="math-exercise-content">
                          <div>
                            <strong>נתונים</strong>
                            <ul>{exercise.given.map((item) => <li key={item}>{item}</li>)}</ul>
                          </div>
                          <div>
                            <strong>מה צריך למצוא?</strong>
                            <p>{exercise.find}</p>
                          </div>
                          <div className="school-formula" dir="ltr">{exercise.formula}</div>

                          <div className="lesson-answer-checker">
                            <label>
                              <span>התשובה שלך</span>
                              <div className="lesson-answer-input-row">
                                <input
                                  dir="ltr"
                                  type="number"
                                  step="any"
                                  value={rawAnswer}
                                  onChange={(event) => updateExerciseAnswer(exercise.id, event.target.value)}
                                  placeholder="הכנס מספר"
                                />
                                <strong>{exercise.unit}</strong>
                              </div>
                            </label>
                            <div className="lesson-answer-actions">
                              <button className="primary-btn small-action" type="button" onClick={() => checkExercise(exercise.id)}>בדוק תשובה</button>
                              <button className="secondary-btn small-action" type="button" onClick={() => resetExercise(exercise.id)}>נקה</button>
                            </div>
                            {wasChecked && (
                              <div className={`lesson-answer-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
                                {isCorrect
                                  ? `נכון. התשובה בטווח הנכון: ${exercise.answer}`
                                  : `לא מדויק. רמז: ${exercise.answerHint}`}
                              </div>
                            )}
                          </div>

                          <details className="math-solution">
                            <summary>הצג פתרון מלא</summary>
                            <ol>{exercise.solution.map((step) => <li key={step}>{step}</li>)}</ol>
                            <div className="final-answer">תשובה: {exercise.answer}</div>
                          </details>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            <section className="lesson-section-card mini-quiz-card">
              <h3>בדיקת הבנה קצרה</h3>
              <p className="mini-quiz-intro">גם כאן לא מספיק לפתוח תשובה. כתוב קודם את שלך, ואז בדוק מול תשובת המודל.</p>
              <div className="mini-quiz-grid checked-mini-quiz-grid">
                {selectedLesson.miniQuiz.map((item) => {
                  const userAnswer = quizAnswers[item.question] || '';
                  const isChecked = checkedQuiz[item.question];
                  const enough = userAnswer.trim().length >= 15;
                  return (
                    <div key={item.question} className={`mini-quiz-item checked-mini-quiz-item ${isChecked ? (enough ? 'good' : 'needs-work') : ''}`}>
                      <strong>{item.question}</strong>
                      <textarea
                        value={userAnswer}
                        onChange={(event) => updateQuizAnswer(item.question, event.target.value)}
                        placeholder="כתוב את ההסבר שלך לפני שאתה פותח את התשובה."
                      />
                      <div className="lesson-answer-actions">
                        <button className="primary-btn small-action" type="button" onClick={() => checkQuizAnswer(item.question)}>בדוק</button>
                        <button className="secondary-btn small-action" type="button" onClick={() => resetQuizAnswer(item.question)}><RotateCcw size={14} /> נקה</button>
                      </div>
                      {isChecked && (
                        <div className={`conceptual-feedback ${enough ? 'good' : 'needs-work'}`}>
                          {enough ? 'התשובה באורך סביר. עכשיו בדוק אם היא באמת כוללת את הרעיון המרכזי.' : 'קצר מדי. תן נימוק או דוגמה, אחרת אתה לא באמת בודק הבנה.'}
                        </div>
                      )}
                      {isChecked && (
                        <div className="model-answer-box">
                          <p><CheckCircle2 size={16} /> <strong>תשובת מודל:</strong> {item.answer}</p>
                          <p><strong>איך לבדוק את עצמך:</strong> האם התשובה שלך אומרת את אותו רעיון במילים שלך, עם מושג טכני נכון וללא ניחוש?</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </article>
        )}
      </div>
    </section>
  );
}
