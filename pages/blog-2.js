import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const Blog2 = () => {
    return (
        <>
            <Head>
                <title>News & Blog</title>
            </Head>

            <Layout>
                <section className="section mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center"><span className="btn btn-tag">The Iori Blog</span>
                                <h2 className="color-brand-1 mt-15">Insight and advice from <br className="d-none d-lg-block" />our expert team</h2>
                            </div>
                        </div>
                        <div className="mt-30 mb-60">
                            <ul className="list-buttons">
                                <li> <Link className="active" href="#" data-type="all">All articles</Link></li>
                                <li> <Link href="#" data-type="featured">Featured</Link></li>
                                <li> <Link href="#" data-type="company">Company</Link></li>
                                <li> <Link href="#" data-type="product-news">Product News</Link></li>
                                <li> <Link href="#" data-type="customer-stories">Customer Stories</Link></li>
                                <li> <Link href="#" data-type="guides">Guides</Link></li>
                                <li> <Link href="#" data-type="other">Other</Link></li>
                            </ul>
                        </div>
                        <div className="box-list-blogs">
                            <div className="row mt-55">
                                <div className="col-lg-12 mb-60 item-article featured">
                                    <div className="item-1">
                                        <div className="box-cover-border">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/blog2/img1.png" alt="iori" /></div>
                                                <div className="col-lg-6">
                                                    <div className="box-info-video"><span className="btn btn-tag">Featured</span><Link href="blog-detail">
                                                        <h3 className="color-brand-1 mt-15 mb-20">7 Things To Keep In Mind When Starting A Business</h3></Link>
                                                        <div className="mb-25 mt-10"><span className="font-xs-color-grey-500">November 17, 2022</span><span className="font-xs-color-grey-500 icon-read">2 min read</span></div>
                                                        <p className="font-md color-grey-500">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
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
                            </div>
                            <div className="mt-20 mb-30">
                                <h3 className="color-brand-1 title-line-right">Promotions</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-30 item-article customer-stories">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img3.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Marketting</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-1">10 Content Proofreading Tips to Catch More Avoidable Goofs</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div>
                                            <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-30 item-article product-news">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img4.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Tutorial</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-1">Everything a Beginner Blogger Needs to Know for 2023</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div>
                                            <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-30 item-article company">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img5.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Team work</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-1">Bad Email Marketing and Nickelback Don’t Have Much in Common</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div>
                                            <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20 mb-50">
                                <h3 className="color-brand-1 title-line-right line-brand-3">E-Commerce</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-30 item-article featured">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img1.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Marketting</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-1">How to save money - 8 simple ways to start saving money every month</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div>
                                            <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30 item-article guides">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img2.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Technology</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-1">Essential Steps to Building And Refining an Effective UX Portfolio</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div>
                                            <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-0 mb-30 text-center"> <Link className="btn btn-white-circle font-sm-bold border-brand text-none" href="blog">View more in this category</Link></div>
                            <div className="mt-20 mb-50">
                                <h3 className="color-brand-1 title-line-right line-brand-4">Marketing Strategy</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-30 item-article featured">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog2/img2.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Marketing</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-1">7 Copywriting Strategies the Great Copywriters Wish You Knew</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div>
                                            <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-30 item-article featured">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img6.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Blogging</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-1">What Is the Main Action a Writer Takes When Proofreading?</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div>
                                            <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-30 item-article other">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img9.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Marketting</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-1">The Betty Crocker Secret to an Email Marketing Strategy People Enjoy</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div>
                                            <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-0 mb-30 text-center"> <Link className="btn btn-white-circle font-sm-bold border-brand text-none" href="blog">View more in this category</Link></div>
                            <div className="mt-20 mb-50">
                                <h3 className="color-brand-1 title-line-right line-info">Industry Use Cases</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 mb-30 item-article featured">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img10.png" alt="iori" /></Link>
                                            <Link href="blog"><label className="lbl-border">Marketing</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-1">22 Strategies for Outdoor &amp; Sporting Goods E-Commerce Retailers in 2022 + Industry Benchmarks</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div>
                                            <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 mb-30 item-article featured">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-info"><Link href="blog-detail">
                                            <h4 className="color-brand-1">Understanding The Different Types of Automated Email Marketing Campaigns</h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div>
                                            <p className="font-sm color-grey-500 mt-20">If you are already on Shopify, you are probably familiar with the importance of crafting the perfect email newsletter. Even if a customer visits your site but doesn’t make a purchase, your newsletter can be the right motivation that will bring them back when a special promotion is on the line.  Since the newsletter is an integral part of email marketing, let us walk you through the steps of creating a winning newsletter capable of turning subscribers into buyers.</p>
                                        </div>
                                    </div>
                                    <div className="border-bottom bd-grey-80 mt-0 pt-30 mb-50" />
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-info"><Link href="blog-detail">
                                            <h4 className="color-brand-1">How To Create a Successful Newsletter For Your Shopify Store </h4></Link>
                                            <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div>
                                            <p className="font-sm color-grey-500 mt-20">Popups can also be employed to help eCommerce businesses build their newsletter email list organically. By using the right CTA in your email newsletter popup for Shopify-based eCommerce stores, you can change the pace of your email address accumulation process and help yourself reach a wider audience – all by using a simple incentive such as a special offer discount code on a specific item or a freebie in exchange for the client’s email address.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-0 mb-30 text-center"> <Link className="btn btn-white-circle font-sm-bold border-brand text-none" href="blog">View more in this category</Link></div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="box-newsletter box-newsletter-2">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-7 m-auto text-center"><span className="font-lg color-brand-1">Newsletter</span>
                                    <h2 className="color-brand-1 mb-15 mt-5">Subcribe our newsletter</h2>
                                    <p className="font-md color-grey-500">Do not miss the laBlog2 information from us about the trending in the market. By clicking the button, you are agreeing with our Term &amp; Conditions</p>
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

export default Blog2;