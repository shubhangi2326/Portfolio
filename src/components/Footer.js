// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import SocialMedia from "./SocialMedia";

// function Footer() {
//   let date = new Date();
//   let year = date.getFullYear();

//   return (
//     <Container fluid className="footer-section">
//       {/* Internal CSS for Footer Styling */}
//       <style type="text/css">
//         {`
//         .footer-section {
//             background-color: #0b0b13; /* Matches Dark Theme */
//             padding: 30px 0;
//             color: #fff;
//             position: relative;
//             bottom: 0;
//             width: 100%;
//             border-top: 1px solid rgba(255, 255, 255, 0.1); /* Subtle top border */
//             z-index: 999;
//         }

//         .footer-text {
//             font-size: 1rem;
//             font-weight: 500;
//             margin: 0;
//             color: #e5e7eb; /* Light Gray */
//         }

//         .highlight-name {
//             color: #c084fc; /* Purple accent */
//             font-weight: 700;
//         }

//         /* Alignments */
//         .footer-col {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//         }

//         /* Social Media Icons Container inside Footer */
//         .footer-social-icons {
//             display: flex;
//             justify-content: center;
//             gap: 15px;
//         }

//         /* Mobile Responsive Adjustments */
//         @media (max-width: 767px) {
//             .footer-col {
//                 margin-bottom: 15px;
//             }
//         }
//         `}
//       </style>

//       <Container>
//         <Row>
          
//           {/* Developer Name */}
//           <Col md="4" className="footer-col">
//             <h3 className="footer-text">
//               Developed by <span className="highlight-name">Shubhangi Mahajan</span>
//             </h3>
//           </Col>

//           {/* Copyright Year */}
//           <Col md="4" className="footer-col">
//             <h3 className="footer-text">
//               Copyright © {year} <span className="highlight-name">SM</span>
//             </h3>
//           </Col>

//           {/* Social Icons */}
//           <Col md="4" className="footer-col">
//             <div className="footer-social-icons">
//               <SocialMedia />
//             </div>
//           </Col>

//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "./SocialMedia";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by <span className="purple">Shubhangi Mahajan</span></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} <span className="purple">SM</span></h3>
        </Col>
        <Col md="4" className="footer-body">
          <SocialMedia />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;