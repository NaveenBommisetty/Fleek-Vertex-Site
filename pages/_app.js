import Head from 'next/head';
import "swiper/css";
import "swiper/css/navigation";
import '../public/assets/css/style.css';
import "react-modal-video/css/modal-video.css"
import { useEffect, useState } from "react";
import Preloader from '../components/elements/Preloader';

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);

        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
    }, []);
    return (
        <>
            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <Preloader />
            )}
        </>
    )
}

export default MyApp
