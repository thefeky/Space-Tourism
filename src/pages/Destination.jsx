import styles from "./Destination.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavigationBar from "../components/Shared/NavigationBar";
import PlanetImage from "../components/Destination/PlanetImage";
import PlanetDetails from "../components/Destination/PlanetDetails";
import PlanetsNavBar from "../components/Destination/PlanetsNavBar";
import Footer from "../components/Shared/Footer";

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
        const res = await fetch("/assets/data.json");
        const data = await res.json();
        setPlanets(data.destinations);
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
          <div className={styles.first}>
            <PlanetImage planet={planet} />
          </div>
          <div className={styles.second}>
            <PlanetsNavBar planets={planets} />
            <PlanetDetails planet={planet} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Destination;
