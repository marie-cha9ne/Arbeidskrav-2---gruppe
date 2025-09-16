import styles from "./Footer.module.css";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerSection}>
        <div>
          <FaReact className={styles.fa} />
          <h2>React</h2>
        </div>
        <div>
          <SiJavascript className={styles.fa} />
          <h2>Javascript</h2>
        </div>

        <div>
          <FaCss3Alt className={styles.fa} />
          <h2>CSS</h2>
        </div>
      </section>
      <section className={styles.contact}>
        <p>Kontakt</p>
        <p>karriere</p>
        <p>Kurs</p>
        <p>Om</p>
        <p>Abonner</p>

        <FaArrowUp />
      </section>
    </footer>
  );
};
export default Footer;
