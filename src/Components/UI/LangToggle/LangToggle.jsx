// UI/LangSwitch/LangSwitch.jsx
import classes from './LangToggle.module.css';
import { Link, useLocation } from 'react-router-dom';

const LANGS = [
  { code: 'ru', img: 'ru' },
  { code: 'en', img: 'en' },
  { code: 'vn', img: 'vn' },
];

// убирает любой языковой префикс и ставит нужный
const buildPath = (pathname, lang) => {
  const clean = pathname.replace(/^\/(en|vn)/, '') || '/';
  return lang === 'ru' ? clean : `/${lang}${clean === '/' ? '' : clean}`;
};

const LangToggle = () => {
  const { pathname } = useLocation();

  return (
    <div className={classes.toggle}>
      {LANGS.map(({ code, img }) => {
        const isActive = code === 'ru'
          ? !/^\/(en|vn)/.test(pathname)
          : pathname.startsWith(`/${code}`);

        return (
          <Link key={code} className={`${classes.imgBtn} hover`} to={buildPath(pathname, code)}>
            {img}
            {/* <img
              className={`${classes.img} ${isActive ? '' : classes.dim}`}
              src={img}
              alt={code.toUpperCase()}
            /> */}
          </Link>
        );
      })}
    </div>
  );
};

export default LangToggle;
