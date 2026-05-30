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
      { type: 'calc', id: 'q2', question: 'לחץ בלמים 3,000,000Pa פועל על בוכנה בשטח 0.002m². מה כוח הלחיצה?', formula: 'F = p × A', numericAnswer: 6000, tolerance: 20, unit: 'N' },
      { type: 'choice', id: 'q3', question: 'מה נכון לגבי שמן מנוע?', options: ['שמן רק משמן', 'שמן גם מקרר, מנקה ומגן', 'אם יש מפלס תקין תמיד יש לחץ תקין', 'שמן לא מושפע מחום'], answer: 1 },
      { type: 'calc', id: 'q4', question: 'אם מערכת מוציאה 4.5kW מתוך 5kW שנכנסו, מה היעילות?', formula: 'η = P_out / P_in', numericAnswer: 0.9, tolerance: 0.01, unit: '' }
    ]
  },
  {
    id: 'diagnostics-charging-starting',
    title: 'מבחן דיאגנוסטיקה — מצבר, סטרטר וטעינה',
    moduleId: 'm6',
    description: 'כאן מפסיקים להאמין למתח בלי עומס ומתחילים למדוד כמו בני אדם.',
    questions: [
      { type: 'choice', id: 'q1', question: 'מצבר מראה 12.4V במנוחה אבל יורד ל־7V בזמן התנעה. מה המשמעות הסבירה?', options: ['הכול תקין', 'ייתכן שהמצבר נכשל תחת עומס או שיש נפילת מתח חמורה', 'הבעיה בהכרח ברדיאטור', 'סטרטר לא צורך זרם'], answer: 1 },
      { type: 'calc', id: 'q2', question: 'חוט/חיבור בעל התנגדות 0.05Ω מעביר 80A. מה נפילת המתח?', formula: 'V_drop = I × R', numericAnswer: 4, tolerance: 0.05, unit: 'V' },
      { type: 'calc', id: 'q3', question: 'מצבר 60Ah מפעיל צרכן של 5A תאורטית. כמה שעות?', formula: 't = Ah / A', numericAnswer: 12, tolerance: 0.1, unit: 'h' },
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
      { type: 'calc', id: 'q3', question: 'מדחף תאורטית מתקדם 0.30m לסיבוב ב־2000rpm. מה ההתקדמות התאורטית בדקה?', formula: 'distance/min = pitch × rpm', numericAnswer: 600, tolerance: 2, unit: 'm/min' },
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
      { type: 'calc', id: 'q2', question: 'PWM עם period של 10ms ו־on-time של 3ms. מה duty cycle באחוזים?', formula: 'Duty = t_on / T × 100', numericAnswer: 30, tolerance: 0.5, unit: '%' },
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
      { type: 'calc', id: 'q1', question: 'מנוע מפיק 160Nm ב־2500rpm. מה ההספק בקילוואט?', formula: 'P(kW)=T×rpm/9549', numericAnswer: 41.9, tolerance: 0.5, unit: 'kW' },
      { type: 'calc', id: 'q2', question: 'מומנט מנוע 120Nm, יחס גיר 3.2, יחס דיפרנציאל 4.1, יעילות 85%. מה מומנט גלגל תאורטי?', formula: 'T = Tin × gear × final × η', numericAnswer: 1338, tolerance: 10, unit: 'Nm' },
      { type: 'choice', id: 'q3', question: 'מנוע מסתובב אבל לא מניע. מה סדר חשיבה נכון?', options: ['לקנות סטרטר', 'לבדוק דלק/ניצוץ/דחיסה/תזמון לפי סימפטומים ומדידות', 'לצבוע את הרכב', 'להחליף גיר'], answer: 1 },
      { type: 'calc', id: 'q4', question: 'צרכן 120W על 12V. מה הזרם?', formula: 'I=P/V', numericAnswer: 10, tolerance: 0.1, unit: 'A' },
      { type: 'choice', id: 'q5', question: 'מה ההבדל בין עובדה להנחה בדוח אבחון?', options: ['אין הבדל', 'עובדה נמדדה או נצפתה; הנחה היא הסבר אפשרי שצריך לבדוק', 'הנחה תמיד נכונה', 'עובדה היא תחושה'], answer: 1 }
    ]
  }

];
