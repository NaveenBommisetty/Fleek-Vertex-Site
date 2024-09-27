import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 width-20">
                                <div className="mb-10"><img alt="Fleek Vertex Logo" src="../assets/imgs/template/logo.svg" /></div>
                                <p className="font-md mb-20 color-branding-dark"><strong className="font-md-bold">Address:</strong> 1207/343, 9th Main Rd, 7th Sector, HSR Layout, Bengaluru, Karnataka 560102, India</p>
                                
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-5">Company</h5>
                                <ul className="menu-footer">
                                    <li><Link href="/Faq">Faq</Link></li>
                                    <li><Link href="/term-conditions">T&C's</Link></li>
                                    <li><Link href="/Privacy-Policy">Privacy policy</Link></li>
                                    <li><Link href="/careers">Careers</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-5">Solutions</h5>
                                <ul className="menu-footer">
                                    <li><Link href="/software-development-company">Software Development</Link></li>
                                    <li><Link href="/web-development-company">Web Development</Link></li>
                                    <li><Link href="/ecommerce-development-company">E-commerece Development</Link></li>
                                    <li><Link href="/mobile-app-development-company">mobile-app Development</Link></li>
                                    <li><Link href="/jira-administration-services">jira administration</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-5">Industries We Cover</h5>
                                <ul className="menu-footer">
                                    <li><Link href="#">Education</Link></li>
                                    <li><Link href="#">Retail & Ecommerce</Link></li>
                                    <li><Link href="#">Entertainment</Link></li>
                                    <li><Link href="#">Health Care</Link></li>
                                    <li><Link href="#">Public Sector</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-23">
                                <div>
                                <div className="font-md mb-20 color-branding-dark"><strong className="font-md-bold">Hours:</strong> 9:00 - 17:00, Mon - Fri</div>
                                    <h6 className="color-brand-5">Follow Us</h6>
                                    <div className="mt-15"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /><Link className="icon-socials icon-linkedin" href="#" /><Link className="icon-socials icon-youtube" href="#" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="container">
                        <div className="footer-bottom">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 text-center text-lg-start">
                                    <ul className="menu-bottom">
                                        <li><Link className="font-sm color-gray-900" href="/Privacy-Policy">Privacy policy</Link></li>
                                        <li><Link className="font-sm color-gray-900" href="/term-conditions">Cookies</Link></li>
                                        <li><Link className="font-sm color-gray-900" href="/term-conditions">Terms of service</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-12 text-center text-lg-end"><span className="color-gray-900 font-md">©Fleek Vertex Pvt Ltd 2024. All right reversed.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );
};

export default Footer;