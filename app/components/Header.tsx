'use client'
import { useState } from "react";
import nav from  './Hamburgermenu.module.css'
import styles from  './Header.module.css'
import Link from "next/link";



const Header: React.FC = ()=> {
  
  const [isOpen, setIsOpen]= useState<boolean>(false);
  
  function toggleMenu():void{
      setIsOpen(prev  => !prev)
      console.log(isOpen)
  }
  function closeMenu():void{
      setIsOpen(false)
      console.log(isOpen)
  }
  
  return (
    <header className={`${styles.header}`}>
      <div>
        <Link href='/'> <h1>The Wizards Of Web</h1> </Link>
      </div>
       <nav>
        <div className={`${nav.hamburgerIcon} ${isOpen ? nav.iconOpen:''}`} onClick={()=> toggleMenu()}>
            ☰
        </div>
  <div className={`${nav.closingBtn} ${!isOpen ? nav.btnClosed : ''}`} onClick={()=> closeMenu()}>✖</div>
<div className={`${nav.hamburgerMenu} ${isOpen ? nav.menuOpen: ''}`} >
     <ul onClick={()=> closeMenu()}>
      <Link href='/'><li>Home</li></Link>
        <Link href='../learnreact'><li>React</li></Link>
         <Link href='../learnjavascript'><li>Javascript</li> </Link>
         <Link href='../learncss'><li>CSS</li> </Link>
     
      </ul>
</div>
     
    </nav> 
    </header>
  );
}

export default  Header