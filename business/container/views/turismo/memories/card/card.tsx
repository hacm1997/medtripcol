import styles from './styles.module.css'

export default function CardTour(props:any) {
    return (
        <>
            <div className={styles.card + " " + `${styles[props.class]}`}>
                <div className={styles.icon}>
                    <img src={props.item.logo} alt={props.item.alt}/>
                </div>
                <div className={styles.title}>
                    <h2>{props.item.title}</h2>
                    {/*<a href="#">Gastronomía</a>*/}
                </div>
            </div>

        </>
    )
}
