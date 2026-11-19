import classes from './RoutesSection.module.css';

const RoutesSection = ({ t, onBook }) => {
  return (
    <div className='section line-dark' data-nav-text="#1A1A1A">
      <div className="container">
        <div className="content">
          <h2 className='h2'>{t.title}</h2>

          <ul className={classes.list}>
            {t.items.map(item => (
              <li key={item.id} className={classes.item}>
                <div className={classes.header}>
                  <h3 className='h3'>{item.name}</h3>
                  <p className='text-sm'>{item.duration} · {item.price}</p>
                </div>
                                  
                <ul className={classes.texts}>
                  {item.includes.map(inc => (
                    <li key={inc} className='text-sm'>{inc}</li>
                  ))}
                </ul>

                <button className={classes.button} onClick={onBook}>
                  {t.btn}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoutesSection;
