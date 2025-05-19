import { NavLink } from "react-router-dom";
import logo from '../../../public/assets/LOGO.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo Kasa location immobilière" className="header__logo" />
      <nav className="header__menu">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
