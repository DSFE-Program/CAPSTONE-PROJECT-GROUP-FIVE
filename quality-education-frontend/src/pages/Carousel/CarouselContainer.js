import React from 'react';
import { Carousel } from "react-bootstrap"
import image1 from './images/imgp1.jpg'
import image2 from './images/imgp2.jpg'
import image3 from './images/imgp3.jpg'
import { Link } from "react-router-dom";

export default function CarouselContainer() {
    return <div>
        {/* <Carousel fade={true} pause={false}>  */}
        <Carousel pause={false} controls={false}>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block"
                    style={{height: "100vh", width: "100%", overflow: "hidden"}}
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>TAKE THE BEST COURSES AT YOUR COMFORT</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block" 
                    style={{height: "100vh", width: "100%", overflow: "hidden"}}
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>WE OFFER THE BEST DIGITAL COURSES FOR KIDS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block"
                    style={{height: "100vh", width: "100%", overflow: "hidden"}}
                    src={image3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>LEARN A NEW SKILL TODAY AT THE SNAP OF YOUR FINGERS</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Link to="/login">
        <button className='get' style={{position: "absolute", backgroundColor: "blue", top: "180%", bottom: "auto", left: "10%", color: "white", padding: "10px"}}>Get Started</button></Link>
        <Link to="/#">
        <button className='learn' style={{position: "absolute", backgroundColor: "transparent", top: "180%", bottom: "auto", left: "18%", padding: "10px", color: "white"}}>Learn more about us</button></Link>
    </div>;
}