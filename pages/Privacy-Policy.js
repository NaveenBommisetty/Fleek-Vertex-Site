import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy & Policy</title>
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
                                <li> <Link href="#">PRIVACY POLICY</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="section pt-40 content-term">
                    <div className="" />
                    <div className="container">
                        <div className="content-main mt-10">
                            <div className="text-center">
                                <h2 className="color-brand-1 mb-10">PRIVACY AND POLICY</h2>
                                <p className="font-lg color-grey-500 pb-20">Updated Date: [26/09/2024]
                                    Welcome to Fleek Vertex,a software development and IT consulting company committed to respecting and protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. Your privacy is our top concern at Fleek Vertex, which may be accessed at www.fleekvertex.com. This Privacy Policy document describes what categories of information Fleek Vertex collects and documents and how we utilize it.</p>
                            </div>
                            <div className="row mt-70">
                                <div className="col-lg-2 col-md-5">
                                    <div className='sticky-sidebar sidebar-author'>
                                        <h6 className="color-brand-1 mb-15">Table of contents</h6>
                                        <ul className="list-terms">
                                            <li> <Link href="#InformationWeCollect">Information We Collect</Link></li>
                                            <li> <Link href="#HowWeUseYourInformation">How We Use Your Info</Link></li>
                                            <li> <Link href="#SharingYourInformation">Sharing Your Info</Link></li>
                                            <li> <Link href="#SecurityofYourInformation">Security of Your Info</Link></li>
                                            <li> <Link href="#ExternalLinks">External Links</Link></li>
                                            <li> <Link href="#Children’sOnlinePrivacyProtectionAct">Children’s Online Privacy Protection Act</Link></li>
                                            <li> <Link href="#ChangestoOurPrivacyPolicy">Changes to Our Privacy Policy</Link></li>
                                            <li> <Link href="#YourRights">Your Rights</Link></li>
                                            <li> <Link href="#ContactUs">Contact Us</Link></li>
                                            {/* <li> <Link href="#refund">Refund Policy</Link></li>
                                        <li> <Link href="#email">Email &amp; Newsletter</Link></li>
                                        <li> <Link href="#agreement">License Agreement</Link></li>
                                        <li> <Link href="#severability">Severability</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-8">
                                    <h4 className="color-brand-1 mb-10" id="InformationWeCollect">Information We Collect</h4>
                                    <p className="font-md color-grey-500 mb-10">When you register on our website, please inquire about our services or contact us; we may collect personal information you intentionally supply.This information may include your name, email address, phone number, and any further information you choose to availability.<br></br>
                                        We can also use cookies and other technologies to collect information automatically while you explore our website, such as your IP address, browser type, and usage data.This information is used to improve our website and services, as well as perform analytics and marketing.</p>
                                    <h3 className="color-brand-1 mb-20" id="HowWeUseYourInformation">How We Use Your Information</h3>
                                    <p className="font-md color-grey-500 mb-10 pl-10">Fleek Vertex utilizes the information that you provide:<br></br>
                                        1. Provide, operate, and maintain our services.<br></br>
                                        2. Improve our website and services.<br></br>
                                        3. Communicate with you by responding to inquiries and giving service updates.<br></br>
                                        4. Understand how visitors use our website for better user experience and analytics.<br></br>
                                        5. Please comply with the law and enforce our policies.
                                    </p>
                                    <h4 className="color-brand-1 mb-10" id="SharingYourInformation">Sharing Your Information</h4>
                                    <p className="font-md color-grey-500 mb-10">We may share your personal information with third-party service providers who help us run our website, provide services, or conduct marketing campaigns. These third parties must keep your information confidential and may not use it for any other reason.<br></br>
                                        We may also share your information if required by law or in the good faith assumption that such action is necessary to comply with a legal obligation, protect our rights or property, or investigate suspected policy violations.</p>
                                    <h4 className="color-brand-1 mb-10" id="SecurityofYourInformation">Security of Your Information</h4>
                                    <p className="font-md color-grey-500 mb-10">We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.</p>
                                    <h4 className="color-brand-1 mb-10" id="ExternalLinks">External Links</h4>
                                    <p className="font-md color-grey-500 mb-10">Our website may contain links to other websites that we do not operate. You will be directed to that site if you click on a third-party link. We strongly advise you to review every site's privacy policy.</p>
                                    <h4 className="color-brand-1 mb-10" id="Children’sOnlinePrivacyProtectionAct">Children’s Online Privacy Protection Act</h4>
                                    <p className="font-md color-grey-500 mb-10">Our website and services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can take the necessary actions to delete such information.</p>
                                    <h4 className="color-brand-1 mb-10" id="ChangestoOurPrivacyPolicy">Changes to Our Privacy Policy</h4>
                                    <p className="font-md color-grey-500 mb-10">We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this Privacy Policy periodically for any updates.</p>
                                    <h4 className="color-brand-1 mb-10" id="YourRights">Your Rights</h4>
                                    <p className="font-md color-grey-500 mb-10">You have the right to access, correct, or delete your personal information held by us. Don't hesitate to contact us if you wish to exercise these rights or have questions about our privacy practices.</p>
                                    <h4 className="color-brand-1 mb-10" id="ContactUs">Contact Us</h4>
                                    <p className="font-md color-grey-500 mb-20">If you have any questions about this Privacy Policy, please email us at info@fleekvertex.com. We will be happy to address your concerns and clarify any doubts. Thank you for choosing Fleek Vertex!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    );
};

export default PrivacyPolicy;