export default function BasicConceptCard({ concept }) {
  return (
    <article className="basic-concept-card">
      <div className="basic-concept-head">
        <div>
          <h4>{concept.name}</h4>
          <p>{concept.simple}</p>
        </div>
        <div className="concept-symbol-box" dir="ltr">
          <strong>{concept.symbol}</strong>
          <span>{concept.unit}</span>
        </div>
      </div>
      <div className="basic-concept-grid">
        <div><strong>הסבר טכני</strong><p>{concept.technical}</p></div>
        <div><strong>דוגמה</strong><p>{concept.example}</p></div>
        <div className="concept-mistake"><strong>טעות נפוצה</strong><p>{concept.mistake}</p></div>
      </div>
    </article>
  );
}
