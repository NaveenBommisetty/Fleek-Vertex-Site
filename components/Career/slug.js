import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout/Layout';
import jobsData from './jobs.json';
import { useRouter } from 'next/router';

const JobDetails = () => {
    const router = useRouter();
    const { slug } = router.query;

    const job = jobsData.find((job) => job.url === slug);

    if (!job) {
        return <div>Loading...</div>; // or handle the 404 case here
    }
    const {
        title,
        skillsRequired,
        experience,
        location,
        responsibilities,
        requirements,
        benefits,
        image // Assuming job data includes an image property
    } = job;

    return (
        <>
            <Head>
                <title>{title} - Job Details</title>
                <meta name="description" content={`Details about the job: ${title}`} />
                
            </Head>

            <Layout>
                <div className="section breadcrumbs-path pt-20 pb-20">
                    <div className="container">
                        <div className="breadcrumbs">
                            <ul>
                                <li>
                                    <Link href="/">
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">Job Details</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="section pt-50 pb-100">
                    <div className="container">
                        <div className="box-image-detail">
                            <img className="bd-rd16 d-block" src={image || "assets/imgs/page/job-detail/img-job.png"} alt={title} />
                        </div>
                        <div className="content-detail">
                            <div className="row">
                                <div className="col-lg-10 col-11 m-auto">
                                    <div className="box-detail-content">
                                        <h3 className="color-brand-1 mb-10 mt-0">{title}</h3>
                                        <div className="border-bottom bd-grey-80 mb-40 pt-0" />

                                        <h4 className="color-brand-1 mb-25">Job Summary</h4>
                                        <div className="box-info-job">
                                            <div className="item-job">
                                                <div className="left-title">Skills</div>
                                                <div className="right-info">{skillsRequired.primary.join(', ')}</div>
                                            </div>
                                            <div className="item-job">
                                                <div className="left-title">Salary</div>
                                                <div className="right-info">{experience.salary}</div>
                                            </div>
                                            <div className="item-job">
                                                <div className="left-title">Location</div>
                                                <div className="right-info">{location}</div>
                                            </div>
                                        </div>
                                        <h4 className="color-brand-1">Responsibilities</h4>
                                        <ul>
                                            {responsibilities.map((responsibility, index) => (
                                                <li key={index}>{responsibility}</li>
                                            ))}
                                        </ul>
                                        <h4 className="color-brand-1">Requirements</h4>
                                        <ul>
                                            {requirements.map((requirement, index) => (
                                                <li key={index}>{requirement}</li>
                                            ))}
                                        </ul>
                                        <h4 className="color-brand-1">What's on Offer</h4>
                                        <ul>
                                            {benefits.map((benefit, index) => (
                                                <li key={index}>{benefit}</li>
                                            ))}
                                        </ul>
                                        <Link className="btn btn-brand-1 btn-apply mt-20" href="#">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              
            </Layout>
        </>
    );
};

export default JobDetails;
