// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

// обернуть всё в App.js
{/* <HashRouter >
  <ThemeProvider>
    <ScrollToTop />
    <Navbar />
    <AppRouter />
    <Footer />
  </ThemeProvider>
</HashRouter> */}

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // при старте читаем сохранённую тему, иначе — синяя по умолчанию
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'blue');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'blue' ? 'base' : 'blue'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
