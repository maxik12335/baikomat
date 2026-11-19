// Pages/Rides/Rides.jsx
import { useLocation } from 'react-router-dom';
import { getLang } from '../../data/langs';
import { CONTENT } from '../../data/content';
import Footer from '../../Components/Footer/Footer';


const Rides = () => {
  const lang = getLang(useLocation().pathname);
  const t = CONTENT[lang];

  return (
    <div>
      <Footer t={t.footer}/>
    </div>
  )
};

export default Rides;
