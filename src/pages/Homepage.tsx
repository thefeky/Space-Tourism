import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <main className="w-screen h-screen bg-[url(/assets/home/background-home-mobile.jpg)] md:bg-[url(/assets/home/background-home-tablet.jpg)] xl:bg-[url(/assets/home/background-home-desktop.jpg)] bg-cover bg-center overflow-y-auto xl:overflow-y-hidden relative pt-[88px] md:pt-[96px] xl:pt-[136px]">
      <div className="h-auto flex flex-col gap-6 items-center justify-center md:pt-16 xl:flex-row xl:pt-32">
        <div className="w-[90%] flex flex-col gap-4 text-center xl:text-start xl:gap-8 xl:w-[50%]">
          <p className="font-barlow-condensed text-[#D0D6F9] uppercase leading-none md:text-[28px] md:tracking-[4px]">
            So, you want to travel to
          </p>
          <h1 className="uppercase leading-none font-bellefair text-[80px] text-white md:text-[150px] xl:text-[144px] xl:text-start">
            Space
          </h1>
          <p className="font-barlow text-[15px] leading-[180%] max-w-[320px] text-center text-[#D0D6F9] mx-auto md:text-lg md:max-w-[520px] xl:text-start xl:m-0 xl:w-[450px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="py-12 md:pt-16 xl:pt-32 xl:pr-60">
          <NavLink to="/destination">
            <button
              className="w-36 h-36 text-lg rounded-full bg-white uppercase font-bellefair shadow-[0_0_0_0_rgba(255,255,255,0.1)]
  transition-shadow
  duration-200
  ease-out
  hover:shadow-[0_0_0_44px_rgba(255,255,255,0.1)]
  focus:shadow-[0_0_0_44px_rgba(255,255,255,0.1)]
  focus:outline-none
  cursor-pointer md:w-[272px] md:h-[272px] md:text-[32px]"
            >
              Explore
            </button>
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
