// Large, clear lesson diagrams.
// Diagrams are written as HTML/CSS blocks instead of tiny confusing icons.
// In Hebrew RTL layouts, learning flow moves from right to left, so arrows point left.
export default function LessonDiagram({ type }) {
  switch (type) {
    case 'diagnosticFlow':
      return <DiagnosticFlow />;
    case 'measurementMap':
      return <MeasurementMap />;
    case 'forceWorkPower':
      return <ForceWorkPower />;
    case 'heatEfficiency':
      return <HeatEfficiency />;
    case 'engineFourStroke':
      return <EngineFourStroke />;
    case 'engineNeeds':
      return <EngineNeeds />;
    case 'engineCoolingLoop':
      return <EngineCoolingLoop />;
    case 'lubricationLoop':
      return <LubricationLoop />;
    case 'fuelIgnition':
      return <FuelIgnition />;
    case 'electricCircuitClean':
      return <ElectricCircuit />;
    case 'ohmTriangle':
      return <OhmTriangle />;
    case 'seriesParallel':
      return <SeriesParallel />;
    case 'voltageDrop':
      return <VoltageDrop />;
    case 'relayFuse':
      return <RelayFuse />;
    case 'batteryStarter':
      return <BatteryStarter />;
    case 'chargingSystem':
      return <ChargingSystem />;
    case 'torqueLeverClean':
      return <TorqueLever />;
    case 'gearRatioClean':
      return <GearRatio />;
    case 'clutchPowerPath':
      return <ClutchPowerPath />;
    case 'hydraulicBrake':
      return <HydraulicBrake />;
    case 'marineCooling':
      return <MarineCooling />;
    case 'propellerPitch':
      return <PropellerPitch />;
    case 'valveSystem':
      return <ValveSystem />;
    case 'pistonPumpSingleActing':
      return <PistonPumpSingleActing />;
    case 'pistonPumpStates':
      return <PistonPumpStates />;
    case 'flexibleImpellerPump':
      return <FlexibleImpellerPump />;
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

function FlowRow({ items }) {
  return (
    <div className="rtl-flow-row">
      {items.map((item, index) => (
        <div className="rtl-flow-piece" key={item.title}>
          <div className="flow-block">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item.title}</strong>
            {item.note && <small>{item.note}</small>}
          </div>
          {index < items.length - 1 && <div className="rtl-arrow" aria-hidden="true">←</div>}
        </div>
      ))}
    </div>
  );
}

function DiagnosticFlow() {
  return (
    <DiagramFrame title="שרשרת אבחון בסיסית">
      <FlowRow items={[
        { title: 'סימפטום', note: 'מה קורה בפועל?' },
        { title: 'מערכת חשודה', note: 'חשמל / דלק / מכניקה' },
        { title: 'בדיקה מדידה', note: 'מתח, לחץ, רעש, תנועה' },
        { title: 'מסקנה', note: 'מה הראיה אומרת?' },
        { title: 'פעולה', note: 'תיקון רק אחרי הוכחה' }
      ]} />
      <p className="diagram-note">הכיוון הוא מימין לשמאל: קודם מגדירים סימפטום, ורק בסוף מתקנים.</p>
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

function ForceWorkPower() {
  return (
    <DiagramFrame title="כוח, עבודה והספק">
      <FlowRow items={[
        { title: 'כוח F', note: 'דחיפה או משיכה' },
        { title: 'מרחק d', note: 'הגוף זז' },
        { title: 'עבודה W', note: 'W = F × d' },
        { title: 'זמן t', note: 'כמה מהר זה קורה' },
        { title: 'הספק P', note: 'P = W / t' }
      ]} />
      <p className="diagram-note">עבודה היא מה נעשה. הספק הוא כמה מהר העבודה נעשית.</p>
    </DiagramFrame>
  );
}

function HeatEfficiency() {
  return (
    <DiagramFrame title="יעילות: לא כל האנרגיה הופכת לעבודה">
      <div className="energy-split">
        <div className="energy-input">אנרגיה נכנסת<br /><span>100%</span></div>
        <div className="energy-branch useful">עבודה שימושית<br /><span>למשל 70%</span></div>
        <div className="energy-branch loss">חום / רעש / חיכוך<br /><span>למשל 30%</span></div>
      </div>
      <p className="diagram-note">יעילות = עבודה שימושית חלקי אנרגיה נכנסת. אף מערכת אמיתית לא 100%.</p>
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
            <div className="cylinder-sketch"><div className={`piston piston-${num}`} /></div>
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

function EngineCoolingLoop() {
  return (
    <DiagramFrame title="לולאת קירור מנוע">
      <FlowRow items={[
        { title: 'מנוע חם', note: 'הבעירה מייצרת חום' },
        { title: 'נוזל קירור', note: 'קולט חום מהמנוע' },
        { title: 'משאבת מים', note: 'מזרימה את הנוזל' },
        { title: 'רדיאטור', note: 'משחרר חום לאוויר' },
        { title: 'תרמוסטט', note: 'שולט בטמפרטורה' }
      ]} />
      <p className="diagram-note">התחממות היא לא “סתם חום”: זו בעיית סילוק חום או זרימה.</p>
    </DiagramFrame>
  );
}

function LubricationLoop() {
  return (
    <DiagramFrame title="מערכת שימון מנוע">
      <FlowRow items={[
        { title: 'אגן שמן', note: 'מאגר השמן' },
        { title: 'משאבת שמן', note: 'יוצרת זרימה ולחץ' },
        { title: 'מסנן שמן', note: 'מוריד לכלוך' },
        { title: 'מעברי שמן', note: 'מגיעים למסבים ולגל זיזים' },
        { title: 'חזרה לאגן', note: 'השמן חוזר למחזור' }
      ]} />
      <p className="diagram-note">שמן לא רק “משמן”: הוא גם מקרר, מנקה ומפריד בין מתכות.</p>
    </DiagramFrame>
  );
}

function FuelIgnition() {
  return (
    <DiagramFrame title="דלק והצתה במנוע בנזין">
      <div className="split-system-diagram">
        <div className="system-column fuel"><strong>מסלול דלק</strong><span>מיכל → משאבה → מסנן → מזרק</span></div>
        <div className="system-column spark"><strong>מסלול ניצוץ</strong><span>מצבר → סליל הצתה → פלאג</span></div>
        <div className="system-result">בעירה בזמן הנכון</div>
      </div>
      <p className="diagram-note">במנוע בנזין צריך גם דלק וגם ניצוץ. אחד בלי השני לא מספיק.</p>
    </DiagramFrame>
  );
}

function ElectricCircuit() {
  return (
    <DiagramFrame title="מעגל חשמלי פשוט">
      <div className="clean-circuit-diagram">
        <div className="battery-node">מצבר<br /><span>12V</span></div>
        <div className="wire top-wire" />
        <div className="consumer-node">צרכן<br /><span>מנורה / מנוע</span></div>
        <div className="wire bottom-wire" />
        <div className="flow-label">זרם זורם רק כשהמעגל סגור</div>
      </div>
      <p className="diagram-note">מתח הוא הדחיפה, זרם הוא התנועה, התנגדות מגבילה את התנועה.</p>
    </DiagramFrame>
  );
}

function OhmTriangle() {
  return (
    <DiagramFrame title="משולש חוק אוהם">
      <div className="ohm-layout">
        <div className="ohm-triangle"><div className="ohm-top">V</div><div className="ohm-bottom"><span>I</span><span>R</span></div></div>
        <div className="formula-list"><strong>V = I × R</strong><strong>I = V / R</strong><strong>R = V / I</strong><strong>P = V × I</strong></div>
      </div>
    </DiagramFrame>
  );
}

function SeriesParallel() {
  return (
    <DiagramFrame title="טורי מול מקבילי">
      <div className="series-parallel">
        <div className="circuit-mini"><strong>מעגל טורי</strong><span>זרם אחד עובר דרך כל הרכיבים</span><div className="mini-line">R1 — R2 — R3</div></div>
        <div className="circuit-mini"><strong>מעגל מקבילי</strong><span>לכל ענף יש נתיב משלו</span><div className="mini-branches">R1<br />R2<br />R3</div></div>
      </div>
      <p className="diagram-note">בטורי: נתק אחד מפיל הכול. במקבילי: ענף אחד יכול להיכשל והאחרים עדיין לעבוד.</p>
    </DiagramFrame>
  );
}

function VoltageDrop() {
  return (
    <DiagramFrame title="נפילת מתח בגלל התנגדות בחיבור">
      <FlowRow items={[
        { title: 'מצבר 12V', note: 'מקור מתח' },
        { title: 'חיבור חלוד', note: 'התנגדות לא רצויה' },
        { title: 'נפילת מתח', note: 'חלק מהמתח “מתבזבז”' },
        { title: 'צרכן חלש', note: 'מקבל פחות מתח' }
      ]} />
      <p className="diagram-note">לפעמים הרכיב תקין, אבל הדרך אליו גרועה.</p>
    </DiagramFrame>
  );
}

function RelayFuse() {
  return (
    <DiagramFrame title="פיוז וממסר במעגל רכב">
      <FlowRow items={[
        { title: 'מצבר', note: 'מקור כוח' },
        { title: 'פיוז', note: 'הגנה מעודף זרם' },
        { title: 'ממסר', note: 'מתג חשמלי נשלט' },
        { title: 'צרכן', note: 'מנוע / פנס / משאבה' },
        { title: 'הארקה', note: 'חזרה למינוס' }
      ]} />
      <p className="diagram-note">פיוז מגן. ממסר מאפשר לשלוט בזרם גדול עם זרם קטן.</p>
    </DiagramFrame>
  );
}

function BatteryStarter() {
  return (
    <DiagramFrame title="מסלול התנעה בסיסי">
      <FlowRow items={[
        { title: 'מצבר', note: 'מספק זרם גבוה' },
        { title: 'סוויץ׳ / כפתור', note: 'פקודת התנעה' },
        { title: 'ממסר / סולנואיד', note: 'סוגר מעגל זרם גבוה' },
        { title: 'סטרטר', note: 'מסובב את המנוע' },
        { title: 'מנוע מסתובב', note: 'עכשיו צריך דלק/ניצוץ/דחיסה' }
      ]} />
      <p className="diagram-note">“לא מניע” יכול להיות שהמנוע לא מסתובב, או שהוא מסתובב אבל לא נדלק — אלה שתי בעיות שונות.</p>
    </DiagramFrame>
  );
}

function ChargingSystem() {
  return (
    <DiagramFrame title="מערכת טעינה ברכב">
      <FlowRow items={[
        { title: 'מנוע מסתובב', note: 'מסובב רצועה' },
        { title: 'אלטרנטור', note: 'מייצר חשמל' },
        { title: 'ווסת מתח', note: 'שומר על מתח טעינה' },
        { title: 'מצבר', note: 'נטען ומייצב' },
        { title: 'צרכנים', note: 'מקבלים חשמל' }
      ]} />
      <p className="diagram-note">אם אין טעינה, המצבר יכול להיות תקין ועדיין להתרוקן בנסיעה.</p>
    </DiagramFrame>
  );
}

function TorqueLever() {
  return (
    <DiagramFrame title="מומנט על מנוף">
      <div className="torque-clean fixed-arrow">
        <div className="pivot">ציר</div><div className="lever-bar" /><div className="force-arrow">כוח F ↓</div><div className="radius-label">r = מרחק מהציר</div><div className="torque-formula">T = F × r</div>
      </div>
    </DiagramFrame>
  );
}

function GearRatio() {
  return (
    <DiagramFrame title="יחס העברה: מהירות מול מומנט">
      <div className="gear-clean rtl-gear-flow">
        <div className="small-gear">גלגל מניע קטן<br /><span>מהיר</span></div>
        <div className="gear-link">←</div>
        <div className="big-gear">גלגל מונע גדול<br /><span>יותר מומנט</span></div>
      </div>
      <p className="diagram-note">החץ מימין לשמאל: גלגל מניע קטן מסובב גלגל מונע גדול.</p>
    </DiagramFrame>
  );
}

function ClutchPowerPath() {
  return (
    <DiagramFrame title="מסלול כוח ברכב ידני">
      <FlowRow items={[
        { title: 'מנוע', note: 'מייצר מומנט' },
        { title: 'קלאץ׳', note: 'מחבר/מנתק כוח' },
        { title: 'גיר', note: 'משנה יחס העברה' },
        { title: 'דיפרנציאל', note: 'מחלק כוח לגלגלים' },
        { title: 'גלגלים', note: 'מניעים את הרכב' }
      ]} />
      <p className="diagram-note">קלאץ׳ לא מגדיל כוח; הוא מאפשר חיבור הדרגתי בין המנוע לגיר.</p>
    </DiagramFrame>
  );
}

function HydraulicBrake() {
  return (
    <DiagramFrame title="בלם הידראולי בסיסי">
      <FlowRow items={[
        { title: 'דוושת בלם', note: 'כוח מהרגל' },
        { title: 'משאבה מרכזית', note: 'יוצרת לחץ נוזל' },
        { title: 'צינורות בלם', note: 'מעבירים לחץ' },
        { title: 'קליפר', note: 'דוחף רפידות' },
        { title: 'דיסק', note: 'נוצר חיכוך והאטה' }
      ]} />
      <p className="diagram-note">הידראוליקה מעבירה לחץ. אוויר במערכת גורם לדוושה ספוגית.</p>
    </DiagramFrame>
  );
}

function MarineCooling() {
  return (
    <DiagramFrame title="קירור מי ים במנוע סירה">
      <FlowRow items={[
        { title: 'כניסת מי ים', note: 'דרך פתח יניקה' },
        { title: 'אימפלר', note: 'משאבת גומי קטנה' },
        { title: 'מחליף חום / מנוע', note: 'סופג חום' },
        { title: 'פליטה', note: 'מים יוצאים החוצה' },
        { title: 'בדיקת זרימה', note: 'סימן שהקירור עובד' }
      ]} />
      <p className="diagram-note">אם אין זרימת מים — עוצרים. מנוע ימי יכול להתחמם מהר מאוד.</p>
    </DiagramFrame>
  );
}

function PropellerPitch() {
  return (
    <DiagramFrame title="מדחף: קוטר ו־Pitch">
      <div className="prop-diagram">
        <div className="prop-circle">קוטר</div>
        <div className="prop-blade">Pitch<br /><span>כמה המדחף “מתקדם” בסיבוב תאורטי</span></div>
      </div>
      <p className="diagram-note">Pitch גבוה מדי יכול להעמיס על המנוע; נמוך מדי יכול לגרום לסל״ד גבוה מדי.</p>
    </DiagramFrame>
  );
}


function ValveSystem() {
  return (
    <DiagramFrame title="שסתום / מגוף במערכת נוזלים">
      <FlowRow items={[
        { title: 'קו כניסה', note: 'נוזל מגיע בלחץ' },
        { title: 'גוף השסתום', note: 'המסלול הפנימי של הנוזל' },
        { title: 'אטימה', note: 'גלנד / אטם / חבל חלב' },
        { title: 'גלגל יד', note: 'פותח וסוגר בהדרגה' },
        { title: 'קו יציאה', note: 'זרימה רק כשהמעבר פתוח' }
      ]} />
      <p className="diagram-note">שסתום תקין לא רק פותח וסוגר; הוא גם צריך לאטום, לעמוד בחומר הזורם ולאפשר פתיחה מבוקרת.</p>
    </DiagramFrame>
  );
}

function PistonPumpSingleActing() {
  return (
    <DiagramFrame title="משאבת בוכנה חד־פעימתית">
      <FlowRow items={[
        { title: 'בוכנה נעה לאחור', note: 'הנפח גדל' },
        { title: 'לחץ יורד', note: 'נוצר אזור יניקה' },
        { title: 'שסתום יניקה נפתח', note: 'נוזל נכנס לצילינדר' },
        { title: 'בוכנה נעה קדימה', note: 'הנפח קטן' },
        { title: 'שסתום סניקה נפתח', note: 'נוזל נדחף החוצה' }
      ]} />
      <p className="diagram-note">במשאבה חד־פעימתית כל תנועת בוכנה עושה פעולה אחת בלבד: או יניקה או סניקה.</p>
    </DiagramFrame>
  );
}

function PistonPumpStates() {
  return (
    <DiagramFrame title="ניתוח מצבי משאבת בוכנה">
      <FlowRow items={[
        { title: 'כיוון תנועת הבוכנה', note: 'ימינה או שמאלה' },
        { title: 'שינוי נפח', note: 'גדל או קטן' },
        { title: 'שינוי לחץ', note: 'יורד או עולה' },
        { title: 'מצב שסתומים', note: 'מי פתוח ומי סגור' },
        { title: 'תהליך', note: 'יניקה או סניקה' }
      ]} />
      <p className="diagram-note">הטריק הוא לא לנחש. מתחילים מכיוון הבוכנה, מסיקים שינוי נפח, ואז יודעים איזה שסתום אמור להיפתח.</p>
    </DiagramFrame>
  );
}

function FlexibleImpellerPump() {
  return (
    <DiagramFrame title="משאבת אימפלור גומי כנפיים גמישות">
      <FlowRow items={[
        { title: 'כניסת מים', note: 'פתח יניקה' },
        { title: 'אימפלור גומי', note: 'כנפיים מתקפלות ונפתחות' },
        { title: 'מסרק / חצי סהר', note: 'יוצר שינוי נפח' },
        { title: 'סניקה', note: 'הנוזל נדחף החוצה' },
        { title: 'תחזוקה', note: 'לא מפעילים יבש; מחליפים כשנשחק' }
      ]} />
      <p className="diagram-note">המשאבה עובדת בגלל שינוי הנפח בין הכנפיים. עבודה ללא נוזל שורפת את הגומי מהר מאוד.</p>
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
