import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProgressStorage, type UserProgress } from './utils/storage';
import curriculum from './data/curriculum';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CourseView from './components/CourseView';
import LessonView from './components/LessonView';
import SettingsView from './components/SettingsView';
import './App.css';

function App() {
  const [progress, setProgress] = useState<UserProgress>(() => ProgressStorage.getProgress());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Update progress in localStorage whenever it changes
  useEffect(() => {
    ProgressStorage.saveProgress(progress);
  }, [progress]);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', progress.preferences.theme);
  }, [progress.preferences.theme]);

  // Removed unused updateProgress function

  const markLessonComplete = (lessonId: string) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: prev.completedLessons.includes(lessonId) 
        ? prev.completedLessons 
        : [...prev.completedLessons, lessonId]
    }));
  };

  const markExerciseComplete = (exerciseId: string) => {
    setProgress(prev => ({
      ...prev,
      completedExercises: prev.completedExercises.includes(exerciseId)
        ? prev.completedExercises
        : [...prev.completedExercises, exerciseId]
    }));
  };

  const setCurrentLesson = (courseId: string, lessonId: string) => {
    setProgress(prev => ({
      ...prev,
      currentCourse: courseId,
      currentLesson: lessonId,
      stats: {
        ...prev.stats,
        coursesStarted: prev.stats.coursesStarted.includes(courseId)
          ? prev.stats.coursesStarted
          : [...prev.stats.coursesStarted, courseId]
      }
    }));
  };

  return (
    <Router>
      <div className="app">
        <Header 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          progress={progress}
        />
        
        <div className="app-layout">
          <Sidebar 
            open={sidebarOpen}
            courses={curriculum}
            progress={progress}
            onCourseSelect={(_courseId) => {
              setSidebarOpen(false);
            }}
          />
          
          <main className="main-content">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Dashboard 
                    courses={curriculum}
                    progress={progress}
                    onContinueLearning={() => {
                      // Navigate to current lesson or suggest a course
                    }}
                  />
                } 
              />
              
              <Route 
                path="/course/:courseId" 
                element={
                  <CourseView 
                    courses={curriculum}
                    progress={progress}
                    onLessonSelect={setCurrentLesson}
                  />
                } 
              />
              
              <Route 
                path="/course/:courseId/lesson/:lessonId" 
                element={
                  <LessonView 
                    courses={curriculum}
                    progress={progress}
                    onLessonComplete={markLessonComplete}
                    onExerciseComplete={markExerciseComplete}
                    onTimeSpent={(minutes) => {
                      setProgress(prev => ({
                        ...prev,
                        stats: {
                          ...prev.stats,
                          totalTimeSpent: prev.stats.totalTimeSpent + minutes
                        }
                      }));
                    }}
                  />
                } 
              />
              
              <Route 
                path="/settings" 
                element={
                  <SettingsView 
                    progress={progress}
                    onUpdatePreferences={(prefs) => {
                      setProgress(prev => ({
                        ...prev,
                        preferences: { ...prev.preferences, ...prefs }
                      }));
                    }}
                    onResetProgress={() => {
                      setProgress(ProgressStorage.getProgress());
                    }}
                  />
                } 
              />
              
              {/* Redirect unknown routes to dashboard */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;