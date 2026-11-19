// Pages/Rides/Rides.jsx
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Rides.module.css';
import { getLang } from '../../data/langs';
import { CONTENT } from '../../data/content';
import StepsRidesSection from '../../Section/StepsRidesSection/StepsRidesSection';
import RidesSection from '../../Section/RidesSection/RidesSection';
import RoutesSection from '../../Section/RoutesSection/RoutesSection';
import EntryModal from '../../Section/EntryModal/EntryModal';
import Footer from '../../Components/Footer/Footer';

const Rides = () => {
  const lang = getLang(useLocation().pathname);
  const t = CONTENT[lang];
  const [isOpenEntry, setIsOpenEntry] = useState(false);

  return (
    <>
      {/* 1. Hero: фото заезда + заголовок */}
      <RidesSection t={t.rides} onBook={() => setIsOpenEntry(true)} />

      {/* 2. Карточки маршрутов */}
      <RoutesSection t={t.rides} onBook={() => setIsOpenEntry(true)} />

      {/* 3. Как проходит — переиспользуем StepsSection */}
      <StepsRidesSection t={t.rides.steps} />

      {/* 4. Модалка брони — по клику */}
      {isOpenEntry &&
        <EntryModal
          t={t.catalog.entry}
          onClose={() => setIsOpenEntry(false)}
        />
      }

      <Footer t={t.footer} />
    </>
  );
};

export default Rides;
