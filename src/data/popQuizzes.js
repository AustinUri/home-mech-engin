// Pop quizzes are short surprise checks.
// They are intentionally smaller than full tests and focus on immediate understanding.
export const popQuizBank = [
  {
    id: 'pq-voltage-current',
    topic: 'חשמל בסיסי',
    difficulty: 'בסיסי',
    type: 'choice',
    question: 'מה ההבדל הכי נכון בין מתח לזרם?',
    options: [
      'מתח הוא הדחיפה, זרם הוא התנועה בפועל של מטענים',
      'מתח וזרם הם אותו דבר',
      'זרם הוא התנגדות של חוט',
      'מתח מודדים באמפר'
    ],
    answer: 0,
    explanation: 'מתח הוא הפרש פוטנציאל — הדחיפה. זרם הוא תנועת המטענים במעגל סגור.'
  },
  {
    id: 'pq-ohm-calc',
    topic: 'חשמל בסיסי',
    difficulty: 'חישוב',
    type: 'calc',
    question: 'צרכן מחובר ל־12V וההתנגדות שלו 4Ω. מה הזרם?',
    formula: 'I = V / R',
    numericAnswer: 3,
    tolerance: 0.05,
    unit: 'A',
    explanation: 'מציבים: I = 12 / 4 = 3A.'
  },
  {
    id: 'pq-power-calc',
    topic: 'חשמל בסיסי',
    difficulty: 'חישוב',
    type: 'calc',
    question: 'צרכן עובד על 12V וצורך 6A. מה ההספק שלו?',
    formula: 'P = V × I',
    numericAnswer: 72,
    tolerance: 0.5,
    unit: 'W',
    explanation: 'P = 12 × 6 = 72W.'
  },
  {
    id: 'pq-torque-calc',
    topic: 'מכניקה',
    difficulty: 'חישוב',
    type: 'calc',
    question: 'כוח של 80N מופעל במרחק 0.25m מהציר. מה המומנט?',
    formula: 'T = F × r',
    numericAnswer: 20,
    tolerance: 0.2,
    unit: 'Nm',
    explanation: 'T = 80 × 0.25 = 20Nm.'
  },
  {
    id: 'pq-work-power',
    topic: 'מכניקה',
    difficulty: 'בסיסי',
    type: 'choice',
    question: 'מה ההבדל בין עבודה להספק?',
    options: [
      'עבודה היא אנרגיה שהועברה; הספק הוא הקצב שבו העבודה נעשית',
      'עבודה והספק הם אותו דבר',
      'הספק מודד רק מרחק',
      'עבודה קיימת רק בחשמל'
    ],
    answer: 0,
    explanation: 'עבודה מודדת כמה אנרגיה הועברה. הספק מודד כמה מהר זה קרה.'
  },
  {
    id: 'pq-four-stroke',
    topic: 'מנועים',
    difficulty: 'בסיסי',
    type: 'choice',
    question: 'מה הסדר הנכון של מנוע 4 פעימות?',
    options: [
      'יניקה → דחיסה → עבודה → פליטה',
      'דחיסה → יניקה → פליטה → עבודה',
      'עבודה → פליטה → דחיסה → יניקה',
      'פליטה → עבודה → יניקה → דחיסה'
    ],
    answer: 0,
    explanation: 'במנוע 4 פעימות הסדר הוא יניקה, דחיסה, עבודה, פליטה.'
  },
  {
    id: 'pq-engine-needs',
    topic: 'מנועים',
    difficulty: 'אבחנה בסיסית',
    type: 'choice',
    question: 'איזה תנאי אינו אחד מהבסיסיים להפעלת מנוע בנזין?',
    options: ['אוויר', 'דלק', 'ניצוץ', 'צבע רכב'],
    answer: 3,
    explanation: 'מנוע בנזין צריך אוויר, דלק, ניצוץ, דחיסה ותזמון. צבע הרכב לא רלוונטי.'
  },
  {
    id: 'pq-compression-ratio',
    topic: 'מנועים',
    difficulty: 'חישוב',
    type: 'calc',
    question: 'Vd=450cc ו־Vc=50cc. מה יחס הדחיסה?',
    formula: 'CR = (Vd + Vc) / Vc',
    numericAnswer: 10,
    tolerance: 0.1,
    unit: ':1',
    explanation: 'CR = (450 + 50) / 50 = 10:1.'
  },
  {
    id: 'pq-gear-ratio',
    topic: 'הילוכים',
    difficulty: 'חישוב',
    type: 'calc',
    question: 'גלגל שיניים מונע עם 60 שיניים וגלגל מניע עם 20 שיניים. מה יחס ההעברה?',
    formula: 'GR = driven / driver',
    numericAnswer: 3,
    tolerance: 0.05,
    unit: ':1',
    explanation: 'יחס ההעברה הוא 60 / 20 = 3:1.'
  },
  {
    id: 'pq-gear-effect',
    topic: 'הילוכים',
    difficulty: 'בסיסי',
    type: 'choice',
    question: 'מה בדרך כלל עושה יחס העברה גדול?',
    options: [
      'מקטין מהירות ומגדיל מומנט',
      'מגדיל מהירות ומקטין מומנט',
      'מגדיל הספק בחינם',
      'מבטל חיכוך'
    ],
    answer: 0,
    explanation: 'יחס העברה גדול בדרך כלל נותן יותר מומנט ביציאה אבל פחות מהירות.'
  },
  {
    id: 'pq-hydraulic-force',
    topic: 'הידראוליקה',
    difficulty: 'חישוב',
    type: 'calc',
    question: 'לחץ של 2,000,000Pa פועל על בוכנה בשטח 0.002m². מה הכוח?',
    formula: 'F = p × A',
    numericAnswer: 4000,
    tolerance: 20,
    unit: 'N',
    explanation: 'F = 2,000,000 × 0.002 = 4000N.'
  },
  {
    id: 'pq-fuse-role',
    topic: 'חשמל רכב',
    difficulty: 'בסיסי',
    type: 'choice',
    question: 'מה התפקיד המרכזי של פיוז?',
    options: [
      'להגן על המעגל מזרם גבוה מדי',
      'להעלות מתח',
      'להחליף מצבר',
      'להגדיל מומנט'
    ],
    answer: 0,
    explanation: 'פיוז נשרף כשהזרם גבוה מדי, כדי להגן על החוטים והרכיבים.'
  },
  {
    id: 'pq-marine-impeller',
    topic: 'סירות',
    difficulty: 'בסיסי',
    type: 'choice',
    question: 'מה תפקיד האימפלר במנוע ימי?',
    options: ['להזרים מי קירור', 'להצית דלק', 'לשנות יחס דחיסה', 'למדוד מתח'],
    answer: 0,
    explanation: 'האימפלר מזרים מים במערכת הקירור הימית. אם הוא נכשל, מנוע יכול להתחמם מהר.'
  },
  {
    id: 'pq-prop-pitch',
    topic: 'סירות',
    difficulty: 'חישוב',
    type: 'calc',
    question: 'Pitch של מדחף הוא 0.25m והוא מסתובב 1800rpm. מה ההתקדמות התאורטית בדקה?',
    formula: 'distance/min = pitch × rpm',
    numericAnswer: 450,
    tolerance: 2,
    unit: 'm/min',
    explanation: '0.25 × 1800 = 450m/min לפני הפסדי החלקה.'
  },
  {
    id: 'pq-obd-code',
    topic: 'דיאגנוסטיקה',
    difficulty: 'חשיבה',
    type: 'choice',
    question: 'למה לא מחליפים חיישן רק בגלל קוד תקלה?',
    options: [
      'כי הקוד מצביע על אזור בעיה, אבל הסיבה יכולה להיות חיווט, מתח, קרקע או תנאי מערכת',
      'כי קודים תמיד שקריים',
      'כי חיישנים אף פעם לא מתקלקלים',
      'כי ECU לא משתמש בחיישנים'
    ],
    answer: 0,
    explanation: 'קוד תקלה הוא התחלה של אבחון, לא הוכחה סופית שהחיישן עצמו מת.'
  },
{
  "id": "pq-valve-purpose",
  "topic": "הידראוליקה",
  "difficulty": "בסיסי",
  "type": "choice",
  "question": "מה התפקיד הכי נכון של שסתום במערכת נוזלים?",
  "options": [
    "לפתוח, לסגור או לווסת זרימה",
    "להגדיל את נפח המנוע",
    "להחליף מצבר",
    "להעלות סל״ד"
  ],
  "answer": 0,
  "explanation": "שסתום שולט בזרימה ולעיתים גם מבודד חלקים במערכת לצורך בטיחות/תחזוקה."
},
{
  "id": "pq-piston-pump-suction",
  "topic": "הידראוליקה",
  "difficulty": "בסיסי",
  "type": "choice",
  "question": "במשאבת בוכנה, מה גורם ליניקה?",
  "options": [
    "הגדלת נפח וירידת לחץ בחלל העבודה",
    "הקטנת נפח ועליית לחץ",
    "סגירת שני השסתומים",
    "חימום הנוזל"
  ],
  "answer": 0,
  "explanation": "כאשר הבוכנה מגדילה את נפח החלל, הלחץ יורד ונוזל נשאב פנימה."
},
{
  "id": "pq-impeller-dry",
  "topic": "סירות",
  "difficulty": "תחזוקה",
  "type": "choice",
  "question": "מה הבעיה בהפעלת משאבת אימפלור גומי ללא מים?",
  "options": [
    "הכנפיים מתחממות ונשחקות עד שריפה/התפוררות",
    "המשאבה מייצרת יותר לחץ טוב",
    "זה רק מרעיש קצת",
    "זה משפר קירור"
  ],
  "answer": 0,
  "explanation": "אימפלור גומי חייב נוזל לקירור וסיכה. עבודה יבשה פוגעת בו מהר."
},
{
  "id": "pq-piston-pump-volume",
  "topic": "הידראוליקה",
  "difficulty": "חישוב",
  "type": "calc",
  "question": "משאבת בוכנה מעבירה 80cc בכל פעימת סניקה ו־25 פעימות בדקה. מה הספיקה התאורטית בליטר לדקה?",
  "formula": "Q=V×strokes",
  "numericAnswer": 2,
  "tolerance": 0.05,
  "unit": "L/min",
  "explanation": "80cc × 25 = 2000cc/min = 2L/min."
},

  {
    id: 'pq-ac-xc-180326',
    topic: 'חשמל בסיסי',
    difficulty: 'מתקדם',
    type: 'calc',
    question: 'קבל של 8µF מחובר ל־AC בתדר 500Hz. מה בערך XC?',
    formula: 'XC = 1/(2πfC)',
    numericAnswer: 39.8,
    tolerance: 0.6,
    unit: 'Ω',
    explanation: 'ממירים 8µF ל־8×10⁻⁶F ואז מציבים: XC≈39.8Ω.'
  },
  {
    id: 'pq-ac-parallel-voltage',
    topic: 'חשמל בסיסי',
    difficulty: 'בסיסי',
    type: 'choice',
    question: 'במעגל מקבילי AC עם מקור 75V, מה המתח על כל ענף?',
    options: ['75V', 'מתח שונה בכל ענף לפי ההתנגדות', '0V', 'תלוי רק בתדר'],
    answer: 0,
    explanation: 'במקביל כל ענף מחובר לאותן שתי נקודות, לכן המתח על כל ענף שווה למתח המקור.'
  },
  {
    id: 'pq-ac-power-factor',
    topic: 'חשמל בסיסי',
    difficulty: 'מתקדם',
    type: 'choice',
    question: 'מה מודד גורם הספק במעגל AC?',
    options: ['כמה מההספק הוא פעיל ביחס להספק המדומה', 'רק את המתח', 'רק את צבע החוט', 'את כמות השמן במשאבה'],
    answer: 0,
    explanation: 'גורם הספק מתאר את היחס בין הספק פעיל להספק מדומה, והוא מושפע מהמופע בין מתח לזרם.'
  },
  { id: 'pq-kvl-loop', topic: 'אלקטרוניקה ומגנטיות', difficulty: 'מתקדם', type: 'choice', question: 'מה אומר KVL בלולאה סגורה?', options: ['סכום עליות ונפילות המתח בלולאה שווה לאפס', 'הזרם תמיד אפס', 'ההתנגדות תמיד אינסופית', 'הקבל תמיד מוליך DC'], answer: 0, explanation: 'KVL נובע משימור אנרגיה: בלולאה סגורה סכום המתחים האלגברי הוא אפס.' },
  { id: 'pq-led-resistor', topic: 'אלקטרוניקה ומגנטיות', difficulty: 'מתקדם', type: 'calc', question: 'LED: Vs=12V, Vf=2V, I=20mA. מה R?', formula: 'R=(Vs−Vf)/I', numericAnswer: 500, tolerance: 5, unit: 'Ω', explanation: 'R=(12−2)/0.02=500Ω.' },
  { id: 'pq-rc-cutoff', topic: 'אלקטרוניקה ומגנטיות', difficulty: 'מתקדם', type: 'calc', question: 'R=10kΩ ו־C=100nF. מה fc בערך?', formula: 'fc=1/(2πRC)', numericAnswer: 159, tolerance: 3, unit: 'Hz', explanation: 'RC=0.001s ולכן fc≈159Hz.' },
  { id: 'pq-faraday', topic: 'אלקטרוניקה ומגנטיות', difficulty: 'בסיסי', type: 'choice', question: 'מה יוצר מתח מושרה בסליל?', options: ['שינוי בשטף מגנטי', 'מגנט קבוע בלי תנועה או שינוי', 'נגד בטור בלבד', 'כפתור פלסטיק'], answer: 0, explanation: 'לפי חוק פאראדיי, שינוי שטף מגנטי בזמן גורם למתח מושרה.' },
  { id: 'pq-relay-use', topic: 'אלקטרוניקה ומגנטיות', difficulty: 'בסיסי', type: 'choice', question: 'למה משתמשים בממסר?', options: ['כדי לשלוט בעומס זרם גבוה בעזרת זרם פיקוד נמוך', 'כדי להגדיל דלק', 'כדי למדוד לחץ שמן', 'כדי לקרר מנוע ישירות'], answer: 0, explanation: 'ממסר משתמש בסליל כדי להפעיל מגעים, וכך פיקוד קטן יכול לשלוט בזרם גבוה.' }

];

export const popQuizTopics = ['הכול', ...Array.from(new Set(popQuizBank.map((question) => question.topic)))];
