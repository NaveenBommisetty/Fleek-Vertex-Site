import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageHead from '../components/layout/PageHead';
import Testimonial from '../components/slider/Testimonial';
import ModalVideo from 'react-modal-video';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loadingToastId = toast.loading('Sending your message...');

        // Dismiss loading toast after 3 seconds automatically
        setTimeout(() => {
            toast.dismiss(loadingToastId);
        }, 1000);
        
        try {
          const response = await fetch('/api/homepage-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
        //   const result = await response.json();
        toast.dismiss(loadingToastId);
        
        toast.success('Your message has been sent successfully!');  // Success toast
    } catch (error) {
            toast.dismiss(loadingToastId);
            toast.error('There was an error sending your message. Please try again.');  // Error toast
        }
      };


    const [isOpen, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); 
    };
    return (
        <>
            <PageHead headTitle="Home - Fleek Vertex" />
            <Layout>
            <section className="section banner-2">
                    <div className="container">
                        <div className="banner-1">
                            <div className="row align-items-center pt-120">
                                <div className="col-xl-6 col-lg-8">
                                    <h1 className="color-white mb-20">We Provide Comprehensive Solutions to <span className=''>Push Your Business</span> Onwards</h1>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <p className="font-md color-white">Fleek Vertex is a software development and IT consulting company that provides commercial and consumer applications based on our significant understanding of technologies and the industries in which they operate. Our expert approach lets us see past technology to provide practical solutions for your specific company situation.</p>
                                        </div>
                                    </div>  
                                    <div className="box-button mt-20">
                                        <Link className="btn btn-brand-1 hover-up" href="">Our Solutions</Link>
                                        <Link className="btn btn-brand-336699 font-sm-bold hover-up" href="/about-fleek-vertex">
                                        Learn More
                                        <svg className="w-6 h-6 icon-17 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link>
                                        </div>
                                </div>
                                {/* <div className="col-lg-5 d-none d-lg-block"><img src="assets/imgs/page/homepage2/banner.png" alt="iori" /></div> */}
                            </div>
                        </div>
                    </div>
                </section> 
                    <section className="section mt-0 mb-20">
                    <div className="container">
                        <div className="row mt-40">
                            <div className="col-xl-5 col-lg-12 mb-20">
                                <h2 className="color-brand-336699 mt-10 mb-15">Why are we different from others?</h2>
                                <p className="font-md color-gray-900">Our experienced developers offer strong, scalable, creative ideas catered to your needs by bringing years of expertise to every project. We are not just experts but are at the forefront of the latest technologies and best practices. We offer cutting-edge technology services that are customized to meet the evolving requirements of companies today. We use our in-depth knowledge and insights in critical areas to give you resolutions specifically designed to meet your needs and take advantage of your unique possibilities.</p>
                                <div className="mt-20">
                                    <ul className="list-ticks">
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Proven Expertise
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Tailored Solutions
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Quality Assurance and Testing
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Transparent Communication 
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Post-Launch Support
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>On-Time Delivery
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-30 text-start"><Link className="btn btn-brand-336699 font-sm-bold hover-up" href="/about-fleek-vertex">Learn More
                                    <svg className="w-6 h-6 icon-17 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                            <div className="col-xl-7 col-lg-12">
                                <div className="box-video-business">
                                    <div className="item-video">
                                        <img className="bd-rd4" src="assets/imgs/page/homepage3/img1.png" alt="iori" /></div>
                                    <div className="box-image-right"><img className="bd-rd4 mb-20" src="assets/imgs/page/homepage3/img2.png" alt="iori" /><img className="bd-rd4" src="assets/imgs/page/homepage3/img3.png" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <section className="section bg-grey-60 pb-30 pt-50 mt-30 mb-20">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h3 className="color-brand-336699 mb-20">What We Offer</h3>
                                <p className="font-lg color-gray-500">We offer our clients comprehensive software solutions to meet their needs.</p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start"><a className="btn btn-default font-sm-bold pl-0">Learn More
                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></a></div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image">                                        
                                        <svg width="60" height="41" viewBox="0 0 60 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.7085 41C1.99097 41 1.36029 40.727 0.816447 40.1809C0.272149 39.6353 0 38.9887 0 38.241H9.22572C8.20413 38.241 7.32409 37.8773 6.5856 37.1498C5.8471 36.4224 5.47786 35.5555 5.47786 34.5492V3.69188C5.47786 2.68511 5.8471 1.81821 6.5856 1.0912C7.32409 0.363733 8.20026 0 9.2141 0H50.7859C51.7997 0 52.6759 0.363733 53.4144 1.0912C54.1529 1.81821 54.5221 2.68511 54.5221 3.69188V34.5492C54.5221 35.5555 54.1529 36.4224 53.4144 37.1498C52.6759 37.8773 51.7959 38.241 50.7743 38.241H60C60 39.008 59.718 39.6596 59.1541 40.1957C58.5907 40.7319 57.9363 41 57.191 41H2.7085ZM29.9925 40.2227C30.4807 40.2227 30.8486 40.1032 31.0961 39.8644C31.3437 39.6255 31.4674 39.2741 31.4674 38.8102C31.4674 38.3468 31.3462 37.9844 31.1036 37.723C30.8607 37.4621 30.4953 37.3317 30.0075 37.3317C29.5193 37.3317 29.1514 37.4624 28.9039 37.7237C28.6564 37.9855 28.5326 38.3344 28.5326 38.7705C28.5326 39.2509 28.6538 39.6131 28.8964 39.8569C29.1393 40.1008 29.5047 40.2227 29.9925 40.2227ZM9.22572 36.2075H50.7743C51.195 36.2075 51.5807 36.0346 51.9313 35.6888C52.2818 35.3435 52.4571 34.9636 52.4571 34.5492V3.69188C52.4571 3.2774 52.2818 2.89728 51.9313 2.55151C51.5807 2.20619 51.195 2.03353 50.7743 2.03353H9.22572C8.80496 2.03353 8.4193 2.20619 8.06874 2.55151C7.71819 2.89728 7.54291 3.2774 7.54291 3.69188V34.5492C7.54291 34.9636 7.71819 35.3435 8.06874 35.6888C8.4193 36.0346 8.80496 36.2075 9.22572 36.2075Z" fill="#336699"/>
                                        </svg>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-336699 mb-15">Web Development</h4>
                                        <p className="font-md color-grey-500 mb-15">Our web development services create optimized websites for your business that meet all its specific requirements.</p>
                                        <div className="box-button-offer"><Link href="/web-development-company" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#336699"><path d="M255.96-201.04q-73.05 0-123.93-51.06-50.88-51.06-50.88-124.52 0-67.87 48.41-120.24 48.4-52.37 118.25-54.64 9.84-88.89 76.56-148.06 66.73-59.17 156.85-59.17 97.09 0 164.55 69.73 67.46 69.73 67.46 167.88v51.66h24.62q59.19-2.23 100.09 36.45 40.91 38.68 40.91 97.13 0 56.04-39.42 95.44-39.41 39.4-95.05 39.4H255.96Zm.02-30.19h488.36q43.29 0 73.8-30.5 30.51-30.49 30.51-73.97 0-42.71-30.42-73.09-30.42-30.38-73.82-30.38h-61.37v-81.63q0-86.34-59.32-147.04-59.31-60.7-144.8-60.7-84.71 0-144.55 60.59-59.84 60.59-59.84 146.83h-19.9q-59.32 0-101.3 42.24-41.98 42.23-41.98 103.09 0 59.87 42.39 102.21 42.39 42.35 102.24 42.35ZM480-480Z"/></svg>    
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-336699 mb-15">Cloud Services</h4>
                                        <p className="font-md color-grey-500 mb-15">Fleek Vertex cloud services offer flexible and scalable solutions developed to meet your business requirements.</p>
                                        <div className="box-button-offer"><Link href="/cloud-migration-services" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image">
                                        <svg width="45" height="43" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="path-1-inside-1_198_470" fill="white">
                                        <path d="M10.6691 16.1565C10.1244 15.6042 9.28461 15.6263 8.92147 16.3553L0.115292 33.4976C0.032617 33.6543 -0.00678418 33.8292 0.000955094 34.0052C0.00869437 34.1812 0.0633075 34.3522 0.159437 34.5015C0.255566 34.6507 0.38991 34.7731 0.549287 34.8566C0.708663 34.94 0.887598 34.9818 1.06854 34.9776H13.3473C13.5464 34.9828 13.7427 34.9312 13.9121 34.8291C14.0815 34.7271 14.2165 34.5791 14.3005 34.4033C16.956 29.0795 15.3445 20.9722 10.6918 16.1344M17.1375 0.538489C12.2124 8.13763 12.5302 16.5762 15.7758 22.8941L21.6995 34.4254C21.8811 34.7788 22.2442 34.9997 22.6527 34.9997H34.9315C35.1124 35.0039 35.2913 34.9621 35.4507 34.8787C35.6101 34.7952 35.7444 34.6728 35.8406 34.5236C35.9367 34.3743 35.9913 34.2033 35.999 34.0273C36.0068 33.8513 35.9674 33.6764 35.8847 33.5197C35.8847 33.5197 19.3618 1.33375 18.9532 0.538489C18.5674 -0.168408 17.6369 -0.190499 17.1602 0.538489"/>
                                        </mask>
                                        <path d="M8.92147 16.3553L9.81103 16.8123L9.81656 16.8012L8.92147 16.3553ZM0.115292 33.4976L0.9998 33.9642L1.00479 33.9545L0.115292 33.4976ZM1.06854 34.9776V33.9776H1.05711L1.04569 33.9779L1.06854 34.9776ZM13.3473 34.9776L13.3732 33.978L13.3602 33.9776H13.3473V34.9776ZM14.3005 34.4033L13.4056 33.9569L13.4019 33.9644L13.3983 33.972L14.3005 34.4033ZM15.7758 22.8941L14.8863 23.3511L14.8863 23.3511L15.7758 22.8941ZM21.6995 34.4254L22.589 33.9684L22.589 33.9684L21.6995 34.4254ZM34.9315 34.9997L34.9543 34L34.9429 33.9997H34.9315V34.9997ZM35.8847 33.5197L34.995 33.9764L35.0003 33.9863L35.8847 33.5197ZM18.9532 0.538489L19.8427 0.0815445L19.837 0.0703938L19.831 0.0593902L18.9532 0.538489ZM11.381 15.4543C10.9274 14.9944 10.2987 14.723 9.64212 14.7791C8.95659 14.8376 8.35684 15.246 8.02638 15.9094L9.81656 16.8012C9.83839 16.7574 9.85186 16.7532 9.84117 16.7607C9.83081 16.7679 9.81845 16.7713 9.81226 16.7718C9.80256 16.7726 9.86602 16.7663 9.95713 16.8587L11.381 15.4543ZM8.03197 15.8984L-0.774203 33.0406L1.00479 33.9545L9.81096 16.8123L8.03197 15.8984ZM-0.769163 33.0309C-0.934168 33.3437 -1.01366 33.6947 -0.998079 34.0491L0.99999 33.9613C1.0001 33.9637 0.999402 33.9648 0.999747 33.9642L-0.769163 33.0309ZM-0.998079 34.0491C-0.982496 34.4035 -0.872528 34.746 -0.681283 35.0429L1.00016 33.96C0.999143 33.9584 0.999885 33.9589 0.99999 33.9613L-0.998079 34.0491ZM-0.681283 35.0429C-0.490173 35.3397 -0.225178 35.5798 0.0853038 35.7424L1.01327 33.9707C1.005 33.9664 1.00131 33.9618 1.00016 33.96L-0.681283 35.0429ZM0.0853038 35.7424C0.395631 35.905 0.742202 35.9853 1.09138 35.9774L1.04569 33.9779C1.03299 33.9782 1.0217 33.9751 1.01327 33.9707L0.0853038 35.7424ZM1.06854 35.9776H13.3473V33.9776H1.06854V35.9776ZM13.3213 35.9773C13.7096 35.9874 14.0942 35.8869 14.4282 35.6857L13.396 33.9726C13.3912 33.9755 13.3832 33.9782 13.3732 33.978L13.3213 35.9773ZM14.4282 35.6857C14.7624 35.4843 15.033 35.1896 15.2027 34.8346L13.3983 33.972C13.3999 33.9685 13.4005 33.9699 13.396 33.9726L14.4282 35.6857ZM15.1954 34.8496C16.6453 31.9428 16.9018 28.3489 16.2177 24.8924C15.5324 21.4299 13.8865 18.0136 11.4125 15.4412L9.97102 16.8276C12.1498 19.093 13.636 22.1493 14.2557 25.2807C14.8767 28.4183 14.6112 31.54 13.4056 33.9569L15.1954 34.8496ZM16.2984 -0.00538606C11.165 7.91513 11.4887 16.7373 14.8863 23.3511L16.6653 22.4372C13.5716 16.4151 13.2599 8.36013 17.9767 1.08236L16.2984 -0.00538606ZM14.8863 23.3511L20.81 34.8823L22.589 33.9684L16.6653 22.4372L14.8863 23.3511ZM20.81 34.8823C21.1662 35.5756 21.8767 35.9997 22.6527 35.9997V33.9997C22.6301 33.9997 22.6161 33.994 22.6081 33.9892C22.6001 33.9843 22.5939 33.978 22.589 33.9684L20.81 34.8823ZM22.6527 35.9997H34.9315V33.9997H22.6527V35.9997ZM34.9086 35.9995C35.2578 36.0074 35.6044 35.927 35.9147 35.7645L34.9867 33.9928C34.9783 33.9972 34.967 34.0003 34.9543 34L34.9086 35.9995ZM35.9147 35.7645C36.2252 35.6019 36.4902 35.3618 36.6813 35.065L34.9998 33.9821C34.9987 33.9839 34.995 33.9885 34.9867 33.9928L35.9147 35.7645ZM36.6813 35.065C36.8725 34.7681 36.9825 34.4256 36.9981 34.0712L35 33.9834C35.0001 33.981 35.0009 33.9805 34.9998 33.9821L36.6813 35.065ZM36.9981 34.0712C37.0137 33.7168 36.9342 33.3658 36.7692 33.053L35.0003 33.9863C35.0006 33.9869 34.9999 33.9858 35 33.9834L36.9981 34.0712ZM35.8847 33.5197C36.7743 33.063 36.7743 33.0628 36.7741 33.0626C36.774 33.0623 36.7738 33.062 36.7736 33.0615C36.7731 33.0605 36.7723 33.059 36.7713 33.0571C36.7693 33.0532 36.7663 33.0474 36.7624 33.0396C36.7544 33.0242 36.7426 33.0011 36.7269 32.9706C36.6956 32.9097 36.6492 32.8193 36.5887 32.7013C36.4676 32.4654 36.2899 32.1192 36.0636 31.6784C35.611 30.7968 34.9639 29.5364 34.1862 28.0215C32.6308 24.9916 30.5527 20.9435 28.4618 16.8706C24.2801 8.72486 20.0471 0.479337 19.8427 0.0815445L18.0638 0.995433C18.2679 1.3929 22.5007 9.63796 26.6826 17.784C28.7735 21.8569 30.8516 25.905 32.407 28.9349C33.1847 30.4498 33.8317 31.7102 34.2843 32.5918C34.5106 33.0326 34.6883 33.3788 34.8094 33.6147C34.87 33.7327 34.9164 33.8231 34.9477 33.884C34.9633 33.9145 34.9752 33.9375 34.9831 33.953C34.9871 33.9608 34.9901 33.9666 34.9921 33.9705C34.9931 33.9724 34.9938 33.9739 34.9943 33.9749C34.9946 33.9754 34.9948 33.9757 34.9949 33.976C34.995 33.9762 34.9951 33.9764 35.8847 33.5197ZM19.831 0.0593902C19.4674 -0.606728 18.8089 -0.994176 18.0989 -0.999935C17.3927 -1.00566 16.7336 -0.636287 16.3233 -0.00874238L17.9972 1.08572C18.0326 1.03157 18.0627 1.01134 18.0743 1.0049C18.0866 0.998017 18.0895 1.00005 18.0827 0.999999C18.0757 0.999942 18.0667 0.997608 18.0598 0.993412C18.0517 0.988513 18.0604 0.989952 18.0755 1.01759L19.831 0.0593902Z" fill="#336699" mask="url(#path-1-inside-1_198_470)"/>
                                        </svg>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-336699 mb-15">JIRA Administration</h4>
                                        <p className="font-md color-grey-500 mb-15">Our Jira administrators are responsible for delivering the best expertise and skills for our client's implementation or ongoing management needs.</p>
                                        <div className="box-button-offer"><Link href="/jira-administration-services" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image">                                        
                                        <svg width="50" height="47" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.63158 47V38.6444L40.1974 1.37083C40.6798 0.89213 41.1732 0.543981 41.6776 0.326389C42.182 0.108796 42.7193 0 43.2895 0C43.8158 0 44.3311 0.108796 44.8355 0.326389C45.3399 0.543981 45.8333 0.89213 46.3158 1.37083L48.6184 3.65556C49.1009 4.09074 49.4518 4.55856 49.6711 5.05903C49.8904 5.55949 50 6.09259 50 6.65833C50 7.18056 49.8904 7.70278 49.6711 8.225C49.4518 8.74722 49.1009 9.24769 48.6184 9.72639L11.0526 47H2.63158ZM6.57895 43.0833H9.47368L38.8158 13.9694L37.3684 12.5333L35.9211 11.0972L6.57895 40.2111V43.0833ZM37.3684 12.5333L35.9211 11.0972L38.8158 13.9694L37.3684 12.5333ZM28.9474 47C32.3684 47 35.4167 46.2058 38.0921 44.6174C40.7675 43.0289 42.1053 40.7769 42.1053 37.8611C42.1053 36.1204 41.4583 34.5211 40.1645 33.0632C38.8706 31.6053 36.8421 30.463 34.0789 29.6361L30.9868 32.7042C33.1798 33.2264 34.9232 33.9662 36.2171 34.9236C37.511 35.881 38.1579 36.8602 38.1579 37.8611C38.1579 39.2537 37.2697 40.4722 35.4934 41.5167C33.7171 42.5611 31.5351 43.0833 28.9474 43.0833C28.4211 43.0833 27.9605 43.2683 27.5658 43.6382C27.1711 44.0081 26.9737 44.4759 26.9737 45.0417C26.9737 45.5639 27.1711 46.0208 27.5658 46.4125C27.9605 46.8042 28.4211 47 28.9474 47ZM7.89474 27.8083L11.0526 24.675C8.68421 24.1093 6.90789 23.5109 5.72368 22.8799C4.53947 22.2488 3.94737 21.5852 3.94737 20.8889C3.94737 20.1926 4.41886 19.5289 5.36184 18.8979C6.30482 18.2669 8.24561 17.4074 11.1842 16.3194C14.8246 14.9704 17.2697 13.6757 18.5197 12.4354C19.7697 11.1951 20.3947 9.68287 20.3947 7.89861C20.3947 5.46157 19.4956 3.53588 17.6974 2.12153C15.8991 0.707176 13.5088 0 10.5263 0C8.68421 0 7.01754 0.315509 5.52632 0.946528C4.03509 1.57755 2.91667 2.37176 2.17105 3.32917C1.82018 3.72083 1.6557 4.17778 1.67763 4.7C1.69956 5.22222 1.95175 5.65741 2.43421 6.00556C2.87281 6.3537 3.36623 6.49514 3.91447 6.42986C4.46272 6.36458 4.91228 6.15787 5.26316 5.80972C5.92105 5.15694 6.66667 4.67824 7.5 4.37361C8.33333 4.06898 9.34211 3.91667 10.5263 3.91667C12.5439 3.91667 14.0351 4.30833 15 5.09167C15.9649 5.875 16.4474 6.81065 16.4474 7.89861C16.4474 8.76898 16.0307 9.53056 15.1974 10.1833C14.364 10.8361 12.5 11.6847 9.60526 12.7292C5.48246 14.2088 2.85088 15.5579 1.71053 16.7764C0.570175 17.9949 0 19.3657 0 20.8889C0 22.2815 0.614035 23.6306 1.84211 24.9361C3.07018 26.2417 5.08772 27.1991 7.89474 27.8083Z" fill="#336699"/>
                                        </svg>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-336699 mb-15">Branding Services</h4>
                                        <p className="font-md color-grey-500 mb-15">In branding, we provide everything from logo design and messaging to a brand style guide that ensures consistency across all marketing materials.</p>
                                        <div className="box-button-offer"><Link href="/branding-services" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image">                                        
                                        <svg width="66" height="65" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5763 27.4376C20.6127 27.4376 21.4979 27.0337 22.2321 26.2261C22.9662 25.4184 23.3332 24.4388 23.3332 23.2872V19.2808C23.3332 18.1292 22.9662 17.1496 22.2321 16.3419C21.4979 15.5342 20.6127 15.1304 19.5763 15.1304C18.5399 15.1304 17.6546 15.5342 16.9205 16.3419C16.1864 17.1496 15.8194 18.1292 15.8194 19.2808V23.2872C15.8194 24.4388 16.1864 25.4184 16.9205 26.2261C17.6546 27.0337 18.5399 27.4376 19.5763 27.4376ZM17.849 24.0789H21.3036V22.6395H17.849V24.0789ZM17.849 19.9285H21.3036V18.4891H17.849V19.9285ZM19.5763 28.877C18.6407 28.877 17.7698 28.6291 16.9637 28.1333C16.1576 27.6375 15.5603 26.9258 15.1716 25.9981H12.667V24.5587H14.6534C14.5527 24.1429 14.5023 23.723 14.5023 23.2992V22.0157H12.667V20.5763H14.5023C14.5023 20.1124 14.5059 19.6526 14.5131 19.1968C14.5203 18.741 14.5814 18.2892 14.6966 17.8413H12.667V16.4019H15.258C15.4595 15.9541 15.7258 15.5622 16.0569 15.2263C16.3879 14.8905 16.755 14.6106 17.158 14.3867L15.4955 12.5634L16.3592 11.6038L18.3888 13.8589C18.7918 13.6989 19.1984 13.619 19.6087 13.619C20.0189 13.619 20.4256 13.6989 20.8286 13.8589L22.8582 11.6038L23.7219 12.5634L22.0809 14.3867C22.484 14.6106 22.8402 14.8945 23.1497 15.2383C23.4592 15.5822 23.7291 15.9701 23.9594 16.4019H26.4856V17.8413H24.456C24.5855 18.2892 24.6467 18.741 24.6395 19.1968C24.6323 19.6526 24.6287 20.1124 24.6287 20.5763H26.4856V22.0157H24.6287C24.6287 22.4475 24.6323 22.8754 24.6395 23.2992C24.6467 23.723 24.5999 24.1429 24.4992 24.5587H26.4856V25.9981H24.0026C23.6283 26.9418 23.0345 27.6575 22.2213 28.1453C21.408 28.6331 20.5263 28.877 19.5763 28.877Z" fill="#336699"/>
                                        <path d="M42.9093 40.5831L31.0897 32.1347C29.8887 33.4459 28.4366 34.5268 26.7333 35.3775C25.0301 36.2283 23.1756 36.7696 21.1699 37.0016C16.3577 37.5581 12.092 36.3607 8.37277 33.4093C4.65356 30.4579 2.52124 26.6242 1.97583 21.9081C1.43042 17.192 2.6332 12.9725 5.58416 9.24975C8.53512 5.52698 12.3798 3.3916 17.1181 2.84361C21.8565 2.29563 26.0759 3.4984 29.7765 6.45194C33.477 9.40548 35.6003 13.2436 36.1465 17.9664C36.367 19.8729 36.2687 21.752 35.8516 23.6037C35.4346 25.4554 34.6932 27.2318 33.6275 28.9331L45.2124 37.0016L42.9093 40.5831ZM20.6401 33.005C24.255 32.587 27.1799 30.9525 29.4147 28.1015C31.6491 25.2507 32.5579 22.0233 32.1411 18.4195C31.7243 14.8157 30.1029 11.8809 27.2768 9.61529C24.4503 7.3497 21.2295 6.42593 17.6146 6.844C13.9627 7.26633 11.0065 8.90446 8.74585 11.7584C6.48522 14.6123 5.5633 17.8412 5.98007 21.445C6.39685 25.0488 8.03141 27.982 10.8838 30.2446C13.7361 32.5072 16.9882 33.4274 20.6401 33.005Z" fill="#336699"/>
                                        </svg>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-336699 mb-15">Testing & Automation</h4>
                                        <p className="font-md color-grey-500 mb-15">Our testing and automation services ensure that your software works correctly, can be developed, and is steady.</p>
                                        <div className="box-button-offer"><Link href="/software-testing-company" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image">                                        
                                        <svg width="35" height="41" viewBox="0 0 25 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.85678 41C2.08159 41 1.41166 40.7225 0.846997 40.1674C0.282332 39.6123 0 38.954 0 38.1927V2.80735C0 2.04597 0.282332 1.38774 0.846997 0.832641C1.41166 0.277545 2.08159 0 2.85678 0H22.1432C22.9184 0 23.5883 0.277545 24.153 0.832641C24.7177 1.38774 25 2.04597 25 2.80735V38.1927C25 38.954 24.7177 39.6123 24.153 40.1674C23.5883 40.7225 22.9184 41 22.1432 41H2.85678ZM1.57897 36.5896V38.1829C1.57897 38.4992 1.71299 38.789 1.98103 39.0525C2.24907 39.316 2.54395 39.4478 2.86567 39.4478H22.1343C22.456 39.4478 22.7509 39.316 23.019 39.0525C23.287 38.789 23.421 38.4992 23.421 38.1829V36.5896H1.57897ZM1.57897 35.0379H23.421V5.96214H1.57897V35.0379ZM1.57897 4.41044H23.421V2.81711C23.421 2.50084 23.287 2.21096 23.019 1.94746C22.7509 1.68396 22.456 1.55221 22.1343 1.55221H2.86567C2.54395 1.55221 2.24907 1.68396 1.98103 1.94746C1.71299 2.21096 1.57897 2.50084 1.57897 2.81711V4.41044Z" fill="#336699"/>
                                            <path d="M11.4799 29L11.1079 26.2982C10.7611 26.195 10.3837 26.0234 9.97578 25.7836C9.56801 25.5438 9.22174 25.2908 8.93699 25.0248L6.52674 26.1526L5 23.3651L7.16397 21.7274C7.12727 21.531 7.10062 21.3307 7.08403 21.1265C7.0676 20.9222 7.05938 20.7199 7.05938 20.5195C7.05938 20.3429 7.0676 20.1481 7.08403 19.9353C7.10062 19.7224 7.12427 19.5006 7.15499 19.2698L5 17.5956L6.52674 14.8657L8.9386 15.9596C9.24578 15.7076 9.59066 15.4652 9.97325 15.2323C10.3557 14.9994 10.728 14.8286 11.0901 14.7198L11.4799 12H14.5201L14.8924 14.7207C15.2668 14.8617 15.63 15.036 15.9818 15.2436C16.3335 15.4513 16.6659 15.6899 16.9789 15.9596L19.491 14.8657L21 17.5956L18.7575 19.3018C18.7982 19.5196 18.8287 19.728 18.8492 19.927C18.8694 20.1259 18.8796 20.3159 18.8796 20.4968C18.8796 20.6656 18.8679 20.8494 18.8445 21.0481C18.8214 21.2469 18.7893 21.4667 18.7485 21.7075L20.9707 23.3651L19.444 26.1526L16.9789 25.0039C16.6545 25.2981 16.3175 25.5576 15.9678 25.7824C15.6182 26.0072 15.2597 26.1728 14.8924 26.279L14.5201 29H11.4799ZM12.0354 28.2848H13.9303L14.2858 25.6387C14.754 25.5114 15.1819 25.3352 15.5694 25.11C15.9569 24.8847 16.3521 24.5751 16.7548 24.1812L19.1376 25.237L20.0476 23.5995L17.9502 21.9914C18.004 21.6987 18.0505 21.4336 18.0898 21.1959C18.129 20.9582 18.1486 20.7242 18.1486 20.494C18.1486 20.2364 18.1317 19.9951 18.0981 19.77C18.0645 19.5447 18.0152 19.3039 17.9502 19.0476L20.0829 17.4107L19.1756 15.7628L16.746 16.8186C16.4417 16.4846 16.057 16.1704 15.5918 15.8757C15.1266 15.5813 14.684 15.4037 14.2641 15.3429L13.9579 12.715H12.0294L11.7539 15.3353C11.2398 15.4406 10.784 15.6089 10.3866 15.8402C9.98907 16.0717 9.59419 16.3917 9.20193 16.8003L6.82439 15.7628L5.89411 17.4107L7.99772 18.9782C7.92446 19.2121 7.87155 19.4567 7.83899 19.7122C7.80659 19.9676 7.79038 20.2326 7.79038 20.507C7.79038 20.7759 7.80467 21.0295 7.83323 21.2679C7.86195 21.5062 7.90703 21.7483 7.96847 21.9943L5.89411 23.5891L6.81748 25.237L9.19294 24.2023C9.55741 24.6012 9.94422 24.9139 10.3534 25.1401C10.7624 25.3662 11.222 25.5424 11.7322 25.6687L12.0354 28.2848ZM12.9413 22.7467C13.5544 22.7467 14.0715 22.53 14.4926 22.0966C14.9138 21.6632 15.1243 21.1314 15.1243 20.5011C15.1243 19.8709 14.9136 19.3392 14.4922 18.9058C14.0706 18.4725 13.5533 18.2559 12.9403 18.2559C12.3254 18.2559 11.8075 18.4726 11.3869 18.906C10.9663 19.3394 10.7561 19.8713 10.7561 20.5015C10.7561 21.1317 10.9663 21.6634 11.3869 22.0968C11.8075 22.5301 12.3257 22.7467 12.9413 22.7467Z" fill="#336699"/>
                                        </svg>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-336699 mb-15">Mobile App Development</h4>
                                        <p className="font-md color-grey-500 mb-15">Our team of skilled developers and designers collaborates with you to turn your ideas into pleasure and useful apps that help your business grow.</p>
                                        <div className="box-button-offer"><Link href="/mobile-app-development-company" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image">                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#336699"><path d="M80-693v-87q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880-780v87h-60v-87H140v87H80Zm250 573v-80H140q-24 0-42-18.5T80-260v-93h60v93h680v-93h60v93q0 23-18.5 41.5T820-200H630v80H330Zm150-403Zm-316 3 118-118-42-42L80-520l160 160 42-42-118-118Zm632 0L678-402l42 42 160-160-160-160-42 42 118 118Z"/>
                                        </svg>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-336699 mb-15">Software Development</h4>
                                        <p className="font-md color-grey-500 mb-15">We offer our clients a comprehensive range of custom software development services to meet their needs.</p>
                                        <div className="box-button-offer"><Link href="/software-development-company" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-offer hover-up">
                                    <div className="card-image">                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#336699"><path d="M226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-506.66q0-27 19.83-46.84Q199.67-720 226.67-720h100v-6.67q0-64 44.66-108.66Q416-880 480-880t108.67 44.67q44.66 44.66 44.66 108.66v6.67h100q27 0 46.84 19.83Q800-680.33 800-653.33v506.66q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm0-66.67h506.66v-506.66h-100v86.66q0 14.17-9.61 23.75-9.62 9.59-23.84 9.59-14.21 0-23.71-9.59-9.5-9.58-9.5-23.75v-86.66H393.33v86.66q0 14.17-9.61 23.75-9.62 9.59-23.84 9.59-14.21 0-23.71-9.59-9.5-9.58-9.5-23.75v-86.66h-100v506.66ZM393.33-720h173.34v-6.67q0-36.33-25.17-61.5-25.17-25.16-61.5-25.16t-61.5 25.16q-25.17 25.17-25.17 61.5v6.67ZM226.67-146.67v-506.66 506.66Z"/>
                                        </svg>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="color-brand-336699 mb-15">E-commerce Development</h4>
                                        <p className="font-md color-grey-500 mb-15">Our team of experts will design user-friendly and visually appealing eCommerce websites optimized for conversion.</p>
                                        <div className="box-button-offer"><Link href="/ecommerce-development-company" className="btn btn-default font-sm-bold pl-0 color-brand-1">Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-30 pb-0">
                    <div className="container">
                        <div className="bg-brand-336699 box-cover-video">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6"><img className="d-block" src="assets/imgs/page/homepage1/img-video.png" alt="iori" /></div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="box-info-video"> {/* <span className="btn btn-tag">Business</span> */}
                                        <h3 className="color-brand-2 mt-10 mb-15">We Develop the Future-Ready World</h3>
                                        <p className="font-md color-white">Fleek Vertex is a development company and an inclusive community of top engineers who want to improve the world through digital innovation. We use our skills, knowledge, and experience to help our clients get ahead and improve the world. Our company's goal is easy to explain but hard to execute. We develop IT options. With the help of our clients, we make the world a better and more comfortable place for everyone. We believe as a company that technology has the power to make the world a better place for everyone and to remain. We help clients in many fields, like healthcare, education, business, and more, build custom solutions that meet their unique needs and solve their problems.</p>
                                        <div className="box-button-video"><a className="text-white font-sm-bold">Learn More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="sVPYIRF9RCQ" onClose={() => setOpen(false)} />
                    </div>
                </section>
                <section className="section mt-50 pt-40 pb-30 bg-grey-80">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h3 className="color-brand-5 mb-20">What our custommers are saying</h3>
                                <p className="font-lg color-gray-500">Hear from our users who have saved thousands on their Startup<br className="d-none d-lg-block" /> and SaaS solution spend</p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start">
                                </div>
                        </div>
                        <div className="mt-50">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-3">
                                    <Testimonial />
                                    <div className="swiper-pagination swiper-pagination-2 swiper-pagination-group-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8">
                                <h3 className="color-brand-5 mb-20">From our blog </h3>
                                <p className="font-lg color-gray-500">Keep up-to-date with all our latest company news and business content. The latest news, tips and advice to help you run your business with less fuss</p>
                            </div>
                            <div className="col-lg-4 col-md-4 text-md-end text-start">
                            <Link href="/blog" className="btn btn-default font-sm-bold pl-0">View all
                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></Link></div>
                        </div>
                        <div className="row mt-55">
                        <div className="col-lg-4 col-md-6 mb-30 item-article customer-stories">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="blogs/building-scalable-mobile-apps-key-trends-and-best-practices"><img src="assets/imgs/page/blog/img3.png" alt="iori" /></Link>
                                            <Link href="#"><label className="lbl-border">Mobile App Development</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="blogs/building-scalable-mobile-apps-key-trends-and-best-practices">
                                            <h4 className="color-brand-5">Building Scalable Mobile Apps: Key Trends and Best Practices</h4></Link>
                                            <div className="mb-15 mt-10"><span className="font-xs color-gray-900">September 07, 2024</span><span className="font-xs color-gray-900 icon-read">Mobile App Development</span></div>
                                            <p className="font-sm color-gray-900">Mobile apps have become an essential part of our daily lives. They can be used for everything from business transactions and interaction to entertainment and productivity. Since mobile apps have become increasingly vital, developers have to ensure that their work is both safe and scalable.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-30 item-article product-news">
                                <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blogs/e-commerce-development-for-modern-businesses"><img src="assets/imgs/page/blog/img4.png" alt="iori" /></Link>
                                            <Link href="#"><label className="lbl-border">E-Commerce Development</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blogs/e-commerce-development-for-modern-businesses">
                                            <h4 className="color-brand-5">E-Commerce Development for Modern Businesses</h4></Link>
                                            <div className="mb-10 mt-10"><span className="font-xs color-gray-900">September 12, 2022</span><span className="font-xs color-gray-900 icon-read">E-Commerce Development</span></div>
                                            <p className="font-sm color-gray-900 mt-20">In 2024, retail e-commerce sales amounted to more than 19% of total retail sales globally. Statista estimates that in 2027, e-commerce will account for over a quarter of global retail sales. Online shopping is growing.</p>
                                        </div>
                                    </div>
                                </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blogs/how-jira-enhances-web-and-software-development-projects"><img src="assets/imgs/page/blog/jira.jpg" alt="iori" /></Link>
                                            <Link href="#"><label className="lbl-border">JIRA Administration</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blogs/how-jira-enhances-web-and-software-development-projects">
                                            <h4 className="color-brand-5">How JIRA Enhances Web and Software Development Projects</h4></Link>
                                            <div className="mb-10 mt-10"><span className="font-xs color-gray-900">September 12, 2022</span><span className="font-xs color-gray-900 icon-read">JIRA Administration</span></div>
                                            <p className="font-sm color-gray-900 mt-20">Web and software development require efficient project management and teamwork. JIRA is essential for developers and project managers. In this blog, we will discuss what makes JIRA stand out and how it can significantly enhance your development projects.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </section>
                <section className="section mt-60 mb-60">
                    <div className="container">
                        <div className="box-radius-32-style-2">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <span className="title-line line-48">Get In Touch</span>
                                    <h2 className="color-brand-5 mb-20 mt-10">
                                        Got a Vision? <br className="d-none d-lg-block" />We're Here to Build It.
                                    </h2>
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <p className="font-md color-gray-900">
                                            Don't hesitate to contact us to learn how Fleek Vertex can help you use digital innovation to change your business. We're excited to work with you to make your idea come true with cutting-edge solutions. You can email us at  info@fleekvertex.com or (+91) 9346 261 550. Join us in developing a future-ready world that benefits everyone.
                                            </p>
                                        </div>
                                    </div> 
                                    <div className="box-button mt-20">
                                        <Link className="btn-app mb-15 hover-up" href="#">
                                            {/* <img src="/assets/imgs/template/appstore-btn.png" alt="iori" /></Link><Link className="btn-app mb-15 hover-up" href="#">
                                            <img src="/assets/imgs/template/google-play-btn.png" alt="iori" /></Link><Link className="btn btn-default mb-15 pl-10 font-sm-bold hover-up" href="#"> */}
                                            Learn More
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                                </Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 text-start position-relative">
                                    <span className="arrow-down-banner shape-1" /><span className="arrow-right-banner shape-2" />
                                    <form  onSubmit={handleSubmit}>
                                    <div className="box-signup">
                                        <h4 className="color-brand-5 mb-30">Get In Touch</h4>
                                        <div className="form-group mb-25">
                                            <input className="form-control" type="text" placeholder="Full Name"  name='name' value={formData.name} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-25">
                                            <input className="form-control" type="text" placeholder="stevenjob@gmail.com" name='email' value={formData.email} onChange={handleChange} required/>
                                        </div>
                                        <div className="form-group mb-25">
                                            <input className="form-control" type="tel" placeholder="+91 9346261550" name="phone" value={formData.phone} onChange={handleChange} required/>
                                        </div>
                                        <div className="form-group mb-25">
                                            <input className="form-control" type="text" rows="4" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-25">
                                            <textarea className="form-control" type="text" rows="4" placeholder="Hi Fleek Vertex"  name="message" value={formData.message} onChange={handleChange} required/>
                                        </div>
                                        <div className="form-group mb-15">
                                            <button className="btn btn-brand-1-full" type="submit">
                                                Send a request
                                            </button>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ToastContainer/>
            </Layout>
        </>
    );
};

export default HomePage;