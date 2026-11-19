import classes from './RidesSection.module.css';
import Btn from '../../Components/UI/Btn/Btn';
import video from '../../assets/video.mp4';

const RidesSection = ({ t, onBook }) => {

  return (
    <div className="section-video section line-dark" data-nav-text="#f7f7f7">
       <video
        className={`${classes.img} video-fon`}
        src={video}
        autoPlay
        muted
        loop
        playsInline
        poster={t.hero.img}
      />
      <div className="container">

        <div className={classes.texts}>
          <h1 className='h1'>{t.hero.title}</h1>
          <p className='text-base'>{t.hero.subtitle}</p>
          <Btn isColor='light' size='md' anchor="#catalog" style={{marginTop: '24px'}} onClick={onBook}>{t.btn}</Btn>
        </div>
      </div>
    </div>
  );
};

export default RidesSection;
