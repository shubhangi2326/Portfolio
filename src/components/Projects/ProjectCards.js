import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Clickable Image */}
      <a href={props.link} target="_blank" rel="noreferrer">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          className="card-img-top"
        />
      </a>

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        
        {/* Technology Text */}
        <div className="tech-text">
          {props.technologyUsed}
        </div>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button
          variant="primary"
          href={props.link}
          target="_blank"
          className="view-btn"
        >
          <BiLinkExternal /> &nbsp;
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;