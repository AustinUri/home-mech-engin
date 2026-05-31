import { Target } from 'lucide-react';

export default function Header({ percent, completedCount, totalModules }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <div>
          <div className="badge"><Target size={16} /> הנדסה מכנית ביתית</div>
          <h1>מסלול הנדסאי־מכונאי ביתי</h1>
          <p>מכניקה, חשמל, מנועים, הילוכים, סירות, מבחנים ותיק עבודות — בקצב שלך, אבל בלי לברוח מהבסיס.</p>
        </div>

        <div className="progress-card">
          <div className="progress-top"><strong>התקדמות</strong><span>{percent}%</span></div>
          <div className="progress-track"><div className="progress-fill" style={{ width: `${percent}%` }} /></div>
          <small>{completedCount} מתוך {totalModules} מודולים הושלמו</small>
        </div>
      </div>
    </header>
  );
}
