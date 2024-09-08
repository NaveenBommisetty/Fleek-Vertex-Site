import React from 'react';
import SwiperCore, { Autoplay, Navigation,Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation,Pagination]);
const Brand = () => {

    const data = [
        { img: "placed.png" },
        { img: "cuebiq.png" },
        { img: "factual.png" },
        { img: "placeiq.png" },
        { img: "airmeet.png" },
        { img: "spen.png" },
        { img: "klippa.png" },
        { img: "matrix.png" }
    ];


    return (
        <>
            <Swiper
                slidesPerView={8}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                freeMode={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 8,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper pt-5 pb-50"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="swiper-slide">
                        <a href="#"><img src={`assets/imgs/page/homepage1/${item.img}`} alt="Genz" /></a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Brand;

