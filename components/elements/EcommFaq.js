import React, { useState } from 'react';

const EcommFaq = () => {
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
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What platforms do you specialize in?</button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">We specialize in Magento, WooCommerce, and Shopify development, providing tailored solutions for each platform.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(2)}>
                        <button  className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How does the payment gateway integration work?</button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">We integrate leading payment gateways into your eCommerce platform, ensuring secure and efficient transaction processing.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(3)}>
                        <button  className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What kind of ongoing support do you offer?</button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">We offer comprehensive eCommerce maintenance services, including regular updates, performance monitoring, and issue resolution.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(4)}>
                        <button  className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How can SEO integration benefit my online store?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Our SEO integration services enhance your store's visibility in search engine results, driving more organic traffic and potential customers to your site.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(5)}>
                        <button  className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How long does it take to set up a new eCommerce store?</button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">The setup time for a new eCommerce store depends on its complexity and your business's particular requirements. It usually takes between a few weeks and a few months.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(6)}>
                        <button  className={isActive.key == 6 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Can you help me migrate my existing store to a new platform?</button>
                    </h5>
                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Yes, we offer comprehensive migration services to transition your existing store to a new platform seamlessly. Our team handles data transfer, design replication, and functionality implementation with minimal downtime.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(7)}>
                        <button  className={isActive.key == 7 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What measures do you take to ensure my store's security?</button>
                    </h5>
                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Our security protocols and best practices ensure the security of your eCommerce store. It includes regular software updates, security patches, and comprehensive monitoring. A routine security audit identifies and addresses potential vulnerabilities. We will keep your store safe and secure.</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default EcommFaq;