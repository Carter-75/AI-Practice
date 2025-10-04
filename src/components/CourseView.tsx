import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Clock, CheckCircle, Circle } from 'lucide-react';
import type { Course } from '../data/curriculum';
import type { UserProgress } from '../utils/storage';

interface CourseViewProps {
  courses: Course[];
  progress: UserProgress;
  onLessonSelect: (courseId: string, lessonId: string) => void;
}

const CourseView: React.FC<CourseViewProps> = ({ courses, progress, onLessonSelect }) => {
  const { courseId } = useParams<{ courseId: string }>();
  
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold text-muted">Course not found</h1>
        <Link to="/" className="btn btn-primary mt-4">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const getCourseProgress = () => {
    const completedLessons = progress.completedLessons.filter(
      lessonId => lessonId.startsWith(course.id)
    ).length;
    const percentage = (completedLessons / course.lessons.length) * 100;
    
    return {
      completed: completedLessons,
      total: course.lessons.length,
      percentage: Math.round(percentage)
    };
  };

  const getFirstIncompleteLesson = () => {
    return course.lessons.find(lesson => !progress.completedLessons.includes(lesson.id));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '#10b981';
      case 'intermediate': return '#f59e0b';
      case 'advanced': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  const courseProgress = getCourseProgress();
  const firstIncompleteLesson = getFirstIncompleteLesson();

  return (
    <div className="course-view fade-in">
      {/* Course Header */}
      <div className="course-header mb-8">
        <div className="flex items-start gap-6">
          <div className="course-icon-large" style={{ fontSize: '4rem', color: course.color }}>
            {course.icon}
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-lg text-secondary mb-4">{course.description}</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted mb-4">
              <span>📚 {course.lessons.length} lessons</span>
              <span>⏱️ ~{course.estimatedHours} hours</span>
              <span>✅ {courseProgress.completed} completed</span>
            </div>
            
            {courseProgress.percentage > 0 && (
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{courseProgress.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${courseProgress.percentage}%` }}
                  />
                </div>
              </div>
            )}
            
            <div className="flex gap-3">
              {firstIncompleteLesson ? (
                <Link
                  to={`/course/${course.id}/lesson/${firstIncompleteLesson.id}`}
                  className="btn btn-primary"
                  onClick={() => onLessonSelect(course.id, firstIncompleteLesson.id)}
                >
                  <Play size={16} />
                  {courseProgress.completed === 0 ? 'Start Course' : 'Continue Learning'}
                </Link>
              ) : (
                <button className="btn btn-primary" disabled>
                  <CheckCircle size={16} />
                  Course Completed
                </button>
              )}
              
              <Link to="/" className="btn btn-secondary">
                ← Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="lessons-section">
        <h2 className="text-xl font-semibold mb-4">Course Content</h2>
        
        <div className="lessons-list space-y-3">
          {course.lessons.map((lesson, index) => {
            const isCompleted = progress.completedLessons.includes(lesson.id);
            const isCurrent = progress.currentLesson === lesson.id;
            const isLocked = index > 0 && !progress.completedLessons.includes(course.lessons[index - 1].id) && !isCompleted;
            
            return (
              <div
                key={lesson.id}
                className={`lesson-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''}`}
              >
                <Link
                  to={isLocked ? '#' : `/course/${course.id}/lesson/${lesson.id}`}
                  className={`lesson-link ${isLocked ? 'disabled' : ''}`}
                  onClick={(e) => {
                    if (isLocked) {
                      e.preventDefault();
                      return;
                    }
                    onLessonSelect(course.id, lesson.id);
                  }}
                >
                  <div className="lesson-content">
                    <div className="lesson-header">
                      <div className="lesson-status-icon">
                        {isCompleted ? (
                          <CheckCircle size={20} style={{ color: 'var(--success-color)' }} />
                        ) : isLocked ? (
                          <Circle size={20} style={{ color: 'var(--text-muted)', opacity: 0.5 }} />
                        ) : (
                          <Circle size={20} style={{ color: 'var(--primary-color)' }} />
                        )}
                      </div>
                      
                      <div className="lesson-info flex-1">
                        <h3 className="lesson-title">{lesson.title}</h3>
                        <p className="lesson-description">{lesson.description}</p>
                      </div>
                      
                      <div className="lesson-meta">
                        <div className="lesson-difficulty">
                          <span 
                            className="difficulty-badge"
                            style={{ 
                              backgroundColor: getDifficultyColor(lesson.difficulty) + '20',
                              color: getDifficultyColor(lesson.difficulty),
                              padding: '2px 8px',
                              borderRadius: '12px',
                              fontSize: '0.75rem',
                              fontWeight: '500'
                            }}
                          >
                            {getDifficultyLabel(lesson.difficulty)}
                          </span>
                        </div>
                        
                        <div className="lesson-duration">
                          <Clock size={14} style={{ marginRight: '4px' }} />
                          {lesson.estimatedTime}min
                        </div>
                        
                        {lesson.exercises && lesson.exercises.length > 0 && (
                          <div className="lesson-exercises">
                            <span className="text-xs text-muted">
                              {lesson.exercises.length} exercise{lesson.exercises.length > 1 ? 's' : ''}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {lesson.prerequisites && lesson.prerequisites.length > 0 && (
                      <div className="lesson-prerequisites">
                        <span className="text-xs text-muted">
                          Prerequisites: {lesson.prerequisites.join(', ')}
                        </span>
                      </div>
                    )}
                    
                    {isCurrent && (
                      <div className="current-lesson-indicator">
                        <span className="text-xs font-medium" style={{ color: 'var(--primary-color)' }}>
                          📍 Currently studying
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseView;