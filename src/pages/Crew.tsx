import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CrewMemberImage from "../components/Crew/CrewMemberImage";
import CrewMemberDetails from "../components/Crew/CrewMemberDetails";
import CrewNavBar from "../components/Crew/CrewNavBar";
import axios from "axios";

interface CrewMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

function Crew() {
  const [crew, setCrew] = useState<CrewMember[]>([]);
  const { name } = useParams();
  const navigate = useNavigate();

  const normalize = (str: string): string =>
    str.toLowerCase().replace(/\s+/g, "-");

  const crewMember = crew.find(
    (c) => normalize(c.name) === (name || "douglas-hurley")
  );

  useEffect(() => {
    function fetchCrew() {
      if (!name) {
        navigate("/crew/douglas-hurley", { replace: true });
      }

      axios
        .get("/data.json")
        .then((res) => {
          setCrew(res.data.crew);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
    fetchCrew();
  }, [name, navigate]);

  return (
    <main className="overflow-y-auto md:overflow-y-hidden w-screen h-screen bg-[url(/src/assets/crew/background-crew-mobile.jpg)] md:bg-[url(/src/assets/crew/background-crew-tablet.jpg)] xl:bg-[url(/src/assets/crew/background-crew-desktop.jpg)] bg-cover bg-center flex flex-col items-center text-white pt-[88px] md:pt-[96px] xl:pt-[136px]">
      <div className="w-full h-full flex flex-col items-center md:items-start md:p-10  xl:max-w-[1550px] xl:m-12 xl:p-0">
        <p className="font-barlow-condensed leading-none tracking-[0.14em] uppercase text-center gap-6 flex md:text-xl md:tracking-[0.117em] md:text-left md:mb-8 xl:text-[28px] xl:tracking-[0.133em] xl:absolute">
          <span className="font-barlow-condensed opacity-25">02</span>
          Meet your crew
        </p>
        <div className="flex flex-1 flex-col items-center gap-4 md:gap-8 xl:flex-row xl:justify-between xl:items-center xl:w-full">
          <div className="w-full flex flex-col items-center text-center xl:items-start xl:justify-center xl:flex-1">
            {crewMember && (
              <CrewMemberDetails
                name={crewMember.name}
                role={crewMember.role}
                bio={crewMember.bio}
              />
            )}
            <CrewNavBar crew={crew} />
          </div>
          <div className="w-full flex mb-5 justify-center items-center xl:flex-1">
            {crewMember && (
              <CrewMemberImage
                name={crewMember.name}
                image={crewMember.image}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Crew;
