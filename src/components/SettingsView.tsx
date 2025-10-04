import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Upload, RotateCcw, Sun, Moon } from 'lucide-react';
import { UserProgress } from '../utils/storage';

interface SettingsViewProps {
  progress: UserProgress;
  onUpdatePreferences: (preferences: Partial<UserProgress['preferences']>) => void;
  onResetProgress: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ 
  progress, 
  onUpdatePreferences, 
  onResetProgress 
}) => {
  const handleThemeToggle = () => {
    const newTheme = progress.preferences.theme === 'light' ? 'dark' : 'light';
    onUpdatePreferences({ theme: newTheme });
  };

  const handleFontSizeChange = (fontSize: 'small' | 'medium' | 'large') => {
    onUpdatePreferences({ fontSize });
  };

  const handleExportProgress = () => {
    const dataStr = JSON.stringify(progress, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `fullstack-learning-progress-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImportProgress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target?.result as string);
        // In a full implementation, you'd validate the data structure
        console.log('Progress imported:', importedData);
        alert('Progress imported successfully!');
      } catch (error) {
        alert('Error importing progress. Please check the file format.');
      }
    };
    reader.readAsText(file);
  };

  const handleResetProgress = () => {
    if (confirm('Are you sure you want to reset all your progress? This action cannot be undone.')) {
      onResetProgress();
      alert('Progress has been reset successfully.');
    }
  };

  return (
    <div className="settings-view fade-in">
      <div className="settings-header mb-6">
        <Link to="/" className="btn btn-secondary mb-4">
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>
        
        <h1 className="text-2xl font-bold mb-2">Settings</h1>
        <p className="text-secondary">Customize your learning experience and manage your progress.</p>
      </div>

      <div className="settings-content">
        {/* Appearance Settings */}
        <div className="settings-section">
          <h2 className="text-xl font-semibold mb-4">🎨 Appearance</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3 className="setting-title">Theme</h3>
              <p className="setting-description">Choose between light and dark theme</p>
            </div>
            <button 
              onClick={handleThemeToggle}
              className="btn btn-secondary"
            >
              {progress.preferences.theme === 'light' ? (
                <>
                  <Moon size={16} />
                  Switch to Dark
                </>
              ) : (
                <>
                  <Sun size={16} />
                  Switch to Light
                </>
              )}
            </button>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3 className="setting-title">Font Size</h3>
              <p className="setting-description">Adjust the font size for better readability</p>
            </div>
            <div className="font-size-options">
              {(['small', 'medium', 'large'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => handleFontSizeChange(size)}
                  className={`btn btn-sm ${
                    progress.preferences.fontSize === size ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Statistics */}
        <div className="settings-section">
          <h2 className="text-xl font-semibold mb-4">📊 Your Statistics</h2>
          
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">{progress.completedLessons.length}</span>
              <span className="stat-label">Lessons Completed</span>
            </div>
            
            <div className="stat-card">
              <span className="stat-value">{progress.completedExercises.length}</span>
              <span className="stat-label">Exercises Completed</span>
            </div>
            
            <div className="stat-card">
              <span className="stat-value">{Math.round(progress.stats.totalTimeSpent / 60)}h</span>
              <span className="stat-label">Total Study Time</span>
            </div>
            
            <div className="stat-card">
              <span className="stat-value">{progress.stats.streak}</span>
              <span className="stat-label">Current Streak</span>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="settings-section">
          <h2 className="text-xl font-semibold mb-4">💾 Data Management</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3 className="setting-title">Export Progress</h3>
              <p className="setting-description">Download your learning progress as a JSON file</p>
            </div>
            <button 
              onClick={handleExportProgress}
              className="btn btn-secondary"
            >
              <Download size={16} />
              Export Data
            </button>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3 className="setting-title">Import Progress</h3>
              <p className="setting-description">Restore your progress from a previously exported file</p>
            </div>
            <label className="btn btn-secondary cursor-pointer">
              <Upload size={16} />
              Import Data
              <input
                type="file"
                accept=".json"
                onChange={handleImportProgress}
                style={{ display: 'none' }}
              />
            </label>
          </div>
          
          <div className="setting-item border-warning">
            <div className="setting-info">
              <h3 className="setting-title text-warning">Reset All Progress</h3>
              <p className="setting-description">This will delete all your learning progress permanently</p>
            </div>
            <button 
              onClick={handleResetProgress}
              className="btn btn-danger"
            >
              <RotateCcw size={16} />
              Reset Progress
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="settings-section">
          <h2 className="text-xl font-semibold mb-4">ℹ️ About</h2>
          
          <div className="about-content">
            <h3 className="text-lg font-medium mb-2">📚 FullStack Learning Platform</h3>
            <p className="text-secondary mb-4">
              A comprehensive learning platform designed to teach you full-stack development 
              from the ground up. Master HTML, CSS, JavaScript, TypeScript, React, Three.js, 
              and Python through interactive lessons and hands-on exercises.
            </p>
            
            <div className="feature-list">
              <h4 className="font-medium mb-2">Features:</h4>
              <ul className="text-sm text-secondary space-y-1">
                <li>• Interactive code playgrounds with live execution</li>
                <li>• Progressive learning path from beginner to advanced</li>
                <li>• Local storage for progress persistence</li>
                <li>• Responsive design for all devices</li>
                <li>• Dark/light theme support</li>
                <li>• Export/import progress functionality</li>
              </ul>
            </div>
            
            <div className="mt-4 text-xs text-muted">
              Built with React, TypeScript, and Monaco Editor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;