import React from 'react';
import { useState } from 'react';
import { Header } from './Components/Header';
import { Socials } from './Components/Socials';
import { Overview } from './Components/Overview';
import './app.css';

export const ThemeContext = React.createContext();

export const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <Header />
        <Socials />
        <Overview />
      </div>
    </ThemeContext.Provider>
  );
};
