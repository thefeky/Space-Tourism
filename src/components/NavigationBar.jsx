import Logo from "./Logo";
import styles from "./NavigationBar.module.css";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <Logo />
        <div className={styles.line}></div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <strong>00</strong> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <strong>01</strong> Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <strong>02</strong> Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) => (isActive ? styles.active : "")}
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
