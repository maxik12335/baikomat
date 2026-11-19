// Pages/Rides/Rides.jsx
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Rides.module.css';
import { getLang } from '../../data/langs';
import { CONTENT } from '../../data/content';
import StepsSection from '../../Section/StepsSection/StepsSection';
import RidesSection from '../../Section/RidesSection/RidesSection';
import RoutesSection from '../../Section/RoutesSection/RoutesSection';
import EntryModal from '../../Section/EntryModal/EntryModal';
import Footer from '../../Components/Footer/Footer';

const Rides = () => {
  const lang = getLang(useLocation().pathname);
  const t = CONTENT[lang];
  const entry = t.catalog.entry; // данные брони — те же, что в каталоге
  const [isOpenEntry, setIsOpenEntry] = useState(false);

  return (
    <>
      {/* 1. Hero: фото заезда + заголовок */}
      <RidesSection t={t.rides} />

      {/* 2. Карточки маршрутов */}
      <RoutesSection t={t.rides} onBook={() => setIsOpenEntry(true)} />

      {/* 3. Как проходит — переиспользуем StepsSection */}
      <StepsSection t={t.rides.steps} />

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
