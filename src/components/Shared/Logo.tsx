import { Link } from "react-router-dom";
import logo from "/src/assets/shared/logo.svg";

function Logo() {
  return (
    <Link to="/" className="h-10 w-10 md:h-12 md:w-12">
      <img className="h-10 w-10 md:h-12 md:w-12" src={logo} alt="Logo" />
    </Link>
  );
}

export default Logo;
