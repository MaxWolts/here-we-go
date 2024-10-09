import Link from "next/link";
import styles from "./styles.module.css";

export const GoBackHome = () => {
  return (
    <div className={styles.goBackHome}>
      <Link href={"/"} className={styles.goBackHomeLink}>Go back Home</Link>
    </div>

  )
}
