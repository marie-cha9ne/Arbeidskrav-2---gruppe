import styles from "./Footer.module.css";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerSection}>
        <div className={styles.react}>
          <FaReact className={`${styles.fa} ${styles.react}`} />
          <h2 >React</h2>
        </div>
        <div className={styles.js}>
          <SiJavascript className={`${styles.fa} ${styles.js}`} />
          <h2 >Javascript</h2>
        </div>

        <div className={styles.css}>
          <IoAccessibility className={`${styles.fa} ${styles.css}`} />
          <h2>Design</h2>
        </div>
      </section>
      <section className={styles.contact}>
        <p>Kontakt</p>
        <p>Karriere</p>
        <p>Kurs</p>
        <p>Om</p>
        <p>Abonner</p>

        <FaArrowUp className={styles.up} />
      </section>
    </footer>
  );
};
export default Footer;
