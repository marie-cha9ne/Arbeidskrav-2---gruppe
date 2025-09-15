import styles from './Footer.module.css'
const Footer: React.FC = () =>{
    return(
        <footer className={styles.footer}>
            <section className={styles.footerSection}>
                <h2>Javascript</h2>
                <p>Detter er en del av footer</p>
            </section>
            <section className={styles.footerSection}>
                <h2>React</h2>
                <p>Detter er en del av footer</p>
            </section>
            <section className={styles.footerSection}>
                <h2>CSS</h2>
                <p>Detter er en del av footer</p>
            </section>
            <section className={styles.footerSection}>
                <h2>Meny</h2>
                <p>Detter er en del av footer</p>
            </section>
        </footer>
    )
}
export default Footer