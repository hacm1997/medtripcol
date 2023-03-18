import styles from './styles.module.css'
import useTranslation from "next-translate/useTranslation";
import {useRouter} from "next/router";

export default function Header(props: any) {
    const router = useRouter();
    const {t, lang} = useTranslation('subServices');
    const path = router.asPath.split("/")[2];

    console.log("path => ", props.id[1])
    return (
        <>
            <section className={styles.section}>

                <div className={styles.general+ " " +(path === "cirugia-bariatrica" ? styles.contentAdd : null)}>
                    <div className={styles.content}>
                        <h1>{t(`${props.id[1]}.banner.title`)} <span>{t(`${props.id[1]}.banner.titleSpan`)}</span></h1>
                        <p>{t(`${props.id[1]}.banner.content`)}</p>
                    </div>
                    <div className={styles.multimedia}>
                        <img src={t(`${props.id[1]}.banner.image`)} alt=""/>
                    </div>
                </div>

            </section>
        </>
    )
}
