import classes from './StepsRidesSection.module.css';

const StepsRidesSection = ({ t }) => {
  return (
    <div className="section line-dark" data-nav-text="#f7f7f7">
      <div className="container">
        <div className="content">
          <h2 className='h2'>{t.title}</h2>

          <ul className={classes.list}>
            {t.items.map(step => (
              <li key={step.id} className={classes.item}>
                {/* <p className={`${classes.step} text-base`}></p> */}
                <div className={`${classes.label} text-base line-light`}>
                  {/* <p>{step.num}</p> */}
                  <p>{step.label}</p>

                </div>
                <p className={`${classes.body} text-sm`}>{step.text}</p>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default StepsRidesSection;
