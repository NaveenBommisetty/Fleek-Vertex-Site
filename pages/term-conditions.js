import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const pageTerm = () => {
    return (
        <>
            <Head>
                <title>Terms and condition</title>
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
                                <li> <Link href="#">Terms and conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="section pt-40 content-term">
                    <div className="" />
                    <div className="container">
                        <div className="content-main mt-10">
                            <div className="text-center">
                                <h2 className="color-brand-1 mb-10">Terms and Condition</h2>
                                <p className="font-lg color-grey-500 pb-10">Welcome to Fleek Vertex. You agree to follow and be bound by these terms and conditions when you use our website and services. Before you use our services, please read them carefully. You should not use our services if you don't agree with any of these fundamental principles.</p>
                                <p className="font-lg color-grey-500 pb-20">"Fleek Vertex," "we," "us," and "our" refer to the business entity offering the services through this site.<br></br>"User," "you," or "your" refers to any individual, company, or organization accessing or using our services.,<br></br>"Services" refers to all products, services, and content Fleek Vertex provides.</p>
                                
                            </div>
                            <div className="row mt-70">
                                <div className="col-lg-2 col-md-5">
                                    <div className='sticky-sidebar sidebar-author'>
                                    <h6 className="color-brand-1 mb-15">Table of contents</h6>
                                    <ul className="list-terms">
                                        <li> <Link href="#limitation">Use of Services</Link></li>
                                        <li> <Link href="#ServiceAvailability">Service Availability</Link></li>
                                        <li> <Link href="#DisclaimerofWarranties">Disclaimer of Warranties</Link></li>
                                        <li> <Link href="#IntellectualProperty">Intellectual Property</Link></li>
                                        <li> <Link href="#PaymentandFees">Payment and Fees</Link></li>
                                        <li> <Link href="#LimitationofLiability">Limitation of Liability</Link></li>
                                        <li> <Link href="#Termination">Termination</Link></li>
                                        <li> <Link href="#GoverningLaw">Governing Law</Link></li>
                                        <li> <Link href="#ImportantNotes">Important Notes</Link></li>
                                        <li> <Link href="#RefundPolicy">Refund Policy </Link></li>
                                        {/* <li> <Link href="#refund">Refund Policy</Link></li>
                                        <li> <Link href="#email">Email &amp; Newsletter</Link></li>
                                        <li> <Link href="#agreement">License Agreement</Link></li>
                                        <li> <Link href="#severability">Severability</Link></li> */}
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-8">
                                    <h3 className="color-brand-1 mb-20" id="limitation">Use of Services</h3>
                                    <h4 className="color-brand-5 pl-20">1.Eligibility</h4>
                                    <p className="font-md color-grey-500 mb-10 pl-20">By utilizing our services, you acknowledge that you are at least 18 years old or the age of legal majority in your jurisdiction, if it is different.</p>
                                    <h4 className="color-brand-5 pl-20">2.Account Registration</h4>
                                    <p className="font-md color-grey-500 mb-10 pl-20">Account registration is mandatory for certain services. You acknowledge that you are responsible for providing accurate and comprehensive information during registration and will update your information as required. You are accountable for the confidentiality of your account information and all activities under your account.</p>
                                    <h4 className="color-brand-5 pl-20">3.Acceptable Use</h4>
                                    <p className="font-md color-grey-500 mb-10 pl-20">You consent to refrain from abusing our services. Activities that are prohibited include, but are not restricted to, using the services for illegal purposes, transmitting harmful code, and violating others' rights</p>
                                    <h4 className="color-brand-1 mb-10" id="ServiceAvailability">Service Availability</h4>
                                    <p className="font-md color-grey-500 mb-10">Fleek Vertex is dedicated to ensuring that our services are always accessible. Still, we do not guarantee continuous or error-free service and retain the right to modify, suspend, or discontinue any aspect of the services without warning. We are not responsible for any consequences arising from service interruptions or modifications.</p>
                                    <h4 className="color-brand-1 mb-10" id="DisclaimerofWarranties">Disclaimer of Warranties</h4>
                                    <p className="font-md color-grey-500 mb-10">Fleek Vertex does not provide any warranties or representations regarding our services' timeliness, accuracy, availability, applicability, or reliability. The services are provided "as is" without any warranty. We do not guarantee that our services will be free of errors or interruptions.</p>
                                    <h4 className="color-brand-1 mb-10" id="IntellectualProperty">Intellectual Property</h4>
                                    <h4 className="color-brand-5 pl-20">1.Ownership</h4>
                                    <p className="font-md color-grey-500 mb-10 pl-20"> Fleek Vertex or our licensors' intellectual property extends to all content and materials on our website, including, but not limited to, text, graphics, logos, icons, images, and software.</p>
                                    <h4 className="color-brand-5 pl-20">2.License</h4>
                                    <p className="font-md color-grey-500 mb-10 pl-20">You are granted a non-exclusive, limited, and non-transferable license to access and use the services for personal or internal business purposes. The redistribution, reselling, or reproduction of our content is strictly prohibited without our written consent.</p>
                                    <h4 className="color-brand-1 mb-10" id="PaymentandFees">Payment and Fees</h4>
                                    <h4 className="color-brand-5 pl-20">1.Pricing</h4>
                                    <p className="font-md color-grey-500 mb-10 pl-20">Information regarding service fees is available on our website or upon request. Prices are subject to change without notice.</p>
                                    <h4 className="color-brand-5 pl-20">2.Billing</h4>
                                    <p className="font-md color-grey-500 mb-10 pl-20">You agree to pay all fees and applicable taxes for services you or your authorized users use. Payments must be made according to the payment terms specified at the time of sign-up or purchase.</p>
                                    <h4 className="color-brand-1 mb-10" id="LimitationofLiability">Limitation of Liability</h4>
                                    <p className="font-md color-grey-500 mb-10">Fleek Vertex shall not be held accountable for any indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, or data, to the utmost extent permitted by applicable law. Our aggregate liability shall not surpass the sum you paid for the services.</p>
                                    <h4 className="color-brand-1 mb-10" id="support">Indemnification</h4>
                                    <p className="font-md color-grey-500 mb-10">You consent to the defense, indemnification, and holding harmless of Fleek Vertex, its affiliates, employees, and agents from any claims, liabilities, damages, losses, or expenses, including reasonable attorney's fees, that arise from or in connection with your use of the services or violation of these terms.</p>
                                    <h4 className="color-brand-1 mb-10" id="Termination">Termination</h4>
                                    <p className="font-md color-grey-500 mb-10">Fleek Vertex retains the right to suspend or terminate your access to the services with or without cause and without notice. Your license to utilize the services will terminate immediately upon termination. All provisions of these terms intended to survive termination, such as the disclaimer of warranties, ownership, and liability limitation, shall survive.</p>
                                    <h4 className="color-brand-1 mb-10" id="GoverningLaw">Governing Law</h4>
                                    <p className="font-md color-grey-500 mb-10">These terms and conditions shall be governed by and construed by the laws of the jurisdiction where Fleek Vertex is established, without regard to its conflict of law principles. The courts in the subject jurisdiction shall have exclusive jurisdiction over any dispute arising from or in connection with these terms.</p>
                                    <h4 className="color-brand-1 mb-10" id="email">Update Terms and Conditions</h4>
                                    <p className="font-md color-grey-500 mb-10">Fleek Vertex reserves the right to modify or replace these terms and conditions without notice. Your continued use of our services after such changes constitutes your acceptance of the revised terms. If you disagree with the new terms, stop using our services.</p>
                                    <h4 className="color-brand-1 mb-20" id="ImportantNotes">Important Notes</h4>
                                    <p className="font-md color-grey-500 mb-20 pl-20">1. These terms and conditions constitute the entire agreement between Fleek Vertex and you regarding your use of our services.<br></br>
2. If any provision of these terms is invalid or unenforceable, the remaining provisions shall remain in full force and effect.<br></br>
3. Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.<br></br>
4. Any notices or communications required by these terms may be emailed or posted on our website.<br></br>
5. Headings are for reference purposes only and do not limit or affect these terms.
</p>
<p className="font-md color-grey-500 mb-30">We appreciate your attention to our Terms and Conditions. We are committed to delivering secure and dependable services. However, if you have any queries or concerns regarding these terms, please do not hesitate to reach out to us at info@fleekvertex.com for further clarification. We are grateful for the chance to serve you and appreciate your business. So, please feel free to peruse our services and inform us if there is anything we can do to enhance your experience with Fleek Vertex.</p>
<h4 className="color-brand-1 mb-10" id="RefundPolicy">Refund Policy</h4>
                                    <p className="font-md color-grey-500 mb-10">Our service price range starts from Rs.2000<br />

If refund is approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 7-10 business days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </Layout>

        </>
    );
};

export default pageTerm;