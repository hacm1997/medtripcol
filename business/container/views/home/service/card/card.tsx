import styles from './styles.module.css'
import Link from "next/link";

export default function Card(props: any) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.multimedia}>
                    <img src={props.img} alt={props.alt}/>
                </div>
                <div className={styles.title}>
                    <h3>{props.title}</h3>
                </div>
                <div className={styles.button}>
                    <Link href={props.link}>
                        <a>{props.btnName}</a>
                    </Link>
                </div>
            </div>

        </>
    )
}
