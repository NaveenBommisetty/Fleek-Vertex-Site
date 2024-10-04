import Link from 'next/link';
import Head from 'next/head';
import {React,useState} from 'react';
import Layout from '../components/layout/Layout';
import QnsFaq from '../components/elements/QnsFaq';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
        <Head>
            <title>Frequently Asked Questions</title>
        </Head>

        <Layout>
            <div className="section breadcrumbs-path pt-20 pb-20">
                <div className="container">
                    <div className="breadcrumbs ">
                        <ul>
                            <li> <Link href="/">
                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>Home</Link></li>
                            <li> <Link href="#">FAQ's</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section mt-40">
                <div className="container">
                    <div className="row">                      
                        <div className="">
                            {/* FAQ Content */}
                            <h1 className="color-brand-336699 mb-30">Frequently Asked Questions</h1>
                            <div className="col-xl-12 col-lg-12">
                                <div className="tab-content tab-content-slider" >
                                    <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade" }  >
                                        <QnsFaq title="General Support FAQs" />
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <QnsFaq title="Order / Purchase FAQs" />
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <QnsFaq title="Download / Install FAQs" />
                                    </div>
                                    <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <QnsFaq title="Technology FAQs" />
                                    </div>
                                    <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <QnsFaq title="Your Account FAQs" />
                                    </div>
                                    <div className={activeIndex === 6 ? "tab-pane fade active show" : "tab-pane fade"} >
                                        <QnsFaq title="Your Account FAQs" />
                                    </div>
                                    <div className={activeIndex === 7 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <QnsFaq title="Your Account FAQs" />
                                    </div>
                                    <div className={activeIndex === 8 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <QnsFaq title="Your Account FAQs" />
                                    </div>
                                    <div className={activeIndex === 9 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <QnsFaq title="Your Account FAQs" />
                                    </div>
                                    <div className={activeIndex === 10 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <QnsFaq title="Your Account FAQs" />
                                    </div>
                                    <div className={activeIndex === 11 ? "tab-pane fade active show" : "tab-pane fade"} >
                                        <QnsFaq title="Your Account FAQs" />
                                    </div>
                                    <div className={activeIndex === 12 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <QnsFaq title="Your Account FAQs" />
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
                <div className="border-bottom bd-grey-80 mt-10" />
            </div>
        </Layout>

    </>
    );
};


export default Faq;
