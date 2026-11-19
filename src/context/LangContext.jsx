// src/context/LangContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'ru');

  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = (newLang) => setLang(newLang);

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
