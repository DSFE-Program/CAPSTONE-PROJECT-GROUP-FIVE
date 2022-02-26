import React from "react";
import { Link } from "react-router-dom";
import CarouselContainer from './Carousel/CarouselContainer';
//import backgroundImage from './Carousel/images/bg.jpg'

const LandingPage = () => {
  return (
    <div> 
      <div>
      <div className="shop" style={{backgroundImage: "url(/bg.jpg)", backgroundSize: "cover", backgroundColor: "darkgoldenrod"}}></div>
      <div className="sho">Tecspik Welcomes You<br/></div>
       </div>
      <CarouselContainer />

      <div className="getting" style={{backgroundColor: "#164794", color: "white"}}>
        <h2>How Tecspik Works</h2>
        <p>
        Each student at Techspik has a personal, customized path that is specifically built for their goals, skill level and pace. Regardless of where they are located around the world, our students receive quality education from licensed teachers who are always available through online channels. We’re here to provide the flexible learning experience you need
        </p>

        <Link
          to="/login"
          className="getting-bn" 
        >
          <button type="button">
          Get Started
          </button>
        </Link>
      </div>
    </div>
      );
    };

export default LandingPage;