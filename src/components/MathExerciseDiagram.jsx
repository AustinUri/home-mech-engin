// School-style math exercise diagrams.
// The SVGs are intentionally simple: clear labels, clear arrows, and visible given values.
export default function MathExerciseDiagram({ type }) {
  switch (type) {
    case 'ohmCircuit':
      return <OhmCircuit />;
    case 'powerLoad':
      return <PowerLoad />;
    case 'voltageDrop':
      return <VoltageDrop />;
    case 'torqueLever':
      return <TorqueLever />;
    case 'gearTorque':
      return <GearTorque />;
    case 'hydraulicPiston':
      return <HydraulicPiston />;
    case 'enginePower':
      return <EnginePower />;
    case 'propPitch':
      return <PropPitch />;
    default:
      return <GenericDiagram />;
  }
}

function Shell({ title, children }) {
  return (
    <div className="math-diagram-shell svg-shell">
      <div className="diagram-caption">{title}</div>
      <svg className="school-svg" viewBox="0 0 680 300" role="img" aria-label={title}>
        <defs>
          <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="var(--svg-green)" />
          </marker>
          <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="var(--svg-red)" />
          </marker>
          <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="var(--svg-blue)" />
          </marker>
        </defs>
        {children}
      </svg>
    </div>
  );
}

function Box({ x, y, w, h, fill = 'var(--svg-panel)', stroke = 'var(--svg-line)', children }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="16" fill={fill} stroke={stroke} strokeWidth="3" />
      {children}
    </g>
  );
}

function Text({ x, y, children, size = 20, weight = 700, fill = 'var(--svg-text)', anchor = 'middle' }) {
  return <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor} dominantBaseline="middle">{children}</text>;
}

function OhmCircuit() {
  return (
    <Shell title="מעגל חוק אוהם: למצוא זרם">
      <Box x="52" y="82" w="120" h="118" fill="var(--svg-panel-blue)" stroke="var(--svg-blue)">
        <Text x="112" y="118">מצבר</Text>
        <Text x="112" y="153" size="24" fill="var(--svg-blue-strong)">V = 12V</Text>
      </Box>
      <Box x="480" y="82" w="142" h="118" fill="var(--svg-panel-orange)" stroke="var(--svg-orange)">
        <Text x="551" y="118">נורה</Text>
        <Text x="551" y="153" size="24" fill="var(--svg-orange-strong)">R = 6Ω</Text>
      </Box>
      <path d="M172 112 H480" stroke="var(--svg-line)" strokeWidth="6" fill="none" />
      <path d="M480 170 H172" stroke="var(--svg-line)" strokeWidth="6" fill="none" />
      <path d="M420 64 H270" stroke="var(--svg-green)" strokeWidth="6" markerEnd="url(#arrow-green)" fill="none" />
      <Text x="345" y="42" size="18" fill="var(--svg-green-strong)">I = ?</Text>
      <Text x="340" y="252" size="22" fill="var(--svg-text)">I = V / R</Text>
    </Shell>
  );
}

function PowerLoad() {
  return (
    <Shell title="הספק צרכן: מתח כפול זרם">
      <Box x="60" y="74" w="150" h="126" fill="var(--svg-panel-blue)" stroke="var(--svg-blue)">
        <Text x="135" y="112">מערכת רכב</Text>
        <Text x="135" y="150" size="24" fill="var(--svg-blue-strong)">V = 12V</Text>
      </Box>
      <Box x="465" y="74" w="150" h="126" fill="var(--svg-panel-orange)" stroke="var(--svg-orange)">
        <Text x="540" y="112">צרכן</Text>
        <Text x="540" y="150" size="24" fill="var(--svg-orange-strong)">I = 8A</Text>
      </Box>
      <path d="M210 135 H465" stroke="var(--svg-line)" strokeWidth="6" />
      <path d="M430 108 H270" stroke="var(--svg-green)" strokeWidth="6" markerEnd="url(#arrow-green)" />
      <Text x="340" y="235" size="22">P = V × I = ?</Text>
    </Shell>
  );
}

function VoltageDrop() {
  return (
    <Shell title="נפילת מתח על חיבור חלוד">
      <Box x="42" y="80" w="125" h="112" fill="var(--svg-panel-blue)" stroke="var(--svg-blue)">
        <Text x="104" y="116">מצבר</Text>
        <Text x="104" y="150" size="23" fill="var(--svg-blue-strong)">12V</Text>
      </Box>
      <Box x="270" y="78" w="150" h="116" fill="var(--svg-panel-red)" stroke="var(--svg-red)">
        <Text x="345" y="112">חיבור חלוד</Text>
        <Text x="345" y="148" size="23" fill="var(--svg-red-strong)">R = 0.04Ω</Text>
      </Box>
      <Box x="510" y="80" w="125" h="112" fill="var(--svg-panel-orange)" stroke="var(--svg-orange)">
        <Text x="572" y="116">סטרטר</Text>
        <Text x="572" y="150" size="23" fill="var(--svg-orange-strong)">I = 40A</Text>
      </Box>
      <path d="M167 136 H270" stroke="var(--svg-line)" strokeWidth="6" />
      <path d="M420 136 H510" stroke="var(--svg-line)" strokeWidth="6" />
      <path d="M270 218 H420" stroke="var(--svg-red)" strokeWidth="5" markerEnd="url(#arrow-red)" />
      <Text x="345" y="245" size="20" fill="var(--svg-red-strong)">Vdrop = ?</Text>
    </Shell>
  );
}

