import styles from './styles.module.css'
import Galery from './galery/galery'
import useTranslation from "next-translate/useTranslation";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Header(props:any) {

    const {t, lang} = useTranslation('services');

    console.log("facial => ",t(`${props.service}.banner.image`))
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general +" "+ (t(`${props.service}.banner.titleSpan`) === "Plástica Corporal"
                || t(`${props.service}.banner.titleSpan`) === "Bariátrica"
                || t(`${props.service}.banner.title`) === "Bariatric "
                || t(`${props.service}.banner.title`) === "Body Plastic" ? styles.custom : null)}>
                    <div className={styles.content_general}>
                        <div className={styles.content}>
                            <hr className={styles.hr}/>
                            <div className={styles.title}>
                                <h1>{t(`${props.service}.banner.title`)} <span>{t(`${props.service}.banner.titleSpan`)}</span></h1>
                                <p>
                                    {t(`${props.service}.banner.content`)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.general_galery}>
                        <Galery image={t(`${props.service}.banner.image`)} alt={t(`${props.service}.banner.alt`)}/>
                    </div>
                </div>
            </section>

        </>
    )
}
