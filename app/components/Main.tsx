import styles from "./Main.module.css";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { IoAccessibility } from "react-icons/io5";
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
            <Link className={styles.callToActionTeaser} href="/subject">
              {" "}
              Kom i gang
            </Link>
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
          <IoAccessibility className={styles.fa} />
          <p className={styles.underThefoldHeadline}>Design</p>
          <p>
            UI/UX-design handelr om hvordan en nettside ser ut (UI) og hvordan
            det oppleves for brukeren å interagere med den.
            <br />
            Et godt design gjør at brukeren finner fram enkelt, får en behagelig
            opplevelse og stoler på innholdet. Har du hvert innom en netttside,
            der ting er vanskelig å finne frem til? Lær deg design, gjør nette
            en bedre opplevelse for alle.
          </p>
          <p className={styles.cssLogo}></p>
          <Link className={styles.callToAction} href="/subject/sub-design">
            {" "}
            Lær Design
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;
