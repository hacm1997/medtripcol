import styles from "./styles.module.css"
import ImgApoyo from "./img_apoyo/img_apoyo"
import useTranslation from "next-translate/useTranslation";

export default function Header() {
    const {t, lang} = useTranslation('home');
    return (
        <>
            <div className={styles.header}>
                <div className={styles.content_general}>
                   <div className={styles.content}>
                       <div className={styles.title}>
                           <h1>{t("header.title")} <span>{t("header.titleSpan")}</span></h1>
                       </div>
                       <div className={styles.text}>
                           <p>{t("header.content")}</p>
                       </div>
                   </div>
                </div>
                <div className={styles.multimedia}>
                    <ImgApoyo/>
                </div>
            </div>

        </>
    )
}