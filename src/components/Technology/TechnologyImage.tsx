import { useMediaQuery } from "react-responsive";
import Spinner from "../Shared/Spinner";

interface TechnologyImageProps {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
}
function TechnologyImage({ name, images }: TechnologyImageProps) {
  if (!name) return <Spinner />;

  const isLg = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <div className="w-full h-[250px] py-8 md:h-[350px] md:w-full xl:max-w-[600px] xl:h-[600px]">
      <img
        className="w-full h-full xl:border-1 border-[#979797]/10"
        src={isLg ? images.portrait : images.landscape}
        alt={name}
      />
    </div>
  );
}

export default TechnologyImage;
