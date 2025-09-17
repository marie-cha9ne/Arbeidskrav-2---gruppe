import styles from './sub.module.css';
// for å koble til css i mappen må den skrives som .module.css dette er fordi vi bruker css.modules i denne mappen. dermed blir dette riktig import måte for css. 

export default function SubjectPage(){

  return(
    <main className={styles.main}>
      <h2 className={styles.color}>Hva lærer du her?</h2>
      <article>
        <p>
          På denne siden jobber vi med grunnleggende teknologier og prinsipper innnen moderne webutvikling. Målet er å bygge en god forståelse for hvordan man utvikler brukervennlige, tilgjenglige og funksjonelle nettsider ved hjelp av verktøy som JavaScript, React og designprinsipper. 
        </p>
        <h3>Innholdet på siden som du kommer til å finne dekker:</h3>
        <ul>
          <li>En introduksjon til JavaScript og sentrale konsepter som objekter, arrays, if-setninger og nyttige metoder som blant annet: map(), find(), concat() og mer!</li>
          <li>En overasikt over designprinsipper, med fokus på universell utforming, farger og kontraster, samt typografi og enhetlig bruk av skriftstørrelser</li>
          <li>En innføring i React -  et av dde mest brukte rammeverkene for å bygge interaktive brukergrensesnitt - hvor vi ser nærmere på konsepter som komponenter, props, state og den virituelle DOM-en</li>
        </ul>
        <p>Denne siden er for deg som ønsker å forstå både det tekniske og det visuelle ved webutvikling. </p>
      </article>
    </main>
  )

}