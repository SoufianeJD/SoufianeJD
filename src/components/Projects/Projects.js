import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCardDeployed from "./ProjectCardsDeployed";
import ProjectCardDemo from "./ProjectCardsDemo";
import Particle from "../Particle";

import escaperoom from "../../Assets/Projects/escaperoom.png";
import candyshop from "../../Assets/Projects/candyshop.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import escaperoommobile from "../../Assets/Projects/escaperoommobile.png";
import sqlite from "../../Assets/Projects/sqlite.png";
import elearningthot from "../../Assets/Projects/elearningthot.png";
import employee from "../../Assets/Projects/employee.png";
import menu from "../../Assets/Projects/menu.png";
import jeuhasard from "../../Assets/Projects/jeuhasard.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="orange">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      
          <Col md={4} className="project-card">
            <ProjectCardDeployed
              imgPath={escaperoom}
              isBlog={false}
              title="Creepypastas"
              description=""
              link="https://github.com/SoufianeJD/Creepypastas"
              link2="https://www.escapethecreepypasta.com/#/"
          
  
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCardDemo
              imgPath={candyshop}
              isBlog={false}
              title="CandyShop"
              description=""
              link="https://github.com/SoufianeJD/MEAN_CandyShop"
              link2="https://www.youtube.com/watch?v=4v3pGhcZ_Xw"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCardDemo
              imgPath={elearningthot}
              isBlog={false}
              title="ElearningThot"
              description=""
              link="https://github.com/SoufianeJD/ASPMVC_ELearningThot"
              link2="https://www.youtube.com/watch?v=1PJ8cqaYD4k"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee's Paytab"
              description=""
              link="https://github.com/SoufianeJD/ASP_MVC_Employees_Infos"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce site"
              description=""
              link="https://github.com/SoufianeJD/ECommerce_PHPMVC"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={escaperoommobile}
              isBlog={false}
              title="EscapeRooms V:Mobile"
              description=""
              link="https://github.com/SoufianeJD/AndroidKotlin_EscapeRoomsApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sqlite}
              isBlog={false}
              title="SqLite'Banking"
              description=""
              link="https://github.com/SoufianeJD/AndroidJAVA_SqlLiteApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeuhasard}
              isBlog={false}
              title="JeuHasard"
              description=""
              link="https://github.com/SoufianeJD/CSharp_series_of_desktop_programmes/tree/master/JeuHasard"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={menu}
              isBlog={false}
              title="MenuRestaurant"
              description=""
              link="https://github.com/SoufianeJD/CSharp_series_of_desktop_programmes/tree/master/RestaurantOrder"
            />
          </Col>
     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;