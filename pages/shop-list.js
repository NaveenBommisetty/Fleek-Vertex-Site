import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const shopList = () => {
    return (
        <>
            <Head>
                <title>iori Shop</title>
            </Head>

            <Layout>
                <section className="section mt-30">
                    <div className="container">
                        <div className="box-banner-shop-list bg-4">
                            <div className="row align-items-center">
                                <div className="col-lg-6 text-center">
                                    <div className="box-banner-image bg-10"><img className="mw-90" src="assets/imgs/page/shop-list/banner.png" alt="iori" /></div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box-info-banner-shop-list">
                                        <h6 className="color-danger mb-10">HOT DEAL</h6>
                                        <h2 className="color-gray-800 mb-20">Leather Canvas Camera Bag Vintage</h2>
                                        <div className="d-flex align-items-center mb-30 box-price-banner">
                                            <h3 className="color-success mr-30">$318.00</h3>
                                            <h4 className="color-grey-200 mr-30">$420.00</h4>
                                            <p className="font-md color-grey-200">(In stock)</p>
                                        </div>
                                        <p className="mb-30 font-md color-grey-500">We're lively, not corporate. We have the energy and boldness of a startup and the expertise and pragmatism of a scale-up. All in one place.</p>
                                        <div className="box-quantity">
                                            <div className="form-quantity mr-10">
                                                <input className="input-quantity" type="text" defaultValue={1} /><span className="button-quantity button-up" /><span className="button-quantity button-down"> </span>
                                            </div><Link className="btn btn-brand-1 mr-10" href="#">Add To Cart</Link><Link className="btn btn-brand-1 btn-wish" href="#">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg></Link>
                                        </div>
                                        <div className="mt-60 d-flex align-item-center box-share-banner"> <strong className="font-xs-bold color-brand-1 mr-20">Share</strong>
                                            <div className="list-socials mt-0 d-inline-block"> <Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="box-sale"> <span className="color-danger font-xs-bold text-uppercase">Sale off 50%</span>
                                    <h5 className="color-brand-1 mt-5 mb-5">Best Offer This Year</h5>
                                    <p className="font-xs color-grey-500">Use discount code in checkout page.</p>
                                    <div className="mt-15"> <Link className="btn btn-right-arrow" href="#">Shop Now</Link></div>
                                    <div className="box-img-right"> <img src="assets/imgs/page/shop/sale1.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="box-sale box-sale-left"> <span className="color-success font-xs-bold text-uppercase">Tripod Colection</span>
                                    <h5 className="color-brand-1 mt-5 mb-5">For Professional</h5>
                                    <p className="font-xs color-grey-500">Use discount code in checkout page.</p>
                                    <div className="mt-15"> <Link className="btn btn-right-arrow" href="#">Shop Now</Link></div>
                                    <div className="box-img-left"> <img src="assets/imgs/page/shop/sale2.png" alt="iori" /></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <div className="box-sale"> <span className="color-info font-xs-bold text-uppercase">Hot deal</span>
                                    <h5 className="color-brand-1 mt-5 mb-5">Sale Off Digital Camera</h5>
                                    <p className="font-xs color-grey-500">Use discount code in checkout page.</p>
                                    <div className="mt-15"> <Link className="btn btn-right-arrow" href="#">Shop Now</Link></div>
                                    <div className="box-img-right"> <img src="assets/imgs/page/shop/sale3.png" alt="iori" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Latest Products</h2>
                            </div>
                        </div>
                        <div className="mt-30 mb-60">
                            <ul className="list-buttons list-buttons-round">
                                <li> <Link className="active" href="#" data-type="all">Digital Cameras</Link></li>
                                <li> <Link href="#" data-type="featured">Mirrorless Camera</Link></li>
                                <li> <Link href="#" data-type="company">Camera Flashes</Link></li>
                                <li> <Link href="#" data-type="product-news">Travel Camera</Link></li>
                                <li> <Link href="#" data-type="customer-stories">Instant Camera</Link></li>
                                <li> <Link href="#" data-type="guides">Accessories</Link></li>
                            </ul>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp1.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Sony DSCH300/B Digital Camera (Black)</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp2.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Sony DSCH300/B Digital Camera (Black)</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp3.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Sony DSCH300/B Digital Camera (Black)</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp4.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Sony DSCH300/B Digital Camera (Black)</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp5.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Sony DSCH300/B Digital Camera (Black)</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp6.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Sony DSCH300/B Digital Camera (Black)</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp7.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Sony DSCH300/B Digital Camera (Black)</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp8.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Sony DSCH300/B Digital Camera (Black)</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="card-product card-product-list">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp6.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Ricoh GR III Digital Compact Camera, 24mp</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
                                        <ul className="list-dots mt-15">
                                            <li className="font-xs">Fe 28-70Mm F/3.5-5.6 Oss Lens</li>
                                            <li className="font-xs">Np-Fw50 Lithium-Ion Rechargeable Battery</li>
                                            <li className="font-xs">Multi-Interface Shoe Cover</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="card-product card-product-list">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp19.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Ricoh GR III Digital Compact Camera, 24mp</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
                                        <ul className="list-dots mt-15">
                                            <li className="font-xs">Fe 28-70Mm F/3.5-5.6 Oss Lens</li>
                                            <li className="font-xs">Np-Fw50 Lithium-Ion Rechargeable Battery</li>
                                            <li className="font-xs">Multi-Interface Shoe Cover</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp11.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Sony DSCH300/B Digital Camera (Black)</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp12.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Sony DSCH300/B Digital Camera (Black)</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp13.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Sony DSCH300/B Digital Camera (Black)</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp14.png" alt="iori" /></Link></div>
                                    <div className="card-info"><Link href="product-detail">
                                        <h6 className="color-grey-900 mb-10">Sony DSCH300/B Digital Camera (Black)</h6></Link>
                                        <div className="d-flex align-items-center mb-20">
                                            <div className="rating"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star-gray.svg" alt="iori" /><span className="color-grey-200 font-xs ml-10 d-inline-block align-middle">(84 rates)</span></div>
                                            <div className="price"><span className="text-price">$22.51</span></div>
                                        </div>
                                        <p className="color-grey-300 font-xs">Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-30">
                            <nav className="box-pagination">
                                <ul className="pagination">
                                    <li className="page-item"><Link className="page-link page-prev" href="#" /></li>
                                    <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link active" href="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">5</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">6</Link></li>
                                    <li className="page-item"><Link className="page-link page-next" href="#" /></li>
                                </ul>
                            </nav>
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

export default shopList;