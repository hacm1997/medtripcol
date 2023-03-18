import styles from './styles.module.css'

export default function Card(props:any) {
    return (
        <>
            <div className={styles.card + " " + `${styles[props.class]}`}>
                <div className={styles.icon}>
                    <img src="/images/caracteristicas/hospedaje.png" alt=""/>
                </div>
                <div className={styles.title}>
                    <h2>Hospedaje</h2>
                </div>
            </div>

        </>
    )
}