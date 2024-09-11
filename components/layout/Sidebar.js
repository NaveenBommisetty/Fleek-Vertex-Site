import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="mobile-logo"><Link className="d-flex" href="/"><img alt="Fleek Vertex Logo" src="assets/imgs/template/logo.svg" /></Link></div>
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                    <div eventKey="menu" title="Menu">
                                        <div className="tab-pane">
                                            <nav className="mt-15">
                                            <ul className="mobile-menu">
                                            <li><Link className="active" href="/">Home</Link></li>
                                            <li><Link href="/about">Company</Link></li>
                                            <li className={isActive.key == 5 ? "has-children active" : "has-children"} onClick={() => handleToggle(5)}>
                                                        <span class="menu-expand">
                                                            <svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                                            </svg>
                                                        </span>
                                                        <Link href="/service">Our Services</Link>
                                                        <ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                            <li><Link href="/web-development-company">Web Development Company</Link></li>
                                                            <li><Link href="/job-detail">Mobile App Development</Link></li>
                                                            <li><Link href="/job-detail">Cloud Services</Link></li>
                                                            <li><Link href="/job-detail">JIRA Administration</Link></li>
                                                            <li><Link href="/job-detail">JIRA Administration</Link></li>
                                                        </ul>
                                                    </li>
                                            <li><Link href="blog">Blog</Link></li> 
                                            <li><Link href="/contact">Contact</Link></li>
                                        </ul>
                                                
                                            </nav>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Sidebar;