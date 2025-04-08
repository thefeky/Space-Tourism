import styles from "./Crew.module.css";
import NavigationBar from "../components/NavigationBar";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CrewMemberImage from "../components/CrewMemberImage";
import CrewMemberDetails from "../components/CrewMemberDetails";
import CrewNavBar from "../components/CrewNavBar";

function Crew() {
  const [crew, setCrew] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  const normalize = (str) => str.toLowerCase().replace(/\s+/g, "-");

  const crewMember = crew.find(
    (c) => normalize(c.name) === (name || "douglas-hurley")
  );

  useEffect(() => {
    async function fetchCrew() {
      if (!name) {
        navigate("/crew/douglas-hurley", { replace: true });
      }

      try {
        const res = await fetch("/assets/crew.json");
        const data = await res.json();
        setCrew(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchCrew();
  }, [name, navigate]);

  return (
    <main className={styles.main}>
      <NavigationBar />
      <div className={styles.contentWrapper}>
        <p className={styles.title}>
          <strong>02</strong> Meet your crew
        </p>
        <div className={styles.content}>
          <div className={styles.left}>
            <CrewMemberDetails crewMember={crewMember} />

            <CrewNavBar crew={crew} />
          </div>
          <div className={styles.right}>
            <CrewMemberImage crewMember={crewMember} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Crew;
