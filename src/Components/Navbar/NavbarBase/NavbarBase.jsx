import classes from "./NavbarBase.module.css"
import { NavLink, useLocation } from "react-router-dom";
import MobileMenu from "../../MobileMenu/MobileMenu";
import { CONTENT } from "../../../data/content";
import { getLang } from "../../../data/langs";
import LangToggle from '../../UI/LangToggle/LangToggle'


const NavbarBase = () => {
  const { pathname } = useLocation();
  const links = CONTENT[getLang(pathname)].nav;
  
  return (
   <div className={`${classes.navbar} line-dark`}>
      <div className="container-navbar">

        <div className={classes.desctopMenu}>
          <p className="text-base">baikomat</p>
          <LangToggle />
          <div className={classes.menu}>
            {links.map(link => (
              <NavLink key={link.to} className="text-sm hover" to={link.to}>
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