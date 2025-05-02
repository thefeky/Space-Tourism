import Spinner from "../Shared/Spinner";

interface CrewMemberImageProps {
  name: string;
  image: string;
}

function CrewMemberImage({ name, image }: CrewMemberImageProps) {
  if (!name) return <Spinner />;

  return (
    <div className="max-w-[327px] w-full h-[350px] md:max-w-[450px] md:h-[560px] xl:max-w-[540px] xl:h-[650px]">
      <img className="w-full h-full object-contain" src={image} alt={name} />
    </div>
  );
}

export default CrewMemberImage;
