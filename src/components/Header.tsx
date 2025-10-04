import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Settings, Sun, Moon } from 'lucide-react';
import type { UserProgress } from '../utils/storage';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  progress: UserProgress;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen, progress }) => {
  const toggleTheme = () => {
    // This will be handled by the parent component
  };

  return (
    <header className="header">
      <div className="header-left">
        <button 
          className="menu-button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle navigation menu"
        >
          <Menu size={20} />
        </button>
        <Link to="/" className="logo">
          📚 FullStack Academy
        </Link>
      </div>
      
      <div className="header-right">
        <div className="progress-summary">
          <span className="text-sm text-muted">
            {progress.completedLessons.length} lessons completed
          </span>
        </div>
        
        <button 
          className="btn btn-secondary btn-sm"
          onClick={toggleTheme}
          aria-label={`Switch to ${progress.preferences.theme === 'light' ? 'dark' : 'light'} theme`}
        >
          {progress.preferences.theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
        
        <Link to="/settings" className="btn btn-secondary btn-sm">
          <Settings size={16} />
          <span className="sr-only">Settings</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;