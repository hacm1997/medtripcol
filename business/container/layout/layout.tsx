import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function Layout({children}: any) {
    return (
        <>
            <Header/>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}