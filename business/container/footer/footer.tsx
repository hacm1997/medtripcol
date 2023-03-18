import styles from './styles.module.css'
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
    const {t, lang} = useTranslation('footer');
    const social_iten = t<any>("social.item", {}, {returnObjects: true});
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.general}>
                    <div className={styles.content_1}>
                        <div className={styles.logo}>
                            <img src="/images/logo-metrip.png" alt=""/>
                        </div>
                        <h2>{t("about.title")}</h2>
                        <p>{t("about.content")}</p>
                    </div>

                    <div className={styles.content_2}>
                        <h2>{t("contact.title")}</h2>
                        <div className={styles.infoUbi}>
                            <div className={styles.itenUbi}>
                                <i className='bx bx-map'></i>
                                <div className={styles.info}>
                                    <p>{t("contact.direction")}</p>
                                </div>
                            </div>

                            <div className={styles.itenUbi}>
                                <i className='bx bx-phone'></i>
                                <div className={styles.info}>
                                    <p>{t("contact.phone")}</p>
                                </div>
                            </div>

                            <div className={styles.itenUbi}>
                                <i className='bx bx-time-five'></i>
                                <div className={styles.info}>
                                    <p>{t("schedule.title")}</p>
                                    <p>{t("schedule.content")}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={styles.content_3}>
                        <h2>{t("social.title")}</h2>
                        <div className={styles.social}>
                            {
                                social_iten?.map((item: any, index: number) => {
                                    return (
                                        <a key={index} href={item.link}> <i className={item.icon}></i></a>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
