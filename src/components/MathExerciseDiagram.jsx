// School-style exercise diagrams.
// These diagrams intentionally show the given values directly on the drawing.
export default function MathExerciseDiagram({ type }) {
  switch (type) {
    case 'ohmCircuit':
      return <CircuitDiagram label="R = 6Ω" />;
    case 'powerLoad':
      return <CircuitDiagram label="I = 8A" />;
    case 'voltageDrop':
      return <VoltageDropDiagram />;
    case 'torqueLever':
      return <TorqueDiagram />;
    case 'gearTorque':
      return <GearDiagram />;
    case 'hydraulicPiston':
      return <HydraulicDiagram />;
    case 'enginePower':
      return <EnginePowerDiagram />;
    case 'propPitch':
      return <PropPitchDiagram />;
    default:
      return <GenericMathDiagram />;
  }
}

function DiagramShell({ children }) {
  return <div className="math-diagram-shell">{children}</div>;
}

function CircuitDiagram({ label }) {
  return (
    <DiagramShell>
      <div className="math-circuit">
        <div className="battery-school"><strong>12V</strong><span>מקור מתח</span></div>
        <div className="wire-school top" />
        <div className="wire-school bottom" />
        <div className="load-school"><strong>{label}</strong><span>צרכן</span></div>
        <div className="current-arrow-school">זרם I ←</div>
      </div>
    </DiagramShell>
  );
}

function VoltageDropDiagram() {
  return (
    <DiagramShell>
      <div className="math-circuit">
        <div className="battery-school"><strong>12V</strong><span>מצבר</span></div>
        <div className="bad-connection-school"><strong>R = 0.04Ω</strong><span>חיבור חלוד</span></div>
        <div className="load-school"><strong>I = 40A</strong><span>סטרטר</span></div>
        <div className="drop-label-school">נפילת מתח על החיבור</div>
      </div>
    </DiagramShell>
  );
}

function TorqueDiagram() {
  return (
    <DiagramShell>
      <div className="math-torque">
        <div className="pivot-school">ציר</div>
        <div className="lever-school"><span>r = 0.35m</span></div>
        <div className="force-school">F = 90N ↓</div>
        <div className="torque-result-school">T = ?</div>
      </div>
    </DiagramShell>
  );
}

function GearDiagram() {
  return (
    <DiagramShell>
      <div className="math-gear">
        <div className="small-gear-school">Tin<br />110Nm</div>
        <div className="gear-arrow-school">← GR = 3.5</div>
        <div className="large-gear-school">Tout<br />?</div>
        <div className="efficiency-school">η = 0.9</div>
      </div>
    </DiagramShell>
  );
}

function HydraulicDiagram() {
  return (
    <DiagramShell>
      <div className="math-hydraulic">
        <div className="pressure-school">p = 2,500,000Pa</div>
        <div className="fluid-school">נוזל בלמים</div>
        <div className="piston-school"><strong>A = 0.003m²</strong><span>F = ?</span></div>
      </div>
    </DiagramShell>
  );
}

function EnginePowerDiagram() {
  return (
    <DiagramShell>
      <div className="math-engine-power">
        <div className="engine-school">מנוע<br /><strong>T = 150Nm</strong></div>
        <div className="rpm-school">3000 rpm</div>
        <div className="power-school">P(kW) = ?</div>
      </div>
    </DiagramShell>
  );
}

function PropPitchDiagram() {
  return (
    <DiagramShell>
      <div className="math-prop">
        <div className="prop-school">מדחף</div>
        <div className="pitch-arrow-school">← 0.28m לכל סיבוב</div>
        <div className="rpm-school">2200rpm</div>
      </div>
    </DiagramShell>
  );
}

function GenericMathDiagram() {
  return (
    <DiagramShell>
      <div className="generic-school-diagram">תרשים תרגיל</div>
    </DiagramShell>
  );
}
