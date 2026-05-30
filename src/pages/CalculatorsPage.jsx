import { Calculator } from 'lucide-react';
import { useMemo, useState } from 'react';
import PageTitle from '../components/PageTitle.jsx';

export default function CalculatorsPage() {
  return (
    <section className="page-stack">
      <PageTitle
        icon={Calculator}
        title="מחשבונים טכניים"
        subtitle="תרגול חישובי אמיתי: חוק אוהם, מומנט, יחס העברה, לחץ וכוח הידראולי."
      />
      <div className="calculator-grid">
        <OhmsLawCalculator />
        <TorqueCalculator />
        <GearCalculator />
        <HydraulicCalculator />
      </div>
    </section>
  );
}

function OhmsLawCalculator() {
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(4);
  const current = useMemo(() => Number(voltage) / Number(resistance || 1), [voltage, resistance]);

  return (
    <CalculatorPanel title="חוק אוהם" formula="I = V / R">
      <Input label="Voltage (V)" value={voltage} setValue={setVoltage} />
      <Input label="Resistance (Ω)" value={resistance} setValue={setResistance} />
      <Result value={`${current.toFixed(2)} A`} />
    </CalculatorPanel>
  );
}

function TorqueCalculator() {
  const [force, setForce] = useState(80);
  const [radius, setRadius] = useState(0.3);
  const torque = useMemo(() => Number(force) * Number(radius), [force, radius]);

  return (
    <CalculatorPanel title="מומנט" formula="T = F × r">
      <Input label="Force (N)" value={force} setValue={setForce} />
      <Input label="Lever arm (m)" value={radius} setValue={setRadius} />
      <Result value={`${torque.toFixed(2)} Nm`} />
    </CalculatorPanel>
  );
}

function GearCalculator() {
  const [inputTorque, setInputTorque] = useState(80);
  const [ratio, setRatio] = useState(4);
  const [efficiency, setEfficiency] = useState(0.9);
  const outputTorque = useMemo(() => Number(inputTorque) * Number(ratio) * Number(efficiency), [inputTorque, ratio, efficiency]);

  return (
    <CalculatorPanel title="מומנט יציאה בגיר" formula="T_out = T_in × GR × η">
      <Input label="Input torque (Nm)" value={inputTorque} setValue={setInputTorque} />
      <Input label="Gear ratio" value={ratio} setValue={setRatio} />
      <Input label="Efficiency η" value={efficiency} setValue={setEfficiency} />
      <Result value={`${outputTorque.toFixed(2)} Nm`} />
    </CalculatorPanel>
  );
}

function HydraulicCalculator() {
  const [pressure, setPressure] = useState(2000000);
  const [area, setArea] = useState(0.003);
  const force = useMemo(() => Number(pressure) * Number(area), [pressure, area]);

  return (
    <CalculatorPanel title="כוח הידראולי" formula="F = p × A">
      <Input label="Pressure (Pa)" value={pressure} setValue={setPressure} />
      <Input label="Area (m²)" value={area} setValue={setArea} />
      <Result value={`${force.toFixed(2)} N`} />
    </CalculatorPanel>
  );
}

function CalculatorPanel({ title, formula, children }) {
  return (
    <article className="panel calculator-panel">
      <h3>{title}</h3>
      <div className="formula" dir="ltr">{formula}</div>
      {children}
    </article>
  );
}

function Input({ label, value, setValue }) {
  return (
    <label className="calc-input">
      <span>{label}</span>
      <input dir="ltr" type="number" step="any" value={value} onChange={(event) => setValue(event.target.value)} />
    </label>
  );
}

function Result({ value }) {
  return <div className="calc-result" dir="ltr">{value}</div>;
}
