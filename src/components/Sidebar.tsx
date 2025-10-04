import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Course } from '../data/curriculum';
import { UserProgress } from '../utils/storage';

interface SidebarProps {
  open: boolean;
  courses: Course[];
  progress: UserProgress;
  onCourseSelect: (courseId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, courses, progress, onCourseSelect }) => {
  const location = useLocation();

  const getCourseProgress = (course: Course) => {
    const completedLessons = progress.completedLessons.filter(
      lessonId => lessonId.startsWith(course.id)
    ).length;
    const totalLessons = course.lessons.length;
    const percentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
    
    return {
      completed: completedLessons,
      total: totalLessons,
      percentage: Math.round(percentage)
    };
  };

  const isActiveCourse = (courseId: string) => {
    return location.pathname.includes(`/course/${courseId}`);
  };

  return (
    <aside className={`sidebar ${!open ? 'sidebar-hidden' : ''}`}>
      <div className="sidebar-content">
        <div className="sidebar-section">
          <h2 className="sidebar-title">Learning Path</h2>
          <nav>
            {courses.map((course) => {
              const courseProgress = getCourseProgress(course);
              const isActive = isActiveCourse(course.id);
              
              return (
                <Link
                  key={course.id}
                  to={`/course/${course.id}`}
                  className={`course-item ${isActive ? 'active' : ''}`}
                  onClick={() => onCourseSelect(course.id)}
                >
                  <span className="course-icon" style={{ color: course.color }}>
                    {course.icon}
                  </span>
                  <div className="course-info">
                    <div className="course-title">{course.title.split(' - ')[0]}</div>
                    <div className="course-progress">
                      {courseProgress.completed}/{courseProgress.total} lessons
                      {courseProgress.percentage > 0 && (
                        <span> • {courseProgress.percentage}%</span>
                      )}
                    </div>
                    {courseProgress.percentage > 0 && (
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${courseProgress.percentage}%` }}
                        />
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="sidebar-section">
          <h3 className="sidebar-title">Quick Access</h3>
          <Link to="/" className="course-item">
            <span className="course-icon">🏠</span>
            <div className="course-info">
              <div className="course-title">Dashboard</div>
            </div>
          </Link>
          <Link to="/settings" className="course-item">
            <span className="course-icon">⚙️</span>
            <div className="course-info">
              <div className="course-title">Settings</div>
            </div>
          </Link>
        </div>

        {progress.stats.streak > 0 && (
          <div className="sidebar-section">
            <h3 className="sidebar-title">Your Stats</h3>
            <div className="stat-card">
              <span className="stat-value">{progress.stats.streak}</span>
              <span className="stat-label">Day Streak 🔥</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;