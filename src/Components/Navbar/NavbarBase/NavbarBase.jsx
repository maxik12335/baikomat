import classes from "./NavbarBase.module.css"
import { NavLink, useLocation } from "react-router-dom";
import MobileMenu from "../../MobileMenu/MobileMenu";
import { CONTENT } from "../../../data/content";
import { getLang } from "../../../data/langs";
import LangToggle from '../../UI/LangToggle/LangToggle'
import { useNavColor } from '../../../utils/navbar'


const NavbarBase = () => {
  const { navColor, textColor } = useNavColor();
  const { pathname } = useLocation();
  const links = CONTENT[getLang(pathname)].nav;
// на главной показываем только «экстрим», на заездах — только «главная»
  const isOnRides = pathname.includes('/rides');
  const visibleLinks = links.filter(link =>
    isOnRides ? !link.to.includes('/rides') : link.to.includes('/rides')
  );
  
  return (
   <div className={`${classes.navbar} line-dark`}>
      <div className="container-navbar">

        <div className={classes.desctopMenu}>
          <p className="text-base" style={{ color: textColor }}>baikomat</p>
          <LangToggle style={{ color: textColor }}/>
          <div className={classes.menu}>
            {visibleLinks.map(link => (
              <NavLink key={link.to} className="text-sm hover" style={{ color: textColor }} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <MobileMenu />

      </div>
    </div>
  )
}

export default NavbarBase;