import { useMemo, useState } from 'react';
import { Calculator, ClipboardList, GraduationCap, Home, LibraryBig, Lightbulb, NotebookPen } from 'lucide-react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ModulesPage from './pages/ModulesPage.jsx';
import LibraryPage from './pages/LibraryPage.jsx';
import LessonsPage from './pages/LessonsPage.jsx';
import FormulasPage from './pages/FormulasPage.jsx';
import TestsPage from './pages/TestsPage.jsx';
import CalculatorsPage from './pages/CalculatorsPage.jsx';
import { modules } from './data/modules.js';
import { loadProgress, saveProgress } from './utils/storage.js';

const navItems = [
  { id: 'dashboard', label: 'דשבורד', icon: Home },
  { id: 'modules', label: 'מסלול הלימוד', icon: GraduationCap },
  { id: 'library', label: 'ספרי בית ספר', icon: LibraryBig },
  { id: 'lessons', label: 'שיעורים ותרגול', icon: Lightbulb },
  { id: 'formulas', label: 'נוסחאות', icon: NotebookPen },
  { id: 'calculators', label: 'מחשבונים', icon: Calculator },
  { id: 'tests', label: 'מבחנים', icon: ClipboardList }
];

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [progress, setProgress] = useState(loadProgress);
  const [selectedModuleId, setSelectedModuleId] = useState('m0');
  const [query, setQuery] = useState('');

  const completedCount = Object.values(progress.completed || {}).filter(Boolean).length;
  const percent = Math.round((completedCount / modules.length) * 100);
  const nextModule = modules.find((module) => !progress.completed?.[module.id]) || modules[modules.length - 1];
  const selectedModule = modules.find((module) => module.id === selectedModuleId) || modules[0];

  const filteredModules = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return modules;
    return modules.filter((module) => {
      const searchable = [module.title, module.level, module.goal, module.project, module.test, ...module.topics, ...module.lessons].join(' ').toLowerCase();
      return searchable.includes(cleanQuery);
    });
  }, [query]);

  function updateProgress(nextProgress) {
    setProgress(nextProgress);
    saveProgress(nextProgress);
  }

  function toggleComplete(moduleId) {
    updateProgress({ ...progress, completed: { ...progress.completed, [moduleId]: !progress.completed?.[moduleId] } });
  }

  function setConfidence(moduleId, value) {
    updateProgress({ ...progress, confidence: { ...progress.confidence, [moduleId]: value } });
  }

  function setNote(moduleId, value) {
    updateProgress({ ...progress, notes: { ...progress.notes, [moduleId]: value } });
  }

  function answerQuestion(testId, questionId, value) {
    updateProgress({
      ...progress,
      testAnswers: {
        ...progress.testAnswers,
        [testId]: { ...(progress.testAnswers?.[testId] || {}), [questionId]: value }
      }
    });
  }

  function submitTest(testId) {
    updateProgress({ ...progress, testSubmitted: { ...progress.testSubmitted, [testId]: true } });
  }

  function resetTest(testId) {
    const nextAnswers = { ...(progress.testAnswers || {}) };
    const nextSubmitted = { ...(progress.testSubmitted || {}) };
    delete nextAnswers[testId];
    delete nextSubmitted[testId];
    updateProgress({ ...progress, testAnswers: nextAnswers, testSubmitted: nextSubmitted });
  }

  function openNextModule() {
    setSelectedModuleId(nextModule.id);
    setActivePage('modules');
  }

  function openTests() {
    setActivePage('tests');
  }

  return (
    <div className="app-shell">
      <Header
        percent={percent}
        completedCount={completedCount}
        totalModules={modules.length}      />
      <div className="app-layout">
        <Sidebar items={navItems} activePage={activePage} onChange={setActivePage} />
        <main>
          {activePage === 'dashboard' && (
            <Dashboard
              percent={percent}
              completedCount={completedCount}
              totalModules={modules.length}
              nextModule={nextModule}
              onOpenModule={openNextModule}
              onOpenTests={openTests}
              progress={progress}
            />
          )}
          {activePage === 'modules' && (
            <ModulesPage
              query={query}
              setQuery={setQuery}
              modules={filteredModules}
              selectedModule={selectedModule}
              setSelectedModuleId={setSelectedModuleId}
              progress={progress}
              onToggleComplete={toggleComplete}
              onSetConfidence={setConfidence}
              onSetNote={setNote}
            />
          )}
          {activePage === 'library' && <LibraryPage />}
          {activePage === 'lessons' && <LessonsPage />}
          {activePage === 'formulas' && <FormulasPage />}
          {activePage === 'calculators' && <CalculatorsPage />}
          {activePage === 'tests' && <TestsPage progress={progress} onAnswer={answerQuestion} onSubmit={submitTest} onReset={resetTest} />}
        </main>
      </div>
    </div>
  );
}
