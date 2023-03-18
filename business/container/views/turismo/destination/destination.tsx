import styles from './styles.module.css'
import Content from "./content/content";
import Recurso from "./recurso/recurso";
import useTranslation from "next-translate/useTranslation";

export default function Destination(props:any) {

    return (
        <>
            <section className={styles.section}>

                <div className={styles.card_destination}>
                    <Content title={props.t("turismo.destino1.title")} titleSpan={props.t("turismo.destino1.titleSpan")} content={(props.t("turismo.destino1.content"))} />
                    <Recurso video={"/videos/video_tour1.mp4"}/>
                </div>

                <div className={styles.card_destination}>
                    <Recurso video={"/videos/video_tour2.mp4"}/>
                    <Content title={props.t("turismo.destino2.title")} titleSpan={props.t("turismo.destino2.titleSpan")} content={(props.t("turismo.destino2.content"))} />
                </div>

            </section>
        </>
    )
}
