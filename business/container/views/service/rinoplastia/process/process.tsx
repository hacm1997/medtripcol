import styles from './styles.module.css'
import CardLeft from './cardLeft/cardLeft'
import CardRight from "./cardRight/cardRight";
import useTranslation from "next-translate/useTranslation";


export default function Process(props: any) {
    const {t, lang} = useTranslation('subServices');

    //console.log(props.id);
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.title}>
                        <h2>
                            {t(`${props.id[1]}.step-by-step.title`)} <span>{t(`${props.id[1]}.step-by-step.titleSpan`)}</span>
                        </h2>
                        <hr className={styles.hr}/>
                    </div>
                </div>

                <div className={styles.card_general}>
                    <CardLeft title={t(`${props.id[1]}.step-by-step.process1.content`)} class={"linea"}/>
                    <CardRight title={t(`${props.id[1]}.step-by-step.process2.content`)} class={"linea"}/>
                    <CardLeft title={t(`${props.id[1]}.step-by-step.process3.content`)} class={"linea"}/>
                    <CardRight title={t(`${props.id[1]}.step-by-step.process4.content`)} class={t(`${props.id[1]}.step-by-step.process5.content`) != 'blanqueamiento.step-by-step.process5.content' ? "linea" : null}/>
                    {t(`${props.id[1]}.step-by-step.process5.content`) != 'blanqueamiento.step-by-step.process5.content' ? <CardLeft title={t(`${props.id[1]}.step-by-step.process5.content`)}/> : null}
                </div>
            </section>
        </>
    )
}