function TorqueLever() {
  return (
    <Shell title="מומנט עם מפתח ברגים">
      <circle cx="145" cy="150" r="44" fill="var(--svg-panel-neutral)" stroke="var(--svg-line)" strokeWidth="5" />
      <circle cx="145" cy="150" r="8" fill="var(--svg-text)" />
      <rect x="145" y="140" width="360" height="20" rx="10" fill="var(--svg-line)" />
      <path d="M505 112 V190" stroke="var(--svg-red)" strokeWidth="7" markerEnd="url(#arrow-red)" />
      <Text x="545" y="152" size="24" fill="var(--svg-red-strong)">F = 90N</Text>
      <path d="M145 210 H505" stroke="var(--svg-blue)" strokeWidth="5" markerEnd="url(#arrow-blue)" />
      <Text x="325" y="236" size="22" fill="var(--svg-blue-strong)">r = 0.35m</Text>
      <Text x="325" y="72" size="24">T = F × r = ?</Text>
    </Shell>
  );
}

function GearTorque() {
  return (
    <Shell title="יחס העברה ומומנט יציאה">
      <circle cx="160" cy="145" r="58" fill="var(--svg-panel-blue)" stroke="var(--svg-blue)" strokeWidth="5" />
      <Text x="160" y="128">כניסה</Text>
      <Text x="160" y="160" size="22" fill="var(--svg-blue-strong)">Tin=110Nm</Text>
      <circle cx="505" cy="145" r="82" fill="var(--svg-panel-orange)" stroke="var(--svg-orange)" strokeWidth="5" />
      <Text x="505" y="126">יציאה</Text>
      <Text x="505" y="160" size="22" fill="var(--svg-orange-strong)">Tout=?</Text>
      <path d="M225 145 H410" stroke="var(--svg-green)" strokeWidth="7" markerEnd="url(#arrow-green)" />
      <Text x="320" y="105" size="22" fill="var(--svg-green-strong)">GR = 3.5</Text>
      <Text x="320" y="195" size="20" fill="var(--svg-muted)">η = 0.9</Text>
      <Text x="340" y="260" size="22">Tout = Tin × GR × η</Text>
    </Shell>
  );
}

function HydraulicPiston() {
  return (
    <Shell title="כוח בבוכנת בלם הידראולי">
      <Box x="62" y="88" w="170" h="110" fill="var(--svg-panel-red)" stroke="var(--svg-red)">
        <Text x="147" y="122">לחץ נוזל</Text>
        <Text x="147" y="158" size="20" fill="var(--svg-red-strong)">p=2,500,000Pa</Text>
      </Box>
      <rect x="232" y="122" width="190" height="45" rx="22" fill="var(--svg-panel-blue)" stroke="var(--svg-blue)" strokeWidth="4" />
      <Text x="327" y="145" size="19" fill="var(--svg-blue-strong)">נוזל בלמים</Text>
      <Box x="422" y="78" w="170" h="130" fill="var(--svg-panel-orange)" stroke="var(--svg-orange)">
        <Text x="507" y="112">בוכנה</Text>
        <Text x="507" y="146" size="20" fill="var(--svg-orange-strong)">A=0.003m²</Text>
        <Text x="507" y="178" size="20" fill="var(--svg-green-strong)">F=?</Text>
      </Box>
      <path d="M390 145 H450" stroke="var(--svg-green)" strokeWidth="7" markerEnd="url(#arrow-green)" />
      <Text x="340" y="260" size="22">F = p × A</Text>
    </Shell>
  );
}

function EnginePower() {
  return (
    <Shell title="הספק מנוע ממומנט וסל״ד">
      <Box x="72" y="70" w="190" h="145" fill="var(--svg-panel-orange)" stroke="var(--svg-orange)">
        <Text x="167" y="110">מנוע</Text>
        <Text x="167" y="148" size="22" fill="var(--svg-orange-strong)">T = 150Nm</Text>
        <Text x="167" y="180" size="22" fill="var(--svg-blue-strong)">3000 rpm</Text>
      </Box>
      <path d="M262 142 H460" stroke="var(--svg-green)" strokeWidth="7" markerEnd="url(#arrow-green)" />
      <Box x="460" y="88" w="150" h="110" fill="var(--svg-panel-green)" stroke="var(--svg-green)">
        <Text x="535" y="126">הספק</Text>
        <Text x="535" y="160" size="24" fill="var(--svg-green-strong)">P(kW)=?</Text>
      </Box>
      <Text x="340" y="255" size="21">P(kW) = T × rpm / 9549</Text>
    </Shell>
  );
}

function PropPitch() {
  return (
    <Shell title="Pitch של מדחף — התקדמות תאורטית">
      <circle cx="150" cy="145" r="62" fill="var(--svg-panel-blue)" stroke="var(--svg-blue)" strokeWidth="5" />
      <path d="M150 84 C180 125 180 165 150 206 C120 165 120 125 150 84" fill="var(--svg-panel-blue)" stroke="var(--svg-blue)" strokeWidth="3" />
      <Text x="150" y="145">מדחף</Text>
      <path d="M230 145 H535" stroke="var(--svg-green)" strokeWidth="7" markerEnd="url(#arrow-green)" />
      <Text x="382" y="112" size="22" fill="var(--svg-green-strong)">0.28m לכל סיבוב</Text>
      <Text x="382" y="180" size="22" fill="var(--svg-blue-strong)">2200 rpm</Text>
      <Text x="340" y="252" size="21">distance/min = pitch × rpm</Text>
    </Shell>
  );
}

function GenericDiagram() {
  return (
    <Shell title="תרשים תרגיל">
      <rect x="90" y="80" width="500" height="130" rx="22" fill="var(--svg-panel-neutral)" stroke="var(--svg-line)" strokeWidth="4" />
      <Text x="340" y="145" size="24">תרשים תרגיל</Text>
    </Shell>
  );
}
