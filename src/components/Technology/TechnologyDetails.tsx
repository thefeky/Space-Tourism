import Spinner from "../Shared/Spinner";

interface TechnologyDetailsProps {
  name: string;
  description: string;
}

function TechnologyDetails({ name, description }: TechnologyDetailsProps) {
  if (!name) return <Spinner />;

  return (
    <div className="text-white mt-2 flex flex-col items-center text-center md:p-8 xl:items-start xl:text-left xl:pl-[50px]">
      <p className="font-bellefair opacity-50 uppercase mb-2 md:text-2xl md:mb-4 xl:text-[32px] xl:leading-none xl:mb-4">
        The terminology...
      </p>
      <p className="font-bellefair text-2xl uppercase mb-4 md:text-[40px] xl:text-[56px] xl:mb-6 xl:leading-none">
        {name}
      </p>
      <p className="font-barlow text-[15px] leading-[150%] text-[#D0D6F9] text-center w-[93%] h-auto md:text-lg md:leading-[180%] md:w-[90%] xl:w-[470px] xl:h-[200px]">
        {description}
      </p>
    </div>
  );
}

export default TechnologyDetails;
