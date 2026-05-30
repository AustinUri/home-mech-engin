import { ClipboardList } from 'lucide-react';
import PageTitle from '../components/PageTitle.jsx';
import { tests } from '../data/tests.js';
import { scoreTest, isCorrect } from '../utils/testScoring.js';
import MathExerciseDiagram from '../components/MathExerciseDiagram.jsx';

export default function TestsPage({ progress, onAnswer, onSubmit, onReset }) {
  return (
    <section className="page-stack">
      <PageTitle
        icon={ClipboardList}
        title="מבחנים רציניים"
        subtitle="כאן יש גם חישובים. לא מספיק לזהות תשובה — צריך למצוא משתנים, להציב נוסחאות ולבדוק יחידות."
      />
      <div className="tests-list">
        {tests.map((test) => (
          <TestCard key={test.id} test={test} progress={progress} onAnswer={onAnswer} onSubmit={onSubmit} onReset={onReset} />
        ))}
      </div>
    </section>
  );
}

function TestCard({ test, progress, onAnswer, onSubmit, onReset }) {
  const answers = progress.testAnswers?.[test.id] || {};
  const submitted = progress.testSubmitted?.[test.id];
  const score = scoreTest(test, answers);

  return (
    <article className="panel test-card">
      <div className="test-header">
        <div>
          <h3>{test.title}</h3>
          <p>{test.description}</p>
        </div>
        {submitted && <div className="score-pill">{score}/{test.questions.length}</div>}
      </div>

      {test.questions.map((question, index) => (
        <Question
          key={question.id}
          testId={test.id}
          index={index}
          question={question}
          answer={answers[question.id]}
          submitted={submitted}
          onAnswer={onAnswer}
        />
      ))}

      <div className="test-actions">
        <button className="primary-btn" onClick={() => onSubmit(test.id)}>בדוק מבחן</button>
        <button className="secondary-btn" onClick={() => onReset(test.id)}>נקה מבחן</button>
      </div>
    </article>
  );
}

function Question({ testId, index, question, answer, submitted, onAnswer }) {
  const correct = submitted && isCorrect(question, answer);
  const wrong = submitted && answer !== undefined && !correct;

  return (
    <div className={`question ${correct ? 'correct' : ''} ${wrong ? 'wrong' : ''}`}>
      <strong>{index + 1}. {question.question}</strong>
      {question.diagram && <MathExerciseDiagram type={question.diagram} />}
      {question.formula && <div className="formula hint" dir="ltr">{question.formula}</div>}

      {question.type === 'choice' && (
        <div className="choice-grid">
          {question.options.map((option, optionIndex) => {
            const selected = answer === optionIndex;
            const shouldHighlight = submitted && question.answer === optionIndex;
            return (
              <button
                key={option}
                className={`choice-btn ${selected ? 'selected' : ''} ${shouldHighlight ? 'correct-choice' : ''}`}
                onClick={() => onAnswer(testId, question.id, optionIndex)}
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
            onChange={(event) => onAnswer(testId, question.id, event.target.value)}
            placeholder="הכנס תשובה מספרית"
          />
          <span>{question.unit}</span>
          {submitted && <small>תשובה נכונה: {question.numericAnswer} {question.unit}</small>}
        </div>
      )}
    </div>
  );
}
