import styles from "./CrewMemberImage.module.css";
import Spinner from "../Shared/Spinner";

function CrewMemberImage({ crewMember }) {
  if (!crewMember) return <Spinner />;

  const { name, image } = crewMember;

  return (
    <div className={styles.imageWrapper}>
      <img src={image} alt={name} />
    </div>
  );
}

export default CrewMemberImage;
