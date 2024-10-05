import data from "@/../public/data.json";
import { Card } from "./components/here/home/Card";
import { Header } from "./components/here/home/Header";
import Image from "next/image";
import background from "@/../public/images/black-background-here.jpg";
import styles from "./styles.module.css";


export default function Home() {
    return ( <main aria-label="here we go - home">
        <Header/>
        <div className={styles.homeHereBackground}>
            <Image src={background} alt={"background image"} fill/>
        </div>
        <div className={styles.homeHereCardsContainer}>
            {data.cards? data.cards.map(card => <Card img={card.img} imgAlt={card.imgAlt} title={card.title} type={card.type} key={card.id}/>) : <span>empty</span>}
        </div>
    </main> );
}
