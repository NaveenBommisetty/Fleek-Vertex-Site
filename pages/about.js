import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const pageAbout = () => {
    return (
        <>
            <Head>
                <title>Fleek - About Us</title>
            </Head>
            <Layout>
            <section className="section banner-contact">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-7"><span className="title-line line-48">Who we are</span>
                                    <h1 className="color-brand-5 mb-20 mt-10">About us</h1>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <p className="font-md color-gray-900">Fleek Vertex is a software development and IT consulting company that was founded in 2023. Our company serves IT and non-IT organizations, helping to achieve a variety of goals and objectives with digital solutions and recent trend technologies.</p>
                                        </div>
                                    </div> 
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="box-banner-contact"><img src="assets/imgs/page/contact/banner.png" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-90 banner-about">
                    <div className="container text-center">
                        <h6 className="color-grey-400 mb-15">Who we are</h6>
                        <h2 className="color-brand-5 mb-15">We are a digital agency that tackles <br className="d-none d-lg-block" />all your online challenges.</h2>
                        <p className="font-md color-grey-400 mb-30">Social media networks are open to all. Social media is typically used for social interation and <br className="d-none d-lg-block" />access to news and information, and decison making.</p>
                        <div className="box-radius-border mt-50">
                            <div className="box-list-numbers">
                                <div className="item-list-number">
                                    <div className="box-image-bg"> <img src="assets/imgs/page/homepage3/dispersal.png" alt="iori" /></div>
                                    <h2 className="color-brand-1">469K+</h2>
                                    <p className="color-brand-1 font-lg">Social followers</p>
                                </div>
                                <div className="item-list-number">
                                    <div className="box-image-bg"> <img src="assets/imgs/page/homepage3/certification.png" alt="iori" /></div>
                                    <h2 className="color-brand-1">25k+</h2>
                                    <p className="color-brand-1 font-lg">Happy Clients</p>
                                </div>
                                <div className="item-list-number">
                                    <div className="box-image-bg"> <img src="assets/imgs/page/homepage1/cross2.png" alt="iori" /></div>
                                    <h2 className="color-brand-1">756+</h2>
                                    <p className="color-brand-1 font-lg">Project Done</p>
                                </div>
                                <div className="item-list-number">
                                    <div className="box-image-bg"> <img src="assets/imgs/page/homepage3/research.png" alt="iori" /></div>
                                    <h2 className="color-brand-1">100+</h2>
                                    <p className="color-brand-1 font-lg">Global branch</p>
                                </div>
                                <div className="item-list-number">
                                    <div className="box-image-bg"> <img src="assets/imgs/page/homepage3/conference.png" alt="iori" /></div>
                                    <h2 className="color-brand-1">240+</h2>
                                    <p className="color-brand-1 font-lg">Conference</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section mt-90 pb-50 bg-core-value'>
                    <div className='container'>
                    <div className="row">
                            <div className="col-lg-6">
                                <div className="item-core mb-30">
                                    <div className="item-image"><img src="assets/imgs/page/about/img1.png" alt="iori" /></div>
                                    <div className="item-desc">
                                        <p className="font-md color-grey-400 mb-15">“Whether you are working from home, at the office or at the job site, we provide flexible tools so you can connect and collaborate on waterfall projects, agile projects and everything in between.”</p>
                                        <h6 className="color-brand-1">Omprakash S</h6><span className="color-grey-500 font-xs">Founder</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="item-core mb-30">
                                    <div className="item-image"><img src="assets/imgs/page/about/img1.png" alt="iori" /></div>
                                    <div className="item-desc">
                                        <p className="font-md color-grey-400 mb-15">“We created a revolutionary online knowledge and competencies assessment solution. It empowers thousands of organizations worldwide to grow by allowing them to get a broader picture and draw better conclusions”</p>
                                        <h6 className="color-brand-1">Palla</h6><span className="color-grey-500 font-xs">Co Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-90 pb-50 bg-core-value">
                    <div className="container">
                        
                        <div className="row box-list-core-value">
                            <div className="col-lg-4 mb-70">
                                <div className="box-core-value">
                                    <div className="shape-left shape-1" />
                                    <h3 className="color-brand-1 mb-15">Core values</h3>
                                    <p className="font-md color-grey-400">We break down barriers so teams can focus on what matters – working together to create products their customers love.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
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
                                <ul className="list-core-value">
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
                <section className="section pt-100 pb-100 bg-2">
                    <div className="container">
                        <div className="box-story box-story-1">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="box-info-video"><img className="bd-rd8 d-block" src="assets/imgs/page/about/img3.png" alt="iori" /></div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="box-info-video mt-30 mb-30"><span className="btn btn-tag">OUR STORY</span>
                                        <h3 className="color-brand-5 mt-10 mb-15">Behind every brand is an <br className="d-none d-lg-block" />interesting story</h3>
                                        <p className="font-md color-grey-400">Ea nostrum temporibus ex nulla totam qui galisum quae a adipisci modi. In exercitationem culpa sed blanditiis corrupti sit doloremque maxime eos iusto molestiae ex laborum nulla in quas dignissimos 33 dolorum quis.</p>
                                        <ul className="list-dots mt-20">
                                            <li>Aut voluptate iste ex esse earum.</li>
                                            <li>Sed placeat nostrum eum voluptas tenetu</li>
                                            <li>Et reprehenderit fugit et unde voluptate</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-story box-story-2">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="box-info-video mt-30 mb-30"><span className="btn btn-tag">OUR MISSION</span>
                                        <h3 className="color-brand-5 mt-10 mb-15">We have a mission to help businesses grow the best with existing conditions</h3>
                                        <p className="font-md color-grey-400">Ea nostrum temporibus ex nulla totam qui galisum quae a adipisci modi. In exercitationem culpa sed blanditiis corrupti sit doloremque maxime eos iusto molestiae ex laborum nulla in quas dignissimos 33 dolorum quis. Est dolor autem et voluptate autem id enim optio vel incidunt alias.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="box-info-video"><img className="bd-rd8 d-block" src="assets/imgs/page/about/img4.png" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section mt-90">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-6">
                                <h6 className="color-brand-5 mb-20">Our leadership team</h6>
                                <h3 className="color-brand-5 mb-50">Meet the amazing team behind Iori</h3>
                            </div>
                        </div>
                        <div className="row align-items-start">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/imgs/page/about/team1.png" alt="iori" /></div>
                                    <div className="card-info"><Link className="font-lg" href="#">Devon Lane</Link>
                                        <p className="font-xs color-grey-200 mb-10">CEO</p>
                                        <p className="font-xs color-grey-400">Sharing content online allows you to craft an online persona that reflects your personal values and professional skills. Even if you only use social media occasionally</p>
                                        <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/imgs/page/about/team2.png" alt="iori" /></div>
                                    <div className="card-info"><Link className="font-lg" href="#">Jennie Tho</Link>
                                        <p className="font-xs color-grey-200 mb-10">Finance Manager</p>
                                        <p className="font-xs color-grey-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus.</p>
                                        <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card-team mb-30">
                                    <div className="card-image"><img src="assets/imgs/page/about/team3.png" alt="iori" /></div>
                                    <div className="card-info"><Link className="font-lg" href="#">Symon Lesin</Link>
                                        <p className="font-xs color-grey-200 mb-10">Technology Manager</p>
                                        <p className="font-xs color-grey-400">In a professional context it often happens that private or corporate clientsorder a publication to publish news. Excepteur sint occaecat cupidatat non proident,</p>
                                        <div className="list-socials"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
                                <div className="col-lg-6">
                                    <div className="box-info-video"><span className="btn btn-tag">Get in touch</span>
                                        <h2 className="color-brand-5 mt-15 mb-20">Want to talk to a marketing expert?</h2>
                                        <p className="font-md color-grey-500">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link><Link className="btn btn-default font-sm-bold hover-up" href="#">
                                            Support Center
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100 box-testimonial-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 text-start pt-50"><span className="title-line line-48">Testimonials</span>
                                <h2 className="color-brand-1 mb-20 mt-15">What our clients<br className="d-none d-lg-block" />say about us</h2>
                                <div className="row">
                                    <div className="col-lg-10">
                                        <p className="font-md color-gray-500 mb-30">Access advanced order types including limit, market, stop limit and dollar cost averaging. Track your total asset holdings, values and equity over time. Monitor markets, manage your portfolio, and trade crypto on the go.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 bg-testimonials position-relative">
                                <div className="ml-20">
                                    <div className="card-testimonial-list">
                                        <div className="d-flex align-items-center">
                                            <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/homepage1/author.png" alt="iori" /></Link>
                                                <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                            </div>
                                            <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                                        </div>
                                        <p className="font-md color-grey-500">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                    </div>
                                </div>
                                <div className="ml-100">
                                    <div className="card-testimonial-list">
                                        <div className="d-flex align-items-center">
                                            <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/homepage2/author2.png" alt="iori" /></Link>
                                                <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                            </div>
                                            <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /></div>
                                        </div>
                                        <p className="font-md color-grey-500">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                    </div>
                                </div>
                                <div className="card-testimonial-list">
                                    <div className="d-flex align-items-center">
                                        <div className="box-author mb-10"><Link href="#"><img src="assets/imgs/page/homepage2/author3.png" alt="iori" /></Link>
                                            <div className="author-info"><Link href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></Link><span className="font-xs color-grey-500 department">Bank of America</span></div>
                                        </div>
                                        <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /></div>
                                    </div>
                                    <p className="font-md color-grey-500">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </Layout>

        </>
    );
};

export default pageAbout;