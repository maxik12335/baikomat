// Pages/Main/Main.jsx
import { useLocation } from 'react-router-dom';
import { getLang } from '../../data/langs';
import { CONTENT } from '../../data/content';
import MainSection from '../../Section/pages/MainSection/MainSection';

const Main = () => {
  const lang = getLang(useLocation().pathname);
  const t = CONTENT[lang].main;

  return <MainSection t={t} />;
};

export default Main;
