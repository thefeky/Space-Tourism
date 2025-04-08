import styles from "./TechnologyDetails.module.css";
import Spinner from "./Spinner";

function TechnologyDetails({ tech }) {
  if (!tech) return <Spinner />;

  const { name, description } = tech;

  return (
    <div className={styles.details}>
      <p className={styles.term}>The terminology...</p>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default TechnologyDetails;
