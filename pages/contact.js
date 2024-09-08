import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const ContactUs = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>

            <Layout>
                <section className="section banner-contact">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-7"><span className="title-line line-48">Get in Touch</span>
                                    <h1 className="color-brand-5 mb-20 mt-10">We’d love to hear<br className="d-none d-lg-block" />from you.</h1>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <p className="font-md color-gray-900">Request a demo, ask a question, or get in touch here. If you’re interested in working at Iori Coporation, check out our.</p>
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
                <section className="section mt-50 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-small card-small-2 color-gray-900">
                                    <div className="card-image">
                                        <div className="box-image"><img src="assets/imgs/page/contact/headphone.png" alt="iori" /></div>
                                    </div>
                                    <div className="card-info">
                                        <h6 className="color-brand-5 mb-10">Help &amp; support</h6>
                                        <p className="font-sm color-gray-900">Email <a className="color-success" href="mailto:info@fleekvertex.com">info@fleekvertex.com </a><br />For help with a current product or service or refer to FAQs and developer tools</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image">
                                        <div className="box-image"><img src="assets/imgs/page/contact/phone.png" alt="iori" /></div>
                                    </div>
                                    <div className="card-info">
                                        <h6 className="color-brand-5 mb-10">Call Us</h6>
                                        <p className="font-sm color-gray-900">Call us to speak to a member of our team.<br />(+91) 9346 261 550<br />(+91) 9346 261 550</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image">
                                        <div className="box-image"><img src="assets/imgs/page/contact/chart.png" alt="iori" /></div>
                                    </div>
                                    <div className="card-info">
                                        <h6 className="color-brand-5 mb-10">Bussiness Department</h6>
                                        <p className="font-sm color-gray-900">Contact the sales department about cooperation projects<br />(+01) 789 456 23</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image">
                                        <div className="box-image"><img src="assets/imgs/page/contact/earth.png" alt="iori" /></div>
                                    </div>
                                    <div className="card-info">
                                        <h6 className="color-brand-5 mb-10">Global branch</h6>
                                        <p className="font-sm color-grey-500">Contact us to open our branches globally.<br />(+01) 234 567 89<br />(+01) 456 789 23</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                <section className="section mt-50 mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <h2 className="color-brand-5 mb-15">Get in touch</h2>
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

export default ContactUs;