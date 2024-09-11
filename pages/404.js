import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const Error = () => {
    return (
        <>
            <Head>
                <title>Error 404 -  Page not found</title>
            </Head>
            <Layout>
                <section className="section box-404">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2" />
                            <div className="col-lg-10">
                                <div className="row align-items-center">
                                    <div className="col-md-5 col-sm-12 mb-30 text-center text-md-start"><img src="assets/imgs/page/404/404.png" alt="iori" /></div>
                                    <div className="col-md-7 col-sm-12 text-center text-md-start">
                                        <h1 className="color-brand-1 font-84 mb-10">404</h1>
                                        <h3 className="color-brand-1 mb-25">Oops, nothing to see here</h3>
                                        <p className="font-md color-grey-500">Unfortunately, we couldn't find what you were looking for or the page no longer exists.</p>
                                        <div className="mt-50"><Link className="btn btn-default color-grey-900 pl-0" href="/">
                                            <svg className="w-6 h-6 icon-16 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>Back to Homepage</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom bd-grey-80 mt-110 mb-0" />
                    </div>
                </section> 
            </Layout>
        </>
    );
};

export default Error;