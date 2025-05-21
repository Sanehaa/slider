'use client';

import React from 'react';

interface ThemeToggleProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkTheme, toggleTheme }) => {
  return (
    <div className="theme-toggle" onClick={toggleTheme} role="button" tabIndex={0}>
      <div className="toggle-handle"></div>
    </div>
  );
};

export default ThemeToggle;