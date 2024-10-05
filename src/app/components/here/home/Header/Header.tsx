import { zen } from "../../../../fonts";
import styles from "./styles.module.css";

export function Header() {
  return (
    <div className={styles.homeHereTitle}>
        <svg width="58" height="71" viewBox="0 0 58 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1036 49.7426C5.10991 39.1496 -2.04073 27.3211 4.33375 4L29.1146 48.6269L51.6429 4C62.3861 20.5927 51.6429 43.0485 36.9996 49.7426C52.7693 74.2874 35.2504 76.912 29.1146 48.6269C18.1081 75.4255 4.33396 73.1717 20.1036 49.7426Z" fill="#5B9DFF"/>
        </svg>
        <h1 className={`${zen.className}`}>Here we go</h1>
    </div>
  )
}