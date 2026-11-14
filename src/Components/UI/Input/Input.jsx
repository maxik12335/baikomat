import classes from './Input.module.css';

const Input = ({error, ...props}) => {
  return (
    <div className={classes.field}>
      <input
        className={`${classes.input} text-sm ${error ? classes.error : ''}`}
        {...props}
      />
      {error && <span className={`${classes.errorText} text-sm`}>{error}</span>}
    </div>
  );
};

export default Input;
