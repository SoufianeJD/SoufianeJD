import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Soufiane_Jaida_pdf.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Personal projects"
              content={[
                "Feel free to check out my Projects Section and my Github page.",
          
              ]} />
                    <Resumecontent
              title="Web developer at Marketucan Technologies Inc 📍Montréal,Québec,Canada"
              date="November 2021 - March 2022 ⏳Full time"
              content={[
                "I participated in improving and adding new functionalities to the company's platform using the following technologies: #Angular Material UI #Ionic Framework #Html #Css #TypeScript #Csharp #MongoDB.",
              ]} />
            <Resumecontent
              title="Web developer at Vision/R4 📍Montréal,Québec,Canada"
              date="May 2021 - September 2021 ⏳Part time internship"
              content={[
                "Worked on the development of a web application using ASP.NET Core MVC / SQL Server.   (This is an application that allows employees to view their pay stubs, checks and T4 + Relevé 1 documents as well as other features).",
                
           "Worked on the development of a frontend website using ReactJS.  (This is a website that represents the different functions of the company).",
           "Fixed JavaScript bugs.",
           "Buit web pages using Html/Css/Bootstrap.",
              ]} />
                      <Resumecontent
              title="Mentor at Institut Teccart 📍Montréal,Québec,Canada"
              date="September 2020 - August 2021 ⏳Casual/On-call"
              content={[
                "Supervise and guide students in their school projects.",
                "Explain and give support for students who have difficulty understanding some concepts.",
              ]} />
                   <Resumecontent
              title="Customer service representative at Couche-Tard 📍Laval,Québec,Canada"
              date="April 2020 - Novembre 2021 ⏳Part time job"
              content={[
                "Customer service.",
                "Take payments and make sure the till balances at the end of the day.",
                "Maintain cleanliness of the store.",
                "Performing numerous tasks as needed.",        
              ]} />
<Resumecontent
              title="Production attendant at Lassonde 📍Boisbriand,Québec,Canada"
              date="May 2019 - August 2019 ⏳Part time job"
              content={[
                "Assisting during the production process and performing numerous tasks as needed.",
              ]} />
    
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Institut Teccart 📍Montréal,Québec,Canada"
              date="2019 -  2021"
              content={["This is a six-session college diploma that covers comprehensive training in Web, Desktop, Mobile application development, technical documentation and  machine learning / artificial intelligence as well as some other specific applications."]} />

<Resumecontent
              title="Université Hassan II Aïn Chock 📍Casablanca-Morocco"
              date="2017 -  2018"
              content={["The courses I followed and passed are : Introduction to economics, microeconomics 1, descriptive statistics, general accounting 1, management 1, macroeconomics 1, microeconomics2, general accounting 2, management 2, probabilities."]} />

<Resumecontent
              title="Al Farabi 2 📍Casablanca-Morocco"
              date="2014 -  2017"
              content={["General baccalaureate degree in economics and management science"]}
              
              />


          </Col>
        </Row>
  
      </Container>
    </Container>
  );
}

export default Resume;