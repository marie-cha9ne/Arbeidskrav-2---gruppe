"use client";
import { useState, useEffect } from "react";
import nav from "./Hamburgermenu.module.css";
import Link from "next/link";

const Hamburgermenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // hamburger menye endrer farge ved scrolling.
  const [scrolled, setScroll] = useState<boolean>(false);

  useEffect(() => {
    function handelScroll() {
      setScroll(window.scrollY > 50); // endrer farger etter den har scrollet 50px
    }
    // Siden scroll er en global hendelse, så må man bruke window.addeventlistener. slik at det gjeler for hele sjermen og ikke bare DIV der hanburger er.
    //
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []); // useEffect brukes her oppdaterer seg når det skjer en endring, ved å scrolle så vil den lytte tilscrolling å oppdaterer hendelsen(effecten)
  //Uten useEffect hadde handelScroll blitt rendert heletiden. å det hadde kommet bugs.

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
          <Link href="/subject/sub-react">
            <li>React</li>
          </Link>
          <Link href="/subject/sub-js">
            <li>Javascript</li>{" "}
          </Link>
          <Link href="/subject/sub-css">
            <li>Design</li>{" "}
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
