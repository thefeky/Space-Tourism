import { NavLink } from "react-router-dom";

interface TechnologyNavBarProps {
  technology: { name: string }[];
}

function TechnologyNavBar({ technology }: TechnologyNavBarProps) {
  return (
    <nav className="pb-4">
      <ul className="flex gap-4 justify-center xl:gap-8 xl:flex-col">
        {technology.map((tech, index) => (
          <li key={tech.name}>
            <NavLink
              to={`/technology/${tech.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={({
                isActive,
              }) => `transition duration-300 ease-in-out h-10 w-10 rounded-[100%] flex items-center justify-center md:h-15 md:w-15 xl:w-20 xl:h-20 hover:border-1 hover:border-white ${
                isActive
                  ? "bg-white text-black border-1 border-white"
                  : "text-white border-1 border-white/25"
              }
              `}
            >
              <span className="font-bellefair md:text-2xl xl:text-[32px] xl:leading-none">
                {index + 1}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TechnologyNavBar;
