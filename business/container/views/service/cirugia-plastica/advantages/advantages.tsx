import styles from './styles.module.css'
import Card from "./card/card";
import useTranslation from "next-translate/useTranslation";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SwiperCore, {Autoplay, A11y} from "swiper";

SwiperCore.use([Autoplay]);

// import required modules
import {FreeMode, Pagination} from "swiper";
import {useEffect, useState} from "react";

export default function Advantages(props:any) {

    const {t, lang} = useTranslation('services');
    const items = t<any>('advantages', {}, {returnObjects: true});
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }
    return (
        <>
            <section className={styles.section}>
                <div className={styles.title}>
                    <h2>
                        {t('advantages.titlePt1')}<span>{t('advantages.span')}</span>{t('advantages.titlePt2')}
                    </h2>
                </div>

                <div className={styles.card_general}>
                    <Swiper
                        autoplay={{ delay: 10000 }}
                        breakpoints={
                        {
                            320: {
                                slidesPerView: 1,
                            },
                            612: {
                                slidesPerView: 2,
                            },
                            767: {
                                slidesPerView: 3,
                            },
                            1000: {
                                slidesPerView: 4,
                            }
                        }
                    } spaceBetween={30} freeMode={true} pagination={{clickable: true,}}
                            modules={[FreeMode, Pagination]} className={styles.mySwiper}>
                        {
                            items.item?.map((item: any, index: number) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Card title={item.title} content={item.content} alt={item.alt} image={item.img}/>
                                    </SwiperSlide>
                                )})
                        }
                    </Swiper>
                </div>
            </section>
        </>
    )
}
