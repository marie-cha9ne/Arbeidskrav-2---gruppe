'use client'
import { useState } from "react";
import nav from  './Hamburgermenu.module.css'

const Hamburgermenu: React.FC =()=> {
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
    <nav>
        <div className={`${nav.hamburgerIcon} ${isOpen ? nav.iconOpen:''}`} onClick={()=> toggleMenu()}>
            ☰
        </div>
  <div className={`${nav.closingBtn} ${!isOpen ? nav.btnClosed : ''}`} onClick={()=> closeMenu()}>✖</div>
<div className={`${nav.hamburgerMenu} ${isOpen ? nav.menuOpen: ''}`} >
     <ul>
        <li><a href="#">React</a></li>
        <li><a href="#">Javascript</a></li>
        <li><a href="#">CSS</a></li>
      </ul>
</div>
     
    </nav>
  );
}
export default Hamburgermenu