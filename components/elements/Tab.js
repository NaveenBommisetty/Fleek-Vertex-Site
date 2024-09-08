import React, { useState } from "react";


const Tab = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <ul className="list-buttons list-buttons-circle nav nav-tabs" role="tablist">
                <li onClick={() => handleOnClick(1)}>
                    <a className={activeIndex === 1 ? "active" : ""}>Digital Cameras</a>
                </li>
                <li onClick={() => handleOnClick(2)}>
                    <a className={activeIndex === 2 ? "active" : ""}>Mirrorless Camera</a>
                </li>
                <li onClick={() => handleOnClick(3)}>
                    <a className={activeIndex === 3 ? "active" : ""}>Camera Flashes</a>
                </li>
                <li onClick={() => handleOnClick(4)}>
                    <a className={activeIndex === 4 ? "active" : ""}>Travel Camera</a>
                </li>
                <li onClick={() => handleOnClick(5)}>
                    <a className={activeIndex === 5 ? "active" : ""}>Instant Camera</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/homepage10/img-tab.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    <span className="btn btn-tag">Business</span>
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                        Integrate with over 1,000 project management apps
                                    </h3>
                                    <p className="font-md color-grey-400">
                                        Excepteur sint occaecat cupidatat non proident, sunt
                                        in culpa qui officia deserunt mollit laborum — semper
                                        quis lectus nulla. Interactively transform magnetic
                                        growth strategies whereas prospective "outside
                                        the box" thinking.
                                    </p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task tracking
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Create task dependencies
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task visualization
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>hare files, discuss
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Meet deadlines faster
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Track time spent on each project
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/blog2/img1.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    <span className="btn btn-tag">Business</span>
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                        Integrate with over 1,000 project management apps
                                    </h3>
                                    <p className="font-md color-grey-400">
                                        Excepteur sint occaecat cupidatat non proident, sunt
                                        in culpa qui officia deserunt mollit laborum — semper
                                        quis lectus nulla. Interactively transform magnetic
                                        growth strategies whereas prospective "outside
                                        the box" thinking.
                                    </p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task tracking
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Create task dependencies
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task visualization
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>hare files, discuss
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Meet deadlines faster
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Track time spent on each project
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/homepage10/img-tab.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    <span className="btn btn-tag">Business</span>
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                        Integrate with over 1,000 project management apps
                                    </h3>
                                    <p className="font-md color-grey-400">
                                        Excepteur sint occaecat cupidatat non proident, sunt
                                        in culpa qui officia deserunt mollit laborum — semper
                                        quis lectus nulla. Interactively transform magnetic
                                        growth strategies whereas prospective "outside
                                        the box" thinking.
                                    </p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task tracking
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Create task dependencies
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task visualization
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>hare files, discuss
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Meet deadlines faster
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Track time spent on each project
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/blog2/img1.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    <span className="btn btn-tag">Business</span>
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                        Integrate with over 1,000 project management apps
                                    </h3>
                                    <p className="font-md color-grey-400">
                                        Excepteur sint occaecat cupidatat non proident, sunt
                                        in culpa qui officia deserunt mollit laborum — semper
                                        quis lectus nulla. Interactively transform magnetic
                                        growth strategies whereas prospective "outside
                                        the box" thinking.
                                    </p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task tracking
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Create task dependencies
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task visualization
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>hare files, discuss
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Meet deadlines faster
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Track time spent on each project
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeIndex === 5 ? "tab-pane fade active show" : "tab-pane fade"}>
                    <div className="box-tab-32">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <img className="bd-rd16" src="/assets/imgs/page/homepage10/img-tab.png" alt="iori" />
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="box-business-tab">
                                    <span className="btn btn-tag">Business</span>
                                    <h3 className="color-brand-1 mt-10 mb-15">
                                        Integrate with over 1,000 project management apps
                                    </h3>
                                    <p className="font-md color-grey-400">
                                        Excepteur sint occaecat cupidatat non proident, sunt
                                        in culpa qui officia deserunt mollit laborum — semper
                                        quis lectus nulla. Interactively transform magnetic
                                        growth strategies whereas prospective "outside
                                        the box" thinking.
                                    </p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task tracking
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Create task dependencies
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Task visualization
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>hare files, discuss
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Meet deadlines faster
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Track time spent on each project
                                            </li>
                                        </ul>
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

export default Tab;