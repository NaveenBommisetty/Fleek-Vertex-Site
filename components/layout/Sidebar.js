import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="mobile-logo"><Link className="d-flex" href="/"><img alt="Fleek Vertex Logo" src="assets/imgs/template/logo.svg" /></Link></div>
                        <div className="perfect-scroll">

                            <div className="mobile-menu-wrap mobile-header-border">
                                <Tabs
                                    defaultActiveKey="menu"
                                    id="fill-tab-example"
                                    className="nav nav-tabs nav-tabs-mobile mt-25"
                                    fill
                                >
                                    <Tab eventKey="menu" title="Menu">
                                        <div className="tab-pane">
                                            <nav className="mt-15">
                                                <ul className="mobile-menu font-heading">
                                                    <li className={isActive.key == 1 ? "has-children active" : "has-children"} onClick={() => handleToggle(1)}>
                                                        <span class="menu-expand">
                                                            <svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                                            </svg>
                                                        </span>
                                                        <Link className="active" href="/">Home</Link>
                                                        <ul className={isActive.key == 1 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                            <li><Link href="/">Homepage - 1</Link></li>
                                                            <li><Link href="/index-2">Homepage - 2</Link></li>
                                                            <li><Link href="/index-3">Homepage - 3</Link></li>
                                                            <li><Link href="/index-4">Homepage - 4</Link></li>
                                                            <li><Link href="/index-5">Homepage - 5</Link></li>
                                                            <li><Link href="/index-6">Homepage - 6</Link></li>
                                                            <li><Link href="/index-7">Homepage - 7</Link></li>
                                                            <li><Link href="/index-8">Homepage - 8</Link></li>
                                                            <li><Link href="/index-9">Homepage - 9</Link></li>
                                                            <li><Link href="/index-10">Homepage - 10</Link></li>
                                                            <li><Link href="/index-11">Homepage - 11</Link></li>
                                                            <li><Link href="/index-12">Homepage - 12</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className={isActive.key == 2 ? "has-children active" : "has-children"} onClick={() => handleToggle(2)}>
                                                        <span class="menu-expand">
                                                            <svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                                            </svg>
                                                        </span>
                                                        <Link href="#">Company</Link>
                                                        <ul className={isActive.key == 2 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                            <li><Link href="/about">About Us</Link></li>
                                                            <li><Link href="/service">Our Services</Link></li>
                                                            <li><Link href="/pricing">Pricing Plan</Link></li>
                                                            <li><Link href="/team">Meet Our Team</Link></li>
                                                            <li><Link href="/help">Help Center</Link></li>
                                                            <li><Link href="/term-conditions">Term and Conditions</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className={isActive.key == 3 ? "has-children active" : "has-children"} onClick={() => handleToggle(3)}>
                                                        <span class="menu-expand">
                                                            <svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                                            </svg>
                                                        </span>
                                                        <Link href="#">Career</Link>
                                                        <ul className={isActive.key == 3 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                            <li><Link href="/career">Jobs Listing</Link></li>
                                                            <li><Link href="/job-detail">Job Details</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className={isActive.key == 4 ? "has-children active" : "has-children"} onClick={() => handleToggle(4)}>
                                                        <span class="menu-expand">
                                                            <svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                                            </svg>
                                                        </span>
                                                        <Link href="/blog">Blog</Link>
                                                        <ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                            <li><Link href="/blog">Blog Listing 1</Link></li>
                                                            <li><Link href="/blog-2">Blog Listing 2</Link></li>
                                                            <li><Link href="/blog-detail">Blog Details</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className={isActive.key == 5 ? "has-children active" : "has-children"} onClick={() => handleToggle(5)}>
                                                        <span class="menu-expand">
                                                            <svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                                            </svg>
                                                        </span>
                                                        <Link href="#">Shop</Link>
                                                        <ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                            <li><Link href="/shop-grid">Products Listing 1</Link></li>
                                                            <li><Link href="/shop-list">Products Listing 2</Link></li>
                                                            <li><Link href="/product-detail">Product Details</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className={isActive.key == 6 ? "has-children active" : "has-children"} onClick={() => handleToggle(6)}>
                                                        <span class="menu-expand">
                                                            <svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                                            </svg>
                                                        </span>
                                                        <Link href="#">Pages</Link>
                                                        <ul className={isActive.key == 6 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                            <li><Link href="/register">Register</Link></li>
                                                            <li><Link href="/login">Login</Link></li>
                                                            <li><Link href="/coming-soon">Coming soon</Link></li>
                                                            <li><Link href="/404">Error 404</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="/contact">Contact</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                            <div className="site-copyright color-grey-400 mt-0">
                                <div className="box-download-app">
                                    <p className="font-xs color-grey-400 mb-25">Download our Apps and get extra 15% Discount on your first Order…!</p>
                                    <div className="mb-25"><Link className="mr-10" href="#"><img src="assets/imgs/template/appstore.png" alt="iori" /></Link><Link href="#"><img src="assets/imgs/template/google-play.png" alt="iori" /></Link></div>
                                    <p className="font-sm color-grey-400 mt-20 mb-10">Secured Payment Gateways</p><img src="assets/imgs/template/payment-method.png" alt="iori" />
                                </div>
                                <div className="mb-0">Copyright 2022 © IORI - Marketplace Template.<br />Designed by<Link href="/http:/alithemes.com" target="_blank">&nbsp; AliThemes</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Sidebar;