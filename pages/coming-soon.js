import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const comingSoon = () => {
    return (
        <>
            <Head>
                <title>Coming Soon</title>
            </Head>

            <Layout>
                <section className="section mt-90">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 mb-40"><span className="btn btn-tag">Under Construction</span>
                                <h1 className="color-brand-1 mt-15 mb-30">We are coming soon</h1>
                                <div className="box-count box-count-square mb-50">
                                    <div className="deals-countdown" data-countdown="2023/02/25 00:00:00" />
                                </div>
                                <p className="font-md color-grey-500">Our design projects are fresh and simple and will benefit your<br className="d-none d-lg-block" />business greatly. Learn more about our work!</p>
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="box-notify-me mt-15">
                                            <div className="inner-notify-me">
                                                <input className="form-control" type="text" placeholder="Enter you mail .." />
                                                <button className="btn btn-brand-1 font-md">Notify Me
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-45"><a className="icon-socials icon-facebook mr-15" href="#" /><a className="icon-socials icon-instagram mr-15" href="#" /><a className="icon-socials icon-twitter mr-15" href="#" /><a className="icon-socials icon-linkedin mr-15" href="#" /><a className="icon-socials icon-youtube" href="#" /></div>
                            </div>
                            <div className="col-lg-5 mb-40">
                                <object data="assets/imgs/page/coming/coming_soon.svg" type="image/svg+xml" />
                            </div>
                        </div>
                        <div className="border-bottom mb-0 mt-50" />
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image">
                                        <div className="box-image"><img src="assets/imgs/page/contact/headphone.png" alt="iori" /></div>
                                    </div>
                                    <div className="card-info">
                                        <h6 className="color-brand-1 mb-10">Help &amp; support</h6>
                                        <p className="font-xs color-grey-500">Email <a className="color-success" href="mailto:support@alithemes.com">support@alithemes.com </a><br />For help with a current product or service or refer to FAQs and developer tools</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image">
                                        <div className="box-image"><img src="assets/imgs/page/contact/phone.png" alt="iori" /></div>
                                    </div>
                                    <div className="card-info">
                                        <h6 className="color-brand-1 mb-10">Call Us</h6>
                                        <p className="font-xs color-grey-500">Call us to speak to a member of our team.<br />(+01) 234 567 89<br />(+01) 456 789 21</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image">
                                        <div className="box-image"><img src="assets/imgs/page/contact/chart.png" alt="iori" /></div>
                                    </div>
                                    <div className="card-info">
                                        <h6 className="color-brand-1 mb-10">Bussiness Department</h6>
                                        <p className="font-xs color-grey-500">Contact the sales department about cooperation projects<br />(+01) 789 456 23</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image">
                                        <div className="box-image"><img src="assets/imgs/page/contact/earth.png" alt="iori" /></div>
                                    </div>
                                    <div className="card-info">
                                        <h6 className="color-brand-1 mb-10">Global branch</h6>
                                        <p className="font-xs color-grey-500">Contact us to open our branches globally.<br />(+01) 234 567 89<br />(+01) 456 789 23</p>
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

export default comingSoon;