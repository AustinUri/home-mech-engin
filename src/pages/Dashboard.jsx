import { CheckCircle2, ClipboardList, Gauge, LibraryBig } from 'lucide-react';
import StatCard from '../components/StatCard.jsx';

export default function Dashboard({ percent, completedCount, totalModules, nextModule, onOpenModule, progress }) {
  const lowConfidence = Object.entries(progress.confidence || {}).filter(([, value]) => value === 'נמוכה');
  const Icon = nextModule.icon;

  return (
    <section className="page-stack">
      <div className="hero panel blueprint-grid">
        <div className="hero-copy">
          <span className="badge dark">Garage Mode</span>
          <h2>ברוך הבא למוסך הלימודי שלך</h2>
          <p>
            המטרה היא לא להיראות חכם. המטרה היא להבין מערכות, למדוד, לחשב, לאבחן ולבנות תיק עבודות.
            מי שמדלג על בסיס — משלם על זה אחר כך.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={onOpenModule}>המשך למודול הבא</button>
            <button className="ghost-btn">בדוק את עצמך במבחנים</button>
          </div>
        </div>
        <div className="engine-plate">
          <Icon size={44} />
          <strong>{nextModule.shortTitle}</strong>
          <span>{nextModule.level}</span>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard title="התקדמות" value={`${percent}%`} icon={Gauge} />
        <StatCard title="מודולים שהושלמו" value={`${completedCount}/${totalModules}`} icon={CheckCircle2} />
        <StatCard title="מקורות לימוד" value="12+" icon={LibraryBig} />
        <StatCard title="מבחנים פעילים" value="5" icon={ClipboardList} />
      </div>

      <div className="two-column">
        <div className="panel next-panel">
          <h3>המודול הבא שלך</h3>
          <div className="next-module">
            <Icon size={30} />
            <div>
              <strong>{nextModule.title}</strong>
              <p>{nextModule.goal}</p>
            </div>
          </div>
          <button className="primary-btn" onClick={onOpenModule}>פתח מודול</button>
        </div>

        <div className="panel warning-panel">
          <h3>איפה לא לזייף</h3>
          {lowConfidence.length ? (
            <p>יש לך {lowConfidence.length} מודולים שסימנת כביטחון נמוך. תחזור אליהם לפני שאתה רץ קדימה.</p>
          ) : (
            <p>אין כרגע מודולים שסימנת כביטחון נמוך. זה לא אומר שאתה גאון — זה אומר שעוד לא מצאת את החורים.</p>
          )}
        </div>
      </div>
    </section>
  );
}
