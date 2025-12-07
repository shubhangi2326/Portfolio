import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubhangi Mahajan </span>
            from <span className="purple"> Indore, MP, India.</span>
            <br />
            I am a <span className="purple">Full Stack Developer</span> with 6 months of hands-on experience
            at Aasmo Digital Pvt Ltd.
            <br />
            I have completed my MCA from LNCT, Bhopal (CGPA: 8.4).
            <br />
            <br />
            I am proficient in building dynamic web applications using <b className="purple">React.js, Node.js, Express.js,</b> and <b className="purple">MongoDB</b>. 
            I also possess a strong command of <b className="purple">Core Java</b> and OOP principles.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with passion, build with purpose!"{" "}
          </p>
          <footer className="blockquote-footer">Shubhangi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;