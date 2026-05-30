import { Lightbulb } from 'lucide-react';
import PageTitle from '../components/PageTitle.jsx';
import { conceptLessons } from '../data/lessons.js';

export default function LessonsPage() {
  return (
    <section className="page-stack">
      <PageTitle
        icon={Lightbulb}
        title="שיעורי מושגים — הסבר כמו שצריך"
        subtitle="לא משננים מושגים. מבינים אותם עד שאפשר להסביר אותם בלי להישמע כמו תוכי."
      />
      <div className="lesson-grid">
        {conceptLessons.map((lesson) => (
          <article className="panel concept-card" key={lesson.title}>
            <span className="badge">{lesson.tag}</span>
            <h3>{lesson.title}</h3>
            <div className="concept-inner-grid">
              <LessonBox label="במילים פשוטות" text={lesson.simple} />
              <LessonBox label="דימוי" text={lesson.analogy} />
              <LessonBox label="הסבר טכני" text={lesson.technical} />
              <LessonBox label="טעות נפוצה" text={lesson.mistake} />
            </div>
            <div className="example-box"><strong>דוגמה: </strong>{lesson.example}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LessonBox({ label, text }) {
  return (
    <div className="lesson-box">
      <strong>{label}</strong>
      <p>{text}</p>
    </div>
  );
}
