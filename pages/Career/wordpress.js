import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';


const Wordpress = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', resume: null });
  const [submitMessage, setSubmitMessage] = useState('');

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitMessage('');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsLoading(false);
      setSubmitMessage('Application submitted successfully!');
      setFormData({ name: '', email: '', resume: null });
      setIsFormVisible(false); // Optionally hide the form after submission
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>WordPress Developer</title>
      </Head>

      <Layout>
        <div className="section breadcrumbs-path pt-20 pb-20">
          <div className="container">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <svg
                      className="w-6 h-6 icon-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#">WordPress Developer</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section className="section pt-50 pb-100">
          <div className="container">
            <div className="box-image-detail">
              <img
                className="bd-rd16 d-block"
                src="/assets/imgs/page/job-detail/img-job.png"
              />
            </div>
            <div className="content-detail">
              <div className="row">
                <div className="col-lg-10 col-11 m-auto">
                  <div className="box-detail-content">
                    <h3 className="color-brand-1 mb-10 mt-0">WordPress Developer</h3>
                    <div className="border-bottom bd-grey-80 mb-40 pt-0" />

                    <h4 className="color-brand-1 mb-25">Job Summary</h4>
                    <div className="box-info-job">
                      <div className="item-job">
                        <div className="left-title">Skills</div>
                        <div className="right-info">WordPress,PHP,HTML,CSS</div>
                      </div>
                      <div className="item-job">
                        <div className="left-title">Salary</div>
                        <div className="right-info">3.5 LPA</div>
                      </div>
                      <div className="item-job">
                        <div className="left-title">Location</div>
                        <div className="right-info">Bengaluru</div>
                      </div>
                    </div>

                    <h4 className="color-brand-1">Responsibilities</h4>
                    <ul>
                      <li>Develop and maintain WordPress websites</li>
                      <li>Customize themes and plugins</li>
                    </ul>

                    <h4 className="color-brand-1">Requirements</h4>
                    <ul>
                      <li>Strong knowledge of WordPress and PHP</li>
                      <li>Experience with theme customization</li>
                    </ul>

                    <h4 className="color-brand-1">What's on Offer</h4>
                    <ul>
                      <li>Health insurance</li>
                      <li>Remote working opportunities</li>
                    </ul>

                    <button
                      className="btn btn-brand-1 btn-apply mt-20"
                      onClick={toggleForm}
                    >
                      Apply Now
                    </button>

                    {isFormVisible && (
                      <div className="mt-4">
                        <h4 className="color-brand-1">Application Form</h4>
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="resume" className="form-label">Resume</label>
                            <input
                              type="file"
                              className="form-control"
                              id="resume"
                              name="resume"
                              onChange={handleFileChange}
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
                            disabled={isLoading} // Disable the button when loading
                          >
                            {isLoading ? 'Submitting...' : 'Submit'}
                          </button>
                        </form>

                        {submitMessage && (
                          <div className="alert alert-success mt-3">
                            {submitMessage}
                          </div>
                        )}
                      </div>
                    )}
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

export default Wordpress;
