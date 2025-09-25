import Link from "next/link";
import styles from './sub.module.css';

export default function layout({children}: Readonly<{children: React.ReactNode}>){
  return (
    <section className={styles.main}>
      <h1 className={styles.bigHeadline}>
        <Link href="/subject">
        Faginnhold</Link></h1>
      <nav className={styles.bar}>
        <Link href="/subject/sub-design" className={styles.links}>Design prinsipper</Link>
        <Link href="/subject/sub-js" className={styles.links}>JavaScript</Link>
        <Link href="/subject/sub-react" className={styles.links}>React</Link>
      </nav>
       {children}
    </section>
  )
}