import React, { useContext } from 'react';
import { ThemeContext } from '../App';

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <header>
      <div className="header-info">
        <h1>Social Media Dashboard</h1>
        <h3>Total Followers: 23,0004</h3>
      </div>

      <div className="header-theme">
        <h3>Dark Mode</h3>
        <input
          className="theme-toggle"
          type="checkbox"
          onChange={handleThemeToggle}
          checked={theme === 'dark'}
        />
      </div>
    </header>
  );
};
