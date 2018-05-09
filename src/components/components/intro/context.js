import React from 'react';
export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };
  let count={
    counter:0,
    toggleTheme:null
  }

  export const ThemeContext = React.createContext({count});