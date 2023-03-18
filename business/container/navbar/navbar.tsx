import styles from './styles.module.css'
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function Navbar() {


    const [icon, setIcon] = React.useState("bx bx-menu-alt-right");
    const [menu, setMenu] = React.useState(styles.menu);
    const [show, setShow] = React.useState(false);


    const ShowDropdown = () => {
        setShow(!show);
    }

    const HideDropdown = () => {
        setShow(false);
    }


    const {t, lang} = useTranslation('nav');
    const services = t<any>("nav.services", {}, {returnObjects: true});
    const menu_iten = t<any>("nav.item", {}, {returnObjects: true});


    const handleMenu = () => {
        if (icon === "bx bx-menu-alt-right") {
            setIcon("bx bx-menu-alt-left");
            setMenu(styles.menuActive);
        } else {
            setIcon("bx bx-menu-alt-right");
            setMenu(styles.menu);
        }
    }



    const [selected, setSelected] = React.useState(0);



    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.general}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <img src="/images/logo-metrip.png" alt="Logo"/>
                        </Link>
                    </div>

                    <div className={menu}>
                        <div className={styles.dropdown}>
                            <Link href='#'>
                                <a>{t("nav.title")} <i className={'bx bxs-down-arrow'}></i></a>
                            </Link>
                            <div className={styles.dropdown_content}>
                                {
                                    services?.map((item: any, index: number) => {
                                        return (
                                            <Link key={index} href={`/servicios${item.url}`}><a className={"navbar-brand"}>{item.title}</a>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {
                            menu_iten?.map((item: any, index: number) => {
                            return (
                                <div key={index}><Link href={item.url}><a>{item.name}</a></Link></div>
                            )
                        })}


                    </div>
                    <div className={styles.boton}>
                        <Link href={t("button.url")}>
                            {t("button.name")}
                        </Link>
                    </div>
                    <div onClick={handleMenu} className={styles.botonMovil}>
                        <Link href="#"><i className={icon}></i></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
