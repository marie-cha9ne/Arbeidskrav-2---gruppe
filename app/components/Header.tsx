"use client";
import Hamburgermenu from "./Hamburgermenu";
import styles from "./Header.module.css";
import Link from "next/link";
import SplitText from "./SplitText";

const Header: React.FC = () => {
  return (
    <header className={`${styles.header}`}>
      <div>
        <Link href="/" aria-label="back home">
          <SplitText
            text="The Wizards Of Web"
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </Link>
      </div>
      <Hamburgermenu />
    </header>
  );
};

export default Header;
// kilde https://reactbits.dev/text-animations/split-text