import styles from './styles.module.css';
import Card from "./card/card";
import useTranslation from "next-translate/useTranslation";

export default function Testimonials() {
    const {t, lang} = useTranslation('testimonial');
    const item_services = t<any>("testimonial", {}, {returnObjects: true});

    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.title}>
                        <hr className={styles.hr}/>
                        <h2>
                            {t("testimonial.title")} <br/> <span>{t("testimonial.titleSpan")}</span>
                        </h2>
                    </div>
                </div>
                <div className={styles.card_general}>
                    {
                        item_services.item?.map((item: any, index: number) => (
                            <Card key={index} name={item.name} content={item.content}/>
                        ))
                    }
                </div>
            </section>
        </>
    )
}
