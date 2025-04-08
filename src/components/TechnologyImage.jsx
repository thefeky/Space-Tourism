import styles from "./TechnologyImage.module.css";
import Spinner from "./Spinner";

function TechnologyImage({ tech }) {
  if (!tech) return <Spinner />;

  const { name } = tech;

  return (
    <div className={styles.imageWrapper}>
      <img src={tech.images.portrait} alt={name} />
    </div>
  );
}

export default TechnologyImage;
