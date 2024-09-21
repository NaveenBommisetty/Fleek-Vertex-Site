import Link from 'next/link';
import Head from 'next/head';
import { React } from 'react';
import Accordion from '../components/elements/Accordion';
import MobiledevFaq from '../components/elements/MobiledevFaq';
import Layout from '../components/layout/Layout';
import { useState } from 'react';

const MobileAppDevelopmentCompany = () => {

    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <Head>
                <title>Mobile App Development Company</title>
            </Head>
            <Layout>
            <section className="section banner-contact">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-7"><span className="title-line line-48">Get in Touch</span>
                                    <h1 className="color-brand-5 mb-20 mt-10">Mobile App Development</h1>
                                    <div className="row">
                                        <div className="col-lg-9">
        <p className="font-md color-gray-900 mt-10">Are you ready to transform your business idea into a powerful mobile app? Our team of experienced professionals is here to help every step of the way. Contact us today to discuss your business and take the first steps toward connecting with your customers. Let's make something great together!</p>
 <p className="font-md color-gray-900">A mobile app is essential for your business to stay relevant and compete in today’s digital age. With the increased use of smartphones and tablets, people spend more time on their mobile devices than ever. This allows businesses to engage with their customers through customized mobile apps.
                                            </p>
                                            
                                            <div className="box-button text-start mt-40">
                                                <Link className="btn btn-brand-1 hover-up" href="#get-in-touch">Contact Us</Link>
                                            </div>
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
                <section className="section mt-20">
                    <div className="container">
                        <div className="row mt-50">
                            <div className="col-xl-6 col-lg-5">
                                <div className="box-images-project">
                                    <div className="title-line mb-10">Why choose us?</div>
                                    <h2 className="color-brand-1 mb-25">Partnering with the Right Development Team</h2>
                                    <p className="color-grey-500 mb-15 font-md">Once you have a solid idea of ​​your mobile app's goal, it is time to team up with the right development team. Find a team with experience building custom apps for startups and small businesses. They should also have a good understanding of your industry and be able to offer valuable insights and suggestions.</p>
                                    <p className="color-grey-500 mb-15 font-md">Communication is critical when working with a development team, so choose a transparent, functional, and cohesive team. This will ensure that your ideas are better translated into the final product. We understand that every project is unique. That’s why we build customized mobile apps to match your business needs precisely. Using agile development techniques, we ensure fast turnaround times without sacrificing quality.</p>
                                    <p className="color-grey-500 mb-15 font-md">Our team has extensive experience developing iOS and Android apps, guaranteeing your business reach. Our apps integrate seamlessly with your existing systems and technology, ensuring efficiency and effectiveness. Our focus is on creating easy-to-use, visually appealing products that increase user engagement and satisfaction. Our dedicated support and maintenance services mean your app will be updated and improved to keep it working correctly.</p>
                                    <div className="box-button text-start mt-40 mb-40"> <Link className="btn btn-brand-1 hover-up" href="#">Learn More</Link></div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="row pt-80 pb-50">
                                    <div className="box-image"><img src="assets/imgs/mobile-app-development-company.webp" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section bg-grey-60 p-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h3 className="color-brand-1 mb-20">Why You Should Consider Applying</h3>
                                <p className="font-lg color-gray-500">We offer our clients a comprehensive range of custom-made business software solutions designed to meet their needs.</p>
                            </div>
                        </div>
                        <div class="row mt-50">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card-offer hover-up">
                                    <div class="card-image">
                                        <img src="assets/imgs/page/job-detail/ui.png" alt="iori" />
                                    </div>
                                    <div class="card-info">
                                        <h4 class="color-brand-1 mb-15">Bespoke Software Development</h4>
                                        <p class="font-md color-grey-500 mb-15">Customized solutions that deal with the problems and possibilities your business meets. We get to know your business well so that we can make unique software that improves your processes, makes them more efficient, and helps your business grow.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card-offer hover-up">
                                    <div class="card-image">
                                        <img src="assets/imgs/page/job-detail/ui.png" alt="iori" />
                                    </div>
                                    <div class="card-info">
                                        <h4 class="color-brand-1 mb-15">Application Migration and Re-Engineering</h4>
                                        <p class="font-md color-grey-500 mb-15">You can improve performance and scalability by updating your old platforms. Our team will look at the tools you already have, find ways to make it better, and make a plan for moving your business forward.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card-offer hover-up">
                                    <div class="card-image">
                                        <img src="assets/imgs/page/job-detail/ui.png" alt="iori" />
                                    </div>
                                    <div class="card-info">
                                        <h4 class="color-brand-1 mb-15">Software Application Maintenance</h4>
                                        <p class="font-md color-grey-500 mb-15">Regular support and maintenance will help your program run smoothly. Not to worry, our team will take care of updates, bug fixes, and any other tech problems, leaving you to run your business.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card-offer hover-up">
                                    <div class="card-image">
                                        <img src="assets/imgs/page/job-detail/ui.png" alt="iori" />
                                    </div>
                                    <div class="card-info">
                                        <h4 class="color-brand-1 mb-15">SaaS Applications</h4>
                                        <p class="font-md color-grey-500 mb-15">Make sure your business's SaaS options are reliable and scalable. Our team knows how to make applications that are safe, work well, and can be viewed from anywhere at any time.                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card-offer hover-up">
                                    <div class="card-image">
                                        <img src="assets/imgs/page/job-detail/ui.png" alt="iori" />
                                    </div>
                                    <div class="card-info">
                                        <h4 class="color-brand-1 mb-15">Application Integration</h4>
                                        <p class="font-md color-grey-500 mb-15">Integrate different apps without any problems to make your business processes run more smoothly. To connect your software systems and make them work better, our team can either make unique integrations or use existing APIs</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="card-offer hover-up">
                                    <div class="card-image">
                                        <img src="assets/imgs/page/job-detail/ui.png" alt="iori" />
                                    </div>
                                    <div class="card-info">
                                        <h4 class="color-brand-1 mb-15">Maintenance and Support</h4>
                                        <p class="font-md color-grey-500 mb-15">24/7 support to keep your devices running smoothly. Our team is available 24 hours a day, seven days a week to help with any technical problems and to make sure that your software is always up to date through regular maintenance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">What We Offer</h2>
                                <p className="font-lg color-gray-500">Fleek Vertex offers clients a wide range of customized mobile app development services based on their business requirements and objectives.</p>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">Native App Development</h4>
                                        <p className="font-md color-grey-500 mb-5">Our native app development services cover the entire lifecycle of your app, from initial concept and design to development, testing, and deployment. We work with you closely to understand your vision and goals, building a solution that meets your business goals. Our native development approach ensures that your app will be fast, secure, and reliable, regardless of whether it's an initiative or a consumer app.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">UI/UX Design for Mobile Apps</h4>
                                        <p className="font-md color-grey-500 mb-5">We start the UI/UX design process by researching your target audience, their behavior, and preferences. We use this information to create user personas and journey maps, which guide the design of functional and attractive interfaces. By focusing on simplicity, clarity, and consistency, we aim to ensure that users can effortlessly navigate your app and find what they are looking for with minimum effort.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">Cross-Platform/Hybrid App Development</h4>
                                        <p className="font-md color-grey-500 mb-5">Our cross-platform development services include design, coding, testing, and deployment to ensure your app is properly tested before it reaches your audience. We use agile processes for flexibility and iterative improvement, ensuring the final product meets and exceeds your expectations.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">Backend Development for Mobile Apps</h4>
                                        <p className="font-md color-grey-500 mb-5">Our backend development services include extensive testing and quality assurance to identify and resolve issues before implementation. We use testing tools and practical exercises to ensure your backend is robust and reliable, providing a seamless user experience. We provide ongoing support and maintenance to keep your backend infrastructure up-to-date and efficient.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer5.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">Third-Party Integrations</h4>
                                        <p className="font-md color-grey-500 mb-5">Our third-party integration services can be customized to meet your needs and goals. By working closely with you, we identify the most appropriate third-party services that align with your app's requirements. We rigorously test each integration to ensure compatibility, stability, and performance, providing a cohesive experience for your users.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer6.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">App Maintenance & Support</h4>
                                        <p className="font-md color-grey-500 mb-5">Our maintenance services include regular updates to bring your app up to date with the latest operating system versions, devices, and industry standards. We also continuously monitor your application's performance, detecting and fixing any issues that may arise, such as errors or crashes. This approach helps prevent potential problems and ensures a smooth user experience.</p>
                                        <div className="box-button-offer"><a className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></a></div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section>
                <section className="section mt-80">
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Industries We Serve</h2>
                                <p className="font-lg color-gray-500">What makes us different from others? We give holistic solutions<br className="d-none d-lg-block" />with strategy, design &amp; technology.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-50 mb-40">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-1">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/certification.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="icon-up-black">Certification</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-2">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/conference.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Conference</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-3">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/research.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Research</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-4">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/dispersal.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Dispersal</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-5">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/enterprise.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Enterprise</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-7">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Team Building</h6></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="col-xl-12 mb-30">
                    <div className="card-radius-32 bg-grey-60">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="box-cover-pd">
                                    <div className="box-image-rd-30"> <img className="w-100" src="/assets/imgs/common/boost-your-business.webp" alt="iori" />
                                        {/* <h4 className="color-brand-1 lbl-on-top">IORI Business Platform</h4> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-cover-pd-2">
                                    <h2 className="color-brand-1 mb-30">Boost your business with our<br className="d-none d-lg-block" />3-step strategy</h2>
                                    <p className="font-md color-grey-500">Business growth can be challenging in today's competitive environment. However, our flexible system makes achieving sustainable, stress-free growth easy.</p>
                                    <div className="item-number hover-up">
                                        <div className="num-ele">1</div>
                                        <div className="info-num">
                                            <h5 className="color-brand-1 mb-15">Make sure you're in the correct position</h5>
                                            <p className="font-md color-grey-500">We analyze your business to identify strengths, weaknesses, opportunities, and threats. This foundational step ensures we have a clear understanding of your startup.</p>
                                        </div>
                                    </div>
                                    <div className="item-number hover-up">
                                        <div className="num-ele">2</div>
                                        <div className="info-num">
                                            <h5 className="color-brand-1 mb-15">Make a development plan.</h5>
                                            <p className="font-md color-grey-500">Our team develops a customized strategy based on your business objectives. This strategy includes actionable steps to improve efficiency, enhance marketing efforts, and generate revenue.</p>
                                        </div>
                                    </div>
                                    <div className="item-number hover-up">
                                        <div className="num-ele">3</div>
                                        <div className="info-num">
                                            <h5 className="color-brand-1 mb-15">Implementation and maintenance</h5>
                                            <p className="font-md color-grey-500">We provide the tools and guidance you need to succeed during the implementation phase. Our data-driven approach keeps your business running smoothly by constantly monitoring progress.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-lg-12 text-center mb-50">
                            <h2 className="color-brand-1 mb-20">Case Studies</h2>
                            <p className="font-lg color-gray-500">What makes us different from others? We give holistic solutions<br className="d-none d-lg-block" />with strategy, design &amp; technology.</p>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="card-radius-32">
                                <div className="card-info">
                                    <h3 className="color-brand-1 mb-20">Financial Management</h3>
                                    <p className="font-md color-grey-500 mb-20">Track, manage, and control your expenses. The only financial management tool you’ll ever need.</p>
                                    <div className="text-center"> <Link href="#"><img className="mr-10" src="/assets/imgs/template/appstore.png" alt="iori" /></Link><Link href="#"><img src="/assets/imgs/template/google-play.png" alt="iori" /></Link></div>
                                </div>
                                <div className="card-image"> <img src="/assets/imgs/page/homepage7/img-financial.png" alt="iori" /></div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="card-radius-32 bg-4">
                                <div className="card-info">
                                    <h3 className="color-brand-1 mb-20">Automated Platform</h3>
                                    <p className="font-md color-grey-500 mb-20">Synchronize and automate all your business in the cloud. Save time and effort, enjoy great vacations.</p>
                                    <div className="mt-0"> <Link className="btn btn-brand-1-small" href="#">Get Started Now
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                                <div className="card-image"> <img src="/assets/imgs/page/homepage7/automated.png" alt="iori" /></div>
                            </div>
                        </div>

                    </div>
                </div>
                <section>
                    <div className='container'>
                        <div className="row mt-50">
                            <div className="col-lg-12 text-center mb-50">
                                <h2 className="color-brand-1 mb-20">Technologies We Use</h2>
                                <p className="font-lg color-gray-500">What makes us different from others? We give holistic solutions<br className="d-none d-lg-block" />with strategy, design &amp; technology.</p>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan-style-2 hover-up">
                                    <div className="card-plan">
                                        <div className="card-image-plan">
                                            <div className="icon-plan"> <img src="/assets/imgs/page/homepage1/free.svg" alt="iori" /></div>
                                            <div className="info-plan">
                                                <h5 className="color-brand-1">Native-App Devlopment</h5>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Swift
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Kotlin
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>SwiftUI
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Android SDK
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan-style-2 hover-up">
                                    <div className="card-plan">
                                        <div className="card-image-plan">
                                            <div className="icon-plan"> <img src="/assets/imgs/page/homepage1/free.svg" alt="iori" /></div>
                                            <div className="info-plan">
                                                <h5 className="color-brand-1">
                                                Cross-Platform/Hybrid App Development</h5>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>React Native
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Flutter
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Ionic
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan-style-2 hover-up">
                                    <div className="card-plan">
                                        <div className="card-image-plan">
                                            <div className="icon-plan"> <img src="/assets/imgs/page/homepage1/free.svg" alt="iori" /></div>
                                            <div className="info-plan">
                                                <h5 className="color-brand-1">
                                                UI/UX Design for Mobile App</h5>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Sketch
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Figma
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Adobe XD
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Color Palette
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card-plan-style-2 hover-up">
                                    <div className="card-plan">
                                        <div className="card-image-plan">
                                            <div className="icon-plan"> <img src="/assets/imgs/page/homepage1/free.svg" alt="iori" /></div>
                                            <div className="info-plan">
                                                <h5 className="color-brand-1">
                                                Backend Development for Mobile Apps</h5>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Data Storage
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>JWT tokens
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>WebSockets
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Security
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-80 mb-30 bg-faqs">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h2 className="color-brand-1 mb-20">Frequently asked questions</h2>
                                <p className="font-lg color-gray-500">
                                    Feeling inquisitive? Have a read through some of our FAQs or
                                    <br className="d-none d-lg-block" />
                                    contact our supporters for help.
                                </p>
                            </div>
                            
                        </div>

                        <div className="container mt-50 mb-100">
                            {/* FAQ Content */}
                            <div className="col-xl-12 col-lg-12">
                                <div className="tab-content tab-content-slider">
                                    <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <MobiledevFaq title="General Support FAQs" />
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <MobiledevFaq title="Order / Purchase FAQs" />
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <MobiledevFaq title="Download / Install FAQs" />
                                    </div>
                                    <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <MobiledevFaq title="Technology FAQs" />
                                    </div>
                                    <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <MobiledevFaq title="Your Account FAQs" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   </section>
                <section className="section mt-10 mb-60 mt-70" id="get-in-touch">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <h2 className="color-brand-5 mb-15" >Get in touch</h2>
                                <p className="font-sm color-grey-500">Do you want to know more or contact our sales department?</p>
                                <div className="mt-50">
                                    <div className="card-offer card-we-do card-contact hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/contact/img1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h6 className="color-brand-5 mb-10">Visit the Knowledge Base</h6>
                                            <p className="font-md color-grey-500 mb-5">Browse customer support articles and step-by-step instructions for specific features.</p>
                                        </div>
                                    </div>
                                    <div className="card-offer card-we-do card-contact hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/contact/img2.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h6 className="color-brand-5 mb-10">Watch Product Videos</h6>
                                            <p className="font-md color-grey-500 mb-5">Watch our video tutorials for visual walkthroughs on how to use our features.</p>
                                        </div>
                                    </div>
                                    <div className="card-offer card-we-do card-contact hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/contact/img3.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h6 className="color-brand-5 mb-10">Get in touch with Sales</h6>
                                            <p className="font-md color-grey-500 mb-5">Let us talk about how we can help your enterprise.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="box-form-contact">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group mb-25">
                                                <input className="form-control icon-user" type="text" placeholder="Your name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group mb-25">
                                                <input className="form-control icon-email" type="text" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group mb-25">
                                                <input className="form-control icon-phone" type="text" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group mb-25">
                                                <input className="form-control icon-company" type="text" placeholder="Company" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group mb-25">
                                                <input className="form-control" type="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group mb-25">
                                                <textarea className="form-control textarea-control" placeholder="Write something" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6 col-9">
                                            <div className="form-group">
                                                <button className="btn btn-brand-1-full font-sm" type="submit">Send message
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
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

export default MobileAppDevelopmentCompany;