export interface UserProgress {
  completedLessons: string[];
  currentCourse: string | null;
  currentLesson: string | null;
  completedExercises: string[];
  preferences: {
    theme: 'light' | 'dark';
    fontSize: 'small' | 'medium' | 'large';
    language: string;
  };
  stats: {
    totalTimeSpent: number; // in minutes
    streak: number; // consecutive days
    lastStudyDate: string;
    coursesStarted: string[];
    coursesCompleted: string[];
  };
}

const STORAGE_KEY = 'fullstack-learning-progress';

const defaultProgress: UserProgress = {
  completedLessons: [],
  currentCourse: null,
  currentLesson: null,
  completedExercises: [],
  preferences: {
    theme: 'light',
    fontSize: 'medium',
    language: 'en'
  },
  stats: {
    totalTimeSpent: 0,
    streak: 0,
    lastStudyDate: '',
    coursesStarted: [],
    coursesCompleted: []
  }
};

export class ProgressStorage {
  static getProgress(): UserProgress {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Merge with defaults to ensure all properties exist
        return { ...defaultProgress, ...parsed };
      }
    } catch (error) {
      console.warn('Error loading progress from localStorage:', error);
    }
    return defaultProgress;
  }

  static saveProgress(progress: UserProgress): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress to localStorage:', error);
    }
  }

  static markLessonComplete(lessonId: string): void {
    const progress = this.getProgress();
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
      this.saveProgress(progress);
    }
  }

  static markExerciseComplete(exerciseId: string): void {
    const progress = this.getProgress();
    if (!progress.completedExercises.includes(exerciseId)) {
      progress.completedExercises.push(exerciseId);
      this.saveProgress(progress);
    }
  }

  static setCurrentLesson(courseId: string, lessonId: string): void {
    const progress = this.getProgress();
    progress.currentCourse = courseId;
    progress.currentLesson = lessonId;
    
    // Add course to started courses if not already there
    if (!progress.stats.coursesStarted.includes(courseId)) {
      progress.stats.coursesStarted.push(courseId);
    }
    
    this.saveProgress(progress);
  }

  static updatePreferences(preferences: Partial<UserProgress['preferences']>): void {
    const progress = this.getProgress();
    progress.preferences = { ...progress.preferences, ...preferences };
    this.saveProgress(progress);
  }

  static addStudyTime(minutes: number): void {
    const progress = this.getProgress();
    progress.stats.totalTimeSpent += minutes;
    
    const today = new Date().toDateString();
    const lastStudyDate = progress.stats.lastStudyDate;
    
    if (lastStudyDate === today) {
      // Same day, no streak change
    } else if (lastStudyDate === new Date(Date.now() - 86400000).toDateString()) {
      // Yesterday, increment streak
      progress.stats.streak += 1;
    } else if (lastStudyDate !== today) {
      // Different day, reset streak
      progress.stats.streak = 1;
    }
    
    progress.stats.lastStudyDate = today;
    this.saveProgress(progress);
  }

  static getCourseProgress(courseId: string): {
    completedLessons: number;
    totalLessons: number;
    percentage: number;
  } {
    const progress = this.getProgress();
    // This will be calculated based on the curriculum data
    // For now, return a placeholder
    return {
      completedLessons: progress.completedLessons.filter(id => id.startsWith(courseId)).length,
      totalLessons: 0, // Will be calculated from curriculum
      percentage: 0
    };
  }

  static resetProgress(): void {
    localStorage.removeItem(STORAGE_KEY);
  }

  static exportProgress(): string {
    return JSON.stringify(this.getProgress(), null, 2);
  }

  static importProgress(data: string): boolean {
    try {
      const progress = JSON.parse(data) as UserProgress;
      // Validate the structure
      if (progress && typeof progress === 'object') {
        this.saveProgress(progress);
        return true;
      }
    } catch (error) {
      console.error('Error importing progress:', error);
    }
    return false;
  }
}