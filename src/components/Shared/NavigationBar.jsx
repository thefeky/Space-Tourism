import { useState } from "react";
import styles from "./NavigationBar.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import hamburgerIcon from "../../../public/assets/shared/icon-hamburger.svg";
import closeIcon from "../../../public/assets/shared/icon-close.svg";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.navbar}>
      <Logo />
      <div className={styles.hamburgerWrapper} onClick={toggleMenu}>
        <img
          src={isMenuOpen ? closeIcon : hamburgerIcon}
          alt={isMenuOpen ? "Close menu" : "Open menu"}
          className={styles.hamburgerIcon}
        />
      </div>
      <div className={styles.line}></div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={toggleMenu}
            >
              <strong>00</strong> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={toggleMenu}
            >
              <strong>01</strong> Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={toggleMenu}
            >
              <strong>02</strong> Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={toggleMenu}
            >
              <strong>03</strong> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
