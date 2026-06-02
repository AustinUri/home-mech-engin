import { NotebookPen } from 'lucide-react';
import PageTitle from '../components/PageTitle.jsx';
import FormulaCard from '../components/FormulaCard.jsx';
import { formulas } from '../data/formulas.js';

export default function FormulasPage() {
  return (
    <section className="page-stack">
      <PageTitle
        icon={NotebookPen}
        title="חוקי יסוד ונוסחאות"
        subtitle="כאן נמצאות הנוסחאות בלבד: חוקים, יחידות, שימושים ודוגמאות. הסברי המושגים העמוקים נמצאים בתוך שיעורים ותרגול."
      />

      {formulas.map((group) => (
        <section key={group.category}>
          <h3 className="section-heading">{group.category}</h3>
          <div className="formula-grid law-grid">
            {group.items.map((item) => <FormulaCard item={item} key={item.name} />)}
          </div>
        </section>
      ))}
    </section>
  );
}
