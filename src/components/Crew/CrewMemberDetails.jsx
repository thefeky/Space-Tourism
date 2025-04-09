import styles from "./CrewMemberDetails.module.css";
import Spinner from "../Shared/Spinner";

function CrewMemberDetails({ crewMember }) {
  if (!crewMember) return <Spinner />;

  const { name, role, bio } = crewMember;

  return (
    <div className={styles.details}>
      <p className={styles.role}>{role}</p>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
}

export default CrewMemberDetails;
