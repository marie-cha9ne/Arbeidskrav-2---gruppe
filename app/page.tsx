import styles from "./components/Main.module.css";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.teaser}>
        <div className={styles.textbox}>
          <h1>Velkommen til The Wizards of the Web! </h1>
          <div className={styles.introtext}>
            <p>
              Gjør som tusenvis av andre webutvikling-interesserte: Lær
              spennenende teknikker, ta kurset og bli en ekte Web-Wizard du og!
              .
            </p>
          </div>
          <div className={styles.learn}>
            <p>Her kan du lese om blant annet:</p>
            <ul>
              <li>Designprinsipper</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          </div>

          <div className={styles.test}>
            <p>
              <strong>
                Når du føler deg trygg på teknikkene, utfordrer vi deg til 10
                oppgaver. <br /> Om du består disse, har du bestått testen og
                kan kalle deg for en Wizard of the Web. reagerer{" "}
              </strong>
            </p>
          </div>
          <button className={styles.callToActionTeaser} type="button">
            Kom i gang!
          </button>
        </div>
      </div>

      <div className={styles.underTheFold}>
        <div className={styles.reactunderThefold}>
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
        <div className={styles.JavaScriptunderTheFold}>
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
        <div className={styles.cssunderThefold}>
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
}
