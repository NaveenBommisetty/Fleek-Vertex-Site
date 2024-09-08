import React, { useState } from 'react';
import Tab from "../components/elements/Tab";
import Layout from "../components/layout/Layout";
import ModalVideo from 'react-modal-video';
import Link from 'next/link';

const HomePage10 = () => {    
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
                <section className="section banner-10">
                    <div className="box-banner-home10">
                        <div className="container position-relative">
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-30">
                                    <h1 className="color-brand-1 mb-50">
                                        We Are <br className="d-none d-lg-block" />Leading Digital
                                        <br className="d-none d-lg-block" />University
                                    </h1>
                                    <p className="font-md color-grey-500 mb-40">
                                        Enable highly motivating non-cash micropayments and offer
                                        <br className="d-none d-lg-block" />in-demand prepaid solutions –
                                        with a single connection.
                                    </p>
                                    <div className="box-button mb-50">
                                        <Link className="btn btn-brand-1 hover-up" href="#">Download App</Link><Link className="btn btn-default font-sm-bold hover-up" href="#">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                    </div>
                                    <div className="box-count-number">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-start mb-20">
                                                <h3 className="color-brand-1">469k</h3>
                                                <p className="font-lg color-brand-1">Social followers</p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-start mb-20">
                                                <h3 className="color-brand-1">25k+</h3>
                                                <p className="font-lg color-brand-1">Happy Clients</p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-start mb-20">
                                                <h3 className="color-brand-1">756+</h3>
                                                <p className="font-lg color-brand-1">Project Done</p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-start mb-20">
                                                <h3 className="color-brand-1">100+</h3>
                                                <p className="font-lg color-brand-1">Global branch</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-30">
                                    <div className="text-center">
                                        <img src="/assets/imgs/page/homepage10/banner.png" alt="iori" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 mb-50 bg-brand-1 pt-100 pb-100 bg-explore">
                    <div className="container">
                        <div className="text-center">
                            <span className="font-xl-bold color-white text-uppercase">explore network</span>
                            <h2 className="color-brand-2 mb-60 mt-15">
                                Ready to capture every <br className="d-none d-lg-block" />wonderful
                                moment
                            </h2>
                        </div>
                        <div className="mt-30 mb-60">
                            <Tab/>
                        </div>
                    </div>
                </section>
                <div className="section">
                    <div className="container">
                        <div className="mt-80">
                            <ul className="list-partners">
                                <li>
                                    <img src="/assets/imgs/page/homepage1/placed.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="/assets/imgs/page/homepage1/cuebiq.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="/assets/imgs/page/homepage1/factual.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="/assets/imgs/page/homepage1/placeiq.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="/assets/imgs/page/homepage1/airmeet.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="/assets/imgs/page/homepage1/spen.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="/assets/imgs/page/homepage1/klippa.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="/assets/imgs/page/homepage2/reed.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="/assets/imgs/page/homepage2/vuori.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="/assets/imgs/page/homepage2/versed.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="/assets/imgs/page/homepage1/matrix.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="/assets/imgs/page/homepage1/klippa.png" alt="iori" />
                                </li>
                                <li>
                                    <img src="/assets/imgs/page/homepage1/factual.png" alt="iori" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-bottom mt-50" />
                <section className="section mt-50 mb-50">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <span className="btn btn-tag">Branding</span>
                                <h3 className="color-brand-1 mt-10 mb-15">
                                    Build your brand and reach out to social followers
                                </h3>
                                <p className="font-md color-grey-400">
                                    Sharing content online allows you to craft an online persona
                                    that reflects your personal values and professional skills. Even
                                    if you only use social media occasionally, what you create,
                                    share or react to feeds into this public narrative. How you
                                    conduct yourself online is now just as important as your
                                    behavior offline especially when it comes to your digital
                                    marketing career.
                                </p>
                                <div className="mt-40">
                                    <ul className="list-ticks">
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Send &amp; Schedule Posts
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Live Chat Request
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Push Notification
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Create fully integrated campaigns
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Online Visitors
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Directly send or schedule posts
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-40 text-start">
                                    <Link className="btn btn-brand-1 hover-up" href="#">Download App </Link><Link className="btn btn-default font-sm-bold hover-up" href="#">Learn More
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="box-imgs-branding text-end">
                                    <img className="img-round-top" src="/assets/imgs/page/homepage10/img.png" alt="iori" />
                                    <div className="img-branding-small">
                                        <img className="img-round-top-small" src="/assets/imgs/page/homepage10/img2.png" alt="iori" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 bg-7 bg-plan pt-110 pb-110">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">Choose The Best Plan</h2>
                                <p className="font-lg color-gray-500">
                                    Pick your plan. <br className="d-none d-lg-block" />
                                    Change whenever you want.
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start">
                                <Link className="btn btn-default font-sm-bold pl-0" href="#">Compare plans
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan">
                                            <img src="/assets/imgs/page/homepage1/free.svg" alt="iori" />
                                        </div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Trial Plan</h4>
                                            <p className="font-md color-grey-400">Protect for testing</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial">
                                        <span className="font-lg-bold color-brand-1">FREE</span><span className="font-md color-grey-500">- 30 days trial</span><br /><span className="font-xs color-grey-500">No Credit card required</span>
                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Contextual, Demographic
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>Facebook Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>Global Certificates
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>Snapchat Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>TikTok Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">Try for free
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan bg-1">
                                            <img src="/assets/imgs/page/homepage1/standard.svg" alt="iori" />
                                        </div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Standard</h4>
                                            <p className="font-md color-grey-400">Advanced project</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial">
                                        <span className="font-lg-bold color-brand-1">$29</span><span className="font-md color-grey-500">- user / month<br /></span><span className="font-xs color-grey-500">Billed annually</span>
                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Contextual, Demographic
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Facebook Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Global Certificates
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>Snapchat Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>TikTok Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">Get Started
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan card-plan-2 hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan bg-2">
                                            <img src="/assets/imgs/page/homepage1/business.svg" alt="iori" />
                                        </div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Business</h4>
                                            <p className="font-md color-grey-400">Protect for testing</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial">
                                        <span className="font-lg-bold color-brand-1">$99</span><span className="font-md color-grey-500">- user / month</span><br /><span className="font-xs color-grey-500">One-time pay</span>
                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Contextual, Demographic
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Facebook Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Global Certificates
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Snapchat Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>TikTok Advertising
                                            </li>
                                            <li className="mutted">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">Get Started
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan hover-up">
                                    <div className="card-image-plan">
                                        <div className="icon-plan bg-3">
                                            <img src="/assets/imgs/page/homepage2/creation.png" alt="iori" />
                                        </div>
                                        <div className="info-plan">
                                            <h4 className="color-brand-1">Enterprise</h4>
                                            <p className="font-md color-grey-400">Protect for testing</p>
                                        </div>
                                    </div>
                                    <div className="box-day-trial">
                                        <span className="font-lg-bold color-brand-1">$299</span><span className="font-md color-grey-500">- user / month</span><br /><span className="font-xs color-grey-500">One-time pay</span>
                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Brand Awareness Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Retargeting Ads
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Contextual, Demographic
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Facebook Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Global Certificates
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Snapchat Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>TikTok Advertising
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Advanced List Building
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-20">
                                        <Link className="btn btn-brand-1-full hover-up" href="#">Get Started
                                            <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100 box-testimonial-2">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-4 text-start pt-50">
                                <div className="row">
                                    <div className="col-md-9">
                                        <img className="mb-30" src="/assets/imgs/page/homepage2/customer.png" alt="iori" />
                                    </div>
                                </div>
                                <h2 className="color-brand-1 mb-20">
                                    What our custommers are saying
                                </h2>
                                <p className="font-lg color-gray-500">
                                    Hear from our users who have saved thousands on their Startup
                                    and SaaS solution spend.
                                </p>
                                <div className="mt-20">
                                    <Link className="btn btn-default font-sm-bold pl-0" href="#">View All
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-30 mt-50">
                                            <div className="card-testimonial-grid">
                                                <div className="box-author mb-10">
                                                    <Link href="#"><img src="/assets/imgs/page/homepage1/author.png" alt="iori" /></Link>
                                                    <div className="author-info">
                                                        <Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span>
                                                    </div>
                                                </div>
                                                <p className="font-md color-grey-500">
                                                    Access the same project through five different dynamic
                                                    views: a kanban board, Gantt chart, spreadsheet,
                                                    calendar or simple task list. When team members can
                                                    choose the work style that suits them best, productivity
                                                    and engagement skyrocket. Maecenas lobortis risus.
                                                </p>
                                                <div className="card-bottom-info">
                                                    <span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                                    <div className="rating text-end">
                                                        <img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-30 testimonial-warning">
                                            <div className="card-testimonial-grid">
                                                <div className="box-author mb-10">
                                                    <Link href="#"><img src="/assets/imgs/page/homepage2/author2.png" alt="iori" /></Link>
                                                    <div className="author-info">
                                                        <Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span>
                                                    </div>
                                                </div>
                                                <p className="font-md color-grey-500">
                                                    Access the same project through five different dynamic
                                                    views: a kanban board, Gantt chart, spreadsheet,
                                                    calendar or simple task list. When team members can
                                                    choose the work style that suits them best, productivity
                                                    and engagement skyrocket. Maecenas lobortis risus.
                                                </p>
                                                <div className="card-bottom-info">
                                                    <span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                                    <div className="rating text-end">
                                                        <img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-30">
                                            <div className="card-testimonial-grid">
                                                <div className="box-author mb-10">
                                                    <Link href="#"><img src="/assets/imgs/page/homepage2/author3.png" alt="iori" /></Link>
                                                    <div className="author-info">
                                                        <Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span>
                                                    </div>
                                                </div>
                                                <p className="font-md color-grey-500">
                                                    Access the same project through five different dynamic
                                                    views: a kanban board, Gantt chart, spreadsheet,
                                                    calendar or simple task list. When team members can
                                                    choose the work style that suits them best, productivity
                                                    and engagement skyrocket. Maecenas lobortis risus.
                                                </p>
                                                <div className="card-bottom-info">
                                                    <span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                                    <div className="rating text-end">
                                                        <img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-30">
                                            <div className="card-testimonial-grid">
                                                <div className="box-author mb-10">
                                                    <Link href="#"><img src="/assets/imgs/page/homepage2/author4.png" alt="iori" /></Link>
                                                    <div className="author-info">
                                                        <Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span>
                                                    </div>
                                                </div>
                                                <p className="font-md color-grey-500">
                                                    Access the same project through five different dynamic
                                                    views: a kanban board, Gantt chart, spreadsheet,
                                                    calendar or simple task list. When team members can
                                                    choose the work style that suits them best, productivity
                                                    and engagement skyrocket. Maecenas lobortis risus.
                                                </p>
                                                <div className="card-bottom-info">
                                                    <span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                                    <div className="rating text-end">
                                                        <img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" /><img src="/assets/imgs/template/icons/star.svg" alt="iori" />
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
                <section className="section mt-50 pt-50 pb-90">
                    <div className="container">
                        <div className="bg-brand-1 box-cover-video">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6">
                                    <img className="d-block" src="/assets/imgs/page/homepage1/img-video.png" alt="iori" />
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="box-info-video">
                                        <span className="btn btn-tag">Business</span>
                                        <h3 className="color-brand-2 mt-10 mb-15">
                                            Integrate with over 1,000 project management apps
                                        </h3>
                                        <p className="font-md color-white">
                                            Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit laborum — semper quis
                                            lectus nulla. Interactively transform magnetic growth
                                            strategies whereas prospective "outside the box" thinking.
                                        </p>
                                        <div className="box-button-video">
                                            <a className="btn btn-play font-sm-bold popup-youtube hover-up"  onClick={() => setOpen(true)}>Play Video</a>
                                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="sVPYIRF9RCQ" onClose={() => setOpen(false)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                                <Link className="btn btn-default font-sm-bold pl-0" href="#">View All
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
                                            <Link className="btn btn-border-brand-1 mr-15" href="blog">Technology</Link><span className="date-post font-xs color-grey-300 mr-15">
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
                                            <Link className="btn btn-border-brand-1 mr-15" href="blog">Marketting</Link><span className="date-post font-xs color-grey-300 mr-15">
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
                                            <Link className="btn btn-border-brand-1 mr-15" href="blog">Media</Link><span className="date-post font-xs color-grey-300 mr-15">
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
                                            <Link className="btn btn-border-brand-1 mr-15" href="blog">SEO</Link><span className="date-post font-xs color-grey-300 mr-15">
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
                        <div className="box-newsletter">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-12">
                                    <div className="box-image-newsletter">
                                        <img className="img-main" src="/assets/imgs/template/newsletter_img.png" alt="iori" />
                                        <div className="shape-2 image-1">
                                            <img src="/assets/imgs/template/newsletter_finger.png" alt="iori" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <span className="font-lg color-brand-1">Newsletter</span>
                                    <h2 className="color-brand-1 mb-15 mt-5">
                                        Subcribe our newsletter
                                    </h2>
                                    <p className="font-md color-grey-500">
                                        By clicking the button, you are agreeing with our Term &amp;
                                        Conditions
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

export default HomePage10;
