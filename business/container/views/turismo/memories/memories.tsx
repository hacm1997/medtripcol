import styles from './styles.module.css'
import CardTour from "./card/card";
export default function Memorie(props:any){

    // console.log(props.itemsList)
    return(
        <>
            <section className={styles.section}>
                <div className={styles.title}>
                    <h2>{props.t("turismo.memories.title")} <span>{props.t("turismo.memories.titleSpan")}</span></h2>
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
