"use client";
import { useState, useEffect } from "react";
import nav from "./Hamburgermenu.module.css";
import Link from "next/link";

const Hamburgermenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Hamburger meny endrer farge ved scrolling.
  const [scrolled, setScroll] = useState<boolean>(false);

  useEffect(() => {
    function handelScroll() {
      setScroll(window.scrollY > 50); // endrer farger etter den har scrollet 50px
    }
    // Siden scroll er en global hendelse, så må man bruke window.addeventlistener. slik at det gjelder for hele skjermen og ikke bare DIV der hamburger er.
    //
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []); // useEffect brukes for å oppdatere seg når det skjer en endring, ved å scrolle vil den lytte til scrolling og oppdaterer hendelsen(effecten)
  //Uten useEffect hadde handelScroll blitt rendert hele tiden, som ville ført til bugs.

  function toggleMenu(): void {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  }
  function closeMenu(): void {
    setIsOpen(false);
    console.log(isOpen);
  }

  return (
    <nav>
      <div
        className={`${nav.hamburgerIcon} ${isOpen ? nav.iconOpen : ""} ${
          scrolled ? nav.light : nav.dark
        }`}
        onClick={() => toggleMenu()}
      >
        ☰
      </div>
      <div
        className={`${nav.closingBtn} ${!isOpen ? nav.btnClosed : ""}`}
        onClick={() => closeMenu()}
      >
        ✖
      </div>
      <div className={`${nav.hamburgerMenu} ${isOpen ? nav.menuOpen : ""}`}>
        <ul onClick={() => closeMenu()}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/subject">
            <li>Faginnhold</li>
          </Link>
          <Link href="/tasks">
            <li>Oppgaver</li>{" "}
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default Hamburgermenu;
