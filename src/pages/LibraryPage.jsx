import { LibraryBig } from 'lucide-react';
import PageTitle from '../components/PageTitle.jsx';
import { schoolBooks } from '../data/library.js';

export default function LibraryPage() {
  return (
    <section className="page-stack">
      <PageTitle
        icon={LibraryBig}
        title="ספרי בית ספר ומקורות לימוד"
        subtitle="אלה המקורות המרכזיים למסלול. קודם מקור מסודר, אחר כך סרטונים להמחשה. לא הפוך."
      />
      <div className="library-grid">
        {schoolBooks.map((group) => (
          <article className="panel source-group" key={group.category}>
            <h3>{group.category}</h3>
            {group.links.map((link) => (
              <a className="source-link" href={link.url} key={link.url} target="_blank" rel="noreferrer">
                <strong>{link.title}</strong>
                <p>{link.why}</p>
                <small dir="ltr">{link.url}</small>
              </a>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
