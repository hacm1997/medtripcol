import styles from "./styles.module.css"
export default function ImgApoyo() {
    return (
        <div className={styles.img_apoyo}>
            <img className={styles.escritorio} src="/images/medicina-estetica.png" alt="medicina-estetica" />
            <img className={styles.movil} src="/images/Turismo-medico-en-cartagena.jpg" alt="Turismo-medico-en-cartagena"/>
        </div>
    )
}
