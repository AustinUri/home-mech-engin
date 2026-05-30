// Serious tests include both conceptual questions and numeric calculation tasks.
// For calculation questions, numericAnswer is checked with a tolerance.
export const tests = [
  {
    id: 'intro',
    title: 'מבחן פתיחה — אבחון וחשיבה טכנית',
    moduleId: 'm0',
    description: 'בודק אם אתה חושב כמו מאבחן או כמו מחליף חלקים.',
    questions: [
      { type: 'choice', id: 'q1', question: 'מה בודקים ראשון כשמנוע לא מניע?', options: ['מחליפים סטרטר', 'בודקים סימפטום ומחלקים למערכות', 'מחליפים מצבר', 'פותחים מנוע'], answer: 1 },
      { type: 'choice', id: 'q2', question: 'מה מסוכן בגישה של "נחליף חלק ונראה"?', options: ['היא תמיד מהירה', 'היא לא דורשת ידע', 'היא יקרה ולא אבחונית', 'היא הדרך הרשמית של יצרנים'], answer: 2 },
      { type: 'calc', id: 'q3', question: 'מפתח באורך 0.3m ומפעילים עליו כוח של 80N. מה המומנט בניוטון־מטר?', formula: 'T = F × r', numericAnswer: 24, tolerance: 0.2, unit: 'Nm' },
      { type: 'calc', id: 'q4', question: 'צרכן ברכב צורך 6A במתח 12V. מה ההספק שלו?', formula: 'P = V × I', numericAnswer: 72, tolerance: 0.5, unit: 'W' }
    ]
  },
  {
    id: 'electric-basic',
    title: 'מבחן חשמל — מציאת משתנים',
    moduleId: 'm2',
    description: 'חוק אוהם והספק. כאן אין ניחושים — מחשבים.',
    questions: [
      { type: 'calc', id: 'q1', question: 'מעגל מקבל 12V וההתנגדות היא 4Ω. מה הזרם?', formula: 'I = V / R', numericAnswer: 3, tolerance: 0.05, unit: 'A' },
      { type: 'calc', id: 'q2', question: 'נורה צורכת 2.5A במתח 12V. מה ההספק?', formula: 'P = V × I', numericAnswer: 30, tolerance: 0.2, unit: 'W' },
      { type: 'calc', id: 'q3', question: 'צרכן של 60W עובד על 12V. מה הזרם?', formula: 'I = P / V', numericAnswer: 5, tolerance: 0.05, unit: 'A' },
      { type: 'choice', id: 'q4', question: 'למה מצבר יכול להראות 12V ועדיין לא להניע?', options: ['כי מתח תמיד מספיק', 'כי ייתכן שהוא לא מסוגל לספק זרם תחת עומס', 'כי התנגדות לא קיימת ברכב', 'כי סטרטר עובד בלי זרם'], answer: 1 },
      { type: 'calc', id: 'q5', question: 'אם הזרם הוא 0.5A וההתנגדות היא 24Ω, מה המתח?', formula: 'V = I × R', numericAnswer: 12, tolerance: 0.05, unit: 'V' }
    ]
  },
  {
    id: 'mechanics-torque',
    title: 'מבחן מכניקה — מומנט והספק',
    moduleId: 'm1',
    description: 'מומנט, עבודה והספק. אם זה לא יושב, גיר ומנועים יהיו בלגן.',
    questions: [
      { type: 'calc', id: 'q1', question: 'כוח של 150N פועל בקצה זרוע של 0.4m. מה המומנט?', formula: 'T = F × r', numericAnswer: 60, tolerance: 0.5, unit: 'Nm' },
      { type: 'calc', id: 'q2', question: 'בוצעה עבודה של 1200J במשך 20s. מה ההספק?', formula: 'P = W / t', numericAnswer: 60, tolerance: 0.5, unit: 'W' },
      { type: 'calc', id: 'q3', question: 'מנוע מפיק 120Nm ב־3000rpm. מה ההספק בקירוב בקילוואט?', formula: 'P(kW) = T × rpm / 9549', numericAnswer: 37.7, tolerance: 0.5, unit: 'kW' },
      { type: 'choice', id: 'q4', question: 'מה ההבדל בין מומנט להספק?', options: ['אין הבדל', 'מומנט הוא כוח סיבובי; הספק הוא קצב עשיית עבודה', 'הספק נמדד באוהם', 'מומנט קיים רק בחשמל'], answer: 1 }
    ]
  },
  {
    id: 'gears',
    title: 'מבחן הילוכים — יחס העברה',
    moduleId: 'm5',
    description: 'חישובי יחס העברה, מהירות ומומנט. זה המקום שבו מבינים למה הילוך ראשון חזק.',
    questions: [
      { type: 'calc', id: 'q1', question: 'גלגל מניע עם 20 שיניים מסובב גלגל מונע עם 60 שיניים. מה יחס ההעברה?', formula: 'GR = driven / driver', numericAnswer: 3, tolerance: 0.05, unit: ':1' },
      { type: 'calc', id: 'q2', question: 'rpm כניסה הוא 3000 ויחס ההעברה הוא 3:1. מה rpm היציאה?', formula: 'rpm_out = rpm_in / GR', numericAnswer: 1000, tolerance: 5, unit: 'rpm' },
      { type: 'calc', id: 'q3', question: 'מומנט כניסה 80Nm, יחס העברה 4, יעילות 90%. מה מומנט היציאה?', formula: 'T_out = T_in × GR × η', numericAnswer: 288, tolerance: 2, unit: 'Nm' },
      { type: 'choice', id: 'q4', question: 'מה יחס העברה גדול עושה בדרך כלל?', options: ['מגדיל מהירות ומקטין מומנט', 'מקטין מהירות ומגדיל מומנט', 'מבטל הפסדי יעילות', 'מגדיל הספק בחינם'], answer: 1 }
    ]
  },
  {
    id: 'hydraulics',
    title: 'מבחן הידראוליקה — לחץ, שטח וכוח',
    moduleId: 'm9',
    description: 'נושא חדש וחשוב לרכב, בלמים, מערכות סירה ומכונות.',
    questions: [
      { type: 'calc', id: 'q1', question: 'לחץ של 2,000,000Pa פועל על שטח של 0.003m². מה הכוח?', formula: 'F = p × A', numericAnswer: 6000, tolerance: 20, unit: 'N' },
      { type: 'calc', id: 'q2', question: 'כוח של 500N פועל על שטח 0.002m². מה הלחץ בפסקל?', formula: 'p = F / A', numericAnswer: 250000, tolerance: 500, unit: 'Pa' },
      { type: 'choice', id: 'q3', question: 'למה שטח בוכנה גדול יכול להגדיל כוח?', options: ['כי F = p × A', 'כי לחץ נעלם', 'כי נוזל לא מעביר כוח', 'כי שטח לא קשור לכוח'], answer: 0 }
    ]
  }
];
