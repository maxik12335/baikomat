import classes from "./NavbarBase.module.css"
import { NavLink, useLocation } from "react-router-dom";
import MobileMenu from "../../MobileMenu/MobileMenu";
import { NAV_LINKS_RU, NAV_LINKS_EN, NAV_LINKS_VN } from "../../../data/links";
import LangToggle from '../../UI/LangToggle/LangToggle'

// NAV_LINKS - массив с ссылками в src/data/links.js
// стили для статчиного меню bg-color и color в .navbar

const NavbarBase = () => {
  const { pathname } = useLocation();
  const links = pathname.startsWith('/en')
    ? NAV_LINKS_EN
    : pathname.startsWith('/vn')
    ? NAV_LINKS_VN
    : NAV_LINKS_RU;
  
  return (
   <div className={`${classes.navbar} line-dark`}>
      <div className="container-navbar">

        <div className={classes.desctopMenu}>
          <p className="text-base">baikomat</p>
          <LangToggle />
          <div className={classes.menu}>
            {links.map(link => (
              <NavLink key={link.to} className="text-base hover" to={link.to}>
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