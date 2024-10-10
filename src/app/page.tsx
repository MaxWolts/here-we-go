import data from "@/../public/data.json";
import Link from "next/link";
import { Card } from "./components/home/Card";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main aria-label="here we go - home">
      <div className={styles.homeHereCardsContainer}>
        <Link
          href={"/projects/HackTextEffectHover/"}
          className={styles.homeHereCardLink}
        >
          <Card
            img={data.cards[0].img}
            imgAlt={data.cards[0].imgAlt}
            title={data.cards[0].title}
            type={data.cards[0].type}
          />
        </Link>
        <Link
          href={"/projects/HelpRobot/"}
          className={styles.homeHereCardLink}
        >
          <Card
            img={data.cards[0].img}
            imgAlt={data.cards[0].imgAlt}
            title={data.cards[0].title}
            type={data.cards[0].type}
          />
        </Link>
      </div>
    </main>
  );
}
