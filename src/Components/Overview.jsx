import { React, useContext } from 'react';
import { dailyOverview } from '../data';
import { ThemeContext } from '../App';
import { cardBackgroundColor, secondaryTextColor } from '../theme';

import './overview.css';

export const Overview = () => {
  const { theme } = useContext(ThemeContext);
  const getTheme = name => (theme === 'dark' ? name.dark : name.light);

  return (
    <section className="overview">
      <h2 className="overview-header" style={getTheme(secondaryTextColor)}>
        Overview - Today
      </h2>

      <div className="overview-card-wrapper">
        {dailyOverview.map(item => (
          <div
            className="overview-card"
            key={item.id}
            style={getTheme(cardBackgroundColor)}
          >
            <div className="overview-card-top">
              <p>{item.infoType}</p>
              <img src={item.logo} alt="" />
            </div>

            <div className="overview-card-bottom">
              <h2 style={getTheme(secondaryTextColor)}>{item.count}</h2>

              <div
                className="percentage"
                style={{ color: item.increasedChange ? '#1db489' : '#dc414c' }}
              >
                <img
                  src={
                    item.increasedChange
                      ? './images/icon-up.svg'
                      : './images/icon-down.svg'
                  }
                  alt=""
                />
                <p>{item.dailyChange}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
