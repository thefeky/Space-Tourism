import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="github.com/thefeky">thefeky</a>.
      </div>
    </footer>
  );
}

export default Footer;
