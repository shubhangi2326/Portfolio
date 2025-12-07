import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/shubhangi.jpg";
import TypeWriter from "./TypeWriter";
import SocialMedia from "../SocialMedia";

function Home() {
  return (
    <section>
      {/* 'section-bg' comes from your global style.css */}
      <Container fluid className="section-bg" id="home">
        <Container className="home-content">
          
          {/* 'align-items-center' text aur image ko vertically center karega */}
          <Row className="align-items-center">
            
            {/* LEFT SIDE: TEXT CONTENT */}
            {/* 'text-start' sab kuch left align karega */}
            <Col md={7} className="home-header text-start" style={{ paddingLeft: "30px" }}>
              
              <h2 style={{ paddingBottom: 15, fontSize: "2em", fontWeight: 700 }} className="heading">
              Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h2>

              <h1 className="heading-name" style={{ fontSize: "2.5em", fontWeight: 700 }}>
                I'M <strong className="text-purple">SHUBHANGI MAHAJAN</strong>
              </h1>

              {/* TypeWriter Section */}
              <div style={{ padding: "30px 0", textAlign: "left"  }}>
                <TypeWriter />
              </div>
              
              {/* Description Text */}
              <p className="home-desc" style={{ color: "#e5e7eb", fontSize: "1.1rem", maxWidth: "550px" }}>
                A results-oriented Full Stack Developer specializing in the <b className="text-purple">MERN Stack</b> and <b className="text-purple">Core Java</b>.
              </p>

              {/* Social Icons Section */}
              <div style={{ marginTop: 40 }}>
                 <p className="text-white fw-bold mb-3">Find Me On</p>
                 {/* Flexbox to align icons left */}
                 <div className="d-flex justify-content-start">
                    <SocialMedia />
                 </div>
              </div>
            </Col>

            {/* RIGHT SIDE: IMAGE */}
            <Col md={5} style={{ paddingBottom: 20, paddingTop: 30 }} className="text-center">
              <img
                src={myImg}
                alt="home pic"
                // 'rounded-circle' image ko gol karega
                // 'img-fluid' responsive banayega
                // 'img-glow' (global css) border color dega
                className="img-fluid rounded-circle shadow-lg img-glow"
                style={{ maxHeight: "400px", width: "100%", maxWidth: "400px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;