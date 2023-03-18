import styles from './styles.module.css'
import Link from "next/link";

export default function Card(props: any) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.title}>
                    <h2>
                        {props.title}
                    </h2>
                </div>
                <div className={styles.content}>
                    <p>
                        {props.content}
                    </p>
                </div>
                <Link href={props.link}>
                    <a>{props.btnName}</a>
                </Link>
            </div>
        </>
    )
}
