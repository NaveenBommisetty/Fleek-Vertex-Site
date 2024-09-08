import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';

const shopGrid = () => {
    return (
        <>
            <Head>
                <title>iori Shop</title>
            </Head>

            <Layout>
                <section className="section bg-7 box-banner-shop-grid">
                    <div className="container">
                        <div className="banner-shop-grid"> <span className="font-xl-bold color-grey-300 text-uppercase">camera collection</span>
                            <h2 className="color-brand-1 mt-15 mb-60 font-bold-800">Ready to capture every <br className="d-none d-lg-block" />wonderful moment</h2>
                            <ul className="list-categories">
                                <li> <Link className="btn btn-white-circle active" href="#">Digital Cameras</Link></li>
                                <li> <Link className="btn btn-white-circle" href="#">Mirrorless Camera</Link></li>
                                <li> <Link className="btn btn-white-circle" href="#">Camera Flashes</Link></li>
                                <li> <Link className="btn btn-white-circle" href="#">Travel Camera</Link></li>
                                <li> <Link className="btn btn-white-circle" href="#">Instant Camera</Link></li>
                                <li> <Link className="btn btn-white-circle" href="#">Accessories</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="section mt-50">
                    <div className="container">
                        <div className="row align-items-start align-items-md-center">
                            <div className="col-lg-3 col-md-2 col-sm-3 col-3 pr-0"><Link className="filter-link btn-grid" href="shop-grid"> </Link><Link className="filter-link btn-list" href="shop-list"> </Link></div>
                            <div className="col-lg-9 col-md-10 col-sm-9 col-9 text-end">
                                <div className="d-inline-block">
                                    <div className="d-flex align-items-center box-filter-text"><span className="text-showing font-md color-grey-500 d-inline-block mr-40">Showing 1–16 of 17 results </span>
                                        <div className="box-sortby d-flex align-items-center"><span className="font-md color-grey-200 d-inline-block mr-10">Sort by:</span>
                                            <div className="dropdown dropdown-sort border-1-right">
                                                <button className="btn dropdown-toggle font-sm color-gray-900 font-medium" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false">Latest products</button>
                                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort" style={{ margin: 0 }}>
                                                    <li><Link className="dropdown-item active" href="#">Latest products</Link></li>
                                                    <li><Link className="dropdown-item" href="#">Oldest products</Link></li>
                                                    <li><Link className="dropdown-item" href="#">Comments products </Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        </div>
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
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp9.png" alt="iori" /></Link></div>
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
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp10.png" alt="iori" /></Link></div>
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
                            <div className="col-lg-3 col-md-6">
                                <div className="card-product">
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp15.png" alt="iori" /></Link></div>
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
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp16.png" alt="iori" /></Link></div>
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
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp17.png" alt="iori" /></Link></div>
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
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp18.png" alt="iori" /></Link></div>
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
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp19.png" alt="iori" /></Link></div>
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
                                    <div className="card-image"><Link href="product-detail"><img src="assets/imgs/page/shop/sp20.png" alt="iori" /></Link></div>
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

export default shopGrid;