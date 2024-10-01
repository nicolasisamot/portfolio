import Section from "../Section/Section";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <Section title="Sobre mim" id="Sobre">
      <div className={styles.container}>
        <img className={styles.foto} src="./images/programming.png"></img>
        <p className={styles.text}>
          Sou desenvolvedor Full Stack, com experiência em HTML, CSS, JavaScript
          e ReactJS. Trabalho com bancos de dados como MySQL, utilizando
          Sequelize, e MongoDB, com Mongoose. Tenho experiência na criação de
          APIs REST, utilizando ExpressJS, além de implementar tokens JWT para
          autenticação e hasheamento de senhas. Também desenvolvo projetos que
          utilizam WebSockets para comunicação em tempo real.
        </p>
      </div>
    </Section>
  );
}
