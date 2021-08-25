import React from 'react';
import { socialSites } from '../data';

export const Socials = () => {
  return (
    <section className="social-sites">
      {socialSites.map(site => (
        <div className="site" key={site.id}>
          <p>{site.username}</p>
          <h1>{site.total}</h1>
          <h3>{site.subName}</h3>
          <p>{site.dailyChange}</p>
        </div>
      ))}
    </section>
  );
};
