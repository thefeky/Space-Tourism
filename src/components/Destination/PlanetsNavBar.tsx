import { NavLink } from "react-router-dom";

interface PlanetsNavBarProps {
  planets: { name: string }[];
}

function PlanetsNavBar({ planets }: PlanetsNavBarProps) {
  return (
    <nav className="mb-4 text-center xl:items-start xl:w-full">
      <ul className="flex gap-8 p-0 m-0">
        {planets.map((planet) => (
          <li key={planet.name}>
            <NavLink
              to={`/destination/${planet.name.toLowerCase()}`}
              className={({
                isActive,
              }) => `transition duration-300 ease-in-out uppercase text-[#D0D6F9] font-barlow-condensed pb-3 tracking-[0.15em] text-sm md:tracking-[2px] md:text-[16px] hover:border-b-3 hover:border-white/50 ${
                isActive ? "border-b-3 border-white text-white" : ""
              }
              `}
            >
              {planet.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PlanetsNavBar;
