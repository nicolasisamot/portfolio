import styles from "./Habilidades.module.css";
import Section from "../Section/Section";

export default function Habilidades() {
  return (
    <Section title="Habilidades" id="Habilidades">
      <ul className={styles.habilidades}>
        <li className={styles.cardHabilidade}>
          <img
            className={styles.imgHabilidade}
            src="./images/icones/javascript.png"
            alt="JavaScript"
          ></img>
          <h3 className={styles.titleHabilidade}>JavaScript</h3>
        </li>
        <li className={styles.cardHabilidade}>
          <img
            className={styles.imgHabilidade}
            src="./images/icones/node.png"
            alt="NodeJS"
          ></img>
          <h3 className={styles.titleHabilidade}>NodeJS</h3>
        </li>
        <li className={styles.cardHabilidade}>
          <img
            className={styles.imgHabilidade}
            src="./images/icones/express.png"
            alt="ExpressJS"
          ></img>
          <h3 className={styles.titleHabilidade}>ExpressJS</h3>
        </li>
        <li className={styles.cardHabilidade}>
          <img
            className={styles.imgHabilidade}
            src="./images/icones/sequelize.png"
            alt="Sequelize"
          ></img>
          <h3 className={styles.titleHabilidade}>Sequelize</h3>
        </li>
        <li className={styles.cardHabilidade}>
          <img
            className={styles.imgHabilidade}
            src="./images/icones/mysql.png"
            alt="MySQL"
          ></img>
          <h3 className={styles.titleHabilidade}>MySQL</h3>
        </li>
        <li className={styles.cardHabilidade}>
          <img
            className={styles.imgHabilidade}
            src="./images/icones/mongoose.png"
            alt="Mongoose"
          ></img>
          <h3 className={styles.titleHabilidade}>Mongoose</h3>
        </li>
        <li className={styles.cardHabilidade}>
          <img
            className={styles.imgHabilidade}
            src="./images/icones/mongodb.png"
            alt="MongoDB"
          ></img>
          <h3 className={styles.titleHabilidade}>MongoDB</h3>
        </li>
        <li className={styles.cardHabilidade}>
          <img
            className={styles.imgHabilidade}
            src="./images/icones/react.png"
            alt="ReactJS"
          ></img>
          <h3 className={styles.titleHabilidade}>ReactJS</h3>
        </li>
        <li className={styles.cardHabilidade}>
          <img
            className={styles.imgHabilidade}
            src="./images/icones/html.png"
            alt="HTML"
          ></img>
          <h3 className={styles.titleHabilidade}>HTML</h3>
        </li>
        <li className={styles.cardHabilidade}>
          <img
            className={styles.imgHabilidade}
            src="./images/icones/css.png"
            alt="CSS"
          ></img>
          <h3 className={styles.titleHabilidade}>CSS</h3>
        </li>
      </ul>
    </Section>
  );
}
