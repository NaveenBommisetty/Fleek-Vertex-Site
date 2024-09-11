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
                                <div className="mb-10"><img alt="Fleek Vertex Logo" src="assets/imgs/template/logo.svg" /></div>
                                <p className="font-md mb-20 color-branding-dark"><strong className="font-md-bold">Address:</strong> 1207/343, 9th Main Rd, 7th Sector, HSR Layout, Bengaluru, Karnataka 560102, India</p>
                                <div className="font-md mb-20 color-branding-dark"><strong className="font-md-bold">Hours:</strong> 9:00 - 17:00, Mon - Fri</div>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-5">Company</h5>
                                <ul className="menu-footer">
                                    <li><Link href="/about">Mission &amp; Vision</Link></li>
                                    <li><Link href="/team">Our Team</Link></li>
                                    <li><Link href="/">Careers</Link></li>
                                    <li><Link href="#">Press &amp; Media</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-5">Solutions</h5>
                                <ul className="menu-footer">
                                    <li><Link href="#">Project managemen</Link></li>
                                    <li><Link href="#">Solutions</Link></li>
                                    <li><Link href="#">Customers</Link></li>
                                    <li><Link href="#">News &amp; Events</Link></li>
                                    <li><Link href="#">Careers</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-5">Industries We Cover</h5>
                                <ul className="menu-footer">
                                    <li><Link href="#">Project  software</Link></li>
                                    <li><Link href="#">Resource  software</Link></li>
                                    <li><Link href="#">Workflow automation</Link></li>
                                    <li><Link href="#">Gantt chart makers</Link></li>
                                    <li><Link href="#">Project dashboards</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-23">
                                <h5 className="mb-10 color-brand-5">App &amp; Payment</h5>
                                <div>
                                    <p className="font-sm color-branding-dark">Download our Apps and get extra 15% Discount on your first Order…!</p>
                                    <br/>
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
                                        <li><Link className="font-sm color-gray-900" href="/term-conditions">Privacy policy</Link></li>
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