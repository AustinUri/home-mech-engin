import React from "react";

// Simple inline SVG diagrams to support intuition.
// These are not decorative only; they are explanatory sketches.
export default function ConceptDiagram({ concept }) {
  switch (concept) {
    case 'מתח חשמלי':
      return <VoltageDiagram />;
    case 'זרם חשמלי':
      return <CurrentDiagram />;
    case 'התנגדות חשמלית':
      return <ResistanceDiagram />;
    case 'מומנט':
      return <TorqueDiagram />;
    case 'יחס העברה':
      return <GearRatioDiagram />;
    case 'לחץ':
      return <PressureDiagram />;
    default:
      return <GenericDiagram />;
  }
}

function Frame({ title, children }) {
  return (
    <div className="concept-diagram-card">
      <div className="concept-diagram-title">סרטוט הסבר</div>
      <svg viewBox="0 0 420 220" className="concept-diagram-svg" role="img" aria-label={title}>
        {children}
      </svg>
    </div>
  );
}

function VoltageDiagram() {
  return (
    <Frame title="הפרש פוטנציאל בין קצוות הסוללה">
      <rect x="30" y="55" width="70" height="110" rx="12" fill="var(--svg-panel-blue)" stroke="var(--svg-blue-strong)" strokeWidth="3" />
      <line x1="75" y1="72" x2="75" y2="96" stroke="var(--svg-blue-strong)" strokeWidth="4" />
      <line x1="63" y1="84" x2="87" y2="84" stroke="var(--svg-blue-strong)" strokeWidth="4" />
      <line x1="68" y1="138" x2="82" y2="138" stroke="var(--svg-blue-strong)" strokeWidth="4" />
      <path d="M100 84 H165" stroke="var(--svg-line)" strokeWidth="4" fill="none" />
      <path d="M100 138 H165" stroke="var(--svg-line)" strokeWidth="4" fill="none" />
      <rect x="165" y="72" width="110" height="80" rx="16" fill="var(--svg-panel-orange)" stroke="var(--svg-orange)" strokeWidth="3" />
      <text x="220" y="102" textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--svg-orange-strong)">מנורה / צרכן</text>
      <text x="220" y="126" textAnchor="middle" fontSize="16" fill="var(--svg-orange-strong)">פועל בגלל הפרש מתח</text>
      <path d="M275 84 H350 V138 H275" stroke="var(--svg-line)" strokeWidth="4" fill="none" />
      <path d="M305 48 C290 25 325 25 310 48" stroke="var(--svg-green)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <polygon points="312,47 305,39 302,50" fill="var(--svg-green)" />
      <text x="320" y="35" fontSize="14" fontWeight="700" fill="var(--svg-green-strong)">דחיפה לזרימה</text>
      <text x="64" y="182" fontSize="15" fontWeight="700" fill="#1e293b">מצבר 12V</text>
      <text x="165" y="192" fontSize="15" fill="var(--svg-muted)">מתח הוא הפרש פוטנציאל</text>
    </Frame>
  );
}

function CurrentDiagram() {
  return (
    <Frame title="זרם הוא תנועת המטענים במעגל סגור">
      <circle cx="210" cy="110" r="78" fill="var(--svg-panel-neutral)" stroke="var(--svg-line)" strokeWidth="4" />
      <circle cx="210" cy="110" r="28" fill="var(--svg-panel-blue)" stroke="var(--svg-blue)" strokeWidth="3" />
      <text x="210" y="116" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--svg-blue-strong)">עומס</text>
      <path d="M210 16 C320 16 384 72 384 110 C384 162 332 204 210 204 C95 204 36 151 36 110 C36 63 90 16 210 16" fill="none" stroke="var(--svg-line)" strokeWidth="4" />
      <path d="M106 50 C126 34 152 25 179 22" stroke="var(--svg-green)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <polygon points="178,16 186,26 173,28" fill="var(--svg-green)" />
      <path d="M334 86 C346 98 350 112 346 128" stroke="var(--svg-green)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <polygon points="340,127 350,132 343,119" fill="var(--svg-green)" />
      <path d="M294 176 C274 188 248 195 220 198" stroke="var(--svg-green)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <polygon points="221,192 212,202 225,204" fill="var(--svg-green)" />
      <rect x="30" y="22" width="72" height="34" rx="10" fill="var(--svg-panel-orange)" stroke="var(--svg-orange)" strokeWidth="2.5" />
      <text x="66" y="44" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--svg-orange-strong)">I = זרם</text>
      <text x="210" y="215" textAnchor="middle" fontSize="15" fill="var(--svg-muted)">במעגל סגור המטענים נעים בפועל</text>
    </Frame>
  );
}

