import React from "react";
import "./landingPage.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
//import Button from "react-bootstrap/esm/Button";
//import { Container } from "react-bootstrap/lib/Tab";
// import AssemblyLogo from "../Image/AssemblyLogo.png";
import Button from "react-bootstrap/esm/Button";
import Navy from "../components/Navbar";
function LandingPage() {
  return (
    <>
      <Navy />
      <div className="Carousel-wrapper" >
        <Carousel className="Carousel" fade>
          <Carousel.Item className="Carousel">
            <img
              className="d-block w-100"
              src="https://shoor.com.ph/wp-content/uploads/2020/11/Shoor-Featured-Image-Gaming-Guide-2-min.jpg"
              alt="First slide"
            />
            <Carousel.Caption  >
              <h3>Connect with friends</h3>
              <p >Improve your gaming experience</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* image 1 ^  */}

          <Carousel.Item className="Carousel">
        <img
          className="d-block w-100"
          src="https://www.theloadout.com/wp-content/sites/theloadout/2022/08/best-ps5-coop-games-it-takes-two.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Play Co-Op Games</h3>
          <p>Play Co-Op Games With A Loved One Or A Friend</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* image 2 ^  */}
      <Carousel.Item className="Carousel">
        <img
          className="d-block w-100"
          src="https://www.hellotech.com/blog/wp-content/uploads/2020/04/best-games-to-play-with-friends-online.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
        </Carousel>
        
      </div>

      <div className="btns-wrapper">
      <Link to="/signUpPage">
        <Button variant="light"className="btns">Sign Up</Button>
 </Link>
 <Link to="/LoginPage">
        <Button variant="light"className="btns">Login</Button>
        </Link>  
      </div>
      <div className="status-box">
        <div className="playing">
          <div className="status-text">
            <div>Playing now</div>
            <div className="status-circle green"></div>
          </div>
          <div>3,534,646</div>
        </div>

        <div className="online">
          <div className="status-text">
            <div>Online now</div>
            <div className="status-circle blue"></div>
          </div>
          <div>7,049,155</div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;