import Image from "next/image";
import { raleway } from "../../../../fonts";
import styles from "./styles.module.css";

interface Props {
    img: string,
    imgAlt: string,
    title: string,
    type: string,
}

export function Card ({img, imgAlt, title, type}: Props) {
    return (
       <div className={styles.cardContainer}>
        <div className={styles.cardImgContainer}>
            <Image
                src={img}
                alt={imgAlt}
                fill
                sizes="(max-width: 368px) 100vw, 23rem"
                priority={true}
            />
        </div>
        <div className={`${raleway.className} ${styles.cardDescriptionContainer}`}>
            <span className={styles.cardTitle}>{title}</span>
            <div>
                <span className={styles.cardCategory} style={{ fontWeight: 300 }}>{type}</span>
            </div>
        </div>
       </div> 
    )
    
}