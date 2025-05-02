import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import hamburgerIcon from "/assets/shared/icon-hamburger.svg";
import closeIcon from "/assets/shared/icon-close.svg";
import { useMediaQuery } from "react-responsive";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const duoFix = useMediaQuery({ query: "(min-width: 1100px)" });

  return (
    <header className="fixed z-10 flex items-center justify-between w-full p-6 md:gap-5 md:p-0 md:pl-10 xl:pl-16 xl:mt-10">
      <Logo />
      <div
        className="flex items-center justify-center cursor-pointer z-20 md:hidden"
        onClick={toggleMenu}
      >
        <img
          src={isMenuOpen ? closeIcon : hamburgerIcon}
          alt={isMenuOpen ? "Close menu" : "Open menu"}
          className="w-6 h-6 mr-3"
        />
      </div>
      <div className="hidden xl:block h-0.25 bg-white opacity-25 mr-[-52px] z-20 w-[40%] ml-5"></div>
      <nav
        className={`flex-col text-white items-center fixed top-0 right-0 w-[67.5%] h-screen bg-white/5 backdrop-blur-[20px] z-10 pl-8 md:flex md:relative md:w-[88.5%] md:h-auto md:px-10 ${duoFix? "md:px-14" : ""} xl:w-[60%] xl:p-0 xl:m-0 ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-8 mt-[133px] w-full md:flex-row md:gap-12 md:bg-white/5 md:backdrop-blur-[20px] md:m-0 md:w-[113.5%] md:justify-center xl:justify-around xl:p-0 xl:h-[96px] xl:w-full xl:bg-transparent xl:backdrop-blur-none">
          <li className="nav-li xl:ml-[100px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-active" : ""}`
              }
              onClick={toggleMenu}
            >
              <p className="nav-num">00</p> Home
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/destination"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-active" : ""}`
              }
              onClick={toggleMenu}
            >
              <p className="nav-num">01</p> Destination
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/crew"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-active" : ""}`
              }
              onClick={toggleMenu}
            >
              <p className="nav-num">02</p> Crew
            </NavLink>
          </li>
          <li className="nav-li xl:mr-[140px]">
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-active" : ""}`
              }
              onClick={toggleMenu}
            >
              <p className="nav-num">03</p> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
