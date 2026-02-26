import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <span className={styles.code}>404</span>
        <code className={styles.message}>This page doesn't exist.</code>
        <Link to="/" className={styles.link}>Back to home</Link>
      </div>
    </div>
  );
}
