// Serious tests include both conceptual questions and numeric calculation tasks.
// For calculation questions, numericAnswer is checked with a tolerance.
export const tests = [
  {
    id: 'intro',
    title: 'מבחן פתיחה — חשיבה טכנית ויחידות',
    moduleId: 'm0',
    description: 'בודק בסיס כללי בלבד: אין כאן אבחון מנוע לפני שלמדת מנוע.',
    questions: [
      { type: 'choice', id: 'q1', question: 'למה לא מאבחנים מערכת לפני שלמדנו איך היא עובדת?', options: ['כי אבחון דורש לדעת מה תקין ומה לא', 'כי תמיד מחליפים חלקים', 'כי נוסחאות לא חשובות', 'כי מערכת שלא מכירים תמיד תקינה'], answer: 0 },
      { type: 'choice', id: 'q2', question: 'מה מסוכן בגישה של "נחליף חלק ונראה"?', options: ['היא תמיד מהירה', 'היא לא דורשת ידע', 'היא יקרה ולא אבחונית', 'היא הדרך הרשמית של יצרנים'], answer: 2 },
      { type: 'calc', id: 'q3', question: 'מפתח באורך 0.3m ומפעילים עליו כוח של 80N. מה המומנט בניוטון־מטר?', formula: 'T = F × r', diagram: 'torqueLever', numericAnswer: 24, tolerance: 0.2, unit: 'Nm' },
      { type: 'calc', id: 'q4', question: 'צרכן ברכב צורך 6A במתח 12V. מה ההספק שלו?', formula: 'P = V × I', diagram: 'powerLoad', numericAnswer: 72, tolerance: 0.5, unit: 'W' }
    ]
  },
  {
    id: 'electric-basic',
    title: 'מבחן חשמל — מציאת משתנים',
    moduleId: 'm2',
    description: 'חוק אוהם והספק. כאן אין ניחושים — מחשבים.',
    questions: [
      { type: 'calc', id: 'q1', question: 'מעגל מקבל 12V וההתנגדות היא 4Ω. מה הזרם?', formula: 'I = V / R', numericAnswer: 3, tolerance: 0.05, unit: 'A' },
      { type: 'calc', id: 'q2', question: 'נורה צורכת 2.5A במתח 12V. מה ההספק?', formula: 'P = V × I', diagram: 'powerLoad', numericAnswer: 30, tolerance: 0.2, unit: 'W' },
      { type: 'calc', id: 'q3', question: 'צרכן של 60W עובד על 12V. מה הזרם?', formula: 'I = P / V', diagram: 'powerLoad', numericAnswer: 5, tolerance: 0.05, unit: 'A' },
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
      { type: 'calc', id: 'q1', question: 'כוח של 150N פועל בקצה זרוע של 0.4m. מה המומנט?', formula: 'T = F × r', diagram: 'torqueLever', numericAnswer: 60, tolerance: 0.5, unit: 'Nm' },
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
      { type: 'calc', id: 'q1', question: 'לחץ של 2,000,000Pa פועל על שטח של 0.003m². מה הכוח?', formula: 'F = p × A', diagram: 'hydraulicPiston', numericAnswer: 6000, tolerance: 20, unit: 'N' },
      { type: 'calc', id: 'q2', question: 'כוח של 500N פועל על שטח 0.002m². מה הלחץ בפסקל?', formula: 'p = F / A', numericAnswer: 250000, tolerance: 500, unit: 'Pa' },
      { type: 'choice', id: 'q3', question: 'למה שטח בוכנה גדול יכול להגדיל כוח?', options: ['כי F = p × A', 'כי לחץ נעלם', 'כי נוזל לא מעביר כוח', 'כי שטח לא קשור לכוח'], answer: 0 }
    ]
  }

,
  {
    id: 'engines-cycle',
    title: 'מבחן מנועים — מחזור עבודה ודחיסה',
    moduleId: 'm3',
    description: 'מנועים בלי דחיסה, תזמון ויחס נכון הם סתם מתכת שעושה רעש.',
    questions: [
      { type: 'choice', id: 'q1', question: 'באיזו פעימה הבוכנה עולה והשסתומים סגורים כדי להעלות לחץ?', options: ['יניקה', 'דחיסה', 'עבודה', 'פליטה'], answer: 1 },
      { type: 'calc', id: 'q2', question: 'נפח swept הוא 450cc ונפח clearance הוא 50cc. מה יחס הדחיסה?', formula: 'CR = (Vd + Vc) / Vc', numericAnswer: 10, tolerance: 0.1, unit: ':1' },
      { type: 'calc', id: 'q3', question: 'צילינדר אחד: bore=0.08m, stroke=0.09m. מה הנפח במ״ק?', formula: 'V = π × (bore² / 4) × stroke', numericAnswer: 0.000452, tolerance: 0.00001, unit: 'm³' },
      { type: 'choice', id: 'q4', question: 'מה ההבדל המרכזי בין בנזין לדיזל?', options: ['דיזל לא צריך דלק', 'בנזין בדרך כלל ניצת בניצוץ; דיזל בהצתת דחיסה', 'בנזין עובד בלי אוויר', 'דיזל עובד בלי דחיסה'], answer: 1 }
    ]
  },
  {
    id: 'vehicle-systems-cooling-brakes',
    title: 'מבחן מערכות רכב — קירור, שימון ובלמים',
    moduleId: 'm4',
    description: 'מערכת אחת חלשה יכולה להרוס מנוע שלם. כאן בודקים הבנה מערכתית.',
    questions: [
      { type: 'choice', id: 'q1', question: 'רכב מתחמם בעיקר בעמידה אבל פחות בנסיעה. מה חשוד במיוחד?', options: ['מאוורר/זרימת אוויר', 'יחס העברה', 'צבע הרכב', 'רדיו'], answer: 0 },
      { type: 'calc', id: 'q2', question: 'לחץ בלמים 3,000,000Pa פועל על בוכנה בשטח 0.002m². מה כוח הלחיצה?', formula: 'F = p × A', diagram: 'hydraulicPiston', numericAnswer: 6000, tolerance: 20, unit: 'N' },
      { type: 'choice', id: 'q3', question: 'מה נכון לגבי שמן מנוע?', options: ['שמן רק משמן', 'שמן גם מקרר, מנקה ומגן', 'אם יש מפלס תקין תמיד יש לחץ תקין', 'שמן לא מושפע מחום'], answer: 1 },
      { type: 'calc', id: 'q4', question: 'אם מערכת מוציאה 4.5kW מתוך 5kW שנכנסו, מה היעילות?', formula: 'η = P_out / P_in', diagram: 'enginePower', numericAnswer: 0.9, tolerance: 0.01, unit: '' }
    ]
  },
  {
    id: 'diagnostics-charging-starting',
    title: 'מבחן דיאגנוסטיקה — מצבר, סטרטר וטעינה',
    moduleId: 'm6',
    description: 'כאן מפסיקים להאמין למתח בלי עומס ומתחילים למדוד כמו בני אדם.',
    questions: [
      { type: 'choice', id: 'q1', question: 'מצבר מראה 12.4V במנוחה אבל יורד ל־7V בזמן התנעה. מה המשמעות הסבירה?', options: ['הכול תקין', 'ייתכן שהמצבר נכשל תחת עומס או שיש נפילת מתח חמורה', 'הבעיה בהכרח ברדיאטור', 'סטרטר לא צורך זרם'], answer: 1 },
      { type: 'calc', id: 'q2', question: 'חוט/חיבור בעל התנגדות 0.05Ω מעביר 80A. מה נפילת המתח?', formula: 'V_drop = I × R', diagram: 'voltageDrop', numericAnswer: 4, tolerance: 0.05, unit: 'V' },
      { type: 'calc', id: 'q3', question: 'מצבר 60Ah מפעיל צרכן של 5A תאורטית. כמה שעות?', formula: 't = Ah / A', diagram: 'powerLoad', numericAnswer: 12, tolerance: 0.1, unit: 'h' },
      { type: 'choice', id: 'q4', question: 'למה בודקים גם צד הארקה במעגל סטרטר?', options: ['כי זרם חייב לחזור למצבר', 'כי הארקה היא קישוט', 'כי מינוס לא משפיע', 'כי רק הפלוס יכול להתקלקל'], answer: 0 }
    ]
  },
  {
    id: 'marine-systems',
    title: 'מבחן מערכות ימיות — קירור, קורוזיה ומדחף',
    moduleId: 'm7',
    description: 'סירה היא לא רכב עם מים מתחת. המים הם חלק מהבעיה.',
    questions: [
      { type: 'choice', id: 'q1', question: 'מה תפקיד האימפלר במנוע ימי?', options: ['להזרים מי קירור', 'להחליף מצבר', 'לשנות יחס העברה', 'למדוד סל״ד'], answer: 0 },
      { type: 'choice', id: 'q2', question: 'מדוע אנודות חשובות בסירה?', options: ['הן מקררות את המנוע', 'הן עוזרות בהגנה מפני קורוזיה גלוונית', 'הן מגבירות דחיסה', 'הן מעלות לחץ שמן'], answer: 1 },
      { type: 'calc', id: 'q3', question: 'מדחף תאורטית מתקדם 0.30m לסיבוב ב־2000rpm. מה ההתקדמות התאורטית בדקה?', formula: 'distance/min = pitch × rpm', diagram: 'propPitch', numericAnswer: 600, tolerance: 2, unit: 'm/min' },
      { type: 'choice', id: 'q4', question: 'אם מנוע לא מגיע לסל״ד WOT מומלץ, אחת האפשרויות היא:', options: ['pitch מדחף גבוה מדי או עומס יתר', 'יותר מדי מתח במצבר', 'יותר מדי אוויר בצמיגים', 'אין קשר למדחף'], answer: 0 }
    ]
  },
  {
    id: 'sensors-control',
    title: 'מבחן חיישנים ובקרה — ECU, PWM ו־CAN',
    moduleId: 'm8',
    description: 'רכב מודרני לא רק מכני. הוא מודד, חושב ומתקשר.',
    questions: [
      { type: 'choice', id: 'q1', question: 'מה עושה חיישן ברכב?', options: ['ממיר מצב פיזי לאות חשמלי', 'מחליף שמן', 'מייצר יחס העברה', 'פותח ברגים'], answer: 0 },
      { type: 'calc', id: 'q2', question: 'PWM עם period של 10ms ו־on-time של 3ms. מה duty cycle באחוזים?', formula: 'Duty = t_on / T × 100', diagram: 'voltageDrop', numericAnswer: 30, tolerance: 0.5, unit: '%' },
      { type: 'choice', id: 'q3', question: 'למה תקלה ב־CAN Bus יכולה ליצור הרבה נורות אזהרה?', options: ['כי מודולים לא מצליחים לתקשר ולשתף מידע', 'כי CAN מחמם את המנוע', 'כי כל נורה מחוברת לקלאץ׳', 'כי זה תמיד מצבר'], answer: 0 },
      { type: 'choice', id: 'q4', question: 'למה לא מחליפים חיישן רק בגלל קוד תקלה?', options: ['כי קוד יכול להיגרם מחיווט, מתח, קרקע או תנאי מערכת', 'כי קודים תמיד משקרים', 'כי חיישנים לא מתקלקלים', 'כי ECU לא משתמש בחיישנים'], answer: 0 }
    ]
  },
  {
    id: 'final-integrated',
    title: 'מבחן משולב — חשיבה של הנדסאי־מכונאי',
    moduleId: 'm10',
    description: 'שילוב מכניקה, חשמל, מנועים ואבחון. זה כבר לא מבחן צעצוע.',
    questions: [
      { type: 'calc', id: 'q1', question: 'מנוע מפיק 160Nm ב־2500rpm. מה ההספק בקילוואט?', formula: 'P(kW)=T×rpm/9549', diagram: 'enginePower', numericAnswer: 41.9, tolerance: 0.5, unit: 'kW' },
      { type: 'calc', id: 'q2', question: 'מומנט מנוע 120Nm, יחס גיר 3.2, יחס דיפרנציאל 4.1, יעילות 85%. מה מומנט גלגל תאורטי?', formula: 'T = Tin × gear × final × η', diagram: 'gearTorque', numericAnswer: 1338, tolerance: 10, unit: 'Nm' },
      { type: 'choice', id: 'q3', question: 'מנוע מסתובב אבל לא מניע. מה סדר חשיבה נכון?', options: ['לקנות סטרטר', 'לבדוק דלק/ניצוץ/דחיסה/תזמון לפי סימפטומים ומדידות', 'לצבוע את הרכב', 'להחליף גיר'], answer: 1 },
      { type: 'calc', id: 'q4', question: 'צרכן 120W על 12V. מה הזרם?', formula: 'I=P/V', diagram: 'powerLoad', numericAnswer: 10, tolerance: 0.1, unit: 'A' },
      { type: 'choice', id: 'q5', question: 'מה ההבדל בין עובדה להנחה בדוח אבחון?', options: ['אין הבדל', 'עובדה נמדדה או נצפתה; הנחה היא הסבר אפשרי שצריך לבדוק', 'הנחה תמיד נכונה', 'עובדה היא תחושה'], answer: 1 }
    ]
  }

,
  {
    id: 'advanced-math-electric-mechanics',
    title: 'מבחן מתקדם — חשמל ומכניקה בכמה שלבים',
    moduleId: 'm2',
    description: 'שאלות עם יותר משלב אחד: קודם מוצאים משתנה ביניים, אחר כך מחשבים תוצאה סופית.',
    questions: [
      { type: 'calc', id: 'q1', question: 'סטרטר צורך 85A דרך חיבור שהתנגדותו 0.035Ω. מה אחוז נפילת המתח מתוך 12V?', formula: 'Vdrop=I×R, %=Vdrop/12×100', diagram: 'voltageDrop', numericAnswer: 24.8, tolerance: 0.4, unit: '%' },
      { type: 'calc', id: 'q2', question: 'מצבר 60Ah מפעיל צרכן 120W על 12V. משתמשים רק ב־80% מהקיבולת. כמה שעות תאורטיות?', formula: 'I=P/V, t=Ah×0.8/I', diagram: 'powerLoad', numericAnswer: 4.8, tolerance: 0.1, unit: 'h' },
      { type: 'calc', id: 'q3', question: 'מומנט מנוע 140Nm, יחס הילוך 3.6, דיפרנציאל 4.1, יעילות 84%. מה מומנט הגלגל?', formula: 'T=Tin×gear×final×η', diagram: 'gearTorque', numericAnswer: 1736, tolerance: 12, unit: 'Nm' },
      { type: 'calc', id: 'q4', question: 'מנוע מפיק 180Nm ב־4200rpm. מה ההספק בכוחות סוס? השתמש: P(kW)=T×rpm/9549, hp=kW×1.341', formula: 'hp=(T×rpm/9549)×1.341', diagram: 'enginePower', numericAnswer: 106.2, tolerance: 1.2, unit: 'hp' }
    ]
  },
  {
    id: 'advanced-math-engine-marine-hydraulic',
    title: 'מבחן מתקדם — מנועים, הידראוליקה וסירות',
    moduleId: 'm3',
    description: 'חישובים עם המרות יחידות, יחס דחיסה, לחץ ב־bar והחלקת מדחף.',
    questions: [
      { type: 'calc', id: 'q1', question: 'Bore=82mm, Stroke=90mm, ארבעה צילינדרים. מה נפח המנוע הכולל בסמ״ק?', formula: 'V=π×(bore²/4)×stroke×cylinders', diagram: 'enginePower', numericAnswer: 1901, tolerance: 20, unit: 'cc' },
      { type: 'calc', id: 'q2', question: 'Vd=475cc ו־Vc=50cc. מה יחס הדחיסה?', formula: 'CR=(Vd+Vc)/Vc', diagram: 'enginePower', numericAnswer: 10.5, tolerance: 0.1, unit: ':1' },
      { type: 'calc', id: 'q3', question: 'צריך כוח 7200N בבוכנה ששטחה 0.0024m². מה הלחץ הדרוש ב־bar?', formula: 'p=F/A, bar=Pa/100000', diagram: 'hydraulicPiston', numericAnswer: 30, tolerance: 0.3, unit: 'bar' },
      { type: 'calc', id: 'q4', question: 'Pitch=0.30m, rpm=2200, התקדמות אמיתית 520m/min. מה אחוז ההחלקה?', formula: 'slip=(theoretical-actual)/theoretical×100', diagram: 'propPitch', numericAnswer: 21.2, tolerance: 0.6, unit: '%' }
    ]
  }
,
{
  "id": "valves-pumps-basic",
  "title": "מבחן — שסתומים ומשאבות שינוי נפח",
  "moduleId": "m9",
  "description": "בדיקה על שסתומים, משאבת בוכנה חד־פעימתית ומשאבת אימפלור גומי.",
  "questions": [
    {
      "type": "choice",
      "id": "q1",
      "question": "מה תפקיד בסיסי של שסתום/מגוף במערכת נוזלים?",
      "options": [
        "לשלוט בזרימה ולבודד חלקי מערכת",
        "להגדיל סל״ד של מנוע",
        "למדוד מתח",
        "להחליף מסנן שמן"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "id": "q2",
      "question": "מה קורה במשאבת בוכנה כאשר נפח החלל מעל הבוכנה גדל?",
      "options": [
        "הלחץ יורד ונוצרת יניקה",
        "הלחץ עולה ונוצרת סניקה",
        "אין שינוי בלחץ",
        "שני השסתומים חייבים להיות פתוחים"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "id": "q3",
      "question": "במשאבת בוכנה חד־פעימתית, כמה פעולות עושה כל תנועת בוכנה?",
      "options": [
        "פעולה אחת: יניקה או סניקה",
        "שתי פעולות יחד תמיד",
        "רק סיבוב",
        "רק ערבוב נוזל"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "id": "q4",
      "question": "מה תפקיד המסרק/חצי הסהר במשאבת אימפלור גומי?",
      "options": [
        "לגרום לכנפיים להתקפל ולהיפתח וכך ליצור שינוי נפח",
        "למדוד טמפרטורה",
        "לסנן דלק",
        "להחזיק את גלגל היד"
      ],
      "answer": 0
    },
    {
      "type": "choice",
      "id": "q5",
      "question": "למה אסור להפעיל משאבת אימפלור גומי ללא נוזל?",
      "options": [
        "הגומי יתחמם, יישחק ועלול להישרף",
        "היא תייצר יותר מדי חשמל",
        "היא תגדיל יחס דחיסה",
        "אין לזה משמעות"
      ],
      "answer": 0
    },
    {
      "type": "calc",
      "id": "q6",
      "question": "בוכנה בקוטר 40mm ומהלך 80mm. מה נפח הפעימה בסמ״ק?",
      "formula": "V=π×(d²/4)×L",
      "diagram": "hydraulicPiston",
      "numericAnswer": 100.5,
      "tolerance": 1,
      "unit": "cc"
    },
    {
      "type": "calc",
      "id": "q7",
      "question": "משאבה נותנת 100cc לפעימה, 30 פעימות בדקה ויעילות 85%. מה הספיקה בליטר לדקה?",
      "formula": "Q=V×strokes×η",
      "diagram": "hydraulicPiston",
      "numericAnswer": 2.55,
      "tolerance": 0.05,
      "unit": "L/min"
    }
  ]
}
];
