import styles from "./CrewNavBar.module.css";
import { NavLink } from "react-router-dom";

function CrewNavBar({ crew }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {crew.map((crewMember) => (
          <li key={crewMember.name}>
            <NavLink
              to={`/crew/${crewMember.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            ></NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CrewNavBar;
