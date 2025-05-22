import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDataContext } from "@/contexts/DataContext";

import TechnologyImage from "../components/Technology/TechnologyImage";
import TechnologyDetails from "../components/Technology/TechnologyDetails";
import TechnologyNavBar from "../components/Technology/TechnologyNavBar";

function Technology() {
  const { technology } = useDataContext();
  const { techName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Space Tourism | Technology";
  }, []);

  const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

  const tech = technology.find(
    (c) => normalize(c.name) === (techName || "launch-vehicle")
  );

  useEffect(() => {
    if (technology.length > 0 && (!techName || !tech)) {
      navigate("/technology/launch-vehicle", { replace: true });
    }
  }, [techName, technology, tech, navigate]);

  return (
    <main className="technology-bg overflow-y-auto xl:overflow-y-hidden w-screen h-screen bg-cover bg-center flex flex-col items-center text-white pt-[88px] md:pt-[96px] xl:pt-[136px]">
      <p className="flex justify-center w-full absolute font-barlow-condensed leading-none tracking-[0.14em] uppercase gap-6 md:pt-8 md:pl-10 md:text-xl md:tracking-[0.117em] md:justify-start xl:pl-0 xl:pt-12 xl:text-[28px] xl:tracking-[0.133em] xl:max-w-[1550px]">
        <span className="font-barlow-condensed opacity-25">03</span> Space
        launch 101
      </p>
      <div className="w-full h-full flex flex-col items-center mt-4 md:items-start md:px-10 md:mt-10 md:py-10 xl:max-w-[1550px] xl:m-12 xl:p-0">
        <div className="flex flex-1 flex-col items-center md:gap-8 xl:flex-row xl:justify-between xl:items-center xl:w-full">
          <div className="w-full flex flex-col items-center md:w-[80%] xl:flex-1 order-1 xl:order-2">
            {tech && <TechnologyImage images={tech.images} name={tech.name} />}
          </div>
          <div className="w-[90%] mb-5 flex flex-col items-center md:w-[80%] md:text-left xl:flex-1 xl:gap-8 order-2 xl:order-1 xl:flex-row xl:pl-12 xl:justify-start">
            <TechnologyNavBar technology={technology} />
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
