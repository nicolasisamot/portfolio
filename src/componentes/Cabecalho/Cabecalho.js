import styles from "./Cabecalho.module.css";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";

export default function Cabecalho(props) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  function handleMobileMenu() {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  }

  return (
    <header className={styles.cabecalhoContainer}>
      <nav className={styles.cabecalho}>
        <img className={styles.logo} src="./images/logo.png" alt="Logo" />

        <div className={styles.hamburgerWrapper}>
          <Hamburger
            className={styles.mobileMenu}
            toggled={mobileMenuIsOpen}
            toggle={setMobileMenuIsOpen}
            color="#a0dceb"
          />

          {
            <ul
              className={
                mobileMenuIsOpen
                  ? `${styles.mobileMenuContent} ${styles.menuVisible}`
                  : `${styles.mobileMenuContent} ${styles.menuHidden}`
              }
            >
              {["Sobre", "Habilidades", "Projetos", "Contato"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      to={item}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={() => handleMobileMenu()}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          }
        </div>

        <ul className={styles.listaLinks}>
          {["Sobre", "Habilidades", "Projetos", "Contato"].map(
            (item, index) => (
              <li key={index}>
                <Link to={item} smooth={true} duration={500} offset={-70}>
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
