import clsx from "clsx";
import styles from "./galaxy-background.module.css";

export default function GalaxyBackground(props: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={clsx(styles.container, props.className)}>
      <div className={styles.background}></div>
      <div className={styles.field}>
        <div className={styles.layer}></div>
        <div className={styles.layer}></div>
        <div className={styles.layer}></div>
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}