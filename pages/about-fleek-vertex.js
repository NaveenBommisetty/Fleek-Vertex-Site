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
                    <div className="container pt-100">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-7"><span className="title-line line-48">Who we are</span>
                                <h1 className="color-brand-5 mb-20 mt-10">About Fleek Vertex</h1>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <p className="font-md color-gray-900">We’re not just a tech company—innovators passionate about creating industry-changing solutions. Our journey began with a simple idea: harnessing the power of technology to solve real-world challenges. Today, we pride ourselves on our commitment to excellence, working with forward-thinking businesses to achieve success through innovative digital solutions.</p>
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
                        <h2 className="color-brand-5 mb-15">Our company is a digital one that can help you with all of your web issues.</h2>
                        <p className="font-md color-grey-400 mb-30">Our team of skilled professionals is dedicated to delivering customized strategies that cater to your unique business needs, ensuring that your online presence is practical and secure.</p>
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
                                    <p className="font-md color-grey-400">Our culture succeeds in 6 key characteristics that set us apart, giving us a unique approach and results.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Our Passion</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Our passion makes everything we do better and drives us to go above and beyond and take on tasks with spirit. We work on every job with unwavering dedication and a genuine love for what we do. Our team is driven by this desire to develop new ideas, push the limits, and provide solutions that make a difference.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Act With Integrity</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We’re honest, transparent and committed to doing what’s best for our customers and our company. We openly collaborate in pursuit of the truth. We have no tolerance for politics, hidden agendas or passive-aggressive behavior.</p>
                                        </div>
                                    </li> 
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Integrity is essential.</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">We promise to always be honest and open with our clients, team members, and business partners. We think honesty is important for making friends and keeping connections going for a long time. This way of doing things ensures that we keep our promises and are responsible for what we do.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul className="list-core-value">
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Respectful</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Communication and making decisions are based on showing respect. We value what each person brings to the table and listen with understanding to see things from different points of view. This respect makes a place where everyone feels respected and free to do their best, where people can work together and help each other. Maintaining a mindset of mutual respect helps us get along better with each other and achieve our goals as a team.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Ownership</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">Ownership is at the center of our culture. We offer everyone on the team the tools to be active and responsible, ensuring that projects are handled with care and dedication. This feeling of ownership makes the workplace lively, where everyone cares about our goals and works together to get great results. We encourage new ideas, keep improving our method, and set new standards of excellence by taking responsibility.</p>
                                        </div>
                                    </li>
                                    <li> <span className="ticked" />
                                        <h5 className="color-brand-1 mb-5">Unified</h5>
                                        <div className="box-border-dashed">
                                            <p className="font-md color-grey-500 mb-20">The essence of our culture is unity. Working together leads to new ideas and better results as a cohesive team. We can face challenges and celebrate successes together because we all have the same goal and work together. This makes sure that everyone moves forward at the same time.</p>
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
                                        {/* <h3 className="color-brand-5 mt-10 mb-15">Behind every brand is an <br className="d-none d-lg-block" />interesting story</h3> */}
                                        <p className="font-md color-grey-400">Our team is the backbone of our success, bringing together decades of experience from across the industry. Each person brings different skills and ideas to the discussion, which helps us tackle challenging problems confidently and accurately. This deep knowledge allows us to deliver innovative, practical, and future-oriented solutions. We're not just a team of professionals; we're also a company of people who have learned how to do things by doing them in the real world. In this way, every project gains from our combined knowledge. When you work with us, you'll work with experts who know how to do the job.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-story box-story-2">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="box-info-video mt-30 mb-30"><span className="btn btn-tag">OUR MISSION</span>
                                        {/* <h3 className="color-brand-5 mt-10 mb-15">We have a mission to help businesses grow the best with existing conditions</h3> */}
                                        <p className='font-md color-grey-400'>Our mission is to drive innovation by providing innovative technology solutions that empower businesses to excel in the digital world. We are dedicated to pushing the boundaries of what is possible, ensuring our clients achieve their goals accurately and efficiently. 
We are a global force, connecting with customers and partners across the mainland to inspire innovation and deliver excellence. Our reach extends beyond borders, bringing diverse perspectives and solutions to every corner of the globe.</p>
                                        <p className="font-md color-grey-400">As a nominated company, We've partnered with a committed group to push the limits and obtain excellent results. We have experience in various industries, so we can make the correct responses for you. We make a real difference by combining cutting-edge technology with a deep knowledge of your problems. We are known as reliable partners because we have a history of success and are dedicated to new ideas.</p>
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
                                        <h2 className="color-brand-5 mt-15 mb-20"></h2>
                                        <p className="font-md color-grey-500">If you're looking to discover how digital innovation can amplify your marketing efforts, the professionals are ready to assist. Technology is our specialty for increasing brand awareness, audience engagement, and meaningful transactions. Our digital strategy, analytics, and cutting-edge marketing technologies expertise may help you succeed. Contact our marketing experts today to discuss marketing optimization. Contact info@fleekvertex.com or (+91) 9346 261 550 to start your success story.</p>
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
            </Layout>

        </>
    );
};

export default pageAbout;