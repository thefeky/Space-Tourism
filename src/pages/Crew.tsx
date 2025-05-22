import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDataContext } from "@/contexts/DataContext";

import CrewMemberImage from "../components/Crew/CrewMemberImage";
import CrewMemberDetails from "../components/Crew/CrewMemberDetails";
import CrewNavBar from "../components/Crew/CrewNavBar";

function Crew() {
  const { crew } = useDataContext();
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Space Tourism | Crew";
  }, []);

  const normalize = (str: string): string =>
    str.toLowerCase().replace(/\s+/g, "-");

  const crewMember = crew.find(
    (c) => normalize(c.name) === (name || "douglas-hurley")
  );

  useEffect(() => {
    if (crew.length > 0 && (!name || !crewMember)) {
      navigate("/crew/douglas-hurley", { replace: true });
    }
  }, [name, crew, crewMember, navigate]);

  return (
    <main className="crew-bg overflow-y-auto xl:overflow-y-hidden w-screen h-screen bg-cover bg-center flex flex-col items-center text-white pt-[88px] md:pt-[96px] xl:pt-[136px]">
      <p className="flex justify-center w-full absolute font-barlow-condensed leading-none tracking-[0.14em] uppercase gap-6 md:pt-8 md:pl-10 md:text-xl md:tracking-[0.117em] md:justify-start xl:pl-0 xl:pt-12 xl:text-[28px] xl:tracking-[0.133em] xl:max-w-[1550px]">
        <span className="font-barlow-condensed opacity-25">02</span>
        Meet your crew
      </p>
      <div className="w-full h-full flex flex-col items-center mt-4 md:items-start md:px-10 md:mt-10 md:py-10 xl:max-w-[1550px] xl:m-12 xl:p-0">
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
