import styles from './styles.module.css'

export default function Card(props:any) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.multimedia}>
                    <img src={props.image} alt={props.alt}/>
                </div>

                <div className={styles.content}>
                    <h3>{props.title}</h3>
                    <p className={styles.ellipsis}>{props.content}</p>
                </div>
            </div>
        </>
    )
}
