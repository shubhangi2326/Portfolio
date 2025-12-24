// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/shubhangi.jpg";
// import TypeWriter from "./TypeWriter";
// import SocialMedia from "../SocialMedia";

// function Home() {
//   return (
//     <section>
//       <Container fluid className="section-bg" id="home">
//         <Container className="home-content">
//           <Row className="align-items-center">
            
//             <Col md={7} className="home-header text-start ps-lg-5">
              
//               <h2 style={{ marginBottom: 10, fontSize: "2.2em", fontWeight: 700 }} className="heading">
//                 Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
//               </h2>

//               <h1 className="heading-name" style={{ fontSize: "2.6em", fontWeight: 700, margin: 0 }}>
//                 I'M <strong className="text-purple">SHUBHANGI MAHAJAN</strong>
//               </h1>

//               {/* TypeWriter - Padding fix kiya */}
//               <div style={{ padding: "15px 0", textAlign: "left" }}>
//                 <TypeWriter />
//               </div>
              
//               {/* Description - Alignment fix */}
//               <p className="home-desc" style={{ color: "#adb5bd", fontSize: "1.1rem", maxWidth: "600px", margin: "0 0 30px 0" }}>
//                 A results-oriented Full Stack Developer specializing in the <b className="text-purple">MERN Stack</b> and <b className="text-purple">Core Java</b>.
//               </p>

//               {/* Social Icons - Alignment fix */}
//               <div className="mt-4">
//                  <p className="text-white fw-bold mb-3">Find Me On</p>
//                  <div className="d-flex justify-content-start">
//                     <SocialMedia />
//                  </div>
//               </div>
//             </Col>

//             {/* RIGHT SIDE: IMAGE */}
//             <Col md={5} className="text-center myAvtar">
//               <img
//                 src={myImg}
//                 alt="home pic"
//                 className="img-fluid rounded-circle shadow-lg img-glow"
//                 style={{ maxHeight: "380px", width: "100%", maxWidth: "380px", objectFit: "cover" }}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//     </section>
//   );
// }

// export default Home;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/shubhangi.jpg";
import TypeWriter from "./TypeWriter";
import SocialMedia from "../SocialMedia";

function Home() {
  return (
    <section>
      <Container fluid className="section-bg" id="home">
        <Container className="home-content">
          <Row className="align-items-center">
            
            <Col md={7} className="home-header text-start ps-lg-5">
              
              <h2 className="heading mb-2" style={{ fontWeight: 700 }}>
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h2>

              <h1 className="heading-name mb-3" style={{ fontWeight: 700 }}>
                I'M <strong className="text-purple">SHUBHANGI MAHAJAN</strong>
              </h1>

              <div className="py-2 py-md-3 text-start mb-2">
                <TypeWriter />
              </div>
              
              <p className="home-desc mt-3 mb-4 text-secondary" style={{ fontSize: "1.1rem", maxWidth: "600px" }}>
                A results-oriented Full Stack Developer specializing in the <b className="text-purple">MERN Stack</b> and <b className="text-purple">Core Java</b>.
              </p>

              <div className="mt-4">
                 <p className="text-white fw-bold mb-3">Find Me On</p>
                 <div className="d-flex justify-content-start">
                    <SocialMedia />
                 </div>
              </div>
            </Col>

            <Col md={5} className="text-center myAvtar mt-md-0">
              <img
                src={myImg}
                alt="home pic"
                className="img-fluid rounded-circle shadow-lg img-glow"
                style={{ maxHeight: "380px", width: "100%", maxWidth: "380px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;