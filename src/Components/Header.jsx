import React from 'react';

export const Header = () => {
  return (
    <header>
      <div className="header-info">
        <h1>Social Media Dashboard</h1>
        <h3>Total Followers: 23,0004</h3>
      </div>

      <div className="header-theme">
        <h3>Dark Mode</h3>
        <button className="theme-toggle" />
      </div>
    </header>
  );
};