function ResistanceDiagram() {
  return (
    <Frame title="התנגדות מגבילה זרם">
      <rect x="28" y="90" width="70" height="44" rx="12" fill="var(--svg-panel-blue)" stroke="var(--svg-blue)" strokeWidth="3" />
      <text x="63" y="118" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--svg-blue-strong)">מקור</text>
      <path d="M98 112 H150" stroke="var(--svg-line)" strokeWidth="4" />
      <path d="M150 112 l12 -18 l18 36 l18 -36 l18 36 l18 -36 l18 18" stroke="var(--svg-red-strong)" strokeWidth="4" fill="none" />
      <text x="222" y="78" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--svg-red-strong)">התנגדות גבוהה יותר</text>
      <path d="M254 112 H318" stroke="var(--svg-line)" strokeWidth="4" />
      <rect x="318" y="88" width="74" height="48" rx="12" fill="var(--svg-panel-green)" stroke="var(--svg-green)" strokeWidth="3" />
      <text x="355" y="117" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--svg-green-strong)">עומס</text>
      <path d="M108 60 C138 40 173 28 215 25" stroke="var(--svg-green)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <polygon points="214,19 222,30 210,32" fill="var(--svg-green)" />
      <text x="135" y="48" fontSize="14" fill="var(--svg-green-strong)">פחות זרם</text>
      <text x="210" y="192" textAnchor="middle" fontSize="15" fill="var(--svg-muted)">כאשר R עולה, הזרם קטן אם המתח קבוע</text>
      <text x="210" y="212" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--svg-text)">V = I × R</text>
    </Frame>
  );
}

function TorqueDiagram() {
  return (
    <Frame title="מומנט הוא כוח במרחק מציר">
      <circle cx="155" cy="110" r="38" fill="var(--svg-panel-neutral)" stroke="var(--svg-line)" strokeWidth="4" />
      <circle cx="155" cy="110" r="7" fill="var(--svg-text)" />
      <line x1="155" y1="110" x2="285" y2="110" stroke="var(--svg-line)" strokeWidth="7" strokeLinecap="round" />
      <circle cx="285" cy="110" r="7" fill="var(--svg-text)" />
      <path d="M300 110 L342 80" stroke="var(--svg-red)" strokeWidth="5" strokeLinecap="round" />
      <polygon points="337,75 350,74 344,85" fill="var(--svg-red)" />
      <text x="352" y="79" fontSize="15" fontWeight="700" fill="var(--svg-red-strong)">F</text>
      <path d="M155 145 A35 35 0 0 0 195 110" fill="none" stroke="var(--svg-green)" strokeWidth="5" strokeLinecap="round" />
      <polygon points="198,114 194,102 188,111" fill="var(--svg-green)" />
      <text x="167" y="160" fontSize="15" fontWeight="700" fill="var(--svg-green-strong)">סיבוב</text>
      <text x="210" y="60" textAnchor="middle" fontSize="16" fill="var(--svg-muted)">r = מרחק מהציר</text>
      <text x="210" y="195" textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--svg-text)">T = F × r</text>
    </Frame>
  );
}

