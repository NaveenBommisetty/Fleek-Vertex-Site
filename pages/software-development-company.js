import Link from 'next/link';
import Head from 'next/head';
import { React } from 'react';
import Accordion from '../components/elements/Accordion';
import Layout from '../components/layout/Layout';
import { useState } from 'react';

const SoftwareDevelopmentCompany = () => {

    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <Head>
                <title>Custom Software Development Services</title>
            </Head>

            <Layout>
                <section className="section banner-contact">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-7"><span className="title-line line-48">Get in Touch</span>
                                    <h1 className="color-brand-5 mb-20 mt-10">Custom Software Development Services</h1>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <p className="font-md color-gray-900">Request a demo, ask a question, or get in touch here. If you’re interested in working at Iori Coporation, check out our.
                                                Request a demo, ask a question, or get in touch here. If you’re interested in working at Iori Coporation, check out our.
                                                Request a demo, ask a question, or get in touch here. If you’re interested in working at Iori Coporation, check out our.
                                            </p>
                                            <div className="box-button text-start mt-40">
                                                <Link className="btn btn-brand-1 hover-up" href="#get-in-touch">Get in Touch</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="box-banner-contact"><img src="assets/imgs/page/contact/banner.png" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-20">
                    <div className="container">
                        <div className="row mt-50 mb-50">
                            <div className="col-xl-6 col-lg-5">
                                <div className="box-images-project">
                                    <span class="btn btn-tag-green">Get in touch</span>
                                    <h2 className="color-brand-1 mb-15">Elevating your digital presence</h2>
                                    <p className="color-grey-500 mb-15">Necessary to deliver white glove, fully managed campaigns that surpass industry benchmarks.Take your career to next level. Apply to our team and see what we can do together. You’re good enough.</p>
                                    <p className="color-grey-500 mb-15">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</p>
                                    <p className="color-grey-500 mb-15">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</p>
                                    <p className="color-grey-500 mb-15 mt-40">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</p>
                                    <p className="color-grey-500 mb-15">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</p>

                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="row pt-40">
                                    <div className="box-image"><img src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section bg-grey-60 p-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h3 className="color-brand-1 mb-20">Why You Should Consider Applying</h3>
                                <p className="font-lg color-gray-500">Our tailor-made business software solutions comprehensively offers services to multiple businesses.</p>
                            </div>
                        </div>
                        <div class="row mt-50">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card-offer hover-up">
                                    <div class="card-image">
                                        <img src="assets/imgs/page/job-detail/ui.png" alt="iori" />
                                    </div>
                                    <div class="card-info">
                                        <h4 class="color-brand-1 mb-15">Bespoke Software Development</h4>
                                        <p class="font-md color-grey-500 mb-15">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card-offer hover-up">
                                    <div class="card-image">
                                        <img src="assets/imgs/page/job-detail/ui.png" alt="iori" />
                                    </div>
                                    <div class="card-info">
                                        <h4 class="color-brand-1 mb-15">Application Migration and Re-Engineering</h4>
                                        <p class="font-md color-grey-500 mb-15">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card-offer hover-up">
                                    <div class="card-image">
                                        <img src="assets/imgs/page/job-detail/ui.png" alt="iori" />
                                    </div>
                                    <div class="card-info">
                                        <h4 class="color-brand-1 mb-15">Software Application Maintenance</h4>
                                        <p class="font-md color-grey-500 mb-15">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card-offer hover-up">
                                    <div class="card-image">
                                        <img src="assets/imgs/page/job-detail/ui.png" alt="iori" />
                                    </div>
                                    <div class="card-info">
                                        <h4 class="color-brand-1 mb-15">SaaS Applications</h4>
                                        <p class="font-md color-grey-500 mb-15">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card-offer hover-up">
                                    <div class="card-image">
                                        <img src="assets/imgs/page/job-detail/ui.png" alt="iori" />
                                    </div>
                                    <div class="card-info">
                                        <h4 class="color-brand-1 mb-15">Application Integration</h4>
                                        <p class="font-md color-grey-500 mb-15">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card-offer hover-up">
                                    <div class="card-image">
                                        <img src="assets/imgs/page/job-detail/ui.png" alt="iori" />
                                    </div>
                                    <div class="card-info">
                                        <h4 class="color-brand-1 mb-15">Maintenance and Support</h4>
                                        <p class="font-md color-grey-500 mb-15">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Services We Offer</h2>
                                <p className="font-lg color-gray-500">What makes us different from others? We give holistic solutions<br className="d-none d-lg-block" />with strategy, design &amp; technology.</p>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="/mobile-app-development-company">Mobile App Development Services</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">Web Development Services</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">E-commerce Development Services</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">Cloud Migration Services.</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer5.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">JIRA Administration</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer6.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="#">Software Testing Services</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-80">
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Industries We Serve</h2>
                                <p className="font-lg color-gray-500">What makes us different from others? We give holistic solutions<br className="d-none d-lg-block" />with strategy, design &amp; technology.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-50 mb-40">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-1">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/certification.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="icon-up-black">Education</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-2">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/conference.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Construction</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-3">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/research.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Retail & Ecommerce</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-4">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/dispersal.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Health Care</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-5">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/enterprise.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Travel & Hospitality</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-7">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Oil & Gas</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-8">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Energy</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-10">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Entertainment</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-11">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">E-commerce</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-1">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Mining</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-2">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Public Sector</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-3">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Logistics</h6></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="col-xl-12 mb-30">
                    <div className="card-radius-32 bg-grey-60">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="box-cover-pd">
                                    <div className="box-image-rd-30"> <img className="w-100" src="/assets/imgs/page/homepage7/img.png" alt="iori" />
                                        <h4 className="color-brand-1 lbl-on-top">IORI Business Platform</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-cover-pd-2">
                                    <h2 className="color-brand-1 mb-30">How to grow your <br className="d-none d-lg-block" />business fast</h2>
                                    <div className="item-number hover-up">
                                        <div className="num-ele">1</div>
                                        <div className="info-num">
                                            <h5 className="color-brand-1 mb-15">Create an account</h5>
                                            <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                        </div>
                                    </div>
                                    <div className="item-number hover-up">
                                        <div className="num-ele">2</div>
                                        <div className="info-num">
                                            <h5 className="color-brand-1 mb-15">Build your founding team</h5>
                                            <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                        </div>
                                    </div>
                                    <div className="item-number hover-up">
                                        <div className="num-ele">3</div>
                                        <div className="info-num">
                                            <h5 className="color-brand-1 mb-15">Launch and Scale</h5>
                                            <p className="font-md color-grey-500">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-lg-12 text-center mb-50">
                            <h2 className="color-brand-1 mb-20">Case Studies</h2>
                            <p className="font-lg color-gray-500">WhatGetting into the nitty-gritty of each project and <br /> achieving a measurable result is what we do for the world's leading companies. Take a look! </p>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="card-radius-32">
                                <div className="card-info">
                                    <h3 className="color-brand-1 mb-20">Financial Management</h3>
                                    <p className="font-md color-grey-500 mb-20">Track, manage, and control your expenses. The only financial management tool you’ll ever need.</p>
                                    <div className="text-center"> <Link href="#"><img className="mr-10" src="/assets/imgs/template/appstore.png" alt="iori" /></Link><Link href="#"><img src="/assets/imgs/template/google-play.png" alt="iori" /></Link></div>
                                </div>
                                <div className="card-image"> <img src="/assets/imgs/page/homepage7/img-financial.png" alt="iori" /></div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="card-radius-32 bg-4">
                                <div className="card-info">
                                    <h3 className="color-brand-1 mb-20">Automated Platform</h3>
                                    <p className="font-md color-grey-500 mb-20">Synchronize and automate all your business in the cloud. Save time and effort, enjoy great vacations.</p>
                                    <div className="mt-0"> <Link className="btn btn-brand-1-small" href="#">Get Started Now
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                                <div className="card-image"> <img src="/assets/imgs/page/homepage7/automated.png" alt="iori" /></div>
                            </div>
                        </div>

                    </div>
                </div>
                <section>
                    <div className='container'>
                        <div className="row mt-50">
                            <div className="col-lg-12 text-center mb-50">
                                <h2 className="color-brand-1 mb-20">Technologies We Use</h2>
                                <p className="font-lg color-gray-500">What makes us different from others? We give holistic solutions<br className="d-none d-lg-block" />with strategy, design &amp; technology.</p>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="card-plan-style-2 hover-up">
                                    <div className="card-plan">
                                        <div className="card-image-plan">
                                            <div className="icon-plan"> <img src="/assets/imgs/page/homepage1/free.svg" alt="iori" /></div>
                                            <div className="info-plan">
                                                <h4 className="color-brand-1">Back End</h4>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Flask Development
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>FAST API
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Django
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>ASP.Net
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>codeigniter
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="card-plan-style-2 hover-up">
                                    <div className="card-plan">
                                        <div className="card-image-plan">
                                            <div className="icon-plan"> <img src="/assets/imgs/page/homepage1/free.svg" alt="iori" /></div>
                                            <div className="info-plan">
                                                <h4 className="color-brand-1">Front End</h4>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>React.Js
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Java Script
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Html5
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>CSS3
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="card-plan-style-2 hover-up">
                                    <div className="card-plan">
                                        <div className="card-image-plan">
                                            <div className="icon-plan"> <img src="/assets/imgs/page/homepage1/free.svg" alt="iori" /></div>
                                            <div className="info-plan">
                                                <h4 className="color-brand-1">Web Devlopment</h4>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>React.Js
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Java Script
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Html5
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>CSS3
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-80 mb-30 bg-faqs">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">Frequently asked questions</h2>
                                <p className="font-lg color-gray-500">
                                    Feeling inquisitive? Have a read through some of our FAQs or
                                    <br className="d-none d-lg-block" />
                                    contact our supporters for help.
                                </p>
                            </div>

                        </div>

                        <div className="container mt-50 mb-100">
                            {/* FAQ Content */}
                            <div className="col-xl-12 col-lg-12">
                                <div className="tab-content tab-content-slider">
                                    <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion title="General Support FAQs" />
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion title="Order / Purchase FAQs" />
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion title="Download / Install FAQs" />
                                    </div>
                                    <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion title="Technology FAQs" />
                                    </div>
                                    <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <Accordion title="Your Account FAQs" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-10 mb-60 mt-70" id="get-in-touch">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <h2 className="color-brand-5 mb-15" >Get in touch</h2>
                                <p className="font-sm color-grey-500">Do you want to know more or contact our sales department?</p>
                                <div className="mt-50">
                                    <div className="card-offer card-we-do card-contact hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/contact/img1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h6 className="color-brand-5 mb-10">Visit the Knowledge Base</h6>
                                            <p className="font-md color-grey-500 mb-5">Browse customer support articles and step-by-step instructions for specific features.</p>
                                        </div>
                                    </div>
                                    <div className="card-offer card-we-do card-contact hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/contact/img2.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h6 className="color-brand-5 mb-10">Watch Product Videos</h6>
                                            <p className="font-md color-grey-500 mb-5">Watch our video tutorials for visual walkthroughs on how to use our features.</p>
                                        </div>
                                    </div>
                                    <div className="card-offer card-we-do card-contact hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/contact/img3.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h6 className="color-brand-5 mb-10">Get in touch with Sales</h6>
                                            <p className="font-md color-grey-500 mb-5">Let us talk about how we can help your enterprise.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="box-form-contact">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group mb-25">
                                                <input className="form-control icon-user" type="text" placeholder="Your name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group mb-25">
                                                <input className="form-control icon-email" type="text" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group mb-25">
                                                <input className="form-control icon-phone" type="text" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group mb-25">
                                                <input className="form-control icon-company" type="text" placeholder="Company" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group mb-25">
                                                <input className="form-control" type="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group mb-25">
                                                <textarea className="form-control textarea-control" placeholder="Write something" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6 col-9">
                                            <div className="form-group">
                                                <button className="btn btn-brand-1-full font-sm" type="submit">Send message
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
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

export default SoftwareDevelopmentCompany;