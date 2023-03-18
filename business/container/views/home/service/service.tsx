import styles from './styles.module.css'
import Card from "./card/card";
import Card_segund from "./card/card_segund";
import useTranslation from "next-translate/useTranslation";

export default function Service() {
    const {t, lang} = useTranslation('home');
    const item_services = t<any>("services", {}, {returnObjects: true});
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.title}>
                        <h2>{t("services.title")}</h2>
                    </div>
                    <div className={styles.card_servicio}>

                        {
                            item_services.item?.map((item: any, index: number) => (
                                <Card key={index} title={item.title} link={item.link} img={item.img} alt={item.alt} btnName={t("button")}/>
                            ))
                        }

                        <Card_segund title={t("services.cardSecundary.title")} link={t("services.cardSecundary.link")} contactButton={t("services.cardSecundary.contact")}/>

                    </div>
                </div>
            </section>

        </>
    )
}
