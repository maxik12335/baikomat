import classes from './Footer.module.css';
import Btn from '../UI/Btn/Btn';

const Footer = ({ t }) => {
  return (
    <footer className={`${classes.section} section--dark`}>
      <div className={`${classes.container} container-navbar`}>
        <div className="content">
          
          <div className={`${classes.textsBox} ${classes.top}`}>
            <h2 className="h2">{t.title}</h2>
            <p className="text-sm">
              {t.tagline}
            </p>
          </div>

          <div className={classes.textsBox}>
            {/* <h3 className="h3">{t.contactsLabel}</h3> */}

            <div className={classes.texts}>
              <address className="text-sm">{t.address}</address>
              <a
                className="text-sm hover"
                href={`tel:${t.phone.replace(/\s/g, '')}`}
              >{t.phone}</a>
              <a
                className="text-sm hover"
                href={`mailto:${t.email}`}
              >{t.email}</a>
            </div>
          </div>

          <p className={`${classes.footer} text-sm`}>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
