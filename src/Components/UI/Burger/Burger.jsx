import classes from './Burger.module.css'

const Burger = ({...props}) => {
  return (
    <div className={classes.burger}>
      <span {...props}></span>
      <span {...props}></span>
      <span {...props}></span>
    </div>
  )
}

export default Burger;