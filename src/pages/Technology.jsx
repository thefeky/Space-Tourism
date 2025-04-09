import styles from "./Technology.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavigationBar from "../components/Shared/NavigationBar";
import TechnologyImage from "../components/Technology/TechnologyImage";
import TechnologyDetails from "../components/Technology/TechnologyDetails";
import TechnologyNavBar from "../components/Technology/TechnologyNavBar";
import Footer from "../components/Shared/Footer";

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
      if (!techName) {
        navigate("/technology/launch-vehicle", { replace: true });
      }

      try {
        const res = await fetch("/assets/data.json");
        const data = await res.json();
        setTechs(data.technology);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchTechs();
  }, [techName, navigate]);

  return (
    <main className={styles.main}>
      <NavigationBar />
      <div className={styles.contentWrapper}>
        <p className={styles.title}>
          <strong>03</strong> Space launch 101
        </p>
        <div className={styles.content}>
          <div className={styles.first}>
            <TechnologyImage tech={tech} />
          </div>
          <div className={styles.second}>
            <TechnologyNavBar techs={techs} />
            <TechnologyDetails tech={tech} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Technology;
