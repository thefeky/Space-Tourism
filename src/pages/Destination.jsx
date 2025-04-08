import styles from "./Destination.module.css";
import NavigationBar from "../components/NavigationBar";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PlanetImage from "../components/PlanetImage";
import PlanetDetails from "../components/PlanetDetails";
import PlanetsNavBar from "../components/PlanetsNavBar";

function Destination() {
  const [planets, setPlanets] = useState([]);
  const { planetName } = useParams();
  const navigate = useNavigate();

  const planet = planets.find((p) => p.name === (planetName || "moon"));

  useEffect(() => {
    async function fetchPlanets() {
      if (!planetName) {
        navigate("/destination/moon", { replace: true });
      }

      try {
        const res = await fetch("/assets/destinations.json");
        const data = await res.json();
        setPlanets(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchPlanets();
  }, [planetName, navigate]);

  return (
    <main className={styles.main}>
      <NavigationBar />
      <div className={styles.contentWrapper}>
        <p className={styles.title}>
          <strong>01</strong> Pick your destination
        </p>
        <div className={styles.content}>
          <div className={styles.left}>
            <PlanetImage planet={planet} />
          </div>
          <div className={styles.right}>
            <PlanetsNavBar planets={planets} />
            <PlanetDetails planet={planet} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Destination;
