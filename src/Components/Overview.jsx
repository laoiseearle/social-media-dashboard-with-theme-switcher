import React from 'react';
import { dailyOverview } from '../data';

export const Overview = () => {
  return (
    <section className="overview">
      <h2>Overview - Today</h2>

      {dailyOverview.map(item => (
        <div className="stat-info" key={item.id}>
          <p>{item.infoType}</p>

          <div className="stat-count">
            <h2>{item.count}</h2>
            <p>{item.dailyChange}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
