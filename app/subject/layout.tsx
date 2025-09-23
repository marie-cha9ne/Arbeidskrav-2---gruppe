import Link from "next/link";
import styles from './sub.module.css';

// for at typeScript skal vite hva slags data children er ble jeg nødt til å importere reactNode og sette det som type inni funksjonen for å unngå feilmelding. så her definerer jeg at children er av typen ractNode. 

export default function layout({children}: Readonly<{children: React.ReactNode}>){
  return (
    <section className={styles.main}>
      <h1 className={styles.headline}>
        <Link href="/subject">
        Fagliginnhold</Link></h1>
        
      {/* under navigasjons bar til de forskjellige emnene */}
      <nav className={styles.bar}>
        <Link href="/subject/sub-design" className={styles.links}>Design prinsipper</Link>
        <Link href="/subject/sub-js" className={styles.links}>JavaScript</Link>
        <Link href="/subject/sub-react" className={styles.links}>React</Link>
      </nav>
      {/* alt innhold på faglig innhold hovedside blir rendret i children */}
       {children}
    </section>
  )
}