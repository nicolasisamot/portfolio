import styles from "./Section.module.css";

export default function Section(props) {
  return (
    <section className={styles.section} {...props}>
      <h2 className={props.title ? styles.title : ""}>
        {props.title ? props.title : ""}
      </h2>
      {props.children}
    </section>
  );
}
