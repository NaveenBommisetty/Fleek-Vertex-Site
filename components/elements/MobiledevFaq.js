import React, { useState } from 'react';

const MobiledevFaq = () => {
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
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What platforms do you develop apps for?</button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Our mobile apps are developed for iOS and Android platforms, ensuring your business has a broad reach.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(2)}>
                        <button  className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How long does it take to develop a mobile app?</button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">It depends on the app's complexity and development time. Using agile methodologies, we ensure a quick turnaround without compromising quality.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(3)}>
                        <button  className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Do you provide post-launch support?</button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Yes, we offer dedicated support and maintenance services to keep your app updated and optimized.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(4)}>
                        <button  className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Can you integrate the app with our existing systems?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Absolutely! We ensure seamless integration with your existing systems and technologies for smooth operations.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(5)}>
                        <button  className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Do you provide analytics and reporting services?</button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Yes, we can integrate analytics tools into your app to provide valuable insights and reports on user behavior and performance. This can help inform future updates and improvements for your app.
 </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(6)}>
                        <button  className={isActive.key == 6 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How do you handle security for mobile apps?</button>
                    </h5>
                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Our app development process prioritizes security in all aspects. Our team maintains the latest security trends and vulnerabilities, implements patches and enhancements, and performs regular tests to ensure your app is secure.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(7)}>
                        <button  className={isActive.key == 7 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Do you have any experience marketing mobile apps?</button>
                    </h5>
                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">We specialize in mobile app development, but we have partnerships with marketing agencies that can help promote your app. We would happily connect you with the right agency for your marketing needs.</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MobiledevFaq;