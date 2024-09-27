import React from 'react'
import { useState } from 'react';

const Diagnose = () => {
    const [deviceConnected, setDeviceConnected] = useState(false);

    const connectUSB = async (e) => {
        e.preventDefault();
        try {
            // Request a USB device
            const port = await navigator.serial.requestPort();

            // Wait for the port to open
            await port.open({ baudRate: 9600 });
            setDeviceConnected(true);
            console.log(port.writable);

            // Close the port when done
            await port.close();
        } catch (err) {
            console.error('Error connecting to USB device:', err);
            setDeviceConnected(false);
        }
    };

    console.log(deviceConnected);
  return (
    <>
    {/* <!-- Booking Start --> */}
    <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 py-5">
                    <div className="py-5">
                        <h1 className="text-white mb-4">Certified and Award Winning Car Repair Service Provider</h1>
                        <p className="text-white mb-0">Our certified and award-winning car repair service provider offers top-notch automotive care with a commitment to excellence. With a team of skilled technicians and state-of-the-art equipment, we ensure reliable repairs and maintenance. Trust us for quality service, transparency, and customer satisfaction every time.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                        <h1 className="text-white mb-4">Connect USB and Diagnose</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" onClick={connectUSB}>Connect Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Booking End --> */}

        {/* <!-- Service Start --> */}
    <div className="container-xxl service py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h3>Device Connected: {deviceConnected === true ? <span className='text-success'>True</span> : <span className='text-danger'>Fales</span>}</h3>
                <h6 className="text-primary text-uppercase">// Our Services //</h6>
                <h1 className="mb-5">Explore Our Services</h1>
            </div>
            <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="col-lg-4">
                    <div className="nav w-100 nav-pills me-4">
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                            <i className="fa fa-car-side fa-2x me-3"></i>
                            <h4 className="m-0">Diagnostic Test</h4>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                            <i className="fa fa-car fa-2x me-3"></i>
                            <h4 className="m-0">Engine Servicing</h4>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                            <i className="fa fa-cog fa-2x me-3"></i>
                            <h4 className="m-0">Tires Replacement</h4>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                            <i className="fa fa-oil-can fa-2x me-3"></i>
                            <h4 className="m-0">Oil Changing</h4>
                        </button>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="tab-content w-100">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src="/src/img/service-1.jpg"
                                            style={{objectFit: "cover"}} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                    <p className="mb-4">With 15 years of expertise in auto servicing, we provide top-notch maintenance and repair for all vehicle types. Our skilled technicians ensure reliability, safety, and peak performance for your car. Trust us for quality service honed by years of hands-on experience and customer satisfaction.</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="http://localhost:5000/" className="btn btn-primary py-3 px-5 mt-3">Back to Home<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src="/src/img/service-2.jpg"
                                            style={{objectFit: "cover"}} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                    <p className="mb-4">With 15 years of expertise in auto servicing, we provide top-notch maintenance and repair for all vehicle types. Our skilled technicians ensure reliability, safety, and peak performance for your car. Trust us for quality service honed by years of hands-on experience and customer satisfaction.</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="http://localhost:5000/" className="btn btn-primary py-3 px-5 mt-3">Back to Home<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src="/src/img/service-3.jpg"
                                            style={{objectFit: "cover"}} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                    <p className="mb-4">With 15 years of expertise in auto servicing, we provide top-notch maintenance and repair for all vehicle types. Our skilled technicians ensure reliability, safety, and peak performance for your car. Trust us for quality service honed by years of hands-on experience and customer satisfaction.</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="http://localhost:5000/" className="btn btn-primary py-3 px-5 mt-3">Back to Home<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-4">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src="/src/img/service-4.jpg"
                                            style={{objectFit: "cover"}} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">15 Years Of Experience In Auto Servicing</h3>
                                    <p className="mb-4">With 15 years of expertise in auto servicing, we provide top-notch maintenance and repair for all vehicle types. Our skilled technicians ensure reliability, safety, and peak performance for your car. Trust us for quality service honed by years of hands-on experience and customer satisfaction.</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                    <a href="http://localhost:5000/" className="btn btn-primary py-3 px-5 mt-3">Back to Home<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}
    </>
  )
}

export default Diagnose