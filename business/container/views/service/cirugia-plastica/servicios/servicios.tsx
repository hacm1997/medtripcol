import styles from './styles.module.css'
import Card from "./card/card";
import useTranslation from "next-translate/useTranslation";


import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import {Navigation} from "swiper";
import {useRouter} from "next/router";

export default function Servicios(props:any) {

    const {t, lang} = useTranslation('services');
    const items = t<any>(`${props.service}.services`, {}, {returnObjects: true});
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.title}>
                        <h2>{t('generalTitle')}</h2>
                    </div>

                    <div className={styles.card_general}>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            navigation={true}
                            // loop={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {
                                items.item?.map((item: any, index: number) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <SwiperSlide><Card title={item.title} link={item.link} img={item.img} btnMore={t('generalButton')}/></SwiperSlide>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>

            </section>
        </>
    )
}
