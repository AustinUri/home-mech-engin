import { ClipboardList, Gauge, Hammer, PlayCircle } from 'lucide-react';
import ModuleCard from '../components/ModuleCard.jsx';

export default function ModulesPage({ query, setQuery, modules, selectedModule, setSelectedModuleId, progress, onToggleComplete, onSetConfidence, onSetNote }) {
  return (
    <section className="modules-layout">
      <aside className="modules-list panel">
        <label className="search-label">חיפוש מודול</label>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="חפש: חשמל, גיר, סירה, מומנט..."
          className="search-input"
        />
        <div className="module-list-items">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              active={selectedModule.id === module.id}
              done={progress.completed?.[module.id]}
              onClick={() => setSelectedModuleId(module.id)}
            />
          ))}
        </div>
      </aside>

      <article className={`module-detail panel theme-${selectedModule.theme}`}>
        <div className="module-detail-header">
          <div>
            <span className="badge"><PlayCircle size={16} /> {selectedModule.level}</span>
            <h2>{selectedModule.title}</h2>
            <p>{selectedModule.goal}</p>
          </div>
          <button className="primary-btn" onClick={() => onToggleComplete(selectedModule.id)}>
            {progress.completed?.[selectedModule.id] ? 'בטל השלמה' : 'סמן כהושלם'}
          </button>
        </div>

        <div className="info-grid">
          <InfoBox icon={Gauge} title="משך" text={selectedModule.duration} />
          <InfoBox icon={Hammer} title="פרויקט" text={selectedModule.project} />
          <InfoBox icon={ClipboardList} title="מבחן" text={selectedModule.test} />
        </div>

        <div className="two-column module-sections">
          <div>
            <h3>שיעורים במודול</h3>
            {selectedModule.lessons.map((lesson, index) => (
              <div className="lesson-row" key={lesson}><strong>{index + 1}.</strong> {lesson}</div>
            ))}
          </div>
          <div>
            <h3>נושאים</h3>
            <div className="topic-cloud">
              {selectedModule.topics.map((topic) => <span key={topic}>{topic}</span>)}
            </div>
          </div>
        </div>

        <div className="module-workspace">
          <div>
            <label>הערות אישיות למודול</label>
            <textarea
              value={progress.notes?.[selectedModule.id] || ''}
              onChange={(event) => onSetNote(selectedModule.id, event.target.value)}
              placeholder="מה למדת? מה לא ברור? מה לבדוק שוב?"
            />
          </div>
          <div>
            <label>רמת ביטחון</label>
            {['נמוכה', 'בינונית', 'גבוהה'].map((level) => (
              <button
                key={level}
                className={`confidence-btn ${progress.confidence?.[selectedModule.id] === level ? 'selected' : ''}`}
                onClick={() => onSetConfidence(selectedModule.id, level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

function InfoBox({ icon: Icon, title, text }) {
  return (
    <div className="info-box">
      <strong><Icon size={18} /> {title}</strong>
      <p>{text}</p>
    </div>
  );
}
