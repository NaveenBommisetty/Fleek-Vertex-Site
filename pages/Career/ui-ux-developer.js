import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import jobsData from './jobs.json'; // Assuming jobs.json has the "jobs" array
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify'; // Make sure you have this import for toasts
import 'react-toastify/dist/ReactToastify.css';

const UiUxdev = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    resume: '' 
  });

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] }); // Store the file object
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToastId = toast.loading('Sending your message...');

    // Dismiss loading toast after 3 seconds automatically
    setTimeout(() => {
      toast.dismiss(loadingToastId);
    }, 1000);
    
    const formDataToSend = new FormData(); // Create a new FormData object
    for (const key in formData) {
      formDataToSend.append(key, formData[key]); // Append each key-value pair
    }

    try {
      const response = await fetch('/api/uiux-email', {
        method: 'POST',
        body: formDataToSend, // Send FormData instead of JSON
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      toast.dismiss(loadingToastId);
      toast.success('Your message has been sent successfully!');  // Success toast
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error('There was an error sending your message. Please try again.');  // Error toast
    }
  };

  return (
    <>
      <Head>
        <title>Ui/Ux Developer</title>
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
                  <Link href="#">UI-UX Developer</Link>
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
                    <h3 className="color-brand-1 mb-10 mt-0">Ui/Ux Developer</h3>
                    <div className="border-bottom bd-grey-80 mb-40 pt-0" />

                    <h4 className="color-brand-1 mb-25">Job Summary</h4>
                    <div className="box-info-job">
                      <div className="item-job">
                        <div className="left-title">Skills</div>
                        <div className="right-info">Figma, Adobe XD, Usability Testing</div>
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
                      <li>Create user-friendly designs</li>
                      <li>Conduct usability testing</li>
                    </ul>

                    <h4 className="color-brand-1">Requirements</h4>
                    <ul>
                      <li>Experience with design tools</li>
                      <li>Strong portfolio of design work</li>
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
                      <div className="col-lg-12 mt-20">
                        <div className="box-form-contact">
                          <form onSubmit={handleSubmit}>
                            <div className="row">
                              <div className="col-lg-6 col-sm-6">
                                <div className="form-group mb-25">
                                  <input name="name" className="form-control icon-user" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                                </div>
                              </div>
                              <div className="col-lg-6 col-sm-6">
                                <div className="form-group mb-25">
                                  <input name="email" className="form-control icon-email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                </div>
                              </div>
                              <div className="col-lg-6 col-sm-6">
                                <div className="form-group mb-25">
                                  <input name="phone" className="form-control icon-phone" type="text" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                                </div>
                              </div>
                              <div className="col-lg-6 col-sm-6">
                                <div className="form-group mb-25">
                                  <input name="subject" className="form-control" type="text" placeholder="subject" value={formData.subject} onChange={handleChange} required />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group mb-25">
                                <label htmlFor="resume" className="form-label">Upload Resume</label>
                                  <input
                                    type="file"
                                    className="form-control"
                                    id="resume"
                                    name="resume"
                                    placeholder="resume"
                                    onChange={handleFileChange} // Use the file change handler
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group mb-25">
                                  <textarea name="message" className="form-control textarea-control" placeholder="Write something" value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6 col-9">
                                <div className="form-group">
                                  <button className="btn btn-brand-1-full font-sm" type="submit">Send message
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer/>
        </section>
        
      </Layout>
      
    </>
  );
};

export default UiUxdev;
