import React from 'react';
import { Link } from 'react-router-dom';

const Footertech = () => {
    return (
        <div className='foot_card'>
            <div className="card-group">
                <div className="card">
                    <div className="card-body mission text-center text-white">
                        <h5 className="card-title">MISION</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card ">
                    <div className="card-body mission text-center text-white">
                        <h5 className="card-title">VISION</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>

                    </div>
                </div>
                <div className="card bg-primary text-center text-white">
                    <div className="card-body mission">
                        <h5 className="card-title">QUICK LINKS</h5>
                        <div className="card-text">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 " >
                                <li className="nav-item ">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-white" href="#">Courses</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-white" href="#">Blog</a>
                                </li>

                                <li className="nav-item ">
                                    <a className="nav-link text-white" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className='row'>

                <div className='col-md-12 h-80 text-left text-white  bg-dark'>
                    <div class="d-flex flex-column align-items-center">
                        <h6 class="mb-4">Follow us</h6>
                        <ul className='social'>
                            <li><span class="social-icon social-facebook"><i class="fa fa-facebook"></i></span></li>
                            <li><span class="social-icon social-google"><i class="fa fa-google"></i></span></li>
                            <li><span class="social-icon social-linkedin"><i class="fa fa-linkedin"></i></span></li>
                            <li><span class="social-icon social-instagram"><i class="fa fa-instagram"></i></span></li>
                            <li><span class="social-icon social-twitter"><i class="fa fa-twitter"></i></span></li>
                        </ul>
                        <p>&copy; 2022, DSFE Capstone Project</p>

                    </div></div>

            </div>
        </div>
    );
};



export default Footertech;
