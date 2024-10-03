import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const result = await response.json();
          alert('Your message has been sent successfully!');
        } catch (error) {
          console.error('Error sending email:', error);
          alert('There was an error sending your message. Please try again.');
        }
      };

    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>

            <Layout>
            <div className="section breadcrumbs-path pt-20 pb-20">
                    <div className="container">
                        <div className="breadcrumbs ">
                            <ul>
                                <li><Link href="/">
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>Home</Link></li>
                                <li> <Link href="#">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            <section className="section banner-service bg-grey-60 position-relative">
                    <div className="row m-0">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12" >
                        <div className="pl-100 pt-30 align-items-center">
                                    <div className="box-banner-service">
                                        <h2 className="color-brand-5 mb-20">We’d love to hear from you.</h2>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <p className="font-lg color-grey-900">Keep up-to-date with all our latest company news and business content. The latest news, tips and advice to help you run your business with less fuss</p>
                                            </div>
                                        </div>
                                        <div className="row mt-30">
                                            {/* Help & Support Card */}
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="card-small card-small-2 color-gray-900">
                                                    <div className="card-image">
                                                        <div className="box-image"><img src="assets/imgs/page/contact/headphone.png" alt="iori" /></div>
                                                    </div>
                                                    <div className="card-info">
                                                        <h6 className="color-brand-5 mb-10">Help &amp; support</h6>
                                                        <p className="font-sm color-gray-900">Email <a className="color-success" href="mailto:info@fleekvertex.com">info@fleekvertex.com</a><br />For help with a current product or service or refer to FAQs and developer tools</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Call Us Card */}
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="card-small card-small-2">
                                                    <div className="card-image">
                                                        <div className="box-image"><img src="assets/imgs/page/contact/phone.png" alt="iori" /></div>
                                                    </div>
                                                    <div className="card-info">
                                                        <h6 className="color-brand-5 mb-10">Call Us</h6>
                                                        <p className="font-sm color-gray-900">Call us to speak to a member of our team.<br />(+91) 9346 261 550<br />(+91) 9346 261 550</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Business Department Card */}
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="card-small card-small-2">
                                                    <div className="card-image">
                                                        <div className="box-image"><img src="assets/imgs/page/contact/chart.png" alt="iori" /></div>
                                                    </div>
                                                    <div className="card-info">
                                                        <h6 className="color-brand-5 mb-10">Business Department</h6>
                                                        <p className="font-sm color-gray-900">Contact the sales department about cooperation projects<br />(+01) 789 456 23</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-lg-6 col-md-6 pr-0">
                            <div className="d-none d-lg-block pl-50"><img className="w-100 d-block" src="assets/imgs/page/blog/banner.png" alt="iori" /></div>
                        </div>
                    </div>
                </section>
                {/* <section className="section banner-contact pt-100">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <span className="title-line line-48">Get in Touch</span>
                                    <h1 className="color-brand-5 mb-20 mt-10">We’d love to hear<br className="d-none d-lg-block" />from you.</h1>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <p className="font-md color-gray-900">Request a demo, ask a question, or get in touch here. If you’re interested in working at Iori Corporation, check out our.</p>
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
                <section className="section mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-small card-small-2 color-gray-900">
                                    <div className="card-image">
                                        <div className="box-image"><img src="assets/imgs/page/contact/headphone.png" alt="iori" /></div>
                                    </div>
                                    <div className="card-info">
                                        <h6 className="color-brand-5 mb-10">Help &amp; support</h6>
                                        <p className="font-sm color-gray-900">Email <a className="color-success" href="mailto:info@fleekvertex.com">info@fleekvertex.com</a><br />For help with a current product or service or refer to FAQs and developer tools</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image">
                                        <div className="box-image"><img src="assets/imgs/page/contact/phone.png" alt="iori" /></div>
                                    </div>
                                    <div className="card-info">
                                        <h6 className="color-brand-5 mb-10">Call Us</h6>
                                        <p className="font-sm color-gray-900">Call us to speak to a member of our team.<br />(+91) 9346 261 550<br />(+91) 9346 261 550</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image">
                                        <div className="box-image"><img src="assets/imgs/page/contact/chart.png" alt="iori" /></div>
                                    </div>
                                    <div className="card-info">
                                        <h6 className="color-brand-5 mb-10">Business Department</h6>
                                        <p className="font-sm color-gray-900">Contact the sales department about cooperation projects<br />(+01) 789 456 23</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>*/}
                <section className="section mt-50 mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <h2 className="color-brand-5 mb-15">Get in touch</h2>
                                <p className="font-sm color-grey-500">Do you want to know more or contact our sales department?</p>
                                <div className="mt-50">
                                    {/* Knowledge Base Card */}
                                    <div className="card-offer card-we-do card-contact hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/contact/img1.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h6 className="color-brand-5 mb-10">Visit the Knowledge Base</h6>
                                            <p className="font-md color-grey-500 mb-5">Browse customer support articles and step-by-step instructions for specific features.</p>
                                        </div>
                                    </div>
                                    {/* Product Videos Card */}
                                    <div className="card-offer card-we-do card-contact hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/contact/img2.png" alt="iori" /></div>
                                        <div className="card-info">
                                            <h6 className="color-brand-5 mb-10">Watch Product Videos</h6>
                                            <p className="font-md color-grey-500 mb-5">Watch our video tutorials for visual walkthroughs on how to use our features.</p>
                                        </div>
                                    </div>
                                    {/* Get in Touch with Sales Card */}
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
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group mb-25">
                                                    <input name="name" className="form-control icon-user" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group mb-25">
                                                    <input name="email" className="form-control icon-email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group mb-25">
                                                    <input name="phone" className="form-control icon-phone" type="text" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group mb-25">
                                                    <input name="company" className="form-control icon-company" type="text" placeholder="Company" value={formData.company} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mb-25">
                                                    <input name="subject" className="form-control" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mb-25">
                                                    <textarea name="message" className="form-control textarea-control" placeholder="Write something" value={formData.message} onChange={handleChange} required></textarea>
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
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default ContactUs;
