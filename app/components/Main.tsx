import styles from "./Main.module.css";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.teaser}>
        <div className={styles.textbox}>
          <div className={styles.introtext}>
            <h1>T W W</h1>
            <p>
              Gjør som tusenvis av andre webutvikling-interesserte: Lær
              spennenende teknikker, ta kurset og bli en ekte Web-Wizard du og!
              .
            </p>
           
          </div>

          <div className={styles.learnAbout}>
            <h3>Her kan du lese om blant annet:</h3>

            <div>
              <p>Designprinsipper</p>
              <p>Javascript</p>
              <p>React</p>
            </div>
             <button className={styles.callToActionTeaser} type="button">
              Kom i gang!
            </button>
          </div>
        </div>
      </div>

      <div className={styles.underTheFold}>
        <div className={`${styles.reactunderThefold} ${styles.paragraf}`}>
          <FaReact className={styles.fa} />
          <p className={styles.underThefoldHeadline}>React</p>
          <p>
            React er et kraftig rammeverk for å bygge interaktive
            brukergrensesnitt som gjør koden mer strukturert og gjenbrukbar. Med
            React kan du enkelt lage dynamiske apper som oppdateres raskt når
            data endrer seg. Det gir deg friheten til å bygge alt fra små
            komponenter til store, komplekse løsninger.
          </p>
          <Link className={styles.callToAction} href="/subject/sub-react">
            {" "}
            Lær React
          </Link>
        </div>
        <div className={`${styles.JavaScriptunderTheFold} ${styles.paragraf}`}>
          <SiJavascript className={styles.fa} />
          <p className={styles.underThefoldHeadline}>Javascript</p>
          <p>
            JavaScript er språket som gjør nettsider levende, ved å gi dem
            interaktivitet og logikk. Det brukes overalt – fra små animasjoner
            til hele webapplikasjoner. Med JavaScript kan du gå fra statiske
            sider til engasjerende og funksjonelle opplevelser.
          </p>
          <Link className={styles.callToAction} href="/subject/sub-js">
            {" "}
            Lær Javascript
          </Link>
        </div>
        <div className={`${styles.cssunderThefold} ${styles.paragraf}`}>
          <FaCss3Alt className={styles.fa} />
          <p className={styles.underThefoldHeadline}>CSS</p>
          <p>
            CSS er verktøyet som forvandler en enkel nettside til et visuelt
            design du får lyst til å utforske. Med det kan du styre alt fra
            farger, fonter og layout til avanserte animasjoner. CSS gir
            kreativiteten din frie tøyler til å forme unike uttrykk på nettet.
          </p>
          <p className={styles.cssLogo}></p>
          <Link className={styles.callToAction} href="/subject/sub-css">
            {" "}
            Lær CSS
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;
