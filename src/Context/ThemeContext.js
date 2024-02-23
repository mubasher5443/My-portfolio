import React, { useState } from 'react';
import { ThemeProvider } from './Darkmode';

const themes = {
  light: {
    name: "light",
    data: {
      backgroundColor: "white",
      color: 'black',
    }

  },
  dark: {
    name: "dark",
    data: {
      backgroundColor: '#121212',
      color: 'white',
    }

  },
};

export const ThemeProviderComponent = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeProvider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeProvider>
  );
};
