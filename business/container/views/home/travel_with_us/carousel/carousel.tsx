import styles from './styles.module.css'
import Galery from "./galery/galery";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
export default function Carousel() {
    return(
        <>
            <Swiper pagination={true}  spaceBetween={30} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <Galery/>
                </SwiperSlide>
                <SwiperSlide>
                    <Galery/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}