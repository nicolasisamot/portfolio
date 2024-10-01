import styles from "./Banner.module.css";
import Section from "../Section/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Banner() {
  return (
    <Section>
      <div className={styles.banner}>
        <img
          className={styles.fotoPerfil}
          src="/images/foto-perfil.png"
          alt="Foto de Nicolas Tomasi"
        />
        <div>
          <h1 className={styles.title}>Olá, sou o</h1>
          <h1 className={styles.title}>Nicolas Tomasi</h1>
          <p className={styles.text}>Desenvolvedor Full Stack</p>
          <ul className={styles.redesSociais}>
            <li>
              <a href="https://github.com/nicolasisamot" target="_blank">
                <FontAwesomeIcon
                  className={styles.iconesRedesSociais}
                  icon={faSquareGithub}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nicolastomasi"
                target="_blank"
              >
                <FontAwesomeIcon
                  className={styles.iconesRedesSociais}
                  icon={faLinkedin}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
