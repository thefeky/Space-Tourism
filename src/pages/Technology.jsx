import styles from "./Technology.module.css";
import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { useNavigate, useParams } from "react-router-dom";
import TechnologyImage from "../components/TechnologyImage";
import TechnologyDetails from "../components/TechnologyDetails";
import TechnologyNavBar from "../components/TechnologyNavBar";

function Technology() {
  const [techs, setTechs] = useState([]);
  const { techName } = useParams();
  const navigate = useNavigate();

  const normalize = (str) => str.toLowerCase().replace(/\s+/g, "-");

  const tech = techs.find(
    (c) => normalize(c.name) === (techName || "launch-vehicle")
  );

  useEffect(() => {
    async function fetchTechs() {
      if (!tech) {
        navigate("/technology/launch-vehicle", { replace: true });
      }

      try {
        const res = await fetch("/assets/technology.json");
        const data = await res.json();
        setTechs(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchTechs();
  }, [tech, navigate]);
  return (
    <main className={styles.main}>
      <NavigationBar />
      <div className={styles.contentWrapper}>
        <p className={styles.title}>
          <strong>03</strong> Space launch 101
        </p>
        <div className={styles.content}>
          <div className={styles.left}>
            <TechnologyNavBar techs={techs} />
            <TechnologyDetails tech={tech} />
          </div>
          <div className={styles.right}>
            <TechnologyImage tech={tech} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Technology;
