import React, { useState } from 'react';

const QnsFaq = () => {
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
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What services do we offer?</button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">We specialize in software development, IT consulting, and digital transformation services. Our offerings include custom software development, mobile and web application development, cloud solutions, systems integration, and IT strategy consulting.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(2)}>
                        <button  className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How does Fleek Vertex approach a new project?</button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">We begin by thoroughly analyzing your company's needs and goals. Our team collaborates directly with you to create a customized strategy, build a solution, and deploy the technology required to achieve your objectives efficiently and effectively.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(3)}>
                        <button  className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Can Fleekvertex support my existing IT infrastructure?</button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Yes, we provide comprehensive support and maintenance services for existing IT infrastructures. Our experts ensure your systems are running optimally and make recommendations for improvements.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(4)}>
                        <button  className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What industries does Fleekvertex serve?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">We work across a wide range of industries, including Education, Construction, Retail and E-Commerce, Health Care, Travel and hospitality, Entertainment, E-commerce, Mining, the Public Sector, and more. Our tailored solutions meet the unique needs and challenges of each sector.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(5)}>
                        <button  className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How can I get started with Fleekvertex?</button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">To get started, visit our website or call our customer support number. We'll schedule an introductory appointment to explore your requirements and how we might help your business succeed.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(6)}>
                        <button  className={isActive.key == 6 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What makes Fleekvertex different from other IT consulting companies?</button>
                    </h5>
                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Our agile approach, industry expertise, and commitment to delivering new solutions differentiate us. We prioritize long-term relationships with our clients, ensuring that our solutions continue to add value as your business develops and evolves.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(7)}>
                        <button  className={isActive.key == 7 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How does Fleekvertex ensure the security of its software solutions?</button>
                    </h5>
                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">We strongly emphasize cybersecurity. Our development procedures accept industry best practices for security, and we conduct thorough testing and vulnerability assessments to protect your data while ensuring compliance with relevant standards and legislation. We also provide constant security and maintenance for our solutions.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(8)}>
                        <button  className={isActive.key == 8 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Can Fleekvertex integrate with my existing systems and applications?</button>
                    </h5>
                    <div className={isActive.key == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Yes, Fleekvertex has extensive experience in system integration and can seamlessly integrate our solutions with your existing systems and applications.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(9)}>
                        <button  className={isActive.key == 9 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Does Fleekvertex offer training or support for the software solutions it develops?</button>
                    </h5>
                    <div className={isActive.key == 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Yes, we provide comprehensive training and support services to ensure that your team is equipped to use our software solutions effectively. We also offer ongoing technical support to address any issues or questions that may arise.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(10)}>
                        <button  className={isActive.key == 10 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How does Fleekvertex keep up with emerging technologies and trends in the industry?</button>
                    </h5>
                    <div className={isActive.key == 10 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">We are committed to staying ahead of technological advancements and industry trends. We regularly conduct research and invest in training for our team to ensure we can provide cutting-edge solutions for our clients. </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(11)}>
                        <button  className={isActive.key == 11 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Can Fleekvertex assist with digital transformation initiatives?</button>
                    </h5>
                    <div className={isActive.key == 11 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Yes, digital transformation is one of our key areas of expertise. Our team of professionals has vast experience assisting organizations in using technology to optimize processes, increase efficiency, and drive growth.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header"  onClick={() => handleToggle(12)}>
                        <button  className={isActive.key == 12 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Does Fleekvertex work with startups and small businesses?</button>
                    </h5>
                    <div className={isActive.key == 12 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Yes, we work with various clients, including startups and small businesses. We understand these organizations' unique challenges and can provide cost-effective solutions customized to their needs. </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default QnsFaq;