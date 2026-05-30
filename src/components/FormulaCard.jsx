export default function FormulaCard({ item }) {
  return (
    <article className="formula-card panel">
      <h3>{item.name}</h3>
      <div className="formula" dir="ltr">{item.formula}</div>
      <p>{item.use}</p>
      <small dir="ltr">{item.variables}</small>
    </article>
  );
}