function GearRatioDiagram() {
  return (
    <Frame title="יחס העברה משנה מהירות ומומנט">
      <circle cx="125" cy="110" r="34" fill="var(--svg-panel-blue)" stroke="var(--svg-blue)" strokeWidth="4" />
      <circle cx="125" cy="110" r="8" fill="var(--svg-blue-strong)" />
      <circle cx="278" cy="110" r="64" fill="var(--svg-panel-orange)" stroke="var(--svg-orange)" strokeWidth="4" />
      <circle cx="278" cy="110" r="10" fill="var(--svg-orange-strong)" />
      <line x1="159" y1="110" x2="214" y2="110" stroke="var(--svg-line)" strokeWidth="5" />
      <text x="125" y="60" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--svg-blue-strong)">גלגל מניע</text>
      <text x="278" y="30" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--svg-orange-strong)">גלגל מונע</text>
      <path d="M125 65 A45 45 0 0 1 160 92" fill="none" stroke="var(--svg-green)" strokeWidth="5" strokeLinecap="round" />
      <polygon points="162,98 152,92 161,87" fill="var(--svg-green)" />
      <path d="M278 184 A60 60 0 0 1 222 148" fill="none" stroke="var(--svg-green)" strokeWidth="5" strokeLinecap="round" />
      <polygon points="224,142 228,153 216,149" fill="var(--svg-green)" />
      <text x="125" y="190" textAnchor="middle" fontSize="15" fill="var(--svg-muted)">מהירות גבוהה יותר</text>
      <text x="278" y="198" textAnchor="middle" fontSize="15" fill="var(--svg-muted)">מומנט גבוה יותר</text>
      <text x="210" y="215" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--svg-text)">יחס גדול = יותר כוח, פחות מהירות</text>
    </Frame>
  );
}

function PressureDiagram() {
  return (
    <Frame title="לחץ הוא כוח חלקי שטח">
      <rect x="60" y="55" width="78" height="115" rx="12" fill="var(--svg-panel-blue)" stroke="var(--svg-blue)" strokeWidth="3" />
      <rect x="245" y="55" width="118" height="115" rx="12" fill="var(--svg-panel-orange)" stroke="var(--svg-orange)" strokeWidth="3" />
      <rect x="80" y="120" width="38" height="38" fill="var(--svg-blue-strong)" opacity="0.18" stroke="var(--svg-blue-strong)" strokeWidth="2" />
      <rect x="270" y="120" width="66" height="38" fill="var(--svg-orange)" opacity="0.15" stroke="var(--svg-orange)" strokeWidth="2" />
      <path d="M99 34 V74" stroke="var(--svg-red)" strokeWidth="5" />
      <polygon points="99,82 92,70 106,70" fill="var(--svg-red)" />
      <path d="M304 34 V74" stroke="var(--svg-red)" strokeWidth="5" />
      <polygon points="304,82 297,70 311,70" fill="var(--svg-red)" />
      <text x="100" y="28" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--svg-red-strong)">אותו כוח</text>
      <text x="304" y="28" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--svg-red-strong)">אותו כוח</text>
      <text x="99" y="193" textAnchor="middle" fontSize="15" fill="var(--svg-muted)">שטח קטן → לחץ גדול</text>
      <text x="304" y="193" textAnchor="middle" fontSize="15" fill="var(--svg-muted)">שטח גדול → לחץ קטן</text>
      <text x="210" y="214" textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--svg-text)">p = F / A</text>
    </Frame>
  );
}

function GenericDiagram() {
  return (
    <Frame title="סרטוט כללי">
      <rect x="60" y="40" width="300" height="140" rx="20" fill="var(--svg-panel-neutral)" stroke="var(--svg-line)" strokeWidth="3" />
      <text x="210" y="98" textAnchor="middle" fontSize="19" fontWeight="700" fill="var(--svg-text)">סרטוט הסבר יופיע כאן</text>
      <text x="210" y="126" textAnchor="middle" fontSize="16" fill="var(--svg-muted)">אפשר להוסיף דיאגרמה ייעודית לכל מושג</text>
    </Frame>
  );
}
