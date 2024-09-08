import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const pageTeam = () => {
    return (
        <>
            <Head>
                <title>Our Team</title>
            </Head>

            <Layout>
                <section className="section banner-team">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <h2 className="color-brand-1 mb-20">Customers Love Our Creative Team, and So Will You</h2>
                                    <div className="box-button mt-30 mb-60"> <Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link><Link className="btn btn-default font-sm-bold hover-up" href="#">
                                        Support Center
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                    <p className="font-md color-grey-500 mb-25">“Highly recommend Iori Agency! They guide us on marketing initiatives and develop great strategies to increase our return on investment. The agency is excellent at being cooperative and responding quickly.”</p>
                                    <div className="box-author"><Link href="#"><img src="assets/imgs/page/team/author.png" alt="iori" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Bessie Cooper</span></Link>
                                            <div className="rating d-inline-block"> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /> <img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 d-none d-lg-block">
                                    <div className="box-banner-team">
                                        <div className="arrow-down-banner shape-1" />
                                        <div className="arrow-right-banner shape-2" />
                                        <div className="banner-col-1">
                                            <div className="img-banner"><img src="assets/imgs/page/team/banner1.png" alt="iori" /></div>
                                        </div>
                                        <div className="banner-col-2">
                                            <div className="img-banner"> <img src="assets/imgs/page/team/banner2.png" alt="iori" /></div>
                                            <div className="img-banner hasBorder"> <img src="assets/imgs/page/team/banner3.png" alt="iori" /></div>
                                        </div>
                                        <div className="banner-col-3">
                                            <div className="img-banner hasBorder2"> <img src="assets/imgs/page/team/banner4.png" alt="iori" /></div>
                                            <div className="img-banner"> <img src="assets/imgs/page/team/banner5.png" alt="iori" /></div>
                                            <div className="img-banner"> <img src="assets/imgs/page/team/banner6.png" alt="iori" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                <section className="section mt-90">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-6">
                                <h6 className="color-brand-1 mb-20">Our leadership team</h6>
                                <h2 className="color-brand-1 mb-50">Meet the amazing team behind Iori</h2>
                            </div>
                        </div>
                        <div className="row align-items-start">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/imgs/page/about/team1.png" alt="iori" /></div>
                                    <div className="card-info"><Link className="font-lg" href="#">Devon Lane</Link>
                                        <p className="font-xs color-grey-200 mb-10">CEO</p>
                                        <p className="font-xs color-grey-400">Sharing content online allows you to craft an online persona that reflects your personal values and professional skills. Even if you only use social media occasionally</p>
                                        <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/imgs/page/about/team2.png" alt="iori" /></div>
                                    <div className="card-info"><Link className="font-lg" href="#">Jennie Tho</Link>
                                        <p className="font-xs color-grey-200 mb-10">Finance Manager</p>
                                        <p className="font-xs color-grey-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus.</p>
                                        <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/imgs/page/about/team3.png" alt="iori" /></div>
                                    <div className="card-info"><Link className="font-lg" href="#">Symon Lesin</Link>
                                        <p className="font-xs color-grey-200 mb-10">Technology Manager</p>
                                        <p className="font-xs color-grey-400">In a professional context it often happens that private or corporate clientsorder a publication to publish news. Excepteur sint occaecat cupidatat non proident,</p>
                                        <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/imgs/page/team/team1.png" alt="iori" /></div>
                                    <div className="card-info"><Link className="font-lg" href="#">Virginia Aguilar</Link>
                                        <p className="font-xs color-grey-200 mb-10">Director of People</p>
                                        <p className="font-xs color-grey-400">In a professional context it often happens that private or corporate clientsorder a publication to publish news. Excepteur sint occaecat cupidatat non proident,</p>
                                        <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom mt-30" />
                </section>
                <section className="section mt-90">
                    <div className="container">
                        <h6 className="color-brand-1 mb-20">Board members</h6>
                        <h2 className="color-brand-1 mb-50">Together we are strong</h2>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card-member">
                                    <div className="card-top">
                                        <div className="card-image"><img src="assets/imgs/page/team/member1.png" alt="iori" /></div>
                                        <div className="card-info"><span className="font-lg-bold color-brand-1">Darrell Steward</span>
                                            <p className="font-xs color-grey-200">Product Designer</p>
                                            <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <p className="font-xs color-grey-500">Joined since 2012, when we were just established. He is a great companion.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card-member">
                                    <div className="card-top">
                                        <div className="card-image"><img src="assets/imgs/page/team/member2.png" alt="iori" /></div>
                                        <div className="card-info"><span className="font-lg-bold color-brand-1">Guy Hawkins</span>
                                            <p className="font-xs color-grey-200">Product Designer</p>
                                            <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <p className="font-xs color-grey-500">Joined since 2012, when we were just established. He is a great companion.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card-member">
                                    <div className="card-top">
                                        <div className="card-image"><img src="assets/imgs/page/team/member3.png" alt="iori" /></div>
                                        <div className="card-info"><span className="font-lg-bold color-brand-1">Darlene Robertson</span>
                                            <p className="font-xs color-grey-200">Product Designer</p>
                                            <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <p className="font-xs color-grey-500">Joined since 2012, when we were just established. He is a great companion.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card-member">
                                    <div className="card-top">
                                        <div className="card-image"><img src="assets/imgs/page/team/member4.png" alt="iori" /></div>
                                        <div className="card-info"><span className="font-lg-bold color-brand-1">Ronald Richards</span>
                                            <p className="font-xs color-grey-200">Product Designer</p>
                                            <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <p className="font-xs color-grey-500">Joined since 2012, when we were just established. He is a great companion.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card-member">
                                    <div className="card-top">
                                        <div className="card-image"><img src="assets/imgs/page/team/member5.png" alt="iori" /></div>
                                        <div className="card-info"><span className="font-lg-bold color-brand-1">Kathryn Murphy</span>
                                            <p className="font-xs color-grey-200">Product Designer</p>
                                            <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <p className="font-xs color-grey-500">Joined since 2012, when we were just established. He is a great companion.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card-member">
                                    <div className="card-top">
                                        <div className="card-image"><img src="assets/imgs/page/team/member6.png" alt="iori" /></div>
                                        <div className="card-info"><span className="font-lg-bold color-brand-1">Cameron Williamson</span>
                                            <p className="font-xs color-grey-200">Product Designer</p>
                                            <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <p className="font-xs color-grey-500">Joined since 2012, when we were just established. He is a great companion.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card-member">
                                    <div className="card-top">
                                        <div className="card-image"><img src="assets/imgs/page/team/member7.png" alt="iori" /></div>
                                        <div className="card-info"><span className="font-lg-bold color-brand-1">Floyd Miles</span>
                                            <p className="font-xs color-grey-200">Product Designer</p>
                                            <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <p className="font-xs color-grey-500">Joined since 2012, when we were just established. He is a great companion.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card-member">
                                    <div className="card-top">
                                        <div className="card-image"><img src="assets/imgs/page/team/member8.png" alt="iori" /></div>
                                        <div className="card-info"><span className="font-lg-bold color-brand-1">Devon Lane</span>
                                            <p className="font-xs color-grey-200">Product Designer</p>
                                            <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <p className="font-xs color-grey-500">Joined since 2012, when we were just established. He is a great companion.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card-member">
                                    <div className="card-top">
                                        <div className="card-image"><img src="assets/imgs/page/team/member9.png" alt="iori" /></div>
                                        <div className="card-info"><span className="font-lg-bold color-brand-1">Albert Flores</span>
                                            <p className="font-xs color-grey-200">Product Designer</p>
                                            <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <p className="font-xs color-grey-500">Joined since 2012, when we were just established. He is a great companion.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card-member">
                                    <div className="card-top">
                                        <div className="card-image"><img src="assets/imgs/page/team/member10.png" alt="iori" /></div>
                                        <div className="card-info"><span className="font-lg-bold color-brand-1">Jenny Wilson</span>
                                            <p className="font-xs color-grey-200">Product Designer</p>
                                            <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <p className="font-xs color-grey-500">Joined since 2012, when we were just established. He is a great companion.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card-member">
                                    <div className="card-top">
                                        <div className="card-image"><img src="assets/imgs/page/team/member11.png" alt="iori" /></div>
                                        <div className="card-info"><span className="font-lg-bold color-brand-1">Arlene McCoy</span>
                                            <p className="font-xs color-grey-200">Product Designer</p>
                                            <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <p className="font-xs color-grey-500">Joined since 2012, when we were just established. He is a great companion.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="card-member">
                                    <div className="card-top">
                                        <div className="card-image"><img src="assets/imgs/page/team/member12.png" alt="iori" /></div>
                                        <div className="card-info"><span className="font-lg-bold color-brand-1">Theresa Webb</span>
                                            <p className="font-xs color-grey-200">Product Designer</p>
                                            <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                        </div>
                                    </div>
                                    <div className="card-bottom">
                                        <p className="font-xs color-grey-500">Joined since 2012, when we were just established. He is a great companion.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row mt-50 align-items-center">
                            <div className="col-xl-5 col-lg-12 mb-40">
                                <h2 className="color-brand-1 mt-10 mb-15">Have a question?<br className="d-none d-lg-block" />Our team is happy to help you</h2>
                                <div className="row">
                                    <div className="col-lg-10">
                                        <p className="font-md color-grey-500">Access advanced order types including limit, market, stop limit and dollar cost averaging. Track your total asset holdings, values and equity over time. Monitor markets, manage your portfolio, and trade crypto on the go.</p>
                                    </div>
                                </div>
                                <div className="mt-50 text-start"><Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link><Link className="btn btn-default font-sm-bold hover-up" href="#">Learn More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                            <div className="col-xl-7 col-lg-12">
                                <div className="box-video-business box-images-team">
                                    <div className="item-video"><img src="assets/imgs/page/team/question1.png" alt="iori" /></div>
                                    <div className="box-image-right"><img className="mb-20" src="assets/imgs/page/team/question2.png" alt="iori" /><img src="assets/imgs/page/team/question3.png" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-0 pb-50 bg-core-value bg-7 mb-40 mt-100">
                    <div className="container">
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value pl-0">
                                    <h1 className="color-brand-1 mb-15">Core values</h1>
                                    <p className="font-md color-grey-400">We break down barriers so teams can focus on what matters – working together to create products their customers love.</p>
                                    <div className="mt-30"> <Link className="btn btn-white-circle font-sm-bold border-brand" href="#">JOIN OUR TEAM TODAY</Link></div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value list-core-value-white">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Customers First</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Act With Integrity</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We’re honest, transparent and committed to doing what’s best for our customers and our company. We openly collaborate in pursuit of the truth. We have no tolerance for politics, hidden agendas or passive-aggressive behavior.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Make a Difference Every Day</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value list-core-value-white">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Think Big</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Being the world's leading commerce platform requires unrivaled vision, innovation and execution. We never settle. We challenge our ideas of what’s possible in order to better meet the needs of our customers.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Do the right thing</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Integrity is the foundation for everything we do. We are admired and respected for our commitment to honesty, trust, and transparency. </p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Stronger united</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We’ve created a positive and inclusive culture that fosters open, honest, and meaningful relationships.</p>
                                        </div>
                                    </li>
                                </ul>
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
                                    <div className="card-image"><Link href="blog-detail"><img src="assets/imgs/page/homepage2/news1.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="blog-detail">
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
                                    <div className="card-image"><Link href="blog-detail"><img src="assets/imgs/page/homepage2/news2.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="blog-detail">
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
                                    <div className="card-image"><Link href="blog-detail"><img src="assets/imgs/page/homepage1/news2.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="blog-detail">
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
                                    <div className="card-image"><Link href="blog-detail"><img src="assets/imgs/page/homepage2/news3.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="blog-detail">
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

export default pageTeam;