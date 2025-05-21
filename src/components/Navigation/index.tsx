'use client';

import React from 'react';
import ThemeToggle from '../ThemeToggle';

interface NavigationProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDarkTheme, toggleTheme }) => {
  return (
    <div className="navigation">
      <a href="#" className="nav-item">writing</a>
      <a href="#" className="nav-item">speaking</a>
      <a href="#" className="nav-item">workshop</a>
      <a href="#" className="nav-item">playing</a>
      <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Navigation;