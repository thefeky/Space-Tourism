import Spinner from "../Shared/Spinner";

interface PlanetDetailsProps {
  name: string;
  description: string;
  distance: string;
  travel: string;
}

function PlanetDetails({
  name,
  description,
  distance,
  travel,
}: PlanetDetailsProps) {
  if (!name) return <Spinner />;

  return (
    <div className="text-white flex flex-col items-center text-center px-4 xl:items-start xl:text-start xl:p-0">
      <p className="font-bellefair leading-none text-[56px] uppercase mt-2 md:text-[80px] md:my-6 xl:text-8xl xl:mt-10 xl:mb-4">
        {name}
      </p>
      <p className="w-[95%] font-barlow text-[15px] leading-[180%] text-[#D0D6F9] mb-2 text-center h-24 md:text-[16px] md:w-[90%] md:h-auto md:mb-6 xl:text-lg xl:w-[58%] xl:h-32 xl:text-left xl:mb-10">
        {description}
      </p>
      <div className="flex flex-col gap-4 border-t border-white/25 w-full pt-2 mt-8 uppercase md:flex-row md:gap-16 md:w-[90%] md:pt-6 xl:w-[58%] xl:mt-0">
        <div className="w-full text-center xl:w-[50%] xl:text-start">
          <span className="font-barlow-condensed text-sm text-[#D0D6F9] tracking-[2px]">
            Avg. Distance
          </span>
          <p className="font-bellefair text-[28px] mt-2 xl:mt-0">{distance}</p>
        </div>
        <div className="w-full text-center xl:w-[50%] xl:text-start">
          <span className="font-barlow-condensed text-sm text-[#D0D6F9] tracking-[2px]">
            Est. Travel Time
          </span>
          <p className="font-bellefair text-[28px] mt-2 xl:mt-0">{travel}</p>
        </div>
      </div>
    </div>
  );
}

export default PlanetDetails;
