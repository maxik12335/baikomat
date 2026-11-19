import classes from './MainSection.module.css';
import Btn from '../../Components/UI/Btn/Btn';
import imgMain from '../../assets/main.png';

const MainSection = ({ t }) => {
  return (
    <div className={`${classes.section} section line-dark`}>
      <img className={classes.imgMain} src={imgMain} alt="" />
      <div className="container">
        <div className={`${classes.content} content`}>
          <div className={classes.header}>
            <h1 className='h1 line-dark-text'>{t.title}</h1>
            <p className='text-base'>{t.subtitle}</p>
          </div>

          <Btn isColor='dark' anchor="#catalog">{t.btn}</Btn>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
