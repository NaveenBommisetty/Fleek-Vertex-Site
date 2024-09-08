import React, { useState } from 'react';
import Accordion2 from '../components/elements/Accordion2';
import Layout from "../components/layout/Layout";
import Knowledgebase from '../components/slider/Knowledgebase';
import ModalVideo from 'react-modal-video';
import Brand from '../components/slider/Brand';
import Link from 'next/link';

const HomePage9 = () => {
    const [isOpen, setOpen] = useState(false)
    const [social, setSocial] = useState(1);

    const handleSocial = (index) => {
        setSocial(index); // remove the curly braces
    };
    return (
        <>
            <Layout>
                <section className="section banner-9 mb-100">
                    <div className="box-banner-home9">
                        <div className="container position-relative">
                            <div className="row align-items-center">
                                <div className="col-lg-7 mb-30">
                                    <span className="title-line line-48">Get Started</span>
                                    <h2 className="color-brand-1 mb-15 mt-0">
                                        Promotes your business <br className="d-none d-lg-block" />no
                                        matter what you do
                                    </h2>
                                    <p className="font-md color-grey-500 mb-20">
                                        Collaborate, plan projects and manage resources with powerful
                                        features that <br className="d-none d-lg-block" />your whole team
                                        can use. The latest news, tips and advice to help you run your
                                        <br className="d-none d-lg-block" />business with less fuss.
                                    </p>
                                    <div className="mt-10">
                                        <a className="btn btn-play btn-play-white font-sm-bold popup-youtube" onClick={() => setOpen(true)}>Play video</a>
                                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="sVPYIRF9RCQ" onClose={() => setOpen(false)} />
                                    </div>
                                </div>
                                <div className="col-lg-5 mb-30">
                                    <div className="box-joined">
                                        <div className="box-authors">
                                            <span className="item-author">
                                                <img src="/assets/imgs/page/homepage7/author1.png" alt="iori" /></span><span className="item-author">
                                                <img src="/assets/imgs/page/homepage7/author2.png" alt="iori" /></span><span className="item-author">
                                                <img src="/assets/imgs/page/homepage7/author3.png" alt="iori" /></span><span className="item-author">
                                                <span className="text-num-author font-md-bold color-brand-1 bg-grey-60">+2k</span></span>
                                        </div>
                                        <span className="join-thousands font-sm color-grey-400 d-inline-block">Join thousands of users in using the
                                            <Link className="font-sm-bold color-brand-1" href="#">iori platform!</Link></span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-image-banner-9">
                                <img src="/assets/imgs/page/homepage9/banner.png" alt="iori" />
                            </div>
                            <div className="box-ticks">
                                <div className="row">
                                    <div className="col-lg-4 mb-20">
                                        <span className="item-tick color-brand-1 font-xl-bold">Unlimited design &amp; dev requests</span>
                                    </div>
                                    <div className="col-lg-4 mb-20">
                                        <span className="item-tick color-brand-1 font-xl-bold">No Card. No Contract. Cancel anytime</span>
                                    </div>
                                    <div className="col-lg-4 mb-20">
                                        <span className="item-tick color-brand-1 font-xl-bold">Monthly flat-rate. Support 24/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="color-brand-1 mb-30">
                                Crafting human connection through
                                <br className="d-none d-lg-block" />digital experience
                            </h2>
                            <p className="color-grey-500 font-md">
                                Discover powerful features to boost your productivit. You are
                                always welcome to visit our little den. Professional in teir
                                <br className="d-none d-lg-block" />craft! All products were super
                                amazing with strong attension to details, comps and overall vibe.
                            </p>
                        </div>
                        <div className="row align-items-start mt-50">
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="card-radius-32 bg-2">
                                    <div className="card-info text-start">
                                        <h3 className="color-brand-1 mb-20">Social Media Platform</h3>
                                        <p className="font-md color-grey-500 mb-20">
                                            Manage your media channels professionally and efficiently.
                                            Real-time and automatic reporting system.
                                        </p>
                                        <div className="text-start">
                                            <Link href="#"><img className="mr-10" src="/assets/imgs/template/appstore.png" alt="iori" /></Link><Link href="#"><img src="/assets/imgs/template/google-play.png" alt="iori" /></Link>
                                        </div>
                                    </div>
                                    <div className="card-image mb-10">
                                        <img src="/assets/imgs/page/homepage9/img.png" alt="iori" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="card-radius-32 bg-11">
                                    <div className="card-info text-start">
                                        <h3 className="color-brand-1 mb-20">Automated Platform</h3>
                                        <p className="font-md color-grey-500 mb-20">
                                            Synchronize and automate all your business in the cloud.
                                            Save time and effort, enjoy great vacations.
                                        </p>
                                        <div className="mt-0">
                                            <Link className="btn btn-brand-1-small" href="#">Get Started Now
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                        </div>
                                    </div>
                                    <div className="card-image image-automated">
                                        <img className="d-block" src="/assets/imgs/page/homepage9/img2.png" alt="iori" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 mb-30">
                                <div className="card-radius-32 bg-1">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="box-cover-pd box-cover-pd-3 pt-30 pb-30 mb-30">
                                                <span className="title-line line-48">Automatic Tools</span>
                                                <h2 className="color-brand-1 mt-10 mb-15">
                                                    Business can also <br className="d-none d-lg-block" />be
                                                    simple
                                                </h2>
                                                <p className="font-md color-grey-400">
                                                    Access advanced order types including limit, market,
                                                    stop limit and dollar cost averaging. Track your total
                                                    asset holdings, values and equity over time. Monitor
                                                    markets, manage your portfolio, and trade crypto on the
                                                    go.
                                                </p>
                                                <div className="mt-40">
                                                    <ul className="list-ticks">
                                                        <li>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task tracking
                                                        </li>
                                                        <li>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Create task dependencies
                                                        </li>
                                                        <li>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task visualization
                                                        </li>
                                                        <li>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>hare files, discuss
                                                        </li>
                                                        <li>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Meet deadlines faster
                                                        </li>
                                                        <li>
                                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Track time spent on each project
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="mt-40 text-start">
                                                    <Link className="btn btn-brand-1 hover-up" href="/help">Help Center </Link><Link href="#" className="btn btn-default font-sm-bold hover-up" >Learn More
                                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 text-center position-relative">
                                            <div className="box-circle-image">
                                                <img className="d-block m-auto" src="/assets/imgs/page/homepage9/img3.png" alt="iori" />
                                                <div className="shape-1 box-image-4">
                                                    <img src="/assets/imgs/page/homepage9/testimonial.png" alt="iori" />
                                                </div>
                                                <div className="box-number-business shape-3">
                                                    <div className="cardNumber bg-white">
                                                        <h3>25k+</h3>
                                                        <p className="font-xs color-brand-1">Happy Clients</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">
                                    Take your social media marketing
                                    <br className="d-none d-lg-block" />prowess to the next level
                                </h2>
                            </div>
                        </div>
                        <div className="text-center mt-25 mb-65">
                            <div className="box-social-media">
                                <ul className="tabs-plan change-media" role="tablist">
                                    <li> <a className={social === 1 ? "active" : ""} onClick={() => handleSocial(1)}>Personal</a></li>
                                    <li> <a className={social === 2 ? "active" : ""} onClick={() => handleSocial(2)}>Enterprise</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-50">

                            {social == 1 && <>
                                <div className="col-lg-4 col-md-6 social-media enterprise">
                                    <div className="card-offer-style-2">
                                        <div className="card-offer hover-up">
                                            <div className="card-image">
                                                <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" />
                                                </div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Cross-Platform</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><Link href="#" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media enterprise">
                                    <div className="card-offer-style-2 bg-5">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Social Media</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><Link href="#" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media personal">
                                    <div className="card-offer-style-2">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Cross-Platform</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><Link href="#" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media personal">
                                    <div className="card-offer-style-2 bg-5">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Social Media</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><Link href="#" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media personal">
                                    <div className="card-offer-style-2 bg-2">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage2/identity.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Brand Identity</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><Link href="#" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media enterprise">
                                    <div className="card-offer-style-2 bg-1">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Customer Service</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><Link href="#" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>}
                            {social == 2 && <>
                                <div className="col-lg-4 col-md-6 social-media personal">
                                    <div className="card-offer-style-2 bg-1">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Customer Service</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><Link href="#" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media personal">
                                    <div className="card-offer-style-2 bg-7">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage1/cross5.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Social advertising</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><Link href="#" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media enterprise">
                                    <div className="card-offer-style-2 bg-4">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage2/creation.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Content creation</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><Link href="#" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 social-media personal">
                                    <div className="card-offer-style-2 bg-4">
                                        <div className="card-offer hover-up">
                                            <div className="card-image"><img src="assets/imgs/page/homepage2/creation.png" alt="iori" /></div>
                                            <div className="card-info">
                                                <h4 className="color-brand-1 mb-15">Content creation</h4>
                                                <p className="font-md color-grey-500 mb-15">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                                <div className="box-button-offer"><Link href="#" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>}



                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="text-center">
                            <h3 className="color-brand-1 mb-15">
                                Loved By Developers, Trusted By Enterprises
                            </h3>
                            <p className="font-lg color-grey-500">
                                We helped these brands turn online assessments into success
                                stories.<br className="d-none d-lg-block" />Join them. Elevate your
                                testing.
                            </p>
                        </div>
                        <div className="mt-30">
                            <div className="box-swiper pager-style-2">
                                <div className="swiper-container swiper-group-8">
                                    <Brand />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-120">
                    <div className="container">
                        <div className="box-radius-32-style-2">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <span className="title-line line-48">Get Started</span>
                                    <h1 className="color-brand-1 mb-20 mt-10">
                                        Start for free <br className="d-none d-lg-block" />Pay as you Grow
                                    </h1>
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <p className="font-md color-grey-500">
                                                Collaborate, plan projects and manage resources with
                                                powerful features that your whole team can use. The latest
                                                news, tips and advice to help you run your business with
                                                less fuss.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-30">
                                        <h5 className="color-brand-1">Available on</h5>
                                    </div>
                                    <div className="box-button mt-20">
                                        <Link className="btn-app mb-15 hover-up" href="#">
                                            <img src="/assets/imgs/template/appstore-btn.png" alt="iori" /></Link><Link className="btn-app mb-15 hover-up" href="#">
                                            <img src="/assets/imgs/template/google-play-btn.png" alt="iori" /></Link><Link className="btn btn-default mb-15 pl-10 font-sm-bold hover-up" href="#">
                                            Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 text-start position-relative">
                                    <span className="arrow-down-banner shape-1" /><span className="arrow-right-banner shape-2" />
                                    <div className="box-signup">
                                        <h4 className="color-brand-1 mb-30">Sign up for free</h4>
                                        <div className="form-group mb-25">
                                            <label className="font-sm color-grey-900 mb-10">Your email *</label>
                                            <input className="form-control" type="text" placeholder="stevenjob@gmail.com" />
                                        </div>
                                        <div className="form-group mb-25">
                                            <label className="font-sm color-grey-900 mb-10">Your password</label>
                                            <input className="form-control" type="password" placeholder="********" />
                                        </div>
                                        <div className="form-group mb-25">
                                            <label>
                                                <input className="form-cb" type="checkbox" />Remeber me
                                            </label>
                                        </div>
                                        <div className="form-group mb-15">
                                            <button className="btn btn-brand-1-full" type="submit">
                                                Sing In
                                            </button>
                                        </div>
                                        <div className="form-group mb-25">
                                            <Link className="btn btn-border btn-full signin-google" href="#">
                                                <img src="/assets/imgs/page/homepage4/google.png" alt="iori" />Sign in with Google</Link>
                                        </div>
                                        <div className="text-already text-center">
                                            <span className="font-xs color-grey-400">Already have an account? </span><Link className="color-brand-1 font-xs" href="#">Sign in</Link><span className="font-xs color-grey-400">.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-80">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="color-brand-1 mb-20">Frequently asked questions</h2>
                            <p className="font-lg color-gray-500">
                                Feeling inquisitive? Have a read through some of our FAQs or<br className="d-none d-lg-block" />
                                contact our supporters for help
                            </p>
                        </div>
                        <div className="row mt-50 mb-50">
                            <div className="col-xl-12 col-lg-12 position-relative">
                                <Accordion2 />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-40 pt-50 pb-15 bg-grey-80">
                    <div className="container">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-3">
                                <Knowledgebase />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-50" />
                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">From our blog</h2>
                                <p className="font-lg color-gray-500">
                                    Aenean velit nisl, aliquam eget diam eu, rhoncus tristique
                                    dolor.<br className="d-none d-lg-block" />Aenean vulputate sodales
                                    urna ut vestibulum
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start">
                                <Link href="#" className="btn btn-default font-sm-bold pl-0">View All
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                            </div>
                        </div>
                        <div className="row mt-55">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-detail"><img src="/assets/imgs/page/homepage2/news1.png" alt="iori" /></Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-detail">
                                            <h6 className="color-brand-1">
                                                Easy Ways to Make Money While You Sleep
                                            </h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat
                                            vitae. Aenean mattis vestibulum odio eu facilisis. Aenean
                                            quam arcu, blandit at aliquet sit amet, convallis nec risus.
                                        </p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20">
                                            <Link className="btn btn-border-brand-1 mr-15" href="/blog">Technology</Link><span className="date-post font-xs color-grey-300 mr-15">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>3 mins read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-detail"><img src="/assets/imgs/page/homepage2/news2.png" alt="iori" /></Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-detail">
                                            <h6 className="color-brand-1">
                                                Tiktok video size guide: Everything you need to know
                                            </h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat
                                            vitae. Aenean mattis vestibulum odio eu facilisis. Aenean
                                            quam arcu, blandit at aliquet sit amet, convallis nec risus.
                                        </p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20">
                                            <Link className="btn btn-border-brand-1 mr-15" href="/blog">Marketting</Link><span className="date-post font-xs color-grey-300 mr-15">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>3 mins read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-detail"><img src="/assets/imgs/page/homepage1/news2.png" alt="iori" /></Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-detail">
                                            <h6 className="color-brand-1">
                                                How to convert video to MP4 for free online
                                            </h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat
                                            vitae. Aenean mattis vestibulum odio eu facilisis. Aenean
                                            quam arcu, blandit at aliquet sit amet, convallis nec risus.
                                        </p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20">
                                            <Link className="btn btn-border-brand-1 mr-15" href="/blog">Media</Link><span className="date-post font-xs color-grey-300 mr-15">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>3 mins read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-detail"><img src="/assets/imgs/page/homepage2/news3.png" alt="iori" /></Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-detail">
                                            <h6 className="color-brand-1">
                                                5 fastest ways to increase search engine rankings
                                            </h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat
                                            vitae. Aenean mattis vestibulum odio eu facilisis. Aenean
                                            quam arcu, blandit at aliquet sit amet, convallis nec risus.
                                        </p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20">
                                            <Link className="btn btn-border-brand-1 mr-15" href="/blog">SEO</Link><span className="date-post font-xs color-grey-300 mr-15">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>3 mins read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="box-newsletter box-newsletter-2">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-7 m-auto text-center">
                                    <span className="font-lg color-brand-1">Newsletter</span>
                                    <h2 className="color-brand-1 mb-15 mt-5">
                                        Subcribe our newsletter
                                    </h2>
                                    <p className="font-md color-grey-500">
                                        Do not miss the latest information from us about the trending
                                        in the market. By clicking the button, you are agreeing with
                                        our Term &amp; Conditions
                                    </p>
                                    <div className="form-newsletter mt-30">
                                        <form action="#">
                                            <input type="text" placeholder="Enter you mail .." />
                                            <button className="btn btn-submit-newsletter" type="submit">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
};

export default HomePage9;
