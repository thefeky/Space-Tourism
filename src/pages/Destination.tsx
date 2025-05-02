import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import PlanetImage from "../components/Destination/PlanetImage";
import PlanetDetails from "../components/Destination/PlanetDetails";
import PlanetsNavBar from "../components/Destination/PlanetsNavBar";

interface Planet {
  name: string;
  image: string;
  description: string;
  distance: string;
  travel: string;
}

function Destination() {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const { planetName } = useParams();
  const navigate = useNavigate();

  const planet = planets.find((p) => p.name === (planetName || "moon"));

  useEffect(() => {
    function fetchPlanets() {
      if (!planetName) {
        navigate("/destination/moon", { replace: true });
      }

      axios
        .get("/src/assets/data.json")
        .then((res) => {
          setPlanets(res.data.destinations);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
    fetchPlanets();
  }, [planetName, navigate]);

  return (
    <main className="overflow-y-auto w-screen h-screen bg-[url(/src/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/src/assets/destination/background-destination-tablet.jpg)] xl:bg-[url(/src/assets/destination/background-destination-desktop.jpg)] bg-cover bg-center flex flex-col items-center text-white pt-[88px] md:pt-[96px] xl:pt-[136px]">
      <div className="w-full h-full flex flex-col items-center relative md:items-start md:p-10  xl:max-w-[1550px] xl:mt-12 xl:p-0 xl:items-center">
        <p className="font-barlow-condensed leading-none tracking-[0.14em] uppercase text-center gap-6 flex md:text-xl md:tracking-[0.117em] md:text-left md:mb-4 xl:text-[28px] xl:tracking-[0.133em] xl:absolute xl:top-0 xl:left-0">
          <span className="font-barlow-condensed opacity-25">01</span> Pick your
          destination
        </p>
        <div className="mb-5 flex flex-1 flex-col items-center md:gap-12 xl:flex-row">
          <div className="w-full flex items-center md:w-[60%] xl:flex-1">
            {planet && <PlanetImage name={planet.name} image={planet.image} />}
          </div>
          <div className="mb-5 flex flex-col text-center items-center md:w-[80%] md:text-left xl:flex-1">
            <PlanetsNavBar planets={planets} />
            {planet && (
              <PlanetDetails
                name={planet.name}
                description={planet.description}
                distance={planet.distance}
                travel={planet.travel}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Destination;
