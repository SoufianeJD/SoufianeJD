import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Mail from "./Mail";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="orange"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a full-stack web developer.<br/> Always seeking to put my skills in use and learn more about the domain.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="orange"> Html</b>, <b className="orange">Css</b>,  <b className="orange">Javascript</b> and <b className="orange">C# </b>
              </i>
        
              <br />
              <br />
              My field of Interest's are building 
              <i>
                <b className="orange">Web</b> and <b className="orange">Desktop</b> applications.
              </i>
              <br />
              <br />
               I apply my passion mostly with <b className="orange"> Node JS</b> and<b className="orange"> React</b> or<b className="orange"> ASP.NET MVC</b>
              <i>
              </i>
          
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TO REACH ME</h1>
            <p>
              Feel free to <span className="orange">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SoufianeJD"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soufiane-jaida/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100002278879305"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
           
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soufianejaida/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <p>
              Or send me an <span className="orange">Email </span>
            </p>
          </Col>
        </Row>
        <Mail />
      </Container>
    </Container>
  );
}
export default Home2;