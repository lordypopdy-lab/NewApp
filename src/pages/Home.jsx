import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const Home = () => {
const [Now, SetNow] = useState("");

useEffect(()=>{
    const Today = ()=>{
        const N = new Date();
        SetNow(N.getFullYear());
    }
    Today();
},[])


  return (
   <>
   {/* <!-- Topbar Start --> */}
   <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>123 Street, Keffi, Nasarawa State</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-3">
                    <small className="far fa-clock text-primary me-2"></small>
                    <small>{ Now }</small>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-phone-alt text-primary me-2"></small>
                    <small>+234 9154 50209</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-sm-square bg-white text-primary me-0" href=""><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}


    {/* <!-- Navbar Start --> */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="/home" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><i className="fa fa-car me-3"></i>CarServ</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="/home" className="nav-item nav-link active">Home</a>
                <a href="/Diagnose" className="nav-item nav-link">Diagnose</a>
            </div>
            <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
    {/* <!-- Navbar End --> */}


    {/* <!-- Carousel Start --> */}
    <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="/src/img/carousel-bg-1.jpg" alt="Image" />
                    <div className="carousel-caption d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center justify-content-center justify-content-lg-start">
                                <div className="col-10 col-lg-7 text-center text-lg-start">
                                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Car Servicing //</h6>
                                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Diagnostic Test</h1>
                                    <a href="/Diagnose" className="btn btn-primary py-3 px-5 animated slideInDown">Start Now<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                    <img className="img-fluid" src="/src/img/carousel-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="/src/img/carousel-bg-2.jpg" alt="Image" />
                    <div className="carousel-caption d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center justify-content-center justify-content-lg-start">
                                <div className="col-10 col-lg-7 text-center text-lg-start">
                                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Car Servicing //</h6>
                                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">With Advance Diagnostic Feautures</h1>
                                    <a href="/Diagnose" className="btn btn-primary py-3 px-5 animated slideInDown">Start Now<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                    <img className="img-fluid" src="/src/img/carousel-2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/* <!-- Carousel End --> */}


    {/* <!-- Service Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Quality Servicing</h5>
                            <p>Expert quality servicing for reliable, efficient, and timely solutions every time.</p>
                            <a className="text-secondary border-bottom" href="/Diagnose">Diagnose Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="d-flex bg-light py-5 px-4">
                        <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Expert Workers</h5>
                            <p>Skilled professionals delivering top-notch solutions for your business needs.</p>
                            <a className="text-secondary border-bottom" href="/Diagnose">Diagnose Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Modern Equipment</h5>
                            <p>Cutting-edge modern equipment for efficiency, innovation, and high-performance solutions.</p>
                            <a className="text-secondary border-bottom" href="/Diagnose">Diagnose Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}


    {/* <!-- About Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 pt-4" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                        <img className="position-absolute img-fluid w-100 h-100" src="/src/img/about.jpg" style={{objectFit: "cover"}} alt="" />
                        <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{background: "rgba(0, 0, 0, .08)"}}>
                            <h1 className="display-4 text-white mb-0">15 <span className="fs-4">Years</span></h1>
                            <h4 className="text-white">Experience</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h6 className="text-primary text-uppercase">// About Us //</h6>
                    <h1 className="mb-4"><span className="text-primary">CarServ</span> Is The Best Place For Your Auto Care</h1>
                    <p className="mb-4">CarServ is your trusted destination for top-quality auto care. From routine maintenance to expert repairs, we ensure your vehicle runs smoothly, safely, and efficiently. Experience the best with CarServ</p>
                    <div className="row g-4 mb-3 pb-3">
                        <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex">
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: "45px", height: "45px"}}>
                                    <span className="fw-bold text-secondary">01</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Professional & Expert</h6>
                                    <span>Top-tier experts delivering unparalleled professional services and solutions.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex">
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: "45px", height: "45px"}}>
                                    <span className="fw-bold text-secondary">02</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Quality Servicing Center</h6>
                                    <span>Reliable, efficient, expert care for all your service needs.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                            <div className="d-flex">
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: "45px", height: "45px"}}>
                                    <span className="fw-bold text-secondary">03</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Awards Winning Workers</h6>
                                    <span>Recognized for excellence and dedication, our award-winning team.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="/Diagnose" className="btn btn-primary py-3 px-5">Diagnose Now<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}
   </>
  )
}

export default Home