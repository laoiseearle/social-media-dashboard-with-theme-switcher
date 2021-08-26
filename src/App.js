import React from 'react';
import { useState } from 'react';
import { Header } from './Components/Header';
import { Socials } from './Components/Socials';
import { Overview } from './Components/Overview';
import { backgroundColor } from './theme.js';
import './app.css';

export const ThemeContext = React.createContext();

export const App = () => {
  const [theme, setTheme] = useState('dark');

  const getTheme = name => (theme === 'dark' ? name.dark : name.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={getTheme(backgroundColor)} className="App">
        <div className="wrapper">
          <Header />
          <Socials />
          <Overview />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
