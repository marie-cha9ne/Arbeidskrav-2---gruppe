
import styles from "./components/Main.module.css";
import reactlogo from "./assets/react.svg";
import Link from "next/link";

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.aboveTheFold}>
        <div className={styles.reactAboveThefold}>
          <p className={styles.AboveThefoldHeadline}>React</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem
            alias fugiat consectetur dolorem saepe ipsum eligendi enim aliquam,
            reiciendis sed dicta. In ipsa eaque quam, temporibus sapiente error
            sint.
          </p>
         <Link className={styles.callToAction} href='/learnreact'> Lær React</Link>
        </div>
        <div className={styles.JavaScriptAboveTheFold}>
            <p className={styles.AboveThefoldHeadline}>Javascript</p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem
            alias fugiat consectetur dolorem saepe ipsum eligendi enim aliquam,
            reiciendis sed dicta. In ipsa eaque quam, temporibus sapiente error
            sint.
          </p>
          <Link className={styles.callToAction} href='/learnjavascript'> Lær Javascript</Link>
            </div>
        <div className={styles.cssAboveThefold}>
            <p className={styles.AboveThefoldHeadline}>CSS</p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem
            alias fugiat consectetur dolorem saepe ipsum eligendi enim aliquam,
            reiciendis sed dicta. In ipsa eaque quam, temporibus sapiente error
            sint.
          </p>
          <p className={styles.cssLogo}></p>
          <Link className={styles.callToAction} href='/learncss'> Lær CSS</Link>
            </div>
      </div>

      <div className={styles.reactDiv}>
        <img src={reactlogo} className={styles.logoReact} alt="React logo" />
        <p>REAGER TIL VERDEN RUNDT DEG</p>
        <p>
          Lær React ett rammerverk som gir nettsiden din ett løff verden vil
          <strong> reagerer </strong> på.
        </p>
        <button className={styles.callToAction} type="button">
          REACT
        </button>
      </div>
      <div className={styles.JavascriptDiv}>
        <h1>Javascript</h1>
        <p> VIL DU BLI POPPULÆR?</p>
        <p> Lær deg det mest poppulære kode sprøket i dag</p>
        <button className={styles.callToAction} type="button">
          JavaScript
        </button>
      </div>
      <div className={styles.CSSDiv}>
        <h1>CSS</h1>
        <p>LIKER DU PENE TING, MEN OM OGSÅ ER LETT Å BRUKE</p>
        <p>CSS er veien til ett penere og flottere WEB</p>
        <button className={styles.callToAction} type="button">
          CSS
        </button>
      </div>
    </main>
  );
}
