'use client'
import Hamburgermenu from "./Hamburgermenu";
import styles from  './Header.module.css'
import Link from "next/link";



const Header: React.FC = ()=> {
  
  return (
    <header className={`${styles.header}`}>
      <div>
        <Link href='/'> <h1>The Wizards Of Web</h1> </Link>
      </div>
    <Hamburgermenu/>
    </header>
  );
}

export default  Header