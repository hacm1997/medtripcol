import styles from './styles.module.css'

export default function Card_segund(props: any) {
    return (
        <>
            <div className={styles.card_segund}>
                <div className={styles.title}>
                    <h3>{props.title}</h3>
                </div>
                <div className={styles.button}>
                    <a target={"_blank"} href={props.link}>{props.contactButton}</a>
                </div>
            </div>

        </>
    )
}
