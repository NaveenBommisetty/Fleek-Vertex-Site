import React, { useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Footer from './Footer';
import Header from './Header';
import PageHead from './PageHead';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    const [openClass, setOpenClass] = useState('');

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible")
    }

    const handleRemove = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        }
    }
    return (
        <>
            <PageHead />
            <div className="body-overlay-1" onClick={handleRemove} />
            <Header handleOpen={handleOpen} handleRemove={handleRemove} openClass={openClass} addClass="header-home7" />
            <Sidebar openClass={openClass} />
            <main className="main">
                {children}
            </main>
            <Footer />
            <BackToTop />
        </>
    );
};

export default Layout;