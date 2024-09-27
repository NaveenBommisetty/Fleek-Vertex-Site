import Link from 'next/link';
import Head from 'next/head';
import {React,useState} from 'react';
import Layout from '../components/layout/Layout';

const Faq = () => {
    const [activeKey, setActiveKey] = useState(null);

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key);
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
                        <div className="col-xl-9 col-lg-8">
                            <div className="content-single">
                                <h1 className="color-brand-336699 mb-30">Frequently Asked Questions</h1>
                                <div className="mb-20" id="Whatservicesdoweoffer"> <img className="bd-rd8" src="../assets/imgs/page/blog-detail/img.png" alt="iori" /></div>
                                <h2 className="color-brand-336699" id="HowdoesFleekVertexapproachanewproject?" >What services do we offer?</h2>
                                <p className="color-grey-600 font-lg mb-25">We specialize in software development, IT consulting, and digital transformation services. Our offerings include custom software development, mobile and web application development, cloud solutions, systems integration, and IT strategy consulting.</p>

                                <h2 className="color-brand-336699" id="CanFleekvertexsupportmyexistingITinfrastructure?">How does Fleek Vertex approach a new project?</h2>
                                <p className="color-grey-600 font-lg mb-25" id="Typesofe-commercebusinessmodels">To fully understand e-commerce, let us examine its past, growth, and effects on the business world. We'll also discuss the main types of e-commerce business plans, the pros and cons of selling things online, and the tools you'll need to get started.</p>
                                
                                <h2 className="color-brand-336699" id='WhatindustriesdoesFleekvertexserve?'>Can Fleekvertex support my existing IT infrastructure?</h2>
                                <p className="color-grey-600 font-lg mb-25">Yes, we provide comprehensive support and maintenance services for existing IT infrastructures. Our experts ensure your systems are running optimally and make recommendations for improvements.</p>

                                <h2 className="color-brand-336699" id='HowcanIgetstartedwithFleekvertex?'>What industries does Fleekvertex serve?</h2>
                                <p className="color-grey-600 font-lg mb-25">We work across a wide range of industries, including Education, Construction, Retail and E-Commerce, Health Care, Travel and hospitality, Entertainment, E-commerce, Mining, the Public Sector, and more. Our tailored solutions meet the unique needs and challenges of each sector.</p>
                                
                                <h2 className="color-brand-336699">How can I get started with Fleekvertex?</h2>
                                <p className="color-grey-600 font-lg mb-25" id="WaystoMakeMobileAppsSecure">To get started, visit our website or call our customer support number. We'll schedule an introductory appointment to explore your requirements and how we might help your business succeed.</p>
                                
                                <h2 className="color-brand-336699">What makes Fleekvertex different from other IT consulting companies?</h2>
                                <p className="color-grey-600 font-lg mb-25" id="WaystoMakeMobileAppsSecure">Our agile approach, industry expertise, and commitment to delivering new solutions differentiate us. We prioritize long-term relationships with our clients, ensuring that our solutions continue to add value as your business develops and evolves.</p>

                                <h2 className="color-brand-336699">How does Fleekvertex ensure the security of its software solutions?</h2>
                                <p className="color-grey-600 font-lg mb-25" id="WaystoMakeMobileAppsSecure">We strongly emphasize cybersecurity. Our development procedures accept industry best practices for security, and we conduct thorough testing and vulnerability assessments to protect your data while ensuring compliance with relevant standards and legislation. We also provide constant security and maintenance for our solutions.</p>

                                <h2 className="color-brand-336699">Can Fleekvertex integrate with my existing systems and applications?</h2>
                                <p className="color-grey-600 font-lg mb-25" id="WaystoMakeMobileAppsSecure">Yes,Fleekvertex has extensive experience in system integration and can seamlessly integrate our solutions with your existing systems and applications.</p>

                                <h2 className="color-brand-336699">Does Fleekvertex offer training or support for the software solutions it develops?</h2>
                                <p className="color-grey-600 font-lg mb-25" id="WaystoMakeMobileAppsSecure">Yes, we provide comprehensive training and support services to ensure that your team is equipped to use our software solutions effectively. We also offer ongoing technical support to address any issues or questions that may arise.</p>

                                <h2 className="color-brand-336699">How does Fleekvertex keep up with emerging technologies and trends in the industry?</h2>
                                <p className="color-grey-600 font-lg mb-25" id="WaystoMakeMobileAppsSecure">We are committed to staying ahead of technological advancements and industry trends. We regularly conduct research and invest in training for our team to ensure we can provide cutting-edge solutions for our clients.</p>

                                <h2 className="color-brand-336699">Can Fleekvertex assist with digital transformation initiatives?</h2>
                                <p className="color-grey-600 font-lg mb-25" id="WaystoMakeMobileAppsSecure">Yes, digital transformation is one of our key areas of expertise. Our team of professionals has vast experience assisting organizations in using technology to optimize processes, increase efficiency, and drive growth.</p>

                                <h2 className="color-brand-336699">Does Fleekvertex work with startups and small businesses?</h2>
                                <p className="color-grey-600 font-lg mb-25" id="WaystoMakeMobileAppsSecure">Yes,we work with various clients, including startups and small businesses. We understand these organizations' unique challenges and can provide cost-effective solutions customized to their needs. </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <div className="sidebar-author sticky-sidebar">
                                
                                
                                <div className="mt-50">
                                    <h6 className="color-brand-5 mb-15">Table of contents</h6>
                                    <ul className="list-number">
                                        <li> <Link href="#Whatservicesdoweoffer">What services do we offer</Link></li>
                                        <li> <Link href="#HowdoesFleekVertexapproachanewproject?">How does Fleek Vertex approach a new project?</Link></li>
                                        <li> <Link href="#CanFleekvertexsupportmyexistingITinfrastructure?">Can Fleekvertex support my existing IT infrastructure?</Link></li>
                                        <li> <Link href="#WhatindustriesdoesFleekvertexserve?">What industries does Fleekvertex serve?</Link></li>
                                        <li> <Link href="#HowcanIgetstartedwithFleekvertex?">How can I get started with Fleekvertex?</Link></li>
                                        
                                    </ul>
                                </div>
                                <div className="mt-50 d-flex align-item-center"> <strong className="font-xs-bold color-brand-5 mr-20">Share</strong>
                                    <div className="list-socials mt-0 d-inline-block"> <Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
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
