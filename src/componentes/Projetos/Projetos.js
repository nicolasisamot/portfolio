import styles from "./Projetos.module.css";
import Section from "../Section/Section.js";

export default function Projetos() {
  return (
    <Section title="Projetos" id="Projetos">
      <ul className={styles.listaProjetos}>
        <li className={styles.cardProjeto}>
          <a
            href="https://github.com/nicolasisamot/sistema-monitoria-backend"
            target="_blank"
          >
            <img
              className={styles.imgProjeto}
              src="./images/projeto-sm.png"
            ></img>
            <div className={styles.infoProjeto}>
              <h3 className={styles.titleProjeto}>Sistema de Monitoria</h3>
              <p className={styles.textProjeto}>
                Projeto pessoal: Sistema de monitoria de ligações de call
                center, permitindo a entrada de monitores para aplicar feedbacks
                e operadores para visualizar seu desempenho.
              </p>
            </div>
          </a>
        </li>
        <li className={styles.cardProjeto}>
          <a href="https://mecanicapolicar.com.br" target="_blank">
            <img
              className={styles.imgProjeto}
              src="./images/projeto-policar.png"
            ></img>
            <div className={styles.infoProjeto}>
              <h3 className={styles.titleProjeto}>Policar</h3>
              <p className={styles.textProjeto}>
                Página única desenvolvida com o objetivo apresentar os serviços
                oferecidos e facilitar o contato com a oficina mecânica.
              </p>
            </div>
          </a>
        </li>
        <li className={styles.cardProjeto}>
          <a
            href="https://github.com/nicolasisamot/chat-tempo-real-backend"
            target="_blank"
          >
            <img
              className={styles.imgProjeto}
              src="./images/projeto-chat.png"
            ></img>
            <div className={styles.infoProjeto}>
              <h3 className={styles.titleProjeto}>Chat Online</h3>
              <p className={styles.textProjeto}>
                Projeto em desenvolvimento de um chat online.
              </p>
            </div>
          </a>
        </li>
      </ul>
    </Section>
  );
}
