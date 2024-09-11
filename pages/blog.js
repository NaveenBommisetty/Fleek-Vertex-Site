import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const Blog = () => {
    return (
        <>
            <Head>
                <title>News & Blog</title>
            </Head>

            <Layout>
                <section className="section banner-service bg-grey-60 position-relative">
                    <div className="box-banner-abs">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xxl-6 col-xl-7 col-lg-12">
                                    <div className="box-banner-service">
                                        <h2 className="color-brand-5 mb-20">All the important insights, guidance and news you need to know.</h2>
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <p className="font-lg color-grey-900">Keep up-to-date with all our latest company news and business content. The latest news, tips and advice to help you run your business with less fuss</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-xxl-6 col-xl-6 col-lg-6" />
                        <div className="col-xxl-6 col-xl-6 col-lg-6 pr-0">
                            <div className="d-none d-xxl-block pl-70"><img className="w-100 d-block" src="assets/imgs/page/blog/banner.png" alt="iori" /></div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-5 mb-0">Lastest Articles</h2>
                            </div>
                        </div>
                        {/* <div className="mt-30 mb-60">
                            <ul className="list-buttons">
                                <li> <Link className="button-click active" href="#" data-type="all">All articles</Link></li>
                                <li> <Link className="button-click" href="#" data-type="featured">Featured</Link></li>
                                <li> <Link className="button-click" href="#" data-type="company">Company</Link></li>
                                <li> <Link className="button-click" href="#" data-type="product-news">Product News</Link></li>
                                <li> <Link className="button-click" href="#" data-type="customer-stories">Customer Stories</Link></li>
                                <li> <Link className="button-click" href="#" data-type="guides">Guides</Link></li>
                                <li> <Link className="button-click" href="#" data-type="other">Other</Link></li>
                            </ul>
                        </div> */}
                        <div className="box-list-blogs">
                            <div className="row mt-55">
                                <div className="col-lg-12 mb-60 item-article featured">
                                    <div className="item-1">
                                        <div className="box-cover-border">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
                                                <div className="col-lg-6">
                                                    <div className="box-info-video">
                                                        <a class="btn btn-border-brand-1 mr-15" href="#">Featured</a><Link href="blog-detail">
                                                        <h3 className="color-brand-5 mt-15 mb-20">7 Things To Keep In Mind When Starting A Business</h3></Link>
                                                        <div className="mb-25 mt-10"><span className="font-xs-color-gray-900">November 17, 2022</span></div>
                                                        <p className="font-md color-gray-900">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                                        <div className="box-button text-start mt-45"> <Link className="btn btn-default font-sm-bold pl-0 hover-up" href="blog-detail">
                                                            Read more
                                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                            </svg></Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-30 item-article customer-stories">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img3.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Marketting</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-5">10 Content Proofreading Tips to Catch More Avoidable Goofs</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-gray-900">November 17, 2022</span><span className="font-xs color-gray-900 icon-read">2 min read</span></div>
                                            <p className="font-sm color-gray-900 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-30 item-article product-news">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img4.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Tutorial</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-5">Everything a Beginner Blogger Needs to Know for 2023</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-gray-900">November 17, 2022</span><span className="font-xs color-gray-900 icon-read">2 min read</span></div>
                                            <p className="font-sm color-gray-900 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-30 item-article company">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img5.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Team work</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-5">Bad Email Marketing and Nickelback Don’t Have Much in Common</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-gray-900">November 17, 2022</span><span className="font-xs color-gray-900 icon-read">2 min read</span></div>
                                            <p className="font-sm color-gray-900 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="box-ads-1 mb-70">
                                        <h3 className="color-brand-5 font-shippori title-ads mb-5">Get our free marketing books</h3>
                                        <p className="font-xs color-gray-900 mb-10">We synthesize all the tips and trends about online marketing in valuable books</p><Link className="btn btn-default font-sm-bold color-grey-900 pl-0" href="#">Register now
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-30 item-article featured">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img6.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Writing</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-5">7 Copywriting Strategies the Great Copywriters Wish You Knew</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-gray-900">November 17, 2022</span><span className="font-xs color-gray-900 icon-read">2 min read</span></div>
                                            <p className="font-sm color-gray-900 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-30 item-article featured">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img7.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Blogging</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-5">What Is the Main Action a Writer Takes When Proofreading?</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-gray-900">November 17, 2022</span><span className="font-xs color-gray-900 icon-read">2 min read</span></div>
                                            <p className="font-sm color-gray-900 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-30 item-article other">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img8.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Marketting</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-5">The Betty Crocker Secret to an Email Marketing Strategy People Enjoy</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-gray-900">November 17, 2022</span><span className="font-xs color-gray-900 icon-read">2 min read</span></div>
                                            <p className="font-sm color-gray-900 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-30 item-article other">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img9.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Business</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-5">Email Autoresponders: Meet the Lazy Marketer’s Best Friend</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-gray-900">November 17, 2022</span><span className="font-xs color-gray-900 icon-read">2 min read</span></div>
                                            <p className="font-sm color-gray-900 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-30 item-article other">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img10.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Marketting</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-5">Stop Wondering About How to Respond to Criticism</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-gray-900">November 17, 2022</span><span className="font-xs color-gray-900 icon-read">2 min read</span></div>
                                            <p className="font-sm color-gray-900 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-30 item-article other">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img11.png" alt="iori" /></Link>
                                            <Link href="blog"> <label className="lbl-border">Blogging</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-5">Top 5 Content Marketing Mistakes You’ll Wish You Fixed Sooner</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-gray-900">November 17, 2022</span><span className="font-xs color-gray-900 icon-read">2 min read</span></div>
                                            <p className="font-sm color-gray-900 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20 mb-30 text-center"> <Link className="btn btn-brand-1 font-sm-bold" href="#">Load More...</Link></div>
                        </div>
                    </div>
                </section>
            </Layout>

        </>
    );
};

export default Blog;