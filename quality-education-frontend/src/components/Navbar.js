// import { Link, useNavigate } from "react-router-dom";
// const Navbar = () => {
//     const isAuth = localStorage.getItem('auth')
//     const navigate = useNavigate();
//     const handleLogout = () => {
//         localStorage.clear('auth')
//         navigate("/")
//     }
    
//     return (
//         <nav className="navbar">
//             <h1>TECSPIK</h1>
//             <Link to="/home" style={{textDecoration: "none", color: "black"}}>HOME</Link>
//             <Link to="/products" style={{textDecoration: "none", color: "black"}}>COURSE</Link>
//             <Link to="/about" style={{textDecoration: "none", color: "black"}}>ABOUT</Link>
//             { isAuth && 
//                 <div> 
//                     <Link to="/" onClick={ handleLogout }>Logout</Link>
//                 </div>
//             }
//             { !isAuth && <Link to="/" style={{textDecoration: "none", color: "black"}}>Login</Link>}
//         </nav>
//     );
// }
 
// export default Navbar; bg-primary

import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar-fixed'>
            <nav className="navbar navbar-expand-lg navbar-light  py-3 shadow-lg" style={{backgroundColor: "#164794"}}>
                <div className="container">
                    <a className="navbar-brand fw-light fs-4 bg-warning" style={{color: "#ffffff", fontFamily: "Russio One", }} href="/">  TECSPIK</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 " >
                        <li className="nav-item ">
                                <a className="nav-link active text-white" aria-current="page" href="">Home</a>
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
                        <div className='buttons '>
                            <a href="/login" className='btn btn-outline-light bg-warning'>
                                <i className='fa fa-sign-in me-1 '></i>Sign in</a>

                            <a href="/register" className='btn btn-outline-light ms-2 bg-warning'>
                                <i className='fa fa-user-plus me-1'></i>Sign up</a>

                           
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
