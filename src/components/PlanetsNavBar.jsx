import { NavLink } from "react-router-dom";
import styles from "./PlanetsNavBar.module.css";

function PlanetsNavBar({ planets }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {planets.map((planet) => (
          <li key={planet.name}>
            <NavLink
              to={`/destination/${planet.name.toLowerCase()}`}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {planet.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PlanetsNavBar;
