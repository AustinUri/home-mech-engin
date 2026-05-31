import { useMemo, useState } from 'react';
import { HelpCircle, RotateCcw, Shuffle } from 'lucide-react';
import PageTitle from '../components/PageTitle.jsx';
import { popQuizBank, popQuizTopics } from '../data/popQuizzes.js';

function pickQuestions(topic, count) {
  const pool = topic === 'הכול' ? popQuizBank : popQuizBank.filter((question) => question.topic === topic);
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
}

export default function PopQuizPage() {
  const [topic, setTopic] = useState('הכול');
  const [count, setCount] = useState(5);
  const [questions, setQuestions] = useState(() => pickQuestions('הכול', 5));
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((sum, question) => sum + (isAnswerCorrect(question, answers[question.id]) ? 1 : 0), 0);
  }, [questions, answers]);

  function startNewQuiz(nextTopic = topic, nextCount = count) {
    setTopic(nextTopic);
    setCount(nextCount);
    setQuestions(pickQuestions(nextTopic, Number(nextCount)));
    setAnswers({});
    setSubmitted(false);
  }

  function updateAnswer(questionId, value) {
    setAnswers((current) => ({ ...current, [questionId]: value }));
    setSubmitted(false);
  }

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <section className="page-stack">
      <PageTitle
        icon={HelpCircle}
        title="מבחני פתע"
        subtitle="בדיקה קצרה בלי הכנה מראש. המטרה היא לתפוס חורים קטנים לפני שהם נהיים בעיה גדולה במבחן מלא."
      />

      <div className="panel pop-quiz-controls">
        <div>
          <span className="badge"><Shuffle size={14} /> הגדר מבחן פתע</span>
          <h3>בחר תחום וכמות שאלות</h3>
          <p>זה לא מבחן סוף מודול. זה בדיקת הבנה מהירה של 3–8 שאלות.</p>
        </div>
        <label>
          <span>תחום</span>
          <select value={topic} onChange={(event) => startNewQuiz(event.target.value, count)}>
            {popQuizTopics.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>כמות שאלות</span>
          <select value={count} onChange={(event) => startNewQuiz(topic, event.target.value)}>
            {[3, 5, 8].map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <button className="primary-btn" onClick={() => startNewQuiz()} type="button">מבחן פתע חדש</button>
      </div>

      <article className="panel test-card pop-quiz-card">
        <div className="test-header">
          <div>
            <h3>מבחן פתע — {topic}</h3>
            <p>ענה מהר, אבל אל תנחש. אם אתה לא יודע, זה סימן שצריך לחזור לשיעור.</p>
          </div>
          {submitted && <div className="score-pill">{score}/{questions.length}</div>}
        </div>

        {questions.map((question, index) => (
          <PopQuestion
            key={question.id}
            question={question}
            index={index}
            answer={answers[question.id]}
            submitted={submitted}
            onAnswer={updateAnswer}
          />
        ))}

        <div className="test-actions">
          <button className="primary-btn" onClick={() => setSubmitted(true)} type="button">בדוק מבחן פתע</button>
          <button className="secondary-btn" onClick={resetQuiz} type="button"><RotateCcw size={15} /> נקה תשובות</button>
          <button className="ghost-btn" onClick={() => startNewQuiz()} type="button"><Shuffle size={15} /> ערבב שאלות</button>
        </div>
      </article>
    </section>
  );
}

function PopQuestion({ question, index, answer, submitted, onAnswer }) {
  const correct = submitted && isAnswerCorrect(question, answer);
  const wrong = submitted && answer !== undefined && !correct;

  return (
    <div className={`question pop-question ${correct ? 'correct' : ''} ${wrong ? 'wrong' : ''}`}>
      <div className="pop-question-head">
        <strong>{index + 1}. {question.question}</strong>
        <span>{question.topic} · {question.difficulty}</span>
      </div>
      {question.formula && <div className="formula hint" dir="ltr">{question.formula}</div>}

      {question.type === 'choice' && (
        <div className="choice-grid">
          {question.options.map((option, optionIndex) => {
            const selected = answer === optionIndex;
            const shouldHighlight = submitted && optionIndex === question.answer;
            return (
              <button
                key={option}
                className={`choice-btn ${selected ? 'selected' : ''} ${shouldHighlight ? 'correct-choice' : ''}`}
                onClick={() => onAnswer(question.id, optionIndex)}
                type="button"
              >
                {option}
              </button>
            );
          })}
        </div>
      )}

      {question.type === 'calc' && (
        <div className="calc-answer">
          <input
            dir="ltr"
            type="number"
            step="any"
            value={answer ?? ''}
            onChange={(event) => onAnswer(question.id, event.target.value)}
            placeholder="הכנס תשובה מספרית"
          />
          <span>{question.unit}</span>
          {submitted && <small>תשובה נכונה: {question.numericAnswer} {question.unit}</small>}
        </div>
      )}

      {submitted && <p className="pop-explanation"><strong>הסבר:</strong> {question.explanation}</p>}
    </div>
  );
}

function isAnswerCorrect(question, answer) {
  if (answer === undefined || answer === '') return false;
  if (question.type === 'choice') return answer === question.answer;
  if (question.type === 'calc') {
    const value = Number(answer);
    return Number.isFinite(value) && Math.abs(value - question.numericAnswer) <= question.tolerance;
  }
  return false;
}
