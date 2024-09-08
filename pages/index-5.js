import Link from "next/link";
import Head from 'next/head';
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import ModalVideo from 'react-modal-video';

const HomePage5 = () => {
    const [pricing, setPricing] = useState(1);
    const [isOpen, setOpen] = useState(false)

    const handlePricing = (index) => {
        setPricing(index);
    };

    return (
        <>
            <Head>
                <title>iori - Multipurpose Startup & SaaS Template</title>
            </Head>

            <Layout>
                <section className="section banner-5">
                    <div className="container">
                        <div className="mt-65 mb-100">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-20">
                                    <span className="title-line color-brand-2">Great sales platform</span>
                                    <h2 className="color-brand-2 mt-10">#1 Intelligence Software to Accelerate Your SaaS Sales</h2>
                                </div>
                                <div className="col-lg-6 mb-20">
                                    <p className="font-md color-grey-50">We're lively, not corporate. We have the energy and boldness of a startup and the expertise and pragmatism of a scale-up. All in one place.</p>
                                </div>
                            </div>
                            <div className="box-video-banner">
                                <div className="image-banner-5">
                                    <img src="assets/imgs/page/homepage5/banner.png" alt="IORI" />
                                    <span className="btn btn-play-center popup-youtube" onClick={() => setOpen(true)} />
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="sVPYIRF9RCQ" onClose={() => setOpen(false)} />
                                </div>
                            </div>
                            <div className="box-info-video-banner">
                                <div className="box-inner-video-banner">
                                    <div className="row align-items-start">
                                        <div className="col-lg-5">
                                            <p className="color-grey-500 font-lg">We're lively, not corporate. We have the energy and boldness of a startup and the expertise and pragmatism of a scale-up. All in one place.</p>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="card-small card-small-2">
                                                        <div className="card-image">
                                                            <Link href="#">
                                                                <div className="box-image">
                                                                    <img src="assets/imgs/page/homepage1/free.svg" alt="iori" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="card-info">
                                                            <Link href="#">
                                                                <h6 className="color-brand-1 mb-10">Connected</h6>
                                                            </Link>
                                                            <p className="font-xs color-grey-500">We come together wherever we are – across time zones, regions, offices and screens. You will receive support from your teammates anytime and anywhere.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card-small card-small-2">
                                                        <div className="card-image">
                                                            <Link href="#">
                                                                <div className="box-image">
                                                                    <img src="assets/imgs/page/homepage2/identity.png" alt="iori" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="card-info">
                                                            <Link href="#">
                                                                <h6 className="color-brand-1 mb-10">Flexible</h6>
                                                            </Link>
                                                            <p className="font-xs color-grey-500">We believe in your freedom to work when and how you work best, to help us all thrive. Only freedom and independent work can bring out the best in you.</p>
                                                        </div>
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
                <div className="section">
                    <div className="container">
                        <div className="mt-80">
                            <ul className="list-partners">
                                <li>
                                    <img src="assets/imgs/page/homepage1/placed.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="assets/imgs/page/homepage1/cuebiq.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="assets/imgs/page/homepage1/factual.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="assets/imgs/page/homepage1/placeiq.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="assets/imgs/page/homepage1/airmeet.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="assets/imgs/page/homepage1/spen.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="assets/imgs/page/homepage1/klippa.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="assets/imgs/page/homepage2/reed.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="assets/imgs/page/homepage2/vuori.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="assets/imgs/page/homepage2/versed.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="assets/imgs/page/homepage1/matrix.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="assets/imgs/page/homepage1/klippa.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="assets/imgs/page/homepage1/factual.png" alt="iori" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="section mt-80">
                    <div className="container">
                        <div className="box-radius-16 bg-4">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="color-brand-1 mb-20">
                                        Take your social media marketing <br className="d-none d-lg-block" />
                                        prowess to the next level
                                    </h2>
                                </div>
                            </div>
                            <div className="row mt-50">
                                <div className="col-lg-6 col-md-12">
                                    <div className="card-offer card-we-do card-marketing hover-up">
                                        <div className="card-image">
                                            <span className="cover-image">
                                                <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" />
                                            </span>
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="job-detail">
                                                    Cross-Platform
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                            <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-1" href="contact">
                                                    Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="card-offer card-we-do card-marketing hover-up">
                                        <div className="card-image">
                                            <span className="cover-image">
                                                <img src="assets/imgs/page/homepage1/cross.png" alt="iori" />
                                            </span>
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="job-detail">
                                                    Social Media
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                            <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-1" href="contact">
                                                    Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="card-offer card-we-do card-marketing hover-up">
                                        <div className="card-image">
                                            <span className="cover-image">
                                                <img src="assets/imgs/page/homepage1/cross4.png" alt="iori" />
                                            </span>
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="job-detail">
                                                    Brand Identity
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                            <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-1" href="contact">
                                                    Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="card-offer card-we-do card-marketing hover-up">
                                        <div className="card-image">
                                            <span className="cover-image">
                                                <img src="assets/imgs/page/homepage1/cross5.png" alt="iori" />
                                            </span>
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10">
                                                <Link className="color-brand-1" href="job-detail">
                                                    Customer Service
                                                </Link>
                                            </h4>
                                            <p className="font-md color-grey-500 mb-5">Discover powerful features to boost your productivit. You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                            <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-1" href="contact">
                                                    Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 mb-30">
                    <div className="container">
                        <div className="box-container">
                            <div className="row mt-50 align-items-center">
                                <div className="col-xl-6 col-lg-6 mb-30">
                                    <div className="box-images-cover">
                                        <div className="box-images-inner">
                                            <img className="img-project bd-rd16" src="assets/imgs/page/homepage5/img-project.png" alt="iori" />
                                            <div className="image-6 shape-3">

                                                <img src="assets/imgs/page/homepage5/chart.png" alt="iori" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 mb-30">

                                    <span className="btn btn-tag">Business</span>
                                    <h3 className="color-brand-1 mt-10 mb-15">Integrate with over 1,000 project management apps</h3>
                                    <p className="font-md color-grey-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Task tracking
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Create task dependencies
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Task visualization
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                hare files, discuss
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Meet deadlines faster
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Track time spent on each project
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-50 text-start">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-4 mb-20">
                                                <h2 className="color-brand-1">25k+</h2>
                                                <p className="font-lg color-brand-1">Happy Clients</p>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-4 mb-20">
                                                <h2 className="color-brand-1">756+</h2>
                                                <p className="font-lg color-brand-1">Project Done</p>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-4 mb-20">
                                                <h2 className="color-brand-1">100+</h2>
                                                <p className="font-lg color-brand-1">Global branch</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-0 mt-40 project-revert align-items-center">
                                <div className="col-xl-5 col-lg-6 col-md-6 mt-30">
                                    <span className="btn btn-tag">Business</span>
                                    <h2 className="color-brand-1 mt-10 mb-15">Grow your online business now</h2>
                                    <p className="font-md color-grey-400">Access advanced order types including limit, market, stop limit and dollar cost averaging. Track your total asset holdings, values and equity over time. Monitor markets, manage your portfolio, and trade crypto on the go.</p>
                                    <div className="mt-50 text-start">
                                        <Link className="btn btn-brand-1 hover-up" href="#">
                                            Download App
                                        </Link>
                                        <Link className="btn btn-default font-sm-bold hover-up" href="#">
                                            Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-6 mt-30">
                                    <div className="box-images-cover text-end">
                                        <div className="box-images-inner">
                                            <img className="img-project bd-rd16" src="assets/imgs/page/homepage5/img-project2.png" alt="iori" />
                                            <div className="image-7 shape-3">

                                                <img src="assets/imgs/page/homepage1/finger.png" alt="iori" />
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
                        <div className="box-radius-16 pl-0 pr-0 pb-0 overflow-hidden bg-7">
                            <div className="box-container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h2 className="color-brand-1 mb-20">Business can also be simple</h2>
                                        <p className="font-md color-grey-500">Access advanced order types including limit, market, stop limit and dollar cost averaging. Track your total asset holdings, values and equity over time. Monitor markets, manage your portfolio, and trade crypto on the go.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6 mb-30">
                                                <div className="box-image-bg-60">
                                                    <img className="d-block" src="assets/imgs/page/homepage3/personal.svg" alt="iori" />
                                                </div>
                                                <h6 className="color-brand-1 mb-15">Personal</h6>
                                                <p className="font-sm color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                                            </div>
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="box-image-bg-60">
                                                    <img className="d-block" src="assets/imgs/page/homepage3/building.svg" alt="iori" />
                                                </div>
                                                <h6 className="color-brand-1 mb-15">Enterprise</h6>
                                                <p className="font-sm color-grey-500">Duis tincidunt dui a felis tincidunt, vehicula ornare diam auctor. Integer id libero id est efficitur mattis. Nunc suscipit consectetur diam a imperdiet. Suspendisse imperdiet</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mt-60">
                                <div className="col-lg-6">
                                    <img className="d-block w-100" src="assets/imgs/page/homepage5/img.png" alt="iori" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="box-business-inner">
                                        <span className="btn btn-tag">Business</span>
                                        <h3 className="color-brand-1 mt-10 mb-15">Integrate with over 1,000 project management apps</h3>
                                        <p className="font-md color-grey-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        <div className="mt-20">
                                            <ul className="list-ticks">
                                                <li>
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Task tracking
                                                </li>
                                                <li>
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Create task dependencies
                                                </li>
                                                <li>
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Task visualization
                                                </li>
                                                <li>
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    hare files, discuss
                                                </li>
                                                <li>
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Meet deadlines faster
                                                </li>
                                                <li>
                                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Track time spent on each project
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mt-50 text-start">
                                            <Link className="btn btn-brand-1 hover-up" href="#">
                                                Download App
                                            </Link>
                                            <Link className="btn btn-default font-sm-bold hover-up" href="#">
                                                Learn More
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row mt-50">
                            <div className="col-xl-4 col-lg-3">
                                <h3 className="color-brand-1 mb-20">
                                    See why we are <br className="d-none d-lg-block" />
                                    trusted the world over
                                </h3>
                            </div>
                            <div className="col-xl-8 col-lg-9">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-lg-end text-center mb-20">
                                        <h2 className="color-brand-1">469k</h2>
                                        <p className="font-lg color-brand-1">Social followers</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-lg-end text-center mb-20">
                                        <h2 className="color-brand-1">25k+</h2>
                                        <p className="font-lg color-brand-1">Happy Clients</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-lg-end text-center mb-20">
                                        <h2 className="color-brand-1">756+</h2>
                                        <p className="font-lg color-brand-1">Project Done</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-lg-end text-center mb-20">
                                        <h2 className="color-brand-1">100+</h2>
                                        <p className="font-lg color-brand-1">Global branch</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom mt-70" />
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Choose The Best Plan</h2>
                                <p className="font-lg color-gray-500">
                                    Pick your plan. Change whenever you want.
                                    <br className="d-none d-lg-block" />
                                    No switching fees between packages
                                </p>
                                <ul className="tabs-plan change-price-plan" role="tablist">
                                    <li className="mr-5"> <a className={pricing === 1 ? "active" : ""} onClick={() => handlePricing(1)}>Monthly</a></li>
                                    <li> <a className={pricing === 2 ? "active" : ""} onClick={() => handlePricing(2)}>Yearly</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan-style-2 hover-up">
                                    <div className="card-plan">
                                        <div className="card-image-plan">
                                            <div className="icon-plan">

                                                <img src="assets/imgs/page/homepage1/free.svg" alt="iori" />
                                            </div>
                                            <div className="info-plan">
                                                <h4 className="color-brand-1">Trial Plan</h4>
                                                <p className="font-md color-grey-400">Protect for testing</p>
                                            </div>
                                        </div>
                                        <div className="box-day-trial">
                                            <span className="font-lg-bold color-brand-1">FREE </span> <span className="font-md color-grey-500">- 30 days trial </span>
                                            <br />
                                            <span className="font-xs color-grey-500">No Credit card required</span>
                                        </div>
                                        <div className="mt-20">
                                            <Link className="btn btn-brand-1-full hover-up" href="#">
                                                Try for free
                                                <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Max number of results per month
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Various innovative test
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Insightful analytics
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Additional user accounts
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan-style-2 hover-up">
                                    <div className="card-plan">
                                        <div className="card-image-plan">
                                            <div className="icon-plan bg-1">

                                                <img src="assets/imgs/page/homepage1/standard.svg" alt="iori" />
                                            </div>
                                            <div className="info-plan">
                                                <h4 className="color-brand-1">Standard</h4>
                                                <p className="font-md color-grey-400">Advanced project</p>
                                            </div>
                                        </div>
                                        <div className="box-day-trial">

                                            <span className="font-lg-bold color-brand-1 text-price-standard">${pricing == 1 ? "29" : "348"} </span> <span className="font-md color-grey-500 text-type-standard">- user / month </span>
                                            <br />
                                            <span className="font-xs color-grey-500">Billed annually</span>
                                        </div>
                                        <div className="mt-20">

                                            <Link className="btn btn-brand-1-full hover-up" href="#">
                                                Get Started
                                                <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Max number of results per month
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Various innovative test
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Insightful analytics
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Additional user accounts
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Global Certificates
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Customization &amp; API Integration
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan-style-2 hover-up">
                                    <div className="card-plan">
                                        <div className="card-image-plan">
                                            <div className="icon-plan bg-2">

                                                <img src="assets/imgs/page/homepage1/business.svg" alt="iori" />
                                            </div>
                                            <div className="info-plan">
                                                <h4 className="color-brand-1">Business</h4>
                                                <p className="font-md color-grey-400">Protect for testing</p>
                                            </div>
                                        </div>
                                        <div className="box-day-trial">

                                            <span className="font-lg-bold color-brand-1 text-price-business">${pricing == 1 ? "99" : "1200"} </span> <span className="font-md color-grey-500 text-type-business">- user / month</span>
                                            <br />
                                            <span className="font-xs color-grey-500">Billed annually</span>
                                        </div>
                                        <div className="mt-20">

                                            <Link className="btn btn-brand-1-full hover-up" href="#">
                                                Get Started
                                                <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Max number of results per month
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Various innovative test
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Insightful analytics
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Additional user accounts
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Global Certificates
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Customization &amp; API Integration
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Project dashboard, Gantt chart
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan-style-2 hover-up">
                                    <div className="card-plan">
                                        <div className="card-image-plan">
                                            <div className="icon-plan bg-3">

                                                <img src="assets/imgs/page/homepage1/enterprise.svg" alt="iori" />
                                            </div>
                                            <div className="info-plan">
                                                <h4 className="color-brand-1">Enterprise</h4>
                                                <p className="font-md color-grey-400">Protect for testing</p>
                                            </div>
                                        </div>
                                        <div className="box-day-trial">

                                            <span className="font-lg-bold color-brand-1 text-price-enterprise">${pricing == 1 ? "299" : "1800"} </span> <span className="font-md color-grey-500 text-type-enterprise">- user / month</span>
                                            <br />
                                            <span className="font-xs color-grey-500">One-time pay</span>
                                        </div>
                                        <div className="mt-20">

                                            <Link className="btn btn-brand-1-full hover-up" href="#">
                                                Get Started
                                                <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Max number of results per month
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Various innovative test
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Insightful analytics
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Additional user accounts
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Global Certificates
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Customization &amp; API Integration
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Project dashboard, Gantt chart
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Dedicated account manager
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom mt-30" />
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">From our blog</h2>
                                <p className="font-lg color-gray-500">
                                    Aenean velit nisl, aliquam eget diam eu, rhoncus tristique dolor.
                                    <br className="d-none d-lg-block" />
                                    Aenean vulputate sodales urna ut vestibulum
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start">
                                <Link className="btn btn-default font-sm-bold pl-0" href="blog">
                                    View All
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="row mt-70">
                            <div className="col-lg-4 col-md-6">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="blog-detail">
                                            <img src="assets/imgs/page/homepage1/news1.png" alt="iori" />
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="blog-detail">
                                            <h4 className="color-brand-1">The smart way to grow your money while you sleep</h4>
                                        </Link>
                                        <div className="mt-20">
                                            <span className="date-post font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                29 May 2022
                                            </span>
                                            <span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                3 mins read
                                            </span>
                                        </div>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus. Fusce varius vel velit commodo consectetur. Aliquam sodales posuere neque, eget placerat libero fermentum nec. Fusce malesuada laoreet enim, ut convallis odio eleifend vitae.</p>
                                        <div className="mt-20 d-flex">
                                            <div className="box-author">
                                                <Link href="#">
                                                    <img src="assets/imgs/page/homepage1/author.png" alt="iori" />
                                                </Link>
                                                <div className="author-info">
                                                    <Link href="#">
                                                        <span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span>
                                                    </Link>
                                                    <span className="font-xs color-grey-500 department">Bank of America</span>
                                                </div>
                                            </div>
                                            <div className="box-button-more text-end">
                                                <Link className="btn btn-default font-sm-bold" href="blog-detail">
                                                    Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="blog-detail">
                                            <img src="assets/imgs/page/homepage1/news2.png" alt="iori" />
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="blog-detail">
                                            <h4 className="color-brand-1">Helpful Tips for Working from Home as a Freelancer</h4>
                                        </Link>
                                        <div className="mt-20">
                                            <span className="date-post font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                29 May 2022
                                            </span>
                                            <span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                3 mins read
                                            </span>
                                        </div>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus. Fusce varius vel velit commodo consectetur. Aliquam sodales posuere neque, eget placerat libero fermentum nec. Fusce malesuada laoreet enim, ut convallis odio eleifend vitae.</p>
                                        <div className="mt-20 d-flex">
                                            <div className="box-author">
                                                <Link href="#">
                                                    <img src="assets/imgs/page/homepage1/author.png" alt="iori" />
                                                </Link>
                                                <div className="author-info">
                                                    <Link href="#">
                                                        <span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span>
                                                    </Link>
                                                    <span className="font-xs color-grey-500 department">Bank of America</span>
                                                </div>
                                            </div>
                                            <div className="box-button-more text-end">
                                                <Link className="btn btn-default font-sm-bold" href="blog-detail">
                                                    Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-blogs">
                                    <li>
                                        <div className="card-blog-list hover-up">
                                            <div className="card-info">
                                                <Link href="blog-detail">
                                                    <h5 className="color-brand-1">How to make a great impression from the first moment</h5>
                                                </Link>
                                                <div className="mt-10">
                                                    <span className="date-post font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span>29 May 2022</span>
                                                    </span>
                                                    <span className="time-read font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>3 mins read</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card-image">
                                                <Link href="blog-detail">
                                                    <img src="assets/imgs/page/homepage1/news-sm1.png" alt="iori" />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="card-blog-list hover-up">
                                            <div className="card-info">
                                                <Link href="blog-detail">
                                                    <h5 className="color-brand-1">We can blend colors multiple ways, the most common</h5>
                                                </Link>
                                                <div className="mt-10">
                                                    <span className="date-post font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span>29 May 2022</span>
                                                    </span>
                                                    <span className="time-read font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>3 mins read</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card-image">
                                                <Link href="blog-detail">
                                                    <img src="assets/imgs/page/homepage1/news-sm2.png" alt="iori" />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="card-blog-list hover-up">
                                            <div className="card-info">
                                                <Link href="blog-detail">
                                                    <h5 className="color-brand-1">How To Blow Through Capital At An Incredible Rate</h5>
                                                </Link>
                                                <div className="mt-10">
                                                    <span className="date-post font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span>29 May 2022</span>
                                                    </span>
                                                    <span className="time-read font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>3 mins read</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card-image">
                                                <Link href="blog-detail">
                                                    <img src="assets/imgs/page/homepage1/news-sm3.png" alt="iori" />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="card-blog-list hover-up">
                                            <div className="card-info">
                                                <Link href="blog-detail">
                                                    <h5 className="color-brand-1">Design Studios That Everyone Should Know About?</h5>
                                                </Link>
                                                <div className="mt-10">
                                                    <span className="date-post font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span>29 May 2022</span>
                                                    </span>
                                                    <span className="time-read font-xs color-grey-300">
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>3 mins read</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card-image">
                                                <Link href="blog-detail">
                                                    <img src="assets/imgs/page/homepage1/news-sm4.png" alt="iori" />
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
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
                                    <h2 className="color-brand-1 mb-15 mt-5">Subcribe our newsletter</h2>
                                    <p className="font-md color-grey-500">Do not miss the latest information from us about the trending in the market. By clicking the button, you are agreeing with our Term &amp; Conditions</p>
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

export default HomePage5;
