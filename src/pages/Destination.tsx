import { useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDataContext } from "@/contexts/DataContext";

import PlanetImage from "../components/Destination/PlanetImage";
import PlanetDetails from "../components/Destination/PlanetDetails";
import PlanetsNavBar from "../components/Destination/PlanetsNavBar";


function Destination() {
  const { destinations } = useDataContext();
  const { planetName } = useParams();
  const navigate = useNavigate();

  const planet = destinations.find((p) => p.name === (planetName || "moon"));

  useEffect(() => {
    if (destinations.length > 0 && (!planetName || !planet)) {
      navigate("/destination/moon", { replace: true });
    }
  }, [planetName, destinations, planet, navigate]);

  return (
    <main className="overflow-y-auto xl:overflow-y-hidden w-screen h-screen bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)] xl:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-cover bg-center flex flex-col items-center text-white pt-[88px] md:pt-[96px] xl:pt-[136px]">
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
            <PlanetsNavBar destinations={destinations} />
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
