    import Link from 'next/link';
    import React, { useEffect, useState } from 'react';

    const Header = ({ handleOpen, handleRemove, openClass, addClass }) => {
        const [scroll, setScroll] = useState(0)
        const [isSearchToggled, setSearchToggled] = useState(false);
        const [isLanguageToggled, setLanguageToggled] = useState(false);
        const toggleSearchTrueFalse = () => setSearchToggled(!isSearchToggled);
        const toggleLanguageTrueFalse = () => setLanguageToggled(!isLanguageToggled);
        useEffect(() => {
            document.addEventListener("scroll", () => {
                const scrollCheck = window.scrollY > 100
                if (scrollCheck !== scroll) {
                    setScroll(scrollCheck)
                }
            })
        })
        return (
            <>
                <header className={`${scroll ? "header sticky-bar stick" : "header sticky-bar"} ${addClass}`}>
                    <div className="container">
                        <div className="main-header">
                            <div className="header-left">
                                <div className="header-logo"><Link className="d-flex" href="/"><img alt="Fleek Vertex Logo" className='fleek-logo' src="../assets/imgs/template/logo.svg" /></Link></div>
                                <div className="header-nav">
                                    <nav className="nav-main-menu d-none d-xl-block">
                                        <ul className="main-menu">
                                            <li><Link className="active" href="/">Home</Link></li>
                                            <li><Link href="/about-fleek-vertex">Company</Link></li>
                                            <li className="has-children"><Link href="">Our Services</Link>
                                                <ul className="sub-menu">
                                                    <li>  <Link href="/software-development-company" legacyBehavior>
    <a  rel="noopener noreferrer">Software Development</a>
  </Link></li>
                                                    <li><Link href="/web-development-company">Web Development</Link></li>
                                                    <li><Link href="/mobile-app-development-company">Mobile App Development</Link></li>
                                                    <li><Link href="/ecommerce-development-company">Ecommerce Development</Link></li>
                                                    <li><Link href="/cloud-migration-services">Cloud Services</Link></li>
                                                    <li><Link href="/jira-administration-services">JIRA Administration</Link></li>
                                                    <li><Link href="/branding-services">Branding Services</Link></li>
                                                    <li><Link href="/software-testing-company">Software Testing</Link></li>
                                                    {/* <li><Link href="/website-hosting-and-maintanance">Hosting & Maintanance</Link></li> */}
                                                </ul>
                                            </li>
                                            <li><Link href="/blog">Blog</Link></li> 
                                            <li><Link href="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                    <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                                        onClick={() => { handleOpen(); handleRemove() }}>
                                        <span className="burger-icon-top" />
                                        <span className="burger-icon-mid" />
                                        <span className="burger-icon-bottom" />
                                    </div>
                                </div>
                                <div className="header-right">
                                    {/* <div className="d-inline-block box-search-top">
                                        <div className={isSearchToggled ? "form-search-top d-block" : " form-search-top d-none"}>
                                            <form action="#">
                                                <input className="input-search" type="text" placeholder="Search..." />
                                                <button className="btn btn-search">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </button>
                                            </form>
                                        </div>
                                        <span className="font-lg icon-list search-post" onClick={toggleSearchTrueFalse}>
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg></span>
                                    </div>  */}
                                    <div className="d-none d-sm-inline-block"><Link className="btn btn-brand-1 hover-up" href="/contact">Get Started</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


            </>
        );
    };

    export default Header;