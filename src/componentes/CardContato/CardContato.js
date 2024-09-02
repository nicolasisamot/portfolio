import styles from "./CardContato.module.css";

export default function CardContato(props) {
  return (
    <div className={styles.cardContato}>
      <img
        className={styles.img}
        src={`./images/icones/${props.icone}.png`}
        alt={props.title}
      />
      <p className={styles.title}>{props.title}</p>
    </div>
  );
}
