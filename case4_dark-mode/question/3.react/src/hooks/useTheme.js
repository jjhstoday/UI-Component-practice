import { useState, useEffect } from 'react';

const resolveTheme = () => {
  let theme = localStorage.getItem('theme');

  if (!theme) {
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
    theme = matches ? 'dark' : 'light';
  }

  return theme;
};

const useTheme = () => {
  const [theme, setTheme] = useState(resolveTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return [theme, toggleTheme];
};

export default useTheme;
