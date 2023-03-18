import Layout from "../business/container/layout/layout";
import Header from "../business/container/views/home/header/header";
import Service from "../business/container/views/home/service/service";
import TravelWithUs from "../business/container/views/home/travel_with_us/travel_with_us";
import Testimonials from "../business/container/views/share/testimonials/testimonials";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
    const {t, lang} = useTranslation('turismo');
    const itemsList = t<any>("turismo.memories.items", {}, {returnObjects: true});

    return (
        <>
            <>
                <Layout>
                    <Header/>
                    <Service/>
                    <TravelWithUs t={t} itemsList={itemsList}/>
                    <Testimonials/>
                </Layout>

            </>
        </>
    )
}
