import { NavLink } from "react-router-dom";

interface CrewNavBarProps {
  crew: { name: string }[];
}

function CrewNavBar({ crew }: CrewNavBarProps) {
  return (
    <nav className="pt-12 md:p-12 xl:p-18">
      <ul className="flex gap-4 justify-center md:gap-6 md:justify-start xl:gap-10">
        {crew.map((crewMember) => (
          <li key={crewMember.name}>
            <NavLink
              to={`/crew/${crewMember.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `bg-white transition duration-300 ease-in-out h-2.5 w-2.5 rounded-full block md:h-3 md:w-3 xl:w-4 xl:h-4 ${
                  isActive ? "opacity-100" : "opacity-15"
                }`
              }
            ></NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CrewNavBar;
