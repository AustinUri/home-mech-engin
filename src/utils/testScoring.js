// Keeps quiz scoring isolated from UI components.
export function isCorrect(question, answer) {
  if (question.type === 'choice') {
    return answer === question.answer;
  }

  if (question.type === 'calc') {
    const value = Number(answer);
    if (Number.isNaN(value)) return false;
    return Math.abs(value - question.numericAnswer) <= question.tolerance;
  }

  return false;
}

export function scoreTest(test, answers = {}) {
  return test.questions.reduce((sum, question) => {
    return sum + (isCorrect(question, answers[question.id]) ? 1 : 0);
  }, 0);
}
