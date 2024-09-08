import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ThumbSlider from '../components/slider/ThumbSlider';
import ModalVideo from 'react-modal-video';

const productDetails = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Head>
                <title>Product Details</title>
            </Head>

            <Layout>
                <div className="section mt-35">
                    <div className="container">
                        <div className="breadcrumbs">
                            <ul>
                                <li> <Link href="#">
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>Home</Link></li>
                                <li> <Link href="#">Products</Link></li>
                                <li> <Link href="#">Nikon D3500 DX-Format DSLR Two Lens Kit with AF-P DX</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-30">
                                <h3 className="color-gray-800 mb-20">Nikon D3500 DX-Format DSLR Two Lens Kit with AF-P DX</h3>
                                <div className="d-flex align-items-center mb-30 box-price-banner">
                                    <h3 className="color-success mr-30">$318.00</h3>
                                    <h4 className="color-grey-200 mr-30">$420.00</h4>
                                    <p className="font-md color-grey-200">(In stock)</p>
                                </div>
                                <div className="mb-50">
                                    <ul className="list-dots">
                                        <li className="font-xs">Class leading image quality, ISO range, image processing and metering equivalent to the award winning D500</li>
                                        <li className="font-xs">Large 3.2” 922k dot, tilting Lcd screen with touch functionality. Temperature: 0 °c to 40 °c (32 °f to 104 °f) humidity: 85 percentage or less (no condensation)</li>
                                        <li className="font-xs">51 point AF system with 15 cross type sensors and group area AF paired with up to 8 fps continuous shooting capability</li>
                                        <li className="font-xs">Built in Wi-Fi and Bluetooth for easy connectivity through the Nikon snap bridge app</li>
                                    </ul>
                                </div>
                                <div className="box-quantity">
                                    <div className="form-quantity mr-10">
                                        <input className="input-quantity" type="text" defaultValue={1} /><span className="button-quantity button-up" /><span className="button-quantity button-down"> </span>
                                    </div><Link className="btn btn-brand-1 mr-10" href="#">Add To Cart</Link><Link className="btn btn-brand-1 btn-wish" href="#">
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg></Link>
                                </div>
                            </div>
                            <div className="col-lg-7 text-center mb-30">
                                <ThumbSlider />
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom bd-grey-80 mt-50" />
                </section>
                <section className="section mt-70">
                    <div className="container">
                        <div className="row align-items-center mb-40">
                            <div className="col-lg-1" />
                            <div className="col-lg-5 mb-30"><img src="assets/imgs/page/product/collection1.png" alt="iori" /></div>
                            <div className="col-lg-5 mb-30">
                                <div className="box-info-collection pr-0">
                                    <h3 className="color-brand-1 mb-25">Beautiful Pictures For All</h3>
                                    <p className="font-md color-grey-500 mb-10">You don't need to be a photographer to know a great photo when you see one. And you don't need to be a photographer to take a great photo—you just need the D3500. It's as easy to use as a point-and-shoot, but it takes beautiful DSLR photos and videos that get noticed. It feels outstanding in your hands, sturdy and balanced with controls where you want them</p>
                                    <div className="box-button mt-30"> <Link className="btn btn-brand-1 hover-up" href="#">View Collections</Link><Link className="btn btn-default font-sm-bold hover-up" href="#">
                                        Learn More
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-1" />
                            <div className="col-lg-5 mb-30">
                                <div className="box-info-collection pl-0">
                                    <h3 className="color-brand-1 mb-25">Easy. Portable. Amazing</h3>
                                    <p className="font-md color-grey-500 mb-10">Take more memorable images. The photos you take with the D3500 capture more than the moment—they capture the feeling of the moment, a feeling that can be shared immediately with your friends and family and then relived for a lifetime.</p>
                                    <div className="mt-20"> </div>
                                    <ul className="list-ticks">
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Less thinking. More shooting
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Picture after amazing picture
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>The day tripper
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Colors that pop in any light
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Newbies welcome
                                        </li>
                                        <li>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Fast, accurate focusing
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 mb-30"><img src="assets/imgs/page/product/collection2.png" alt="iori" /></div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 pt-50">
                    <div className="container">
                        <div className="bg-brand-1 box-cover-video">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6"><img className="d-block" src="assets/imgs/page/product/img-video.png" alt="iori" /></div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="box-info-video"><span className="btn btn-tag">Twice the fun</span>
                                        <h3 className="color-brand-2 mt-10 mb-15">Your camera's bridge to your world</h3>
                                        <p className="font-md color-white">The D3500 Two Lens Kit includes two matched lenses to help you cover all the angles. The AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR lens is great for portraits, landscapes, videos and other wide perspective shots. The AF-P DX NIKKOR 70-300mm f/4.5-6.3G ED is a versatile telephoto zoom lens that's great for sports, concerts, nature and more.</p>
                                        <div className="box-button-video"><a className="btn btn-play font-sm-bold popup-youtube hover-up" onClick={() => setOpen(true)}>Play Video</a></div>
                                    </div>
                                </div>
                            </div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row mt-50">
                            <div className="col-xl-4 col-lg-3">
                                <h3 className="color-brand-1 mb-20">See why we are <br className="d-none d-lg-block" />trusted the world over</h3>
                            </div>
                            <div className="col-xl-8 col-lg-9">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-lg-end text-center mb-20">
                                        <h2 className="color-brand-1">469k</h2>
                                        <p className="font-lg color-brand-1">Social followers</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-lg-end text-center mb-20">
                                        <h2 className="color-brand-1">25k+</h2>
                                        <p className="font-lg color-brand-1">Happy Clients</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-lg-end text-center mb-20">
                                        <h2 className="color-brand-1">756+</h2>
                                        <p className="font-lg color-brand-1">Project Done</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-lg-end text-center mb-20">
                                        <h2 className="color-brand-1">100+</h2>
                                        <p className="font-lg color-brand-1">Global branch</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom mt-70" />
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <h2 className="color-brand-1 mb-60">Product information</h2>
                        <h6 className="font-2xl color-brand-1 mb-15">Item details</h6>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="table-responsive">
                                    <table className="table table-product-info">
                                        <tbody><tr>
                                            <th>Model Name</th>
                                            <td>Z fc DX-format Mirrorless</td>
                                        </tr>
                                            <tr>
                                                <th>Brand</th>
                                                <td>Nikon</td>
                                            </tr>
                                            <tr>
                                                <th>Model Number</th>
                                                <td>1675</td>
                                            </tr>
                                            <tr>
                                                <th>Color</th>
                                                <td>Silver / Black / Gold</td>
                                            </tr>
                                            <tr>
                                                <th>Included Components</th>
                                                <td>Camera Body &amp; Lens</td>
                                            </tr>
                                            <tr>
                                                <th>Age Range (Description)</th>
                                                <td>Adult</td>
                                            </tr>
                                            <tr>
                                                <th>Processor Description</th>
                                                <td>Nikon Expeed 6</td>
                                            </tr>
                                            <tr>
                                                <th>Operating Humidity</th>
                                                <td>Less than 85%</td>
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-info-product">
                                    <ul className="list-dots mt-5">
                                        <li className="font-md">Superb image quality: 20.9 MP DX CMOS sensor paired with EXPEED 6 processing engine</li>
                                        <li className="font-md">Vlogger Ready: 4K UHD, Flip out Vari-angle LCD, full time AF with eye detection, built-in stereo microphone, external microphone jack, live stream and web conference compatible</li>
                                        <li className="font-md">Heritage Design: Classic tactile design with analog controls for shutter speed, ISO and exposure compensation</li>
                                        <li className="font-md">Send images to your phone: Always connected using the free Nikon SnapBridge app and a compatible smart device. Intuitive: Easy access to Auto Mode, quick settings and the Menu help guide.</li>
                                        <li className="font-md">Lens Compatibility: Compatible with NIKKOR Z lenses as well as F Mount NIKKOR lenses using FTZ Mount Adapter (sold separately).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-30">
                            <div className="col-lg-6 mb-30">
                                <h6 className="font-2xl color-brand-1 mb-15">Imaging</h6>
                                <div className="table-responsive">
                                    <table className="table table-product-info">
                                        <tbody><tr>
                                            <th>Auto Focus Technology</th>
                                            <td>Phase Detection</td>
                                        </tr>
                                            <tr>
                                                <th>Product information</th>
                                                <td>1.50:1, 16:9</td>
                                            </tr>
                                            <tr>
                                                <th>Display Resolution Maximum</th>
                                                <td>Approx. 1040 k-dot</td>
                                            </tr>
                                            <tr>
                                                <th>Photo Sensor Size</th>
                                                <td>APS-C</td>
                                            </tr>
                                            <tr>
                                                <th>Photo Sensor Technology</th>
                                                <td>CMOS</td>
                                            </tr>
                                            <tr>
                                                <th>Effective Still Resolution</th>
                                                <td>20.9 MP</td>
                                            </tr>
                                            <tr>
                                                <th>Maximum Webcam Image Resolution</th>
                                                <td>16 MP</td>
                                            </tr>
                                            <tr>
                                                <th>Frame Rate</th>
                                                <td>Up to 120 fps</td>
                                            </tr>
                                            <tr>
                                                <th>White balance settings</th>
                                                <td>Auto</td>
                                            </tr>
                                            <tr>
                                                <th>Self Timer Duration</th>
                                                <td>20 seconds</td>
                                            </tr>
                                            <tr>
                                                <th>JPEG quality level</th>
                                                <td>Basic, Fine, Normal</td>
                                            </tr>
                                            <tr>
                                                <th>Camera Flash</th>
                                                <td>Hotshoe</td>
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <h6 className="font-2xl color-brand-1 mb-15">Exposure</h6>
                                <div className="table-responsive">
                                    <table className="table table-product-info">
                                        <tbody><tr>
                                            <th>Expanded ISO Max / Min</th>
                                            <td>204800 /100 </td>
                                        </tr>
                                            <tr>
                                                <th>Shooting Modes</th>
                                                <td>1/4000 seconds</td>
                                            </tr>
                                            <tr>
                                                <th>Max Shutter Speed</th>
                                                <td>900 seconds</td>
                                            </tr>
                                            <tr>
                                                <th>Min Shutter Speed</th>
                                                <td>Manual, Automatic</td>
                                            </tr>
                                            <tr>
                                                <th>Exposure Control Type</th>
                                                <td>Evaluative</td>
                                            </tr>
                                            <tr>
                                                <th>Metering Description</th>
                                                <td>Automatic</td>
                                            </tr>
                                        </tbody></table>
                                </div>
                                <h6 className="font-2xl color-brand-1 mb-15 mt-25">Lens</h6>
                                <div className="table-responsive">
                                    <table className="table table-product-info">
                                        <tbody><tr>
                                            <th>Lens Type, Aperture Modes</th>
                                            <td>Wide Angle / F3.5-F6.3</td>
                                        </tr>
                                            <tr>
                                                <th>Optical Zoom</th>
                                                <td>3 x</td>
                                            </tr>
                                            <tr>
                                                <th>Focus Type</th>
                                                <td>Auto Focus, Manual Focus</td>
                                            </tr>
                                            <tr>
                                                <th>Photo Filter Thread Size</th>
                                                <td>46 Millimeters</td>
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 mb-40 pt-55 pb-55 bg-grey-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/product/delivery.svg" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">Fast Delivery</h6></Link>
                                        <p className="font-xs color-grey-500">We come together wherever we are – across time zones, regions, offices and screens. You will receive support from your teammates anytime and anywhere.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/product/secure.svg" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">Secure payment</h6></Link>
                                        <p className="font-xs color-grey-500">Our teams reflect the rich diversity of our world, with equitable access to opportunity for everyone. No matter where you come from</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/product/support.svg" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">Support 24/7</h6></Link>
                                        <p className="font-xs color-grey-500">We believe in your freedom to work when and how you work best, to help us all thrive. Only freedom and independent work can bring out the best in you.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image"><Link href="#">
                                        <div className="box-image"><img src="assets/imgs/page/product/return.svg" alt="iori" /></div></Link></div>
                                    <div className="card-info"><Link href="#">
                                        <h6 className="color-brand-1 mb-10">Return &amp; Refund</h6></Link>
                                        <p className="font-xs color-grey-500">Knowing that there is real value to be gained from helping people to simplify whatever it is that they do and bring.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="box-newsletter box-newsletter-2">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-7 m-auto text-center"><span className="font-lg color-brand-1">Newsletter</span>
                                    <h2 className="color-brand-1 mb-15 mt-5">Subcribe our newsletter</h2>
                                    <p className="font-md color-grey-500">Do not miss the latest information from us about the trending in the market. By clicking the button, you are agreeing with our Term &amp; Conditions</p>
                                    <div className="form-newsletter mt-30">
                                        <form action="#">
                                            <input type="text" placeholder="Enter you mail .." />
                                            <button className="btn btn-submit-newsletter" type="submit">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </button>
                                        </form>
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

export default productDetails;