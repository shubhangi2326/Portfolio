import React from "react";
import { Col } from "react-bootstrap";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Techstack(props) {
  return (
    <Col xs={6} md={3} className="tech-icons-box">
      <div className="tech-card">
        <h4 className="skill-name">{props.name}</h4>
        <Rating
          readonly
          start={0}
          stop={5}
          initialRating={props.initialRating}
          emptySymbol={<AiOutlineStar color="gray" size={20} />}
          fullSymbol={<AiFillStar color="#c770f0" size={20} />} // 
        />
      </div>
    </Col>
  );
}

export default Techstack;