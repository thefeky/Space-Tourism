import Spinner from "../Shared/Spinner";

interface CrewMemberDetailsProps {
  role: string;
  name: string;
  bio: string;
}

function CrewMemberDetails({ role, name, bio }: CrewMemberDetailsProps) {
  if (!name) return <Spinner />;

  return (
    <div className="flex flex-col items-center p-4 text-white md:p-1.5 xl:p-16 xl:items-start">
      <p className="font-bellefair leading-none text-lg text-white/50 uppercase mb-2 md:text-2xl md:mb-1 xl:text-[32px] xl:mb-4">
        {role}
      </p>
      <p className="font-bellefair leading-none text-2xl uppercase mb-2 md:text-[40px] md:mb-1.5 xl:text-[56px] xl:mb-6">
        {name}
      </p>
      <p className="font-barlow leading-[150%] text-[#D0D6F9] w-[80%] h-20 md:w-[80%] md:leading-[180%] md:text-lg xl:w-[450px] xl:h-50 xl:text-left">
        {bio}
      </p>
    </div>
  );
}

export default CrewMemberDetails;
