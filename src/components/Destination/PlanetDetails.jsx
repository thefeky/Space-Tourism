import styles from "./PlanetDetails.module.css";
import Spinner from "../Shared/Spinner";

function PlanetDetails({ planet }) {
  if (!planet) return <Spinner />;

  const { name, description, distance, travel } = planet;

  return (
    <div className={styles.details}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.stats}>
        <div className={styles.distance}>
          <span>Avg. Distance</span>
          <p>{distance}</p>
        </div>
        <div className={styles.travel}>
          <span>Est. Travel Time</span>
          <p>{travel}</p>
        </div>
      </div>
    </div>
  );
}

export default PlanetDetails;
