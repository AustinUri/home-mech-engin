export default function PageTitle({ icon: Icon, title, subtitle }) {
  return (
    <section className="page-title panel blueprint-grid">
      <div className="page-title-icon"><Icon size={28} /></div>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
