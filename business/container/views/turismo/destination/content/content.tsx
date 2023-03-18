import styles from './styles.module.css'

export default function Content(props: any) {
    return (
        <>
            <div className={styles.content}>
                <h2>{props.title} <span>{props.titleSpan}</span></h2>

                <p>{props.content}</p>
            </div>
        </>
    )
}