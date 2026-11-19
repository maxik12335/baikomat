import classes from './RulesSection.module.css';

const RulesSection = ({ t }) => {
  return (
    <div className="section line-dark" data-nav-text="#1A1A1A">
      <div className="container">
        <div className="content">
          <h2 className='h2'>{t.title}</h2>

          <ul className={classes.list}>
            {t.items.map(rule => (
              // <li key={rule.id} className={classes.item}>
              <li key={rule.id} className={`${classes.item} line-dark`}>
                <h3 className="h3">{rule.label}</h3>
                <p className="text-sm">{rule.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RulesSection;
