import Section from "../Section/Section";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <Section title="Sobre mim" id="Sobre">
      <div className={styles.container}>
        <img className={styles.foto} src="./images/programming.png"></img>
        <p className={styles.text}>
          Sou um estudante de tecnologia focado no desenvolvimento back-end, com
          experiência na construção de APIs REST. Recentemente, venho expandindo
          meu conhecimento em tecnologias front-end para criar projetos
          completos.
        </p>
      </div>
    </Section>
  );
}
