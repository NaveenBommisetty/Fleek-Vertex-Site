import Link from 'next/link';
import Head from 'next/head';
import { React } from 'react';
import WebdevFaq from '../components/elements/WebdevFaq';
import Layout from '../components/layout/Layout';
import PageHead from '../components/layout/PageHead'
import { useState } from 'react';

const WebDevelopmentCompany = () => {

    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <PageHead headTitle="Web Development Company - Fleek Vertex" />
            <Layout>
            <div className="section breadcrumbs-path pt-20 pb-20">
                    <div className="container">
                        <div className="breadcrumbs ">
                            <ul>
                                <li> <Link href="/">
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>Home</Link></li>
                                <li> <Link href="#">Web Development</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            <section className="section banner-service bg-grey-60 position-relative">             
                  <div className="row m-0">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12" >
                      <div className="pl-60 pt-10 align-items-center">
                                  <div className="box-banner-service">
                                      <h1 className="color-brand-5 mb-20">Web Development Services</h1>
                                      <div className="row">
                                          <div className="col-lg-12">
                                              <p className="font-md color-grey-900">We build stunning websites, exciting eCommerce platforms, and dynamic web applications that meet your business needs. Our custom web solutions enhance the user experience and productivity.</p>
                                              <p className="font-md color-grey-900 mt-10">Are you looking to transform your online visibility? Contact us through our contact form or give us a call to see how we can help you achieve your web development goals. Our dedicated staff is ready to help you create a compelling and engaging online presence. Contact us today to get started!</p>
                                              <div className="box-button text-start mt-20">
                                                <Link className="btn btn-brand-1 hover-up" href="#get-in-touch">Get in Touch</Link>
                                            </div>
                                          </div>
                                      </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xxl-6 col-lg-6 col-md-6 pr-0">
                          <div className="d-none d-lg-block pl-10"><img className="w-100 d-block" src="assets/imgs/page/blog/banner.png" alt="iori" /></div>
                      </div>
                  </div>
              </section>
            
                <section className="section mt-20">
                    <div className="container">
                        <div className="row mt-50">
                            <div className="col-xl-6 col-lg-5">
                                <div className="box-images-project">
                                    <div className="title-line mb-10">Why choose us?</div>
                                    <h2 className="color-brand-1 mb-25">Advanced Website Development Company in Bangalore</h2>
                                    <p className="color-grey-500 mb-15 font-md">Your website is the backbone of your business. It supports all of your company's services and is your customers' primary point of contact. We provide you with the best WordPress and Web Development Services in Bangalore, India, so your users can clearly understand your brand offerings, unique value propositions, and core values when they visit your website. 
With the help of a skilled web development and social media marketing team, your business can generate more sales and leads online. We have experience in advanced web design and development services and assist our clients in reaching their full digital potential. With our professional team, we develop fast and robust web development solutions for your online presence.
</p>                            
                                    <p className="color-grey-500 mb-15 font-md">Our WordPress and custom web development company holistically approaches web development in Bangalore, including markup, coding, content, web design, and responsiveness. Our professional team works closely with web development platforms to create websites that rank highly in search engine results pages and provide the best possible user experience.
If you are looking for a back-end and front-end web development company in Bangalore, India, call us today.
</p>
                                    {/* <div className="box-button text-start mt-40"> <Link className="btn btn-brand-1 hover-up" href="#">Learn More</Link></div> */}
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="row pt-100">
                                    <div className="box-image"><img src="assets/imgs/page/homepage2/img-marketing.png" alt="iori" /></div>
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
                                <p className="font-lg color-gray-500">We offer our clients a comprehensive range of customized business software solutions to meet their needs.</p>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">Front-End Development</h4>
                                        <p className="font-md color-grey-500 mb-5">We specialize in modern and user-friendly front-end solutions that enhance the user experience. Our team of designers and manufacturers uses high-tech technology to provide your customers with immersive interaction.</p>
                                        <div className="box-button-offer"><Link href="/mobile-app-development-company" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer2.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">Back-End Development</h4>
                                        <p className="font-md color-grey-500 mb-5">Our backend development services focus on providing robust, extensible, and secure solutions to manage complex business processes. We ensure our software is optimized for high performance and easily integrated with third-party systems.</p>
                                        <div className="box-button-offer"><Link href="/software-development-company" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer3.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">Full-Stack Development</h4>
                                        <p className="font-md color-grey-500 mb-5">Our Full-Stack development services cover both front-end and back-end development, ensuring an integrated and customized solution for your business needs. Our team specializes in various technologies and frameworks, including HTML, CSS, JavaScript, React, Angular, Node.js, and more. We ensure flawless front-end and back-end integration, delivering integrated and efficient solutions that enhance productivity and user experience.</p>
                                        <div className="box-button-offer"><Link href="/digital-marketing-services" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer4.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">Custom CMS development</h4>
                                        <p className="font-md color-grey-500 mb-5">We understand businesses may have unique content management needs, so we offer customized CMS development services. Our team develops efficient, user-friendly systems that allow customers to easily manage their website or application content. We can also integrate with existing CMS solutions, such as WordPress or Joomla, and configure them to your specific needs.</p>
                                        <div className="box-button-offer"><Link href="/cloud-migration-services" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer5.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10">E-Commerce Development</h4>
                                        <p className="font-md color-grey-500 mb-5">We provide end-to-end eCommerce solutions, from building a user-friendly online store to implementing secure payment gateways and managing inventory. Our team has expertise in eCommerce platforms like Magento, Shopify, WooCommerce, and more. We also offer customized eCommerce promotions for businesses with specific requirements.</p>
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
                                        <h4 className="color-brand-1 mb-10">Custom Web Application Development</h4>
                                        <p className="font-md color-grey-500 mb-5">Our team has extensive experience in custom web applications that cover a wide range of industries and needs. Our web applications meet the unique needs of our customers, from simple browsers to complex enterprise solutions. Our expertise includes PHP, Ruby on Rails, Java, .NET, and other technologies.</p>
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
                                <div className="box-image-rd-30 mt-60" > <img className="w-100" src="/assets/imgs/ioribgimg.jpg" alt="iori" />
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
                                                <h4 className="color-brand-1">Front-End Development</h4>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>React.Js
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Java Script
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Html5
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>CSS3
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
                                                <h4 className="color-brand-1">Back-End Devlopment</h4>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Flask Development
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>FAST API
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Django
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>ASP.Net
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>codeigniter
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
                                                <h4 className="color-brand-1">Full-Stack Devlopment</h4>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>React.Js
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Java Script
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Python
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>MySQL
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
                                                <h4 className="color-brand-1">Custom CMS development</h4>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-30 mb-30">
                                        <ul className="list-ticks list-ticks-2">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>WordPress
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Joomla
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Html5
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>CSS3
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
                                        <WebdevFaq title="General Support FAQs" />
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <WebdevFaq title="Order / Purchase FAQs" />
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <WebdevFaq title="Download / Install FAQs" />
                                    </div>
                                    <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <WebdevFaq title="Technology FAQs" />
                                    </div>
                                    <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <WebdevFaq title="Your Account FAQs" />
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

export default WebDevelopmentCompany;