import classes from './BannerSection.module.css';
import Btn from '../../Components/UI/Btn/Btn';

const BannerSection = ({ t }) => {
  return (
    <div className={`${classes.section} section`}>
      <div className="container">
        <div className={classes.textsBox}>          
          <div className={classes.texts}>
            <h2 className='h2'>{t.title}</h2>
            <p className={`${classes.text} text-sm`}>{t.text}</p>
            <Btn isColor='dark' size='sm' to={t.to}>
              {t.btn}
            </Btn>
          </div>

          <img className={classes.img} src={t.img} alt={t.title} />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;