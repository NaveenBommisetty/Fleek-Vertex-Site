import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import ExploreTopics from '../components/slider/ExploreTopics';
import Knowledgebase from '../components/slider/Knowledgebase';

const Help = () => {
    return (
        <>
            <Head>
                <title>Help Center</title>
            </Head>

            <Layout>
                <section className="section mt-90">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-40"><span className="title-line line-48">Support Center</span>
                                <h2 className="color-brand-1 mt-15 mb-30">How can we help you?</h2>
                                <p className="font-md color-grey-500">Search here to get answers to your questions</p>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="box-notify-me mt-15">
                                            <div className="inner-notify-me">
                                                <input className="form-control" type="text" placeholder="Search the doc .." />
                                                <button className="btn btn-brand-1 font-md">Search
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-45">
                                    <p className="font-sm-bold color-brand-1">Suggested Search:</p>
                                </div>
                                <div className="mt-10"><Link className="btn btn-tag-circle mr-10 mb-10" href="#">guest users</Link><Link className="btn btn-tag-circle mr-10 mb-10" href="#">create account</Link><Link className="btn btn-tag-circle mr-10 mb-10" href="#">invoice</Link><Link className="btn btn-tag-circle mb-10" href="#">security</Link></div>
                            </div>
                            <div className="col-lg-7 mb-40 d-none d-md-block">
                                <div className="box-banner-help">
                                    <div className="box-cruelty shape-1"><img src="assets/imgs/page/help/cruelty.png" alt="iori" /></div>
                                    <div className="banner-img-1"><img src="assets/imgs/page/help/banner1.png" alt="iori" /></div>
                                    <div className="banner-img-2"><img src="assets/imgs/page/help/banner2.png" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-40 pt-50 pb-15 bg-grey-80">
                    <div className="container">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-3">
                                <Knowledgebase />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Explore Topics</h2>
                                <p className="font-lg color-gray-500">Easily create Documentation, Knowledge-base, FAQ, Forum and more</p>
                            </div>
                        </div>
                        <div className="mt-50">
                            <div className="box-swiper swiper-style-2">
                                <ExploreTopics />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-20 mb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">From Community Forums</h2>
                                <p className="font-lg color-gray-500">Updated on September 24, 2023</p>
                            </div>
                        </div>
                        <div className="table-box-help mt-50">
                            <div className="table-responsive">
                                <table className="table table-forum">
                                    <thead>
                                        <tr>
                                            <th className="width-50">Forum</th>
                                            <th className="width-16">Topics</th>
                                            <th className="width-16">Comments</th>
                                            <th className="width-18">Latest Post</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross5.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">Announcements</h4>
                                                        <p className="font-md color-grey-500">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>3</td>
                                            <td>16</td>
                                            <td>
                                                <div className="box-author"><span><img src="assets/imgs/page/help/author.png" alt="iori" /></span>
                                                    <div className="author-info"><span className="font-lg color-brand-1 author-name">Steven Job</span><span className="font-sm color-grey-500 department">16 mins ago</span></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage2/creation.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">User Feedback</h4>
                                                        <p className="font-md color-grey-500">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>3</td>
                                            <td>16</td>
                                            <td>
                                                <div className="box-author"><span><img src="assets/imgs/page/help/author2.png" alt="iori" /></span>
                                                    <div className="author-info"><span className="font-lg color-brand-1 author-name">Steven Job</span><span className="font-sm color-grey-500 department">16 mins ago</span></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross4.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">Technology support center</h4>
                                                        <p className="font-md color-grey-500">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>3</td>
                                            <td>16</td>
                                            <td>
                                                <div className="box-author"><span><img src="assets/imgs/page/help/author3.png" alt="iori" /></span>
                                                    <div className="author-info"><span className="font-lg color-brand-1 author-name">Steven Job</span><span className="font-sm color-grey-500 department">16 mins ago</span></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">Product Support</h4>
                                                        <p className="font-md color-grey-500">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>3</td>
                                            <td>16</td>
                                            <td>
                                                <div className="box-author"><span><img src="assets/imgs/page/help/author4.png" alt="iori" /></span>
                                                    <div className="author-info"><span className="font-lg color-brand-1 author-name">Steven Job</span><span className="font-sm color-grey-500 department">16 mins ago</span></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage3/certification.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">Market research</h4>
                                                        <p className="font-md color-grey-500">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>3</td>
                                            <td>16</td>
                                            <td>
                                                <div className="box-author"><span><img src="assets/imgs/page/help/author5.png" alt="iori" /></span>
                                                    <div className="author-info"><span className="font-lg color-brand-1 author-name">Steven Job</span><span className="font-sm color-grey-500 department">16 mins ago</span></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage2/identity.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">Strategic Consulting</h4>
                                                        <p className="font-md color-grey-500">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>3</td>
                                            <td>16</td>
                                            <td>
                                                <div className="box-author"><span><img src="assets/imgs/page/help/author6.png" alt="iori" /></span>
                                                    <div className="author-info"><span className="font-lg color-brand-1 author-name">Steven Job</span><span className="font-sm color-grey-500 department">16 mins ago</span></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-forum">
                                                    <div className="item-image"> <img src="assets/imgs/page/homepage3/enterprise.png" alt="iori" /></div>
                                                    <div className="item-info">
                                                        <h4 className="color-brand-1 mb-15">Cognitive Solution</h4>
                                                        <p className="font-md color-grey-500">Seamless importing and round-tripping of Microsoft Project plans, Excel files &amp; CSV files.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>3</td>
                                            <td>16</td>
                                            <td>
                                                <div className="box-author"><span><img src="assets/imgs/page/help/author7.png" alt="iori" /></span>
                                                    <div className="author-info"><span className="font-lg color-brand-1 author-name">Steven Job</span><span className="font-sm color-grey-500 department">16 mins ago</span></div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 mb-30">
                    <div className="container">
                        <div className="box-radius-border box-radius-border-help">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6"><img className="d-block" src="assets/imgs/page/help/answer.png" alt="iori" /></div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="box-info-answer"><span className="btn btn-tag">More help</span>
                                        <h2 className="color-brand-1 mt-10 mb-15">Can’t find an answer?</h2>
                                        <p className="color-grey-500 font-md">Make use of a qualified tutor to get the answer</p>
                                        <div className="box-button mt-30"> <Link className="btn btn-brand-1 hover-up" href="#">Ask a Question</Link><Link className="btn btn-default font-sm-bold hover-up" href="#">
                                            Contact Us
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
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
                                <h2 className="color-brand-1 mb-20">From our blog </h2>
                                <p className="font-lg color-gray-500">Aenean velit nisl, aliquam eget diam eu, rhoncus tristique dolor.<br className="d-none d-lg-block" />Aenean vulputate sodales urna ut vestibulum</p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start"><a className="btn btn-default font-sm-bold pl-0">View All
                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></a></div>
                        </div>
                        <div className="row mt-55">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/homepage2/news1.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="/blog-detail">
                                        <h6 className="color-brand-1">Easy Ways to Make Money While You Sleep</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="blog">Technology</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/homepage2/news2.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="/blog-detail">
                                        <h6 className="color-brand-1">Tiktok video size guide: Everything you need to know</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="blog">Marketting</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/homepage1/news2.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="/blog-detail">
                                        <h6 className="color-brand-1">How to convert video to MP4 for free online</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="blog">Media</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/homepage2/news3.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="/blog-detail">
                                        <h6 className="color-brand-1">5 fastest ways to increase search engine rankings</h6></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="mt-20 d-flex align-items-center border-top pt-20"><Link className="btn btn-border-brand-1 mr-15" href="blog">SEO</Link><span className="date-post font-xs color-grey-300 mr-15">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>29 May 2022</span><span className="time-read font-xs color-grey-300">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>3 mins read</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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

export default Help;