import styles from "./Contato.module.css";
import Section from "../Section/Section";
import CardContato from "../CardContato/CardContato";
import { useState } from "react";

export default function Contato() {
  const [isSent, setIsSent] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function alertMsgEnviada() {
    setIsSent(true);
    setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        setIsSent(false);
      }, 500);
    }, 1500);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alertMsgEnviada();
    console.log("Enviado");
  }

  return (
    <Section title="Contato" id="Contato">
      <div className={styles.contato}>
        <form
          className={styles.form}
          action="https://formsubmit.co/nicolastomasiprof@gmail.com"
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label>Nome</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Digite seu nome..."
            required
          />
          <label>E-mail</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Digite seu e-mail..."
            required
          />
          <label>Mensagem</label>
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Digite sua mensagem..."
            required
          ></textarea>

          <button className={styles.button} type="submit">
            Enviar
          </button>
        </form>
        <ul className={styles.listaContato}>
          <li>
            <a href="mailto:nicolastomasiprof@gmail.com">
              <CardContato icone="email" title="nicolastomasiprof@gmail.com" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/5551981615718" target="_blank">
              <CardContato icone="whatsapp" title="(51) 98161-5718" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nicolasisamot/sistema-monitoria-backend"
              target="_blank"
            >
              <CardContato icone="github" title="nicolasisamot" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nicolastomasi" target="_blank">
              <CardContato icone="linkedin" title="Nicolas Tomasi da Silva" />
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`${styles.formEnviado} ${isSent ? styles.open : ""} ${
          isClosing ? styles.close : ""
        }`}
      >
        <p className={styles.text}>Mensagem enviada!</p>
      </div>
    </Section>
  );
}
