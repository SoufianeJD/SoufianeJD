import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="orange">Soufiane Jaida </span>
           
            <br />I am a full-stack web developer and a tech lover in general. I describe myself as someone who loves to be challenged. Able to grasp new concepts and melt in quickly with the work environment.
            <br />
            <br />
            Apart from coding 👨🏽‍💻, here's some other activities that I love to do !
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Soccer ⚽️
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading 📚
            </li>
          <li className="about-activity">
              <ImPointRight /> Working out 🏋🏻
            </li>
      
            <li className="about-activity">
              <ImPointRight />Music/Audio mixing 🎼
            </li> 
            <li className="about-activity">
              <ImPointRight /> Video Games 🎮
            </li>
          </ul>
          <p style={{ marginBlockEnd: 0, color: "rgb(255 165 0)" }}>
            " Self-belief and hard work will always earn you success ! "
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;