import styles from "./Crew.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavigationBar from "../components/Shared/NavigationBar";
import CrewMemberImage from "../components/Crew/CrewMemberImage";
import CrewMemberDetails from "../components/Crew/CrewMemberDetails";
import CrewNavBar from "../components/Crew/CrewNavBar";
import Footer from "../components/Shared/Footer";

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
        const res = await fetch("/assets/data.json");
        const data = await res.json();
        setCrew(data.crew);
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
          <div className={styles.first}>
            <CrewMemberDetails crewMember={crewMember} />

            <CrewNavBar crew={crew} />
          </div>
          <div className={styles.second}>
            <CrewMemberImage crewMember={crewMember} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Crew;
