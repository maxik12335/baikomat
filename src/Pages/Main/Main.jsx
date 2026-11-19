// Pages/Main/Main.jsx
import { useLocation } from 'react-router-dom';
import { getLang } from '../../data/langs';
import { CONTENT } from '../../data/content';
import MainSection from '../../Section/MainSection/MainSection';
import CatalogSection from '../../Section/CatalogSection/CatalogSection';
import StepsSection from '../../Section/StepsSection/StepsSection';
import RulesSection from '../../Section/RulesSection/RulesSection';

const Main = () => {
  const lang = getLang(useLocation().pathname);
  const t = CONTENT[lang];

  return (
    <>
      <MainSection t={t.main} />
      <CatalogSection t={t.catalog} />
      <StepsSection t={t.steps} />
      <RulesSection t={t.rentalRules} />
    </>
  )
};

export default Main;
