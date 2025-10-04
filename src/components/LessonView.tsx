import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { Course } from '../data/curriculum';
import type { UserProgress } from '../utils/storage';
import CodePlayground from './CodePlayground';

interface LessonViewProps {
  courses: Course[];
  progress: UserProgress;
  onLessonComplete: (lessonId: string) => void;
  onExerciseComplete: (exerciseId: string) => void;
  onTimeSpent: (minutes: number) => void;
}

const LessonView: React.FC<LessonViewProps> = ({ 
  courses, 
  progress, 
  onLessonComplete, 
  onExerciseComplete,
  onTimeSpent 
}) => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  // const navigate = useNavigate(); // Removed unused
  const [startTime] = useState(Date.now());

  const course = courses.find(c => c.id === courseId);
  const lesson = course?.lessons.find(l => l.id === lessonId);

  useEffect(() => {
    // Track time spent when component unmounts
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 60000); // minutes
      if (timeSpent > 0) {
        onTimeSpent(timeSpent);
      }
    };
  }, [startTime, onTimeSpent]);

  if (!course || !lesson) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold text-muted">Lesson not found</h1>
        <Link to={courseId ? `/course/${courseId}` : '/'} className="btn btn-primary mt-4">
          {courseId ? 'Back to Course' : 'Back to Dashboard'}
        </Link>
      </div>
    );
  }

  const currentLessonIndex = course.lessons.findIndex(l => l.id === lessonId);
  const previousLesson = currentLessonIndex > 0 ? course.lessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < course.lessons.length - 1 ? course.lessons[currentLessonIndex + 1] : null;

  const isLessonCompleted = progress.completedLessons.includes(lesson.id);

  const handleCompleteLesson = () => {
    if (!isLessonCompleted) {
      onLessonComplete(lesson.id);
    }
  };

  const handleExerciseComplete = (exerciseId: string) => {
    onExerciseComplete(exerciseId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '#10b981';
      case 'intermediate': return '#f59e0b';
      case 'advanced': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div className="lesson-view fade-in">
      {/* Lesson Navigation Header */}
      <div className="lesson-header-nav">
        <div className="flex items-center gap-4">
          <Link to={`/course/${courseId}`} className="btn btn-secondary btn-sm">
            <ChevronLeft size={16} />
            Back to Course
          </Link>
          
          <div>
            <h1 className="text-lg font-semibold">{lesson.title}</h1>
            <div className="flex items-center gap-2 text-sm text-muted">
              <span>{course.title.split(' - ')[0]}</span>
              <span>•</span>
              <span 
                style={{ 
                  color: getDifficultyColor(lesson.difficulty),
                  fontWeight: '500'
                }}
              >
                {lesson.difficulty.charAt(0).toUpperCase() + lesson.difficulty.slice(1)}
              </span>
              <span>•</span>
              <span>{lesson.estimatedTime} min</span>
            </div>
          </div>
        </div>

        <div className="lesson-nav-buttons">
          {previousLesson && (
            <Link 
              to={`/course/${courseId}/lesson/${previousLesson.id}`}
              className="btn btn-secondary btn-sm"
            >
              <ChevronLeft size={16} />
              Previous
            </Link>
          )}
          
          <button
            onClick={handleCompleteLesson}
            className={`btn btn-sm ${isLessonCompleted ? 'btn-secondary' : 'btn-primary'}`}
            disabled={isLessonCompleted}
          >
            <CheckCircle size={16} />
            {isLessonCompleted ? 'Completed' : 'Mark Complete'}
          </button>
          
          {nextLesson && (
            <Link 
              to={`/course/${courseId}/lesson/${nextLesson.id}`}
              className="btn btn-primary btn-sm"
            >
              Next
              <ChevronRight size={16} />
            </Link>
          )}
        </div>
      </div>

      {/* Lesson Content */}
      <div className="lesson-content-area">
        <ReactMarkdown>{lesson.content}</ReactMarkdown>
      </div>

      {/* Code Example */}
      {lesson.codeExample && (
        <div className="mb-6">
          <CodePlayground
            title="Code Example"
            code={lesson.codeExample}
            language={lesson.language || 'javascript'}
            readOnly={true}
          />
        </div>
      )}

      {/* Exercises */}
      {lesson.exercises && lesson.exercises.length > 0 && (
        <div className="exercises-section">
          <h2 className="text-xl font-semibold mb-4">Practice Exercises</h2>
          
          {lesson.exercises.map((exercise) => {
            const isExerciseCompleted = progress.completedExercises.includes(exercise.id);
            
            return (
              <div key={exercise.id} className={`exercise-item ${isExerciseCompleted ? 'completed' : ''}`}>
                <div className="exercise-header">
                  <h3 className="exercise-title">{exercise.title}</h3>
                  <span className={`exercise-status ${isExerciseCompleted ? 'completed' : 'pending'}`}>
                    {isExerciseCompleted ? '✓ Completed' : 'Practice'}
                  </span>
                </div>
                
                <p className="text-secondary mb-4">{exercise.description}</p>
                
                {exercise.hints && exercise.hints.length > 0 && (
                  <details className="mb-4">
                    <summary className="cursor-pointer text-sm font-medium text-primary">
                      💡 Show Hints ({exercise.hints.length})
                    </summary>
                    <div className="mt-2 space-y-1">
                      {exercise.hints.map((hint, index) => (
                        <div key={index} className="text-sm text-secondary bg-yellow-50 p-2 rounded border-l-2 border-yellow-400">
                          {hint}
                        </div>
                      ))}
                    </div>
                  </details>
                )}
                
                <CodePlayground
                  title={`Exercise: ${exercise.title}`}
                  code={exercise.starterCode || '// Start coding here...'}
                  language={exercise.language || lesson.language || 'javascript'}
                  readOnly={false}
                  solution={exercise.solution}
                  onComplete={() => handleExerciseComplete(exercise.id)}
                  isCompleted={isExerciseCompleted}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Lesson Navigation Footer */}
      <div className="flex justify-between items-center mt-8 p-4 bg-surface border rounded-lg">
        <div>
          {previousLesson ? (
            <Link 
              to={`/course/${courseId}/lesson/${previousLesson.id}`}
              className="btn btn-secondary"
            >
              <ChevronLeft size={16} />
              {previousLesson.title}
            </Link>
          ) : (
            <Link to={`/course/${courseId}`} className="btn btn-secondary">
              <ChevronLeft size={16} />
              Course Overview
            </Link>
          )}
        </div>
        
        <div className="text-center">
          <div className="text-sm text-muted">
            Lesson {currentLessonIndex + 1} of {course.lessons.length}
          </div>
          <div className="progress-bar" style={{ width: '200px', margin: '0.5rem auto' }}>
            <div 
              className="progress-fill" 
              style={{ width: `${((currentLessonIndex + 1) / course.lessons.length) * 100}%` }}
            />
          </div>
        </div>
        
        <div>
          {nextLesson ? (
            <Link 
              to={`/course/${courseId}/lesson/${nextLesson.id}`}
              className="btn btn-primary"
            >
              {nextLesson.title}
              <ChevronRight size={16} />
            </Link>
          ) : (
            <Link to={`/course/${courseId}`} className="btn btn-primary">
              Course Complete!
              <CheckCircle size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonView;