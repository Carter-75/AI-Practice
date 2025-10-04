import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Trophy, Target } from 'lucide-react';
import { Course } from '../data/curriculum';
import { UserProgress } from '../utils/storage';

interface DashboardProps {
  courses: Course[];
  progress: UserProgress;
  onContinueLearning: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ courses, progress, onContinueLearning }) => {
  const getTotalStats = () => {
    const totalLessons = courses.reduce((sum, course) => sum + course.lessons.length, 0);
    const completedLessons = progress.completedLessons.length;
    const totalHours = courses.reduce((sum, course) => sum + course.estimatedHours, 0);
    const hoursCompleted = Math.round((completedLessons / totalLessons) * totalHours);
    
    return {
      totalLessons,
      completedLessons,
      totalHours,
      hoursCompleted,
      completionPercentage: Math.round((completedLessons / totalLessons) * 100) || 0
    };
  };

  const getCourseProgress = (course: Course) => {
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

  const getRecommendedCourse = () => {
    // Find a course that's started but not completed
    const startedCourse = courses.find(course => {
      const courseProgress = getCourseProgress(course);
      return courseProgress.completed > 0 && courseProgress.completed < courseProgress.total;
    });
    
    // If no started course, recommend the first course
    return startedCourse || courses[0];
  };

  const getContinueLearningLink = () => {
    if (progress.currentCourse && progress.currentLesson) {
      return `/course/${progress.currentCourse}/lesson/${progress.currentLesson}`;
    }
    
    const recommendedCourse = getRecommendedCourse();
    const firstIncompleteLesson = recommendedCourse.lessons.find(
      lesson => !progress.completedLessons.includes(lesson.id)
    );
    
    if (firstIncompleteLesson) {
      return `/course/${recommendedCourse.id}/lesson/${firstIncompleteLesson.id}`;
    }
    
    return `/course/${recommendedCourse.id}`;
  };

  const stats = getTotalStats();
  const recommendedCourse = getRecommendedCourse();

  return (
    <div className="dashboard fade-in">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Welcome back to your learning journey! 🚀</h1>
        <p className="dashboard-subtitle">
          Master full-stack development with comprehensive courses in HTML, CSS, JavaScript, TypeScript, React, Three.js, and Python.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-value">{stats.completedLessons}</span>
          <span className="stat-label">
            <Trophy size={16} style={{ display: 'inline', marginRight: '4px' }} />
            Lessons Completed
          </span>
        </div>
        
        <div className="stat-card">
          <span className="stat-value">{stats.hoursCompleted}h</span>
          <span className="stat-label">
            <Clock size={16} style={{ display: 'inline', marginRight: '4px' }} />
            Hours Learned
          </span>
        </div>
        
        <div className="stat-card">
          <span className="stat-value">{progress.stats.streak}</span>
          <span className="stat-label">
            <Target size={16} style={{ display: 'inline', marginRight: '4px' }} />
            Day Streak
          </span>
        </div>
        
        <div className="stat-card">
          <span className="stat-value">{stats.completionPercentage}%</span>
          <span className="stat-label">Overall Progress</span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${stats.completionPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Continue Learning Section */}
      {(progress.completedLessons.length > 0 || progress.currentCourse) && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
          <div className="course-card" style={{ maxWidth: '600px' }}>
            <div className="course-card-header">
              <span className="course-card-icon" style={{ color: recommendedCourse.color }}>
                {recommendedCourse.icon}
              </span>
              <div>
                <h3 className="course-card-title">{recommendedCourse.title}</h3>
                <p className="text-sm text-muted mt-1">
                  {getCourseProgress(recommendedCourse).completed} of {getCourseProgress(recommendedCourse).total} lessons completed
                </p>
              </div>
            </div>
            <div className="progress-bar mb-4">
              <div 
                className="progress-fill" 
                style={{ width: `${getCourseProgress(recommendedCourse).percentage}%` }}
              />
            </div>
            <Link to={getContinueLearningLink()} className="btn btn-primary">
              <Play size={16} />
              Continue Learning
            </Link>
          </div>
        </div>
      )}

      {/* All Courses */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">All Courses</h2>
        <div className="courses-grid">
          {courses.map((course) => {
            const courseProgress = getCourseProgress(course);
            const isStarted = courseProgress.completed > 0;
            const isCompleted = courseProgress.completed === courseProgress.total;
            
            return (
              <Link
                key={course.id}
                to={`/course/${course.id}`}
                className="course-card"
              >
                <div className="course-card-header">
                  <span className="course-card-icon" style={{ color: course.color }}>
                    {course.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="course-card-title">{course.title}</h3>
                    {isCompleted && (
                      <span className="text-sm" style={{ color: 'var(--success-color)' }}>
                        ✓ Completed
                      </span>
                    )}
                    {isStarted && !isCompleted && (
                      <span className="text-sm" style={{ color: 'var(--primary-color)' }}>
                        📚 In Progress
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="course-card-description">{course.description}</p>
                
                <div className="course-card-meta">
                  <span>{course.totalLessons} lessons</span>
                  <span>~{course.estimatedHours} hours</span>
                </div>
                
                {isStarted && (
                  <div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${courseProgress.percentage}%` }}
                      />
                    </div>
                    <div className="text-sm text-muted mt-1">
                      {courseProgress.completed} of {courseProgress.total} lessons • {courseProgress.percentage}%
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Getting Started Guide */}
      {progress.completedLessons.length === 0 && (
        <div className="mb-6">
          <div className="course-card" style={{ maxWidth: '600px' }}>
            <h3 className="text-lg font-semibold mb-3">🌟 Getting Started</h3>
            <p className="text-secondary mb-4">
              Welcome to your full-stack development journey! Here's what you'll learn:
            </p>
            <ul className="space-y-2 text-sm text-secondary mb-4">
              <li>• <strong>HTML</strong> - Structure and markup for web pages</li>
              <li>• <strong>CSS</strong> - Styling, layout, and responsive design</li>
              <li>• <strong>JavaScript</strong> - Programming logic and interactivity</li>
              <li>• <strong>TypeScript</strong> - Type-safe JavaScript development</li>
              <li>• <strong>React</strong> - Modern UI component framework</li>
              <li>• <strong>Three.js</strong> - 3D graphics and animations</li>
              <li>• <strong>Python</strong> - Backend development and data science</li>
            </ul>
            <Link to="/course/html" className="btn btn-primary">
              <Play size={16} />
              Start with HTML Basics
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;