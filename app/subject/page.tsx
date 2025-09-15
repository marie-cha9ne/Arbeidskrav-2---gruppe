import styles from './sub.module.css';
// for å koble til css i mappen må den skrives som .module.css dette er fordi vi bruker css.modules i denne mappen. dermed blir dette riktig import måte for css. 

export default function SubjectPage(){

  return(
    <main className={styles.main}>
      <h1 className={styles.color}>Hello world</h1>
      <article>
        <p>
          her skal jeg skrive masse innhold til dere
        </p>
      </article>
    </main>
  )

}