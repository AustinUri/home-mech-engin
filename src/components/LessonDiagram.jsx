// Large, clear lesson diagrams.
// The goal is teaching, not making tiny decorative SVG icons.
export default function LessonDiagram({ type }) {
  switch (type) {
    case 'diagnosticFlow':
      return <DiagnosticFlow />;
    case 'measurementMap':
      return <MeasurementMap />;
    case 'engineFourStroke':
      return <EngineFourStroke />;
    case 'engineNeeds':
      return <EngineNeeds />;
    case 'electricCircuitClean':
      return <ElectricCircuit />;
    case 'ohmTriangle':
      return <OhmTriangle />;
    case 'torqueLeverClean':
      return <TorqueLever />;
    case 'gearRatioClean':
      return <GearRatio />;
    default:
      return <GenericDiagram />;
  }
}

function DiagramFrame({ title, children }) {
  return (
    <div className="lesson-diagram-frame">
      <div className="lesson-diagram-head">{title}</div>
      <div className="lesson-diagram-body">{children}</div>
    </div>
  );
}

function DiagnosticFlow() {
  return (
    <DiagramFrame title="שרשרת אבחון בסיסית">
      <div className="flow-diagram">
        {['סימפטום', 'מערכת קשורה', 'בדיקה מדידה', 'מסקנה', 'פעולה'].map((item, index) => (
          <div className="flow-step" key={item}>
            <span>{index + 1}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
      <p className="diagram-note">לא מחליפים חלק לפני שיש בדיקה שמראה למה הוא חשוד.</p>
    </DiagramFrame>
  );
}

function MeasurementMap() {
  const items = [
    ['V', 'מתח', 'הדחיפה החשמלית'],
    ['A', 'זרם', 'מה שבאמת זורם'],
    ['Ω', 'התנגדות', 'מה שמפריע לזרם'],
    ['W', 'הספק', 'קצב צריכת אנרגיה'],
    ['Nm', 'מומנט', 'כוח סיבובי'],
    ['rpm', 'סל״ד', 'סיבובים לדקה']
  ];
  return (
    <DiagramFrame title="מפת יחידות בסיסיות">
      <div className="unit-map">
        {items.map(([symbol, name, meaning]) => (
          <div className="unit-card" key={symbol}>
            <span>{symbol}</span>
            <strong>{name}</strong>
            <small>{meaning}</small>
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}

function EngineFourStroke() {
  const strokes = [
    ['1', 'יניקה', 'בוכנה יורדת', 'אוויר + דלק נכנסים'],
    ['2', 'דחיסה', 'בוכנה עולה', 'התערובת נדחסת'],
    ['3', 'עבודה', 'ניצוץ ושריפה', 'הבוכנה נדחפת למטה'],
    ['4', 'פליטה', 'בוכנה עולה', 'גזים יוצאים']
  ];
  return (
    <DiagramFrame title="מחזור מנוע ארבע פעימות">
      <div className="stroke-diagram">
        {strokes.map(([num, title, motion, action]) => (
          <div className="stroke-card" key={title}>
            <div className="stroke-number">{num}</div>
            <strong>{title}</strong>
            <div className="cylinder-sketch">
              <div className={`piston piston-${num}`} />
            </div>
            <p>{motion}</p>
            <small>{action}</small>
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}

function EngineNeeds() {
  const needs = ['אוויר', 'דלק', 'ניצוץ / חום דחיסה', 'דחיסה', 'תזמון'];
  return (
    <DiagramFrame title="חמשת התנאים להפעלת מנוע">
      <div className="engine-needs-diagram">
        <div className="engine-center">מנוע מניע</div>
        {needs.map((need) => <div className="need-pill" key={need}>{need}</div>)}
      </div>
      <p className="diagram-note">אם אחד התנאים חסר — המנוע יכול להסתובב ועדיין לא להניע.</p>
    </DiagramFrame>
  );
}

function ElectricCircuit() {
  return (
    <DiagramFrame title="מעגל חשמלי פשוט">
      <div className="circuit-clean">
        <div className="battery-clean"><span>+</span><span>−</span><strong>מצבר 12V</strong></div>
        <div className="wire-line top" />
        <div className="load-clean">מנורה / צרכן</div>
        <div className="wire-line bottom" />
        <div className="current-arrow">זרם זורם רק במעגל סגור</div>
      </div>
      <p className="diagram-note">מתח הוא הדחיפה, זרם הוא התנועה, התנגדות מגבילה את התנועה.</p>
    </DiagramFrame>
  );
}

function OhmTriangle() {
  return (
    <DiagramFrame title="משולש חוק אוהם">
      <div className="ohm-layout">
        <div className="ohm-triangle">
          <div className="ohm-top">V</div>
          <div className="ohm-bottom"><span>I</span><span>R</span></div>
        </div>
        <div className="formula-list">
          <strong>V = I × R</strong>
          <strong>I = V / R</strong>
          <strong>R = V / I</strong>
          <strong>P = V × I</strong>
        </div>
      </div>
    </DiagramFrame>
  );
}

function TorqueLever() {
  return (
    <DiagramFrame title="מומנט על מנוף">
      <div className="torque-clean">
        <div className="pivot">ציר</div>
        <div className="lever-bar" />
        <div className="force-arrow">F<br />כוח</div>
        <div className="radius-label">r = מרחק מהציר</div>
        <div className="torque-formula">T = F × r</div>
      </div>
    </DiagramFrame>
  );
}

function GearRatio() {
  return (
    <DiagramFrame title="יחס העברה: מהירות מול מומנט">
      <div className="gear-clean">
        <div className="small-gear">גלגל קטן<br /><span>מהיר</span></div>
        <div className="gear-link">→</div>
        <div className="big-gear">גלגל גדול<br /><span>יותר מומנט</span></div>
      </div>
      <p className="diagram-note">יחס גדול מגדיל מומנט ומקטין מהירות. אין כוח בחינם.</p>
    </DiagramFrame>
  );
}

function GenericDiagram() {
  return (
    <DiagramFrame title="תרשים לימודי">
      <div className="generic-diagram">כאן יופיע תרשים לפי השיעור.</div>
    </DiagramFrame>
  );
}
