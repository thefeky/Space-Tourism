import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import TechnologyImage from "../components/Technology/TechnologyImage";
import TechnologyDetails from "../components/Technology/TechnologyDetails";
import TechnologyNavBar from "../components/Technology/TechnologyNavBar";

interface Tech {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

function Technology() {
  const [techs, setTechs] = useState<Tech[]>([]);
  const { techName } = useParams();
  const navigate = useNavigate();

  const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

  const tech = techs.find(
    (c) => normalize(c.name) === (techName || "launch-vehicle")
  );

  useEffect(() => {
    function fetchTechs() {
      if (!techName) {
        navigate("/technology/launch-vehicle", { replace: true });
      }

      axios
        .get("/src/assets/data.json")
        .then((res) => {
          setTechs(res.data.technology);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
    fetchTechs();
  }, [techName, navigate]);

  return (
    <main className="overflow-y-auto w-screen h-screen bg-[url(/src/assets/technology/background-technology-mobile.jpg)] md:bg-[url(/src/assets/technology/background-technology-tablet.jpg)] xl:bg-[url(/src/assets/technology/background-technology-desktop.jpg)] bg-cover bg-center flex flex-col items-center text-white pt-[88px] md:pt-[96px] xl:pt-[136px]">
      <div className="w-full h-full flex flex-col items-center relative md:items-start md:p-10  xl:max-w-[1550px] xl:m-12 xl:p-0">
        <p className="font-barlow-condensed leading-none tracking-[0.14em] uppercase text-center gap-6 flex md:text-xl md:tracking-[0.117em] md:text-left md:mb-8 xl:text-[28px] xl:tracking-[0.133em] xl:absolute">
          <span className="font-barlow-condensed opacity-25">03</span> Space
          launch 101
        </p>
        <div className="flex flex-1 flex-col items-center md:gap-8 xl:flex-row xl:justify-between xl:items-center xl:w-full">
          <div className="w-full flex flex-col items-center md:w-[80%] xl:flex-1 order-1 xl:order-2">
            {tech && <TechnologyImage images={tech.images} name={tech.name} />}
          </div>
          <div className="w-[90%] mb-5 flex flex-col items-center md:w-[80%] md:text-left xl:flex-1 xl:gap-8 order-2 xl:order-1 xl:flex-row xl:pl-12 xl:justify-start">
            <TechnologyNavBar techs={techs} />
            {tech && (
              <TechnologyDetails
                name={tech.name}
                description={tech.description}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Technology;
