import classes from './RoutesSection.module.css';
import Btn from '../../Components/UI/Btn/Btn';

const RoutesSection = ({ t, onBook }) => {
  return (
    <div className='section line-dark'>
      <div className="container">
        <div className="content">
          <h2 className='h2'>{t.title}</h2>

          <ul className={classes.list}>
            {t.items.map(item => (
              <li key={item.id} className={classes.card}>
                <h3 className='h3'>{item.name}</h3>
                <p className='text-sm'>{item.duration} · {item.price}</p>

                <ul className={classes.includes}>
                  {item.includes.map(inc => (
                    <li key={inc} className='text-sm'>{inc}</li>
                  ))}
                </ul>

                <Btn isColor='dark' size='sm' onClick={onBook}>
                  {t.btn}
                </Btn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoutesSection;
