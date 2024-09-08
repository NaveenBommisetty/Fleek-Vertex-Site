import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Testimonial2 = () => {

    const data = [
        {
            img: "1.webp",
        },
        {
            img: "2.webp",
        },
        {
            img: "3.webp",
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="swiper-slide">
                        <div className="card-review">
                            <div className="card-info">
                                <div className="rating-review"> <img src="/assets/imgs/page/homepage7/star.png" alt="iori" /><img src="/assets/imgs/page/homepage7/star.png" alt="iori" /><img src="/assets/imgs/page/homepage7/star.png" alt="iori" /><img src="/assets/imgs/page/homepage7/star.png" alt="iori" /><img src="/assets/imgs/page/homepage7/star.png" alt="iori" /></div>
                                <h5 className="color-grey-800 mb-20">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list. When team members can choose the work style that suits them best, productivity and engagement skyrocket. Maecenas lobortis risus.</h5>
                                <div className="box-author"><a href="#"><img src="/assets/imgs/page/homepage7/author4.png" alt="iori" /></a>
                                    <div className="author-info"><a href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></a><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default Testimonial2;

