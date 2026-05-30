// School-style math exercises with diagrams.
// Each exercise is attached to a lesson and can also be reused by module.
export const mathExercises = [
  {
    id: 'ex-ohm-1',
    lessonId: 'l5-ohms-law',
    moduleId: 'm2',
    title: 'תרגיל 1 — מציאת זרם בנורה',
    type: 'ohmCircuit',
    given: ['מתח המקור: V = 12V', 'התנגדות הנורה: R = 6Ω'],
    find: 'מצא את הזרם I במעגל.',
    formula: 'I = V / R',
    solution: ['מציבים: I = 12 / 6', 'מקבלים: I = 2A'],
    answer: '2A'
  },
  {
    id: 'ex-ohm-power',
    lessonId: 'l5-ohms-law',
    moduleId: 'm2',
    title: 'תרגיל 2 — הספק צרכן ברכב',
    type: 'powerLoad',
    given: ['מתח מערכת: V = 12V', 'זרם הצרכן: I = 8A'],
    find: 'מצא את ההספק P.',
    formula: 'P = V × I',
    solution: ['מציבים: P = 12 × 8', 'מקבלים: P = 96W'],
    answer: '96W'
  },
  {
    id: 'ex-voltage-drop',
    lessonId: 'l12-voltage-drop',
    moduleId: 'm2',
    title: 'תרגיל 3 — נפילת מתח בחיבור חלוד',
    type: 'voltageDrop',
    given: ['זרם: I = 40A', 'התנגדות החיבור: R = 0.04Ω'],
    find: 'מצא את נפילת המתח על החיבור.',
    formula: 'Vdrop = I × R',
    solution: ['מציבים: Vdrop = 40 × 0.04', 'מקבלים: Vdrop = 1.6V', 'במערכת 12V זו נפילה משמעותית.'],
    answer: '1.6V'
  },
  {
    id: 'ex-torque-1',
    lessonId: 'l6-torque',
    moduleId: 'm1',
    title: 'תרגיל 4 — מומנט עם מפתח ברגים',
    type: 'torqueLever',
    given: ['כוח היד: F = 90N', 'אורך המפתח: r = 0.35m'],
    find: 'מצא את המומנט T.',
    formula: 'T = F × r',
    solution: ['מציבים: T = 90 × 0.35', 'מקבלים: T = 31.5Nm'],
    answer: '31.5Nm'
  },
  {
    id: 'ex-gear-1',
    lessonId: 'l7-gear-ratio',
    moduleId: 'm5',
    title: 'תרגיל 5 — מומנט יציאה בגיר',
    type: 'gearTorque',
    given: ['מומנט כניסה: Tin = 110Nm', 'יחס העברה: GR = 3.5', 'יעילות: η = 0.9'],
    find: 'מצא את מומנט היציאה.',
    formula: 'Tout = Tin × GR × η',
    solution: ['מציבים: Tout = 110 × 3.5 × 0.9', 'מקבלים: Tout = 346.5Nm'],
    answer: '346.5Nm'
  },
  {
    id: 'ex-pressure-1',
    lessonId: 'l18-hydraulic-brakes',
    moduleId: 'm4',
    title: 'תרגיל 6 — כוח בבלם הידראולי',
    type: 'hydraulicPiston',
    given: ['לחץ נוזל: p = 2,500,000Pa', 'שטח בוכנה: A = 0.003m²'],
    find: 'מצא את הכוח F שמופעל על הבוכנה.',
    formula: 'F = p × A',
    solution: ['מציבים: F = 2,500,000 × 0.003', 'מקבלים: F = 7,500N'],
    answer: '7,500N'
  },
  {
    id: 'ex-engine-power',
    lessonId: 'l9-force-work-power',
    moduleId: 'm1',
    title: 'תרגיל 7 — הספק ממומנט וסל״ד',
    type: 'enginePower',
    given: ['מומנט: T = 150Nm', 'סל״ד: rpm = 3000'],
    find: 'מצא הספק בקילוואט.',
    formula: 'P(kW) = T × rpm / 9549',
    solution: ['מציבים: P = 150 × 3000 / 9549', 'מקבלים: P ≈ 47.1kW'],
    answer: '≈47.1kW'
  },
  {
    id: 'ex-prop-pitch',
    lessonId: 'l22-propeller-pitch',
    moduleId: 'm7',
    title: 'תרגיל 8 — התקדמות תאורטית של מדחף',
    type: 'propPitch',
    given: ['Pitch = 0.28m לסיבוב', 'מהירות סיבוב: 2200rpm'],
    find: 'מצא התקדמות תאורטית בדקה.',
    formula: 'distance/min = pitch × rpm',
    solution: ['מציבים: 0.28 × 2200', 'מקבלים: 616m/min תאורטית לפני החלקה במים.'],
    answer: '616m/min'
  }
];
