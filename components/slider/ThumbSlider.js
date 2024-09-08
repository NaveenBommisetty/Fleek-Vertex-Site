import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const data = [
    {
        id: 1,
        image: "assets/imgs/page/product/thumn1.png",
        bigImage: "assets/imgs/page/product/product-1.jpg"
    },
    {
        id: 2,
        image: "assets/imgs/page/product/thumn2.png",
        bigImage: "assets/imgs/page/product/product-2.jpg"
    },
    {
        id: 3,
        image: "assets/imgs/page/product/thumn3.png",
        bigImage: "assets/imgs/page/product/product-3.jpg"
    },
    {
        id: 4,
        image: "assets/imgs/page/product/thumn4.png",
        bigImage: "assets/imgs/page/product/product-4.jpg"
    },
    {
        id: 5,
        image: "assets/imgs/page/product/thumn5.png",
        bigImage: "assets/imgs/page/product/product-5.jpg"
    },
    {
        id: 6,
        image: "assets/imgs/page/product/thumn4.png",
        bigImage: "assets/imgs/page/product/product-6.jpg"
    },
];

const ThumbSlider = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, [slider2, slider1]);

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav"
    };

    const settingsThumbs = {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: "0px",
        arrows: false
    };

    return (
        <>

            <div className="detail-gallery">
                <div className="product-image-slider">
                    <Slider
                        {...settingsMain}
                        asNavFor={nav2}
                        ref={(slider) => setSlider1(slider)}
                    >
                        {data.map((item, index) => (
                            <figure className="border-radius-10">
                                <img
                                    src={item.bigImage}
                                    alt="product image"
                                    key={index}
                                />
                            </figure>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="slider-nav-thumbnails">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={(slider) => setSlider2(slider)}
                >
                    {data.map((item) => (
                        <div key={item.id}>
                            <img
                                src={item.image}
                                alt=""
                                style={{
                                    width: "100%",
                                    height: 100,
                                    objectFit: "cover",
                                    cursor: "pointer"
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default ThumbSlider