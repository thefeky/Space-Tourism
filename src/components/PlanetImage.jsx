import styles from "./PlanetImage.module.css";
import Spinner from "./Spinner";

function PlanetImage({ planet }) {
  if (!planet) return <Spinner />;

  const { name, image } = planet;

  return (
    <div className={styles.imageWrapper}>
      <img src={image} alt={name} />
    </div>
  );
}

export default PlanetImage;
