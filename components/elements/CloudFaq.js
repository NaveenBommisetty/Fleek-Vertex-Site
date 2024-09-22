import React, { useState } from 'react';

const CloudFaq = () => {
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
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What types of cloud services do you offer?</button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">We offer a comprehensive range of cloud services, including consulting, infrastructure setup, migration, DevOps, security, and application development.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(2)}>
                        <button  className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How do I get started with Fleek Vertex?</button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Get in touch with us to schedule an initial consultation. We'll discuss your needs and develop a customized strategy for your business.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(3)}>
                        <button  className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What industries do you serve?</button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">While we specialize in working with startups and IT professionals, our services are adaptable to various industries seeking cloud solutions.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(4)}>
                        <button  className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What sets Fleek Vertex apart from other cloud service providers?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">With our personalized approach, extensive expertise, and commitment to continuous support, we stand out from the competition. Our solutions are tailored to meet your specific needs and ensure long-term success.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(5)}>
                        <button  className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Do you support multi-cloud environments?</button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Yes, we support multi-cloud environments, enabling businesses to take advantage of different cloud platforms. We can integrate, manage, and optimize multi-cloud strategies to ensure seamless operation.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(6)}>
                        <button  className={isActive.key == 6 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What security measures do you implement?</button>
                    </h5>
                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">We implement an extensive set of security measures, including threat detection, identity management, data encryption, and regular audits of security. It is our goal to protect your cloud environment against potential threats and to ensure compliance with industry standards.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(7)}>
                        <button  className={isActive.key == 7 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Can you help with disaster recovery planning?</button>
                    </h5>
                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Absolutely. We provide comprehensive disaster recovery planning services to ensure your data and applications are protected. You can trust us to develop and implement your disaster recovery plan, ensuring business continuity and peace of mind.</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CloudFaq;