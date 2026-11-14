import classes from "./NavbarSetColor.module.css"
import { NavLink } from "react-router-dom";
import MobileMenu from "../../MobileMenu/MobileMenu";
import { NAV_LINKS } from "../../../data/links";
import { useNavColor } from "../../../utils/navbar";


// NAV_LINKS - массив с ссылками в src/data/links.js
// поставить data-nav-text="#fff" data-nav-bg="#000" над блоками какой цвет хотим
// здесь по желанию можно поставить дефолт стили bg-color на .navbar style={{ backgroundColor: navColor }}

const NavbarSetColor = () => {
  const { navColor, textColor } = useNavColor()
  return (
   <div className={`${classes.navbar} line-dark`}>
      <div className="container-navbar">

        <div className={classes.desctopMenu}>
          <p className="text-base" style={{ color: textColor }}>Балкон 71</p>

          <div className={classes.menu}>
            {NAV_LINKS.map(link => (
              <NavLink key={link.to} className="text-base hover" style={{ color: textColor }} to={link.to}>
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

export default NavbarSetColor;