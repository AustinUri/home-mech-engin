// Formula records include variable descriptions so the quiz can ask for missing variables.
export const formulas = [
  {
    category: 'חשמל',
    items: [
      { name: 'חוק אוהם', formula: 'V = I × R', use: 'מתח שווה זרם כפול התנגדות.', variables: 'V=Voltage, I=Current, R=Resistance' },
      { name: 'זרם לפי חוק אוהם', formula: 'I = V / R', use: 'מציאת זרם כשידועים מתח והתנגדות.', variables: 'I=Ampere, V=Volt, R=Ohm' },
      { name: 'התנגדות לפי חוק אוהם', formula: 'R = V / I', use: 'מציאת התנגדות כשידועים מתח וזרם.', variables: 'R=Ohm, V=Volt, I=Ampere' },
      { name: 'הספק חשמלי', formula: 'P = V × I', use: 'חישוב צריכת הספק של צרכן.', variables: 'P=Watt, V=Volt, I=Ampere' },
      { name: 'הספק לפי התנגדות', formula: 'P = I² × R', use: 'חימום והתנגדות כאשר ידוע זרם.', variables: 'P=Watt, I=Ampere, R=Ohm' },
      { name: 'אנרגיה חשמלית', formula: 'E = P × t', use: 'כמה אנרגיה נצרכת לאורך זמן.', variables: 'E=Energy, P=Power, t=Time' }
    ]
  },
  {
    category: 'מכניקה',
    items: [
      { name: 'מומנט', formula: 'T = F × r', use: 'כוח סיבובי סביב ציר.', variables: 'T=Torque, F=Force, r=Lever arm' },
      { name: 'כוח לפי מומנט', formula: 'F = T / r', use: 'מציאת כוח כשידועים מומנט ואורך זרוע.', variables: 'F=Force, T=Torque, r=Lever arm' },
      { name: 'עבודה מכנית', formula: 'W = F × d', use: 'עבודה היא כוח לאורך מרחק.', variables: 'W=Work, F=Force, d=Distance' },
      { name: 'הספק מכני', formula: 'P = W / t', use: 'כמה עבודה נעשית ביחידת זמן.', variables: 'P=Power, W=Work, t=Time' },
      { name: 'הספק סיבובי', formula: 'P = T × ω', use: 'קשר בין מומנט, מהירות זוויתית והספק.', variables: 'P=Power, T=Torque, ω=Angular speed' },
      { name: 'המרת סל״ד למהירות זוויתית', formula: 'ω = 2π × rpm / 60', use: 'המרת rpm לרדיאנים לשנייה.', variables: 'ω=rad/s, rpm=revolutions per minute' }
    ]
  },
  {
    category: 'הילוכים והעברת כוח',
    items: [
      { name: 'יחס העברה', formula: 'GR = driven teeth / driver teeth', use: 'יחס בין גלגל שיניים מונע למניע.', variables: 'GR=Gear ratio' },
      { name: 'מהירות יציאה', formula: 'rpm_out = rpm_in / GR', use: 'ביחס העברה גדול, מהירות היציאה קטנה.', variables: 'rpm_out=Output speed' },
      { name: 'מומנט יציאה', formula: 'T_out = T_in × GR × η', use: 'יחס העברה מגדיל מומנט לפי יעילות.', variables: 'η=Efficiency' },
      { name: 'הספק קירובי במנוע', formula: 'P(kW) = T(Nm) × rpm / 9549', use: 'חישוב הספק מקירוב מומנט וסל״ד.', variables: 'P=kW, T=Nm' }
    ]
  },
  {
    category: 'הידראוליקה ונוזלים',
    items: [
      { name: 'לחץ', formula: 'p = F / A', use: 'לחץ הוא כוח חלקי שטח.', variables: 'p=Pressure, F=Force, A=Area' },
      { name: 'כוח הידראולי', formula: 'F = p × A', use: 'מציאת כוח בבוכנה לפי לחץ ושטח.', variables: 'F=Force, p=Pressure, A=Area' },
      { name: 'ספיקה', formula: 'Q = A × v', use: 'נפח נוזל שעובר בזמן.', variables: 'Q=Flow rate, A=Area, v=Velocity' }
    ]
  },
  {
    category: 'מנועים',
    items: [
      { name: 'נפח מנוע לצילינדר', formula: 'V = π × (bore² / 4) × stroke', use: 'נפח צילינדר לפי קדח ומהלך.', variables: 'bore=Diameter, stroke=Piston travel' },
      { name: 'יחס דחיסה', formula: 'CR = (Vd + Vc) / Vc', use: 'יחס בין נפח כולל לנפח תא השריפה.', variables: 'Vd=Displacement, Vc=Clearance volume' },
      { name: 'צריכת דלק תאורטית', formula: 'Fuel rate = Power × BSFC', use: 'קירוב צריכת דלק לפי הספק ויעילות מנוע.', variables: 'BSFC=Brake specific fuel consumption' }
    ]
  }
];
