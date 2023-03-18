import styles from './styles.module.css'
import useTranslation from "next-translate/useTranslation";

export default function Header(props:any) {

    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.content}>
                        <h1>{props.t("turismo.header.title")}</h1>

                        {/*<img className={styles.imgPlay} src="/images/turismo/play.png" alt="Boton play"/>*/}

                    </div>
                </div>
            </section>

        </>
    )
}
