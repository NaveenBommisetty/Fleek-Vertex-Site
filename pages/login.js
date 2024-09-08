import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const pageLogin = () => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <Layout>
                <section className="section banner-login position-relative float-start">
                    <div className="box-banner-abs">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xxl-5 col-xl-12 col-lg-12">
                                    <div className="box-banner-login">
                                        <h2 className="color-brand-1 mb-15">Welcome back</h2>
                                        <p className="font-md color-grey-500">Fill your email address and password to sign in.</p>
                                        <div className="line-login mt-25 mb-50" />
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mb-25">
                                                    <input className="form-control icon-user" type="text" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mb-25">
                                                    <input className="form-control icon-password" type="text" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-6 mt-15">
                                                <div className="form-group mb-25">
                                                    <label className="cb-container">
                                                        <input type="checkbox" defaultChecked="checked" /><span className="text-small">Remember me</span><span className="checkmark" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-6 mt-15">
                                                <div className="form-group mb-25 text-end"><Link className="font-xs color-grey-500" href="#">Forgot password?</Link></div>
                                            </div>
                                            <div className="col-lg-12 mb-25">
                                                <button className="btn btn-brand-lg btn-full font-md-bold" type="submit">Sign in</button>
                                            </div>
                                            <div className="col-lg-12"><span className="color-grey-500 d-inline-block align-middle font-sm">
                                                Don’t have an account?
                                            </span><Link className="d-inline-block align-middle color-success ml-3" href="register">  Sign up now</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-xxl-5 col-xl-7 col-lg-6" />
                        <div className="col-xxl-7 col-xl-5 col-lg-6 pr-0">
                            <div className="d-none d-xxl-block pl-70"><img className="w-100 d-block" src="assets/imgs/page/login/banner.png" alt="iori" /></div>
                        </div>
                    </div>
                </section>
                <div className="section bg-grey-80 pt-70 pb-70">
                    <div className="container">
                        <ul className="list-partners">
                            <li><img src="assets/imgs/page/homepage1/placed.png" alt="iori" /></li>
                            <li><img src="assets/imgs/page/homepage1/cuebiq.png" alt="iori" /></li>
                            <li><img src="assets/imgs/page/homepage1/factual.png" alt="iori" /></li>
                            <li><img src="assets/imgs/page/homepage1/placeiq.png" alt="iori" /></li>
                            <li><img src="assets/imgs/page/homepage1/airmeet.png" alt="iori" /></li>
                            <li><img src="assets/imgs/page/homepage1/spen.png" alt="iori" /></li>
                            <li><img src="assets/imgs/page/homepage1/klippa.png" alt="iori" /></li>
                            <li><img src="assets/imgs/page/homepage1/matrix.png" alt="iori" /></li>
                        </ul>
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

export default pageLogin;