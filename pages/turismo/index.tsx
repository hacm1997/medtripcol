import Layout from "../../business/container/layout/layout";
import Header from "../../business/container/views/turismo/header/header";
import Destination from "../../business/container/views/turismo/destination/destination";
import Memorie from "../../business/container/views/turismo/memories/memories";
import Testimonials from "../../business/container/views/share/testimonials/testimonials";
import Form from "../../business/container/views/share/form/form";
import useTranslation from "next-translate/useTranslation";
import {useEffect, useState} from "react";


export default function Home() {
    const {t, lang} = useTranslation('turismo');
    const itemsList = t<any>("turismo.memories.items", {}, {returnObjects: true});
    // console.log("gsgd => ",itemsList)
    //For render the website
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }
    return (
        <>
            <>
                <Layout>
                    <Header t={t}/>
                    <Destination t={t}/>
                    <Memorie t={t} itemsList={itemsList}/>
                    <Testimonials />
                    {/* <Form /> */}

                </Layout>

            </>
        </>
    )
}
