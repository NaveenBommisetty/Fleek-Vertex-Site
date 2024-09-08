import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const pageTerm = () => {
    return (
        <>
            <Head>
                <title>Terms and condition</title>
            </Head>

            <Layout>
                <div className="section pt-40 content-term">
                    <div className="box-bg-term" />
                    <div className="container">
                        <div className="breadcrumbs">
                            <ul>
                                <li> <Link href="#">
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>Home</Link></li>
                                <li> <Link href="term-conditions">Terms and condition</Link></li>
                            </ul>
                        </div>
                        <div className="content-main mt-50">
                            <div className="text-center">
                                <h2 className="color-brand-1 mb-10">Terms and Condition</h2>
                                <p className="font-lg color-grey-500">Amet nulla facilisi morbi tempus iaculis urna</p>
                                <div className="box-image-head mt-50 mb-50"> <img className="bd-rd8" src="assets/imgs/page/term/img.png" alt="iori" /></div>
                            </div>
                            <div className="row mt-70">
                                <div className="col-lg-1 col-md-1" />
                                <div className="col-lg-2 col-md-3">
                                    <h6 className="color-brand-1 mb-15">Table of contents</h6>
                                    <ul className="list-terms">
                                        <li> <Link href="#limitation">Limitation of Liability</Link></li>
                                        <li> <Link href="#licensing">Licensing Policy</Link></li>
                                        <li> <Link href="#product">Product Compatibility</Link></li>
                                        <li> <Link href="#delivery">Delivery</Link></li>
                                        <li> <Link href="#ownership">Ownership</Link></li>
                                        <li> <Link href="#browser">Browser Compatibility</Link></li>
                                        <li> <Link href="#updates">Updates</Link></li>
                                        <li> <Link href="#support">Theme Support</Link></li>
                                        <li> <Link href="#price">Price Changes</Link></li>
                                        <li> <Link href="#refund">Refund Policy</Link></li>
                                        <li> <Link href="#email">Email &amp; Newsletter</Link></li>
                                        <li> <Link href="#agreement">License Agreement</Link></li>
                                        <li> <Link href="#severability">Severability</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <h4 className="color-brand-1 mb-20" id="limitation">Limitation of Liability</h4>
                                    <p className="font-md color-grey-500 mb-30">Under no circumstances shall AliThemes be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if AliThemes or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.</p>
                                    <h4 className="color-brand-1 mb-20" id="licensing">Licensing Policy</h4>
                                    <p className="font-md color-grey-500 mb-30">AliThemes WordPress plugins and themes are released under the GNU General Public License v2 or later. Please refer to licensing policy page for licensing details.</p>
                                    <h4 className="color-brand-1 mb-20" id="product">Product Compatibility</h4>
                                    <p className="font-md color-grey-500 mb-30">The products are developed to be compatible with the latest version of WordPress because we always strive to stay up-to-date with the latest version of WordPress. You might experience certain performance or functionality glitches with the products if you use any version prior to that.</p>
                                    <h4 className="color-brand-1 mb-20" id="delivery">Delivery</h4>
                                    <p className="font-md color-grey-500 mb-30">Your purchased product(s) information will be emailed to the email address (that you will provide) once we receive your payment. Even though this usually takes a few minutes, it may also take up to 24 hours. You can contact us through our contact page if you do not receive your email after waiting for this time period. You will also have access to your purchased products from your account in AliThemes after logging in.</p>
                                    <h4 className="color-brand-1 mb-20" id="ownership">Ownership</h4>
                                    <p className="font-md color-grey-500 mb-30">All the products are the property of AliThemes. So you may not claim ownership (intellectual or exclusive) over any of our products, modified or unmodified. Our products come ‘as is’, without any kind of warranty, either expressed or implied. Under no circumstances can our juridical person be accountable for any damages including, but not limited to, direct, indirect, special, incidental or consequential damages or other losses originating from the employment of or incapacity to use our products.</p>
                                    <h4 className="color-brand-1 mb-20" id="browser">Browser Compatibility</h4>
                                    <p className="font-md color-grey-500 mb-30">We consider it our duty to offer a great experience across most major browsers, which is why our products support the latest modern web browsers including (but not limited to) Firefox, Safari, Chrome &amp; Internet Explorer 9+. However, the performance may vary between different browsers, versions, and operating systems.</p>
                                    <h4 className="color-brand-1 mb-20" id="updates">Updates</h4>
                                    <p className="font-md color-grey-500 mb-30">Our themes are constantly updated to be compatible with the latest stable version of WordPress. Please ensure that you always use the most current version of our themes.</p>
                                    <h4 className="color-brand-1 mb-20" id="support">Theme Support</h4>
                                    <p className="font-md color-grey-500 mb-30">Please refer to Help and Support Policy page for details.</p>
                                    <h4 className="color-brand-1 mb-20" id="price">Price Changes</h4>
                                    <p className="font-md color-grey-500 mb-30">AliThemes reserves the right to modify or suspend (temporarily or permanently) a subscription at any point of time and from time to time with or without any notice.</p>
                                    <h4 className="color-brand-1 mb-20" id="refund">Refund Policy</h4>
                                    <p className="font-md color-grey-500 mb-30">Please refer to Refund Policy page for details.</p>
                                    <h4 className="color-brand-1 mb-20" id="email">Email &amp; Newsletter</h4>
                                    <p className="font-md color-grey-500 mb-30">AliThemes may occasionally send you emails related to the purchase of product(s) from our company. We may also send you occasional email newsletters relating to AliThemes updates and promotions. We will never sell or release your email to any third party vendors. You may opt out of these emails at any time without penalty.</p>
                                    <h4 className="color-brand-1 mb-20" id="agreement">License Agreement</h4>
                                    <p className="font-md color-grey-500 mb-30">By purchasing our product(s), you indicate and consent that you have read and agree to the Terms &amp; Conditions listed and detailed on this page. We reserve the right to change or modify the current Terms and Conditions without prior notice or consent.</p>
                                    <h4 className="color-brand-1 mb-20" id="severability">Severability</h4>
                                    <p className="font-md color-grey-500 mb-30">If any part of this agreement is declared unenforceable or invalid, all remaining clauses in this agreement shall remain binding on the customer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section mt-50">
                    <div className="container">
                        <div className="box-newsletter box-newsletter-2">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-7 m-auto text-center"><span className="font-lg color-brand-1">Newsletter</span>
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

export default pageTerm;