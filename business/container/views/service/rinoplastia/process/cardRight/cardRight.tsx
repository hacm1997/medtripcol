import styles from './styles.module.css'

export default function CardRight(props: any) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.multimedia}>
                    <img src="/images/proceso/proceso.png" alt=""/>
                </div>
                <div className={styles.content + " " + `${styles[props.class]}`}>
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                </div>
            </div>

        </>
    )
}