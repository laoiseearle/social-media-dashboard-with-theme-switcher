import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { socialSites } from '../data';
import { cardBackgroundColor, secondaryTextColor } from '../theme';
import './socials.css';

export const Socials = () => {
  const { theme } = useContext(ThemeContext);

  const borderStyle = x => {
    if (x.borderGradient) {
      return { backgroundImage: x.borderColor };
    } else {
      return { backgroundColor: x.borderColor };
    }
  };

  const getTheme = name => (theme === 'dark' ? name.dark : name.light);

  return (
    <section className="social-sites">
      {socialSites.map(site => (
        <div
          className="site"
          key={site.id}
          style={getTheme(cardBackgroundColor)}
        >
          <div className="site-border" style={borderStyle(site)}></div>
          <div className="top-card">
            <img className="icon" src={site.logo} alt="" />
            <p>{site.username}</p>
          </div>

          <div className="center-card">
            <h1 style={getTheme(secondaryTextColor)}>{site.total}</h1>
            <h3>{site.subName}</h3>
          </div>

          <div
            className="bottom-card"
            style={{ color: site.increasedChange ? '#1db489' : '#dc414c' }}
          >
            <img
              src={
                site.increasedChange
                  ? './images/icon-up.svg'
                  : './images/icon-down.svg'
              }
              alt=""
            />
            <p>{site.dailyChange} Today</p>
          </div>
        </div>
      ))}
    </section>
  );
};
