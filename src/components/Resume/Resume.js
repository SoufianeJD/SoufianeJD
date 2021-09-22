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
              title="Web developer at Vision/R4 📍Montréal,Québec,Canada"
              date="May 2021 - July 2021 ⏳Part time internship"
              content={[
                "Worked on the development of a frontend website using REACT",
           "Worked on the development of a frontend website using HTML/CSS/JS",
           "Worked on the development of an ASP MVC C# web application  SQL SERVER",
              ]} />
                   <Resumecontent
              title="Pastry chef at La Brioche + 📍Montréal,Québec,Canada"
              date="April 2020 - August 2021 ⏳Part time job"
              content={[
                "Creates pastries, desserts, and other baked goods.",
                "Customer service.",
                "Take payments and make sure the till balances at the end of the day.",
                "Weigh and price fresh food items.",
                "Pack and wrap purchases.",
                "Maintain cleanliness of the store.",        
              ]} />
<Resumecontent
              title="Production attendant at Lassonde 📍Boisbriand,Québec,Canada"
              date="May 2019 - August 2019 ⏳Part time job"
              content={[
                "Assisting during the production process and performing numerous tasks as needed.",
  
                    
              ]} />

<Resumecontent
              title="Telemarketer/Customer advisor 📍Casablanca-Morocco"
              date="Octobre 2017 - May 2018 ⏳Part time job"
              content={[
                "Marketing products.",
                "Answer phone calls and assist customers who request information.",
                "Establish a relationship of trust with customers.",
                    
              ]} />
    
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Institut Teccart 📍Montréal,Québec,Canada"
              date="2019 -  2021"
              content={["This is a six-session college diploma that covers comprehensive training in web, desktop, mobile, and artificial intelligence (data analysis) programming as well as other specific applications."]} />

<Resumecontent
              title="Université Hassan II Aïn Chock 📍Casablanca-Morocco"
              date="2017 -  2018"
              content={["The courses I followed and passed are : Introduction to economics, microeconomics 1, descriptive statistics, general accounting 1, management 1, macroeconomics 1, microeconomics2, general accounting 2, management 2, probabilities."]} />

<Resumecontent
              title="Al Farabi 2 📍Casablanca-Morocco"
              date="2014 -  2017"
              content={[""]}
              
              />


          </Col>
        </Row>
  
      </Container>
    </Container>
  );
}

export default Resume;