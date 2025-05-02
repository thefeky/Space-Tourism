import Spinner from "../Shared/Spinner";

interface PlanetImageProps {
  name: string;
  image: string;
}

function PlanetImage({ name, image }: PlanetImageProps) {
  if (!name) return <Spinner />;

  return (
    <div className="flex justify-center w-full h-auto p-[25px]">
      <img
        className="w-full  max-w-[200px] md:max-w-[300px] xl:max-w-[480px] object-contain xl:border-1 xl:border-[#979797]/10 xl:rounded-full"
        src={image}
        alt={name}
      />
    </div>
  );
}

export default PlanetImage;
