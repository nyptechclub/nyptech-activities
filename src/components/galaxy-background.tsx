import styles from "./galaxy-background.module.css";

export default function GalaxyBackground(props: { children?: React.ReactNode }) {
  return (
    <div>
      <div className={styles.content}>{props.children}</div>
      <div className={styles.field}>
        <div className={styles.layer}></div>
        <div className={styles.layer}></div>
        <div className={styles.layer}></div>
      </div>
    </div>
  );
}