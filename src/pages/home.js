import React from 'react';

import bimg from '../img/mael-balland-wcBFtctph_M-unsplash.jpg'
import img1 from '../img/Apple-logo.jpg'
import img2 from '../img/Huawei-logo.jpg'
import img3 from '../img/Lenovo-logo.jpg'
import img4 from '../img/LG-Logo-1995.jpg'
import img5 from '../img/Nokia-logo.jpg'
import img6 from '../img/OnePlus-logo-768x432.jpg'
import img7 from '../img/OPPO-logo.jpg'
import img8 from '../img/Samsung-logo.jpg'
import img9 from '../img/Vivo-logo.jpg'
import img10 from '../img/Xiaomi-logo.jpg'

import iDesign from '../img/example-13.svg'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className="home_page">
                <div className="fit">
                    <div className="banner">
                        <div className="banner_text p-5">
                            <h6>Your No.1 location tracking company</h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            </p>
                            <div className="banner-btn d-flex mb-2">
                                <button className="banner-btn1 mr-2 my-2"> <Link className="text-white" to="/track">Track your smartphone</Link> </button>
                                <button className="banner-btn2 mr-2 my-2"> About us </button>
                            </div>
                        </div>
                    </div>

                    <div className="design pb-5 mb-2 text-center">
                        <img src={iDesign} alt="design by ira" />
                    </div>

                    <div className="info-box py-4">
                        <div className="col-85">
                            <h5 className="info-h5">For the past 10years, we have dominated the market by offering the best tracking services to clients and as it is our core mandate to offer the best!</h5>

                            <div className="row my-4">
                                <div className="col-lg-4 col-md-4 py-2 text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="#4eaf3a" className="bi bi-patch-check-fill mb-3" viewBox="0 0 16 16">
                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg>
                                    <h6>Reliable</h6>
                                </div>

                                <div className="col-lg-4 col-md-4 py-2 text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="#f7494d" className="bi bi-shield-lock-fill mb-3" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
                                    </svg>
                                    <h6>Secured</h6>
                                </div>

                                <div className="col-lg-4 col-md-4 py-2 text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="#0b5ed7" className="bi bi-award-fill mb-3" viewBox="0 0 16 16">
                                        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                                    </svg>
                                    <h6>Best</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services text-center py-5 my-3">
                        <h6 className="services-h6">Lorem ipsum dolor sit amet consectetur adipisicing elit</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                        </p>

                        <h6 className="py-4">Some of our Services include:</h6>

                        <div className="service-list">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card text-left my-3">
                                        <img className="card-img-top" src={bimg} alt="" />
                                        <div className="card-body">
                                            <h4 className="card-title">Smartphone Tracking</h4>
                                        <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                                numquam blanditiis harum quisquam
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card text-left my-3">
                                        <img className="card-img-top" src={bimg} alt="" />
                                        <div className="card-body">
                                            <h4 className="card-title">Remote Equipment Tracking</h4>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                                numquam blanditiis harum quisquam
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card text-left my-3">
                                        <img className="card-img-top" src={bimg} alt="" />
                                        <div className="card-body">
                                            <h4 className="card-title">Military Tracking</h4>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                                numquam blanditiis harum quisquam
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="brands bg-white py-5">
                        <div className="col-85">
                            <h5 className="brand-h5">Our tracking services cover all major sartphone brands</h5>

                            <div className="brand-img">
                                <div className="row">
                                    <div className="col-sm-6 col-xs-6 col-lg-2">
                                        <img src={img1} alt="brand-img" className="img-fluid mb-4" />
                                    </div>
                                    <div className="col-sm-6 col-xs-6 col-lg-2">
                                        <img src={img2} alt="brand-img" className="img-fluid mb-4" />
                                    </div>
                                    <div className="col-sm-6 col-lg-2">
                                        <img src={img3} alt="brand-img" className="img-fluid mb-4" />
                                    </div>
                                    <div className="col-sm-6 col-lg-2">
                                        <img src={img4} alt="brand-img" className="img-fluid mb-4" />
                                    </div>
                                    <div className="col-sm-6 col-lg-2">
                                        <img src={img5} alt="brand-img" className="img-fluid mb-4" />
                                    </div>
                                    <div className="col-sm-6 col-lg-2">
                                        <img src={img6} alt="brand-img" className="img-fluid mb-4" />
                                    </div>
                                    <div className="col-sm-6 col-lg-2">
                                        <img src={img7} alt="brand-img" className="img-fluid mb-4" />
                                    </div>
                                    <div className="col-sm-6 col-lg-2">
                                        <img src={img8} alt="brand-img" className="img-fluid mb-4" />
                                    </div>
                                    <div className="col-sm-6 col-lg-2">
                                        <img src={img9} alt="brand-img" className="img-fluid mb-4" />
                                    </div>
                                    <div className="col-sm-6 col-lg-2">
                                        <img src={img10} alt="brand-img" className="img-fluid mb-4" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
