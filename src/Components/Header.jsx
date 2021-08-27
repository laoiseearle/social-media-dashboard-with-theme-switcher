import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { secondaryTextColor, headerColor } from '../theme';
import './header.css';

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const getTheme = name => (theme === 'dark' ? name.dark : name.light);

  return (
    <header style={getTheme(headerColor)}>
      <div className="header-wrapper">
        <div className="header-info">
          <h1 style={getTheme(secondaryTextColor)}>Social Media Dashboard</h1>
          <h3>Total Followers: 23,004</h3>
        </div>

        <hr style={getTheme(secondaryTextColor)} />

        <div className="header-theme">
          <h3>Dark Mode</h3>
          <label className="switch">
            <input
              type="checkbox"
              onChange={handleThemeToggle}
              checked={theme === 'dark'}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </header>
  );
};
