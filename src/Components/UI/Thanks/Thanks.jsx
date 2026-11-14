import classes from './Thanks.module.css'

const Thanks = ({ title = 'Заголовок', body = 'описание...'}) => {
  return (
    <div className={classes.thanks}>
      <p className="h2">{title}</p>
      {body && <p className="text-sm">{body}</p>}
    </div>
  );
};

export default Thanks;
