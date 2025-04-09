import styles from "./Homepage.module.css";
import { NavLink } from "react-router-dom";
import NavigationBar from "../components/Shared/NavigationBar";
import Footer from "../components/Shared/Footer";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <NavigationBar />
      <div className={styles.mainContent}>
        <div className={styles.text}>
          <p className={styles.line}>So, you want to travel to</p>
          <h1 className={styles.h1}>Space</h1>
          <p className={styles.intro}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.explore}>
          <NavLink to="/destination">
            <button className={styles.button}>Explore</button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Homepage;
