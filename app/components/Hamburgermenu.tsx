"use client";
import { useState } from "react";
import nav from "./Hamburgermenu.module.css";
import Link from "next/link";

const Hamburgermenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        className={`${nav.hamburgerIcon} ${isOpen ? nav.iconOpen : ""}`}
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
            <li>CSS</li>{" "}
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default Hamburgermenu;
