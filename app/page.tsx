import styles from "./components/Main.module.css";
import galaxy from "../public/galaxy.jpg";
import Link from "next/link";
import Image from "next/image";
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
                oppgaver. <br /> Om du består disse, har du bestått testen og kan kalle
                deg for en Wizard of the Web. reagerer{" "}
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
          <FaReact  className={styles.fa}/>
          <p className={styles.underThefoldHeadline}>React</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem
            alias fugiat consectetur dolorem saepe ipsum eligendi enim aliquam,
            reiciendis sed dicta. In ipsa eaque quam, temporibus sapiente error
            sint.
          </p>
          <Link className={styles.callToAction} href="/subject/sub-react">
            {" "}
            Lær React
          </Link>
        </div>
        <div className={styles.JavaScriptunderTheFold}>
           <SiJavascript className={styles.fa}/>
          <p className={styles.underThefoldHeadline}>Javascript</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem
            alias fugiat consectetur dolorem saepe ipsum eligendi enim aliquam,
            reiciendis sed dicta. In ipsa eaque quam, temporibus sapiente error
            sint.
          </p>
          <Link className={styles.callToAction} href="/subject/sub-js">
            {" "}
            Lær Javascript
          </Link>
        </div>
        <div className={styles.cssunderThefold}>
          <FaCss3Alt className={styles.fa}/>
          <p className={styles.underThefoldHeadline}>CSS</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem
            alias fugiat consectetur dolorem saepe ipsum eligendi enim aliquam,
            reiciendis sed dicta. In ipsa eaque quam, temporibus sapiente error
            sint.
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
