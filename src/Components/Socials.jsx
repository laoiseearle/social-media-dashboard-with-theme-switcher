import React from 'react';
import { socialSites } from '../data';
import './socials.css';

export const Socials = () => {
  return (
    <section className="social-sites">
      {socialSites.map(site => (
        <div className="site" key={site.id}>
          {console.log(site.logo)}

          <div className="top-card">
            <img className="icon" src={site.logo} alt="" />
            <p>{site.username}</p>
          </div>

          <div className="center-card">
            <h1>{site.total}</h1>
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
