
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import developer from "../../Assets/developer.jpg";
// import { SKILLS, TOOLS } from "../../Constants";

// function About() {
//   return (
//     <>
//       {/* Internal CSS */}
//       <style type="text/css">
//         {`
//         .about-section {
//             background-color: #0b0b13;
//             background-image: radial-gradient(at 0% 0%, #2d1b4e 0px, transparent 50%),
//                               radial-gradient(at 100% 100%, #2d1b4e 0px, transparent 50%);
//             min-height: 100vh;
//             padding: 100px 0;
//             color: #fff;
//             position: relative;
//             overflow: hidden;
//         }

//         .heading-title {
//             font-size: 2.5em;
//             font-weight: 800;
//             padding-bottom: 20px;
//         }

//         .text-purple {
//             background: linear-gradient(to right, #c084fc, #a855f7);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//         }

//         /* --- TEXT VISIBILITY FIX (About Card) --- */
//         .card {
//             background-color: transparent !important;
//             border: none !important;
//             box-shadow: none !important;
//         }
        
//         .card-body, .quote-card-view {
//             color: #ffffff !important; /* Pure White Text */
//             font-size: 1.1rem;
//             text-align: left;
//             line-height: 1.7;
//         }

//         .purple {
//             color: #c084fc !important; 
//             font-weight: 600;
//         }

//         .about-activity {
//             list-style: none !important;
//             text-align: left !important;
//             padding-left: 0 !important;
//             color: #e5e7eb !important; 
//             margin-top: 10px;
//         }

//         .blockquote-footer {
//             color: #9ca3af !important;
//         }

//         /* --- IMAGES & TOOLS --- */
//         .about-image-glow {
//             max-width: 100%;
//             border-radius: 16px;
//             border: 1px solid rgba(168, 85, 247, 0.3);
//             box-shadow: 0 0 40px rgba(168, 85, 247, 0.3);
//             transition: transform 0.3s ease;
//         }
        
//         .about-image-glow:hover {
//             transform: scale(1.02);
//             box-shadow: 0 0 60px rgba(168, 85, 247, 0.5);
//         }

//         .project-heading {
//             font-size: 2.3em;
//             font-weight: 700;
//             margin-top: 50px;
//             margin-bottom: 30px;
//             text-align: center;
//         }

//         /* --- TOOL CARD STYLING (Fixed White Text) --- */
//         .tool-card {
//             background: rgba(255, 255, 255, 0.03);
//             border: 1px solid rgba(255, 255, 255, 0.1);
//             border-radius: 12px;
//             padding: 15px 10px;
//             text-align: center;
//             transition: all 0.3s ease;
//             height: 100%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             color: #ffffff !important; /* Force White color on card */
//         }

//         .tool-card h5 { 
//             margin: 0; 
//             font-size: 1rem; 
//             font-weight: 600;
//             color: #ffffff !important; /* Force White color on text */
//         }

//         .tool-card:hover {
//             background: rgba(255, 255, 255, 0.08);
//             transform: translateY(-5px);
//             border-color: #a855f7;
//             box-shadow: 0 5px 20px -5px rgba(168, 85, 247, 0.4);
//             color: #ffffff !important;
//         }

//         .tech-icons-box { margin-bottom: 20px; }

//         @media (max-width: 768px) {
//             .heading-title { font-size: 2em; text-align: center; }
//             .about-section { padding-top: 80px; }
//             .about-img { margin-top: 30px; }
//         }
//         `}
//       </style>

//       <Container fluid className="about-section">
//         <Container>
//           <Row style={{ justifyContent: "center", padding: "10px" }} className="align-items-center">
            
//             {/* TEXT SIDE */}
//             <Col md={7}
//               style={{
//                 justifyContent: "center",
//                 paddingTop: "30px",
//                 paddingBottom: "50px",
//               }}
//             >
//               <h1 className="heading-title">
//                  <strong className="text-purple"> About Me</strong>
//               </h1>
//               <Aboutcard />
//             </Col>

//             {/* IMAGE SIDE */}
//             <Col md={5} style={{ paddingBottom: "50px" }} className="about-img text-center">
//               <img src={developer} alt="about" className="img-fluid about-image-glow" />
//             </Col>
//           </Row>

//           {/* --- SKILLS --- */}
//           <h1 className="project-heading">
//             <strong className="text-purple"> Professional Skillset </strong>
//           </h1>

//           <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//             {SKILLS.map((skill, index) => (
//               <Techstack
//                 name={skill.name}
//                 initialRating={skill.initialRating}
//                 key={index}
//               />
//             ))}
//           </Row>

//           {/* --- TOOLS --- */}
//           <h1 className="project-heading">
//             <strong className="text-purple">Tools  I use</strong>
//           </h1>
//           <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//             {TOOLS.map((tool, index) => (
//               <Col xs={6} md={3} lg={2} key={index} className="tech-icons-box">
//                 <div className="tool-card">
//                   <h5>{tool}</h5>
//                 </div>
//               </Col>
//             ))}
//           </Row>

//         </Container>
//       </Container>
//     </>
//   );
// }

// export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import developer from "../../Assets/developer.jpg";
import { SKILLS, TOOLS } from "../../Constants";

function About() {
  return (
    <Container fluid className="section-bg">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          
          {/* About Text */}
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="text-purple">Me</strong>
            </h1>
            {/* About Card text will be white due to global CSS */}
            <Aboutcard />
          </Col>

          {/* About Image */}
          <Col md={5} style={{ paddingBottom: "50px" }} className="about-img">
            <img src={developer} alt="about" className="img-fluid img-glow" style={{ borderRadius: "15px" }} />
          </Col>
        </Row>

        {/* Skills */}
        <h1 className="project-heading">
          <strong className="text-purple"> Professional Skillset </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {SKILLS.map((skill, index) => (
            <Techstack name={skill.name} initialRating={skill.initialRating} key={index} />
          ))}
        </Row>

        {/* Tools */}
        <h1 className="project-heading">
          <strong className="text-purple">Tools  I use</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {TOOLS.map((tool, index) => (
            <Col xs={6} md={2} key={index} className="tech-icons-box mb-4">
              <div className="glass-card d-flex align-items-center justify-content-center p-3">
                <h5 className="m-0 text-white">{tool}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default About;