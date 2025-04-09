import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import logo from "/assets/shared/logo.svg";

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logo} alt="Logo" />
    </Link>
  );
}

export default Logo;
