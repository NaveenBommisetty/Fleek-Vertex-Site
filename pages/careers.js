import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const Careers = () => {

    return (
        <>
            <Head>
                <title>Career</title>
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
                                <li> <Link href="#">Careers</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="section mt-90">
                    <div className="container">
                        <div className="text-center">
                            <h6 className="color-grey-500 mb-15">Take a look at our current openings</h6>
                            <h2 className="color-brand-1">We are Always Searching For <br className="d-none d-lg-block" />Amazing People to Join Our Team. </h2>
                        </div>
                        <div className="box-video mt-70"> <img src="assets/imgs/page/career/img-video.png" alt="iori" />
                        </div>
                    </div>
                </section>
              
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Career Opportunities</h2>
                                <p className="font-lg color-gray-500">Explore our open roles for working totally remotely, from the<br className="d-none d-lg-block" />office or somewhere in between.</p>
                            </div>
                        </div>
                        <div className="row mt-50">

                                <div className="col-lg-6" >
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image mt-20">
                                            <img src='assets/imgs/frontend.png' />
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10">
                                            <Link className="color-brand-1" href='Career/front-end-developer'>Front-end Developer</Link></h4>
                                            <p className="font-md color-grey-500 mb-5">Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files.</p>
                                            <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-1"  href='Career/front-end-developer'>Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" >
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image mt-20">
                                            <img src='assets/imgs/uiux1.png' />
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10">
                                            <Link className="color-brand-1" href='Career/ui-ux-developer'>Ui/Ux Developer</Link></h4>
                                            <p className="font-md color-grey-500 mb-5">What makes us different from others? We give holistic solutions with strategy, design & technology</p>
                                            <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-1"  href='Career/ui-ux-developer'>Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" >
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image mt-20">
                                            <img src='assets/imgs/mobile1.png' />
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10">
                                            <Link className="color-brand-1" href='Career/mobile-app'>MobileApp Developer</Link></h4>
                                            <p className="font-md color-grey-500 mb-5">We are looking for a skilled mobile app developer to create cutting-edge applications for iOS and Android platforms.</p>
                                            <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-1"  href='Career/mobile-app'>Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" >
                                    <div className="card-offer card-we-do hover-up">
                                        <div className="card-image mt-20">
                                            <img src='assets/imgs/wordpress.png' />
                                        </div>
                                        <div className="card-info">
                                            <h4 className="color-brand-1 mb-10">
                                            <Link className="color-brand-1" href='Career/wordpress'>wordpress Developer</Link></h4>
                                            <p className="font-md color-grey-500 mb-5">Join our team to develop custom WordPress themes and plugins for a variety of clients.</p>
                                            <div className="box-button-offer">
                                                <Link className="btn btn-default font-sm-bold pl-0 color-brand-1"  href='Career/wordpress'>Learn More
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                       
                        
                    </div>
                </section>
                <section className="section mt-10 pb-50 bg-core-value">
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
                
                <section className="section mt-50 pt-50 pb-40">
                    <div className="container">
                        <div className="box-cover-border">
                            <div className="row align-items-center">
                                <div className="col-lg-6"><img className="d-block" src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
                                <div className="col-lg-6">
                                    <div className="box-info-video"><span className="btn btn-tag">Get in touch</span>
                                        <h2 className="color-brand-1 mt-15 mb-20">Want to talk to a marketing expert?</h2>
                                        <p className="font-md color-grey-500">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        <div className="box-button text-start mt-65"> <Link className="btn btn-brand-1 hover-up" href="#">Contact Us</Link></div>
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

export default Careers;