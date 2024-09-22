import Link from 'next/link';
import Head from 'next/head';
import { React } from 'react';
import JiraFaq from '../components/elements/JiraFaq';
import Layout from '../components/layout/Layout';
import { useState } from 'react';

const JiraAdministrationServices = () => {

    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <Head>
                <title>Jira Administration Service Company</title>
            </Head>
            <Layout>
            <section className="section banner-service bg-grey-60 position-relative">             
                  <div className="row m-0">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12" >
                      <div className="pl-60 pt-10 align-items-center">
                                  <div className="box-banner-service">
                                      <h1 className="color-brand-5 mb-20">Jira Administration Service</h1>
                                      <div className="row">
                                          <div className="col-lg-12">
                                              <p className="font-md color-grey-900">You can take your projects to the next level with JIRA Administration. The JIRA Administration tool provides you with the ability to customize workflows based on your team's specific needs. Therefore, you can automate project management tasks. Your team can focus on what really matters - delivering amazing results.</p>
                                              <p className="font-md color-grey-900 mt-10">We are here to help you every step of the way. Get in touch with us today to learn how JIRA collaboration can help your team become more productive.</p>
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
           
                <section className="section">
                    <div className="container">
                        <div className="row mt-50 mb-50">
                            <div className="col-xl-6 col-lg-5">
                                <div className="box-images-project">
                                    <span class="btn btn-tag-green">Get in touch</span>
                                    <h2 className="color-brand-1 mb-15">Why You Should Use JIRA Administration</h2>
                                    <p className="color-gray-900 mb-15 font-md">JIRA Administration gives you the flexibility to create different workflows for different projects. Whatever the project, whether it is a marketing campaign or a software development project, you can design a workflow to suit its needs. It not only saves time, but streamlined processes ensure maximum efficiency for your team.</p>
                                    <p className="color-gray-900 mb-15 mt-10 font-md">A major advantage of JIRA's performance is its capability to produce better reports. Your business can be monitored in real-time with customizable dashboards and accurate data so that you can make informed decisions. This makes it easier to identify improvement areas, which results in better project outcomes.</p>
                                    <p className="color-gray-900 mb-15 mt-10 font-md">A number of powerful automation features are available in JIRA Administration, which can reduce the amount of manual work and increase productivity. You can automate tasks, assign tasks based on skills, and trigger notifications based on certain conditions. By using these systems, your team is able to save time and energy.</p>
                                    <p className="color-gray-900 mb-15 mt-10 font-md">JIRA Workshops also provide collaboration tools to facilitate seamless communication between team members. All team members can easily access important information with notes, comments, and attachments. Communication is improved overall as a result of maintaining transparency.</p>
                                    <p className="color-gray-900 mb-15 mt-10 font-md">JIRA Administration provides powerful features as well as a user-friendly interface. This makes it easy for beginners and experienced users alike to use the platform. JIRA's performance ensures a smooth user experience, thanks to its scalable design and flexible configuration. Let us help you revolutionize your team's workflow with JIRA Administration. As a team, we can achieve outstanding results and make your projects a success.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="row pt-200">
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
                                <p className="font-lg color-gray-500">What makes us different from others? We give holistic solutions<br className="d-none d-lg-block" />with strategy, design &amp; technology.</p>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-6">
                                <div className="card-offer card-we-do hover-up">
                                    <div className="card-image"><img src="assets/imgs/page/homepage4/offer1.png" alt="iori" /></div>
                                    <div className="card-info">
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files.">Project Management & Configuration</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">JIRA collaboration is based on effective project management and planning. You can handle everything effortlessly with robust project management tools. You can configure granularity, configuration, permissions, and workflows to suit your team's needs. These features include Project Configuration, Permission Management, Custom Workflows, and Third-Party Tool Integration.</p>
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
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">User Management</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">With JIRA Administration, you can manage users appropriately, ensuring they have access to the right resources. JIRA allows you to configure permissions based on business process requirements. It lets us add and manage users, set up groups, plan routes, and measure accountability.</p>
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
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves">Workflow Configuration</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">Your project's workflows can be tailored with JIRA Administration's versatile tools. It is possible to set up a flexible process using steps, variables, and actions. It allows you to define business steps, manage change, automate workflows, and create custom actions.</p>
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
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="Share updates instantly within our project management software, and get the entire team collaborating">JIRA Service Management</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">JIRA Service Management provides comprehensive tools for IT service management, customer service, and more. The JIRA Software integrates seamlessly with JIRA Software, providing a unified platform for managing events, requests, changes, and policies, resulting in enhanced productivity and responsiveness.</p>
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
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files.">JIRA Software (Agile) Configuration</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">The JIRA Software provides powerful design methods for Agile methodologies. Workflows can be monitored, created, and managed by sprints, project visibility, and swimlanes with JIRA workflows. Your team can focus on delivering continuous value by aligning the JIRA Software framework with your Agile practices.</p>
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
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">Automation Rules</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">A JIRA automation rule simplifies common tasks, saves time, and reduces errors. Business processes can be automated using triggers, conditions, and actions. Automation increases productivity, accuracy, and compliance. You can achieve business success and efficiency by using JIRA's flexible rules automation.</p>
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
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">JIRA Reporting and Dashboards</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">JIRA Reports and Dashboards are powerful tools for analyzing business performance. You can create customized dashboards for JIRA projects to provide teams with key information at a glance and to help them track progress, identify challenges, and make decisions. It provides a comprehensive overview of team health.</p>
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
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">Add-On/Plugin Management</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">In JIRA, adding plugins and add-ons extends its functionality to meet team needs. JIRA plugins, including time tracking, reporting, and advanced workflows, can be discovered, installed, and managed through the Atlassian Marketplace. Installing and updating plugins is easy with the intuitive interface.</p>
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
                                        <h4 className="color-brand-1 mb-10"><Link className="color-brand-1" href="What makes us different from others? We give holistic solutions with strategy, design & technology.">Integration With Third-party Apps</Link></h4>
                                        <p className="font-md color-grey-500 mb-5">JIRA's functionality can be extended by adding plugins and add-ons. JIRA plugins, such as real-time tracking and reporting, can be discovered, installed, and managed through Atlassian Marketplace. We integrated JIRA with tools such as Confluence, Bitbucket, Slack, and third-party apps to enhance collaboration.</p>
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
                                        <h6 className="icon-up-black">Education</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-2">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/conference.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Construction</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-3">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/research.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Retail & Ecommerce</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-4">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/dispersal.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Health Care</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-5">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/enterprise.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Travel & Hospitality</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-7">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Oil & Gas</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-8">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Energy</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-10">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Entertainment</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-11">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">E-commerce</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-1">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Mining</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-2">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Public Sector</h6></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="card-small bg-3">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/homepage3/team-building.png" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 icon-up">Logistics</h6></Link></div>
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
                                                <h4 className="color-brand-1">Web Devlopment</h4>
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
                                                <h4 className="color-brand-1">Web Devlopment</h4>
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
                                                <h4 className="color-brand-1">Web Devlopment</h4>
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
                                                <h4 className="color-brand-1">Web Devlopment</h4>
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
                                        <JiraFaq title="General Support FAQs" />
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <JiraFaq title="Order / Purchase FAQs" />
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <JiraFaq title="Download / Install FAQs" />
                                    </div>
                                    <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <JiraFaq title="Technology FAQs" />
                                    </div>
                                    <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade"}>
                                        <JiraFaq title="Your Account FAQs" />
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

export default JiraAdministrationServices;