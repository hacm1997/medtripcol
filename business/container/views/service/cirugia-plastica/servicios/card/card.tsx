import styles from './styles.module.css'

export default function Card(props:any) {
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
                    <a href={props.link}>{props.btnMore}</a>
                </div>
            </div>

        </>
    )
}
