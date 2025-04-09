import styles from "./TechnologyNavBar.module.css";
import { NavLink } from "react-router-dom";

function TechnologyNavBar({ techs }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {techs.map((tech, index) => (
          <li key={tech.name}>
            <NavLink
              to={`/technology/${tech.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <span>{index + 1}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TechnologyNavBar;
