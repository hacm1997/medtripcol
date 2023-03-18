import Layout from "../../business/container/layout/layout";
import Header from "../../business/container/views/service/cirugia-plastica/header/header";
import Services from "../../business/container/views/service/cirugia-plastica/servicios/servicios";
import Testimonials from "../../business/container/views/share/testimonials/testimonials";
import Advantages from "../../business/container/views/service/cirugia-plastica/advantages/advantages";
import Form from "../../business/container/views/share/form/form";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";


export default function Home() {
    const router = useRouter();
    const {id}:any = router.query;
    console.log("id => ",id)
    const [service, setService] = useState('');
    useEffect(()=>{
        if(id === "cirugia-plastica-facial"){
            setService('cirugia-plastica-facial');
        }else if(id === "cirugia-plastica-corporal"){
            setService('cirugia-plastica-corporal');
        }else if(id === "cirugia-bariatrica"){
            setService('cirugia-bariatrica');
        }else if(id === "odontologia-estetica"){
            setService('odontologia-estetica');
        }else{
            setService('');
        }
    },[router.asPath])

    return (
        <>
            <>
                <Layout>
                    <Header service={service}/>
                    <Services service={service}/>
                    <Testimonials/>
                    <Advantages service={service}/>
                    <Form service={service}/>
                </Layout>

            </>
        </>
    )
}
