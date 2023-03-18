import styles from './styles.module.css'
import Carousel from "./carousel/carousel";
import Card from "./card/card";
import Characteristics from "./characteristics/characteristics";
import useTranslation from "next-translate/useTranslation";
import CardTour from "../../turismo/memories/card/card";

export default function TravelWithUs(props:any) {
    const {t, lang} = useTranslation('home');
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.caroucel}>
                        <Carousel/>
                    </div>
                    <div className={styles.card_info}>
                        <Card title={t("TravelWithUs.title")} content={t("TravelWithUs.content")}
                              link={t("TravelWithUs.link")} btnName={t("button")}/>
                    </div>
                </div>
                <div className={styles.card_general}>
                    {props.itemsList ? props.itemsList.map((item:any, index:number) => (
                        <CardTour key={index} item={item}/>
                    )): null}

                    {/*<Card class="hr"/>*/}
                    {/*<Card class="hr"/>*/}
                </div>
            </section>

        </>
    )
}
