// Pages/Main/Main.jsx
import { useLocation } from 'react-router-dom';
import { getLang } from '../../data/langs';
import { CONTENT } from '../../data/content';
import MainSection from '../../Section/pages/MainSection/MainSection';
import CatalogSection from '../../Section/pages/CatalogSection/CatalogSection';
import StepsSection from '../../Section/StepsSection/StepsSection';

const Main = () => {
  const lang = getLang(useLocation().pathname);
  const t = CONTENT[lang];

  return (
    <>
      <MainSection t={t.main} />
      <CatalogSection t={t.catalog} />
      <StepsSection t={t.steps} />
    </>
  )
};

export default Main;
