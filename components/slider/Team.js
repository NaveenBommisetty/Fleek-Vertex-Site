import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Team = () => {

    const data = [
        {
            title: "Cross-Platform",
            color: "",
            color2: "bg1",
            img: "member.png",
        },
        {
            title: "Cross-Platform",
            color: "bg-2",
            color2: "bg-1",
            img: "member1.png",
        },
        {
            title: "Business strategy",
            color: "bg-5",
            color2: "bg-4",
            img: "member2.png",
        },
        {
            title: "Local Marketing",
            color: "bg-1",
            color2: "bg-3",
            img: "member3.png",
        },
        {
            title: "Social Media",
            color: "bg-4",
            color2: "bg-2",
            img: "member4.png",
        },
        {
            title: "Social Media",
            color: "bg-7",
            color2: "bg-5",
            img: "member5.png",
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-group-4",
                    nextEl: ".swiper-button-next-group-4",
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
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-container swiper-group-4"
            >
                {data.map((item, i) => (
                    <SwiperSlide class="swiper-slide">
                        <div className={`card-member-2 mb-30 ${item.color}`}>
                            <div className="card-image"><img src={`/assets/imgs/page/homepage8/${item.img}`} alt="iori" /></div>
                            <div className={`card-info ${item.color2}`}><a className="font-lg-bold color-brand-1" href="#">Steven Jobs</a>
                                <div className="d-flex align-items-center">
                                    <p className="font-xs color-grey-200">Graphic Designer</p>
                                    <div className="list-socials mt-0"><a className="icon-socials icon-facebook" href="#" /><a className="icon-socials icon-twitter" href="#" /><a className="icon-socials icon-instagram" href="#" /></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            <div className="box-button-slider-bottom">
                <div className="swiper-button-prev swiper-button-prev-group-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </div>
                <div className="swiper-button-next swiper-button-next-group-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>


        </>
    );
};

export default Team;

