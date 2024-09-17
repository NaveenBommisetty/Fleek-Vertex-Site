import React, { useState } from 'react';

const WebdevFaq = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
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
            

            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How long does it take to develop a website?</button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">The timeline for a website depends on its complexity and specific requirements. A standard web page typically takes 4 to 12 weeks to develop from initial consultation to launch. The development time may be longer for complex projects like e-commerce sites or custom web applications. We'll provide you with a detailed timeline during our initial consultation.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(2)}>
                        <button  className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How much does it cost to develop a website with Fleek Vertex?</button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">The cost of web development depends on the scope and features of your project. Our solutions are customized to meet the unique requirements of startups and small businesses. After learning more about your requirements, we will provide an accurate quote. We are happy to provide you with a free consultation and estimate.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(3)}>
                        <button  className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Do you offer website redesign services?</button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Yes, we do! If your existing website needs a fresh look or improved functionality, our team can help redesign it to meet your goals better and provide an enhanced user experience.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(4)}>
                        <button  className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Will my website be mobile-friendly?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Yes, absolutely. We develop responsive websites that work seamlessly on all devices, including smartphones, tablets, and desktops.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(5)}>
                        <button  className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What is the process for working with Fleekvertex on a web development project?</button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Our web development process includes the following steps:
<li><b>Consultation:</b> We discuss your goals, requirements, and vision for the website.</li>
<li><b>Planning:</b>We create a detailed project plan, including timelines and milestones.</li>
<li><b>Design:</b>Our designers create wireframes and mockups for your approval.</li>
<li><b>Development:</b>Our developers bring the design to life using the latest technologies.</li>
<li><b>Testing:</b>We thoroughly test the website to ensure it functions flawlessly.</li>
<li><b>Launch:</b>We launch the website and provide ongoing support as needed.</li>
 </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(6)}>
                        <button  className={isActive.key == 6 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Can I update my website content myself after it's built?</button>
                    </h5>
                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Yes, we can integrate a content management system (CMS) like WordPress, Shopify, or Joomla, which allows you to update and manage your website content easily without technical expertise.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(7)}>
                        <button  className={isActive.key == 7 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Do you offer ongoing maintenance and support?</button>
                    </h5>
                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Yes, we offer ongoing website maintenance and support services to keep your website secure, up-to-date, and performing well. We offer a variety of support package options to suit your needs.</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default WebdevFaq;