import styles from "./learnreact.module.css";
import Link from 'next/link'
export default function learnreact() {
  return (
    <main className={styles.main}>
      <section className={styles.headline}>
        <h1>LÆR REACT</h1>
        <div className={styles.text}>
          <p>
            I dette Rect kurset, kommer du til å bygge kule interative
            applikasjoner, med ett av det mest populærer Javascript bibllitekene
            som finnes.
          </p>
          <Link className={styles.btn} href='/reactcourse'>Klikk her for å starte kurset</Link>
          
        </div>
      </section>
      <article className={styles.article}>
        <section className={styles.aboutReact}>
          <h2>Hva er react ?</h2>
          <p>
            React er en av de mest populære Javascript bibllitekene som finnes.
            React er laget av Meta (tidligere kjent som facebook). React gjør
            det enklere for utviklere å bygge interkative brukergrensesnitt, ved
            bruk av mindre kode samenliknet med vanilla Javascript. Rammeverket
            er komponent basert, noe som gjør det enklere å gjenbruke kode.
          </p>
          <p>
            React er et "Open-scource" prosjekt, noe som betyr at det er{" "}
            <strong>gratis</strong> for alle å bruke.
          </p>
        </section>
        <section className={styles.aboutReactList}>
          <h2>Kursets innhold</h2>
          <ul>
            <li>Hvorfor bør du lære React</li>
            <li>Du vil sette opp ditt første React-prosjekt</li>
            <li>Lære JSX</li>
            <li>Hva komponenter er og hvorfor vi bruker det</li>
            <li>Props</li>
            <li>Sate og effects</li>
          </ul>
        </section>
      </article>
      <section className={styles.prerequisites}>
        <section className={styles.whatYOuNeed}>
          <h3>Hva du må vite før du tar kurset</h3>
          <p>
            For å få mest mulig ut av kurset, <br/> bør du ha grunnleggende kunnskap i
           <strong> HTML, Vanilla Javascript og CSS</strong>
          </p>
        </section>
        <section className={styles.links}>
          <Link className={styles.btn} href='/'>Klikk her for å lære HTML</Link>
          <Link className={styles.btn} href='/'>Klikk her for å lære Vanilla Javascript</Link>
          <Link className={styles.btn} href='/'>Klikk her for å lære CSS</Link>
        </section>
      </section>
    </main>
  );
}
