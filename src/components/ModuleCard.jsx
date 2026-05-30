export default function ModuleCard({ module, active, done, onClick }) {
  const Icon = module.icon;
  return (
    <button className={`module-card theme-${module.theme} ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="module-icon"><Icon size={22} /></div>
      <div>
        <strong>{module.shortTitle}</strong>
        <small>{module.level} · {module.duration}</small>
        {done && <span className="done-pill">הושלם</span>}
      </div>
    </button>
  );
}
