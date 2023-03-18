import Layout from "../../../business/container/layout/layout";
import Header from "../../../business/container/views/service/rinoplastia/header/header";
import After_beffore from "../../../business/container/views/service/rinoplastia/after_beffore/after_beffore";
import Process from "../../../business/container/views/service/rinoplastia/process/process";
import Testimonials from "../../../business/container/views/share/testimonials/testimonials";
import Form from "../../../business/container/views/share/form/form";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Home() {

    const router = useRouter();
    const {id}:any = router.query;
    const [service, setService] = useState('');
    useEffect(()=>{
        if(id[0] === "cirugia-plastica-facial"){
            setService('cirugia-plastica-facial');
        }else if(id[0] === "cirugia-plastica-corporal"){
            setService('cirugia-plastica-corporal');
        }else if(id[0] === "cirugia-bariatrica"){
            setService('cirugia-bariatrica');
        }else if(id[0] === "odontologia-estetica"){
            setService('odontologia-estetica');
        }else{
            setService('');
        }
    },[router.asPath])

    //console.log("path => ",service)

    return (
        <>
            <>
                <Layout>
                    <Header id={id}/>
                    <After_beffore id={id}/>
                    <Process id={id}/>
                    <Testimonials/>
                    <Form service={service} id={id[1]}/>
                </Layout>
            </>
        </>
    )
}
