import React, { useEffect, useState, useLayoutEffect } from "react";
import "./landingPage.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
//import Button from "react-bootstrap/esm/Button";
//import { Container } from "react-bootstrap/lib/Tab";
// import AssemblyLogo from "../Image/AssemblyLogo.png";
import Button from "react-bootstrap/esm/Button";

function useWindowSize() {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return width;
}

function LandingPage() {
  const width = useWindowSize();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    if(width < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [width])

  return (
    <div className="landing-hero">
      <div className="left-side">
        <div class="title-wrapper">
          <h1 class="sweet-title">
            <span>Assembly</span>
            <hr className="title-line"></hr>
            <span >Connect With Friends</span>
          </h1>
        </div>
        <div className="btns-wrapper"></div>
        <div className="btns-inner-container">
          <Link to="/signUpPage">
            <Button style={{ fontSize: 24 }} variant="dark" className="btns">
              Sign Up
            </Button>
          </Link>
          <Link to="/LoginPage">
            <Button style={{ fontSize: 24 }} variant="dark" className="btns">
              Login
            </Button>
          </Link>
        </div>
      </div>
      <div className="right-side">
        { !isMobile && <div className="Carousel-wrapper">
          <Carousel className="Carousel" fade>
            <Carousel.Item className="Carousel">
              <img
                className="d-block w-100 carousel-img"
                src="images/assembly-logo.png"
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item className="Carousel">
              <img
                className="d-block w-100 carousel-img"
                src="https://shoor.com.ph/wp-content/uploads/2020/11/Shoor-Featured-Image-Gaming-Guide-2-min.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            {/* image 1 ^  */}

            <Carousel.Item className="Carousel">
              <img
                className="d-block w-100 carousel-img"
                src="https://www.theloadout.com/wp-content/sites/theloadout/2022/08/best-ps5-coop-games-it-takes-two.jpeg"
                alt="Second slide"
              />
            </Carousel.Item>
            {/* image 2 ^  */}
            <Carousel.Item className="Carousel">
              <img
                className="d-block w-100 carousel-img"
                src="https://www.hellotech.com/blog/wp-content/uploads/2020/04/best-games-to-play-with-friends-online.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>}

        <div className="status-box">
          <div className="playing">
            <div className="status-text">
              <div style={{ fontSize: 30 }}>Playing now</div>
              <div
                style={{ height: 20, width: 20 }}
                className="status-circle green"
              ></div>
            </div>
            <div style={{ fontSize: 35 }}>3,534,646</div>
          </div>

          <div className="online">
            <div className="status-text">
              <div style={{ fontSize: 30 }}>Online now</div>
              <div
                style={{ height: 20, width: 20 }}
                className="status-circle blue"
              ></div>
            </div>
            <div style={{ fontSize: 35 }}>7,049,155</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
