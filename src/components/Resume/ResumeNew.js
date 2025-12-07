// // import React, { useState, useEffect } from "react";
// // import { Container, Row } from "react-bootstrap";
// // import Button from "react-bootstrap/Button";
// // import { AiOutlineDownload } from "react-icons/ai";
// // import { Document, Page, pdfjs } from "react-pdf";
// // import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// // import pdf from "../../Assets/resume.pdf";

// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// // function ResumeNew() {
// //   const [width, setWidth] = useState(1200);

// //   useEffect(() => {
// //     setWidth(window.innerWidth);
// //   }, []);

// //   return (
// //     <div>
// //       <Container fluid className="resume-section">
        
// //         {/* DOWNLOAD BUTTON */}
// //         <Row style={{ justifyContent: "center", position: "relative", marginTop: "50px", marginBottom: "50px" }}>
// //           <Button
// //             variant="primary"
// //             href={pdf}
// //             target="_blank"
// //             style={{ maxWidth: "250px" }}
// //           >
// //             <AiOutlineDownload />
// //             &nbsp;Download CV
// //           </Button>
// //         </Row>

// //         {/* PDF VIEWER */}
// //         <Row className="resume">
// //           <Document file={pdf} className="d-flex flex-column align-items-center justify-content-center">
            
// //             {/* PAGE 1 */}
// //             {/* Yahan se mb-5 hata diya hai aur shadow-lg lagaya hai taaki page alag dikhe */}
// //             <div className="shadow-lg" style={{ marginBottom: "10px" }}> 
// //                 <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
// //             </div>

// //             {/* PAGE 2 */}
// //             <div className="shadow-lg">
// //                 <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
// //             </div>

// //           </Document>
// //         </Row>

       

// //       </Container>
// //     </div>
// //   );
// // }

// // export default ResumeNew;

// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// import pdf from "../../Assets/resume.pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function ResumeNew() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       {/* Internal CSS for Unified Theme */}
//       <style type="text/css">
//         {`
//         .resume-section {
//             background-color: #0b0b13;
//             background-image: radial-gradient(at 0% 0%, #2d1b4e 0px, transparent 50%),
//                               radial-gradient(at 100% 100%, #2d1b4e 0px, transparent 50%);
//             min-height: 100vh;
//             padding-top: 120px; /* Navbar ke liye space */
//             padding-bottom: 50px;
//             color: #fff;
//             position: relative;
//             overflow: hidden;
//         }

//         /* --- STYLED BUTTON (Purple Gradient) --- */
//         .resume-btn {
//             background: linear-gradient(135deg, #a855f7 0%, #7e22ce 100%) !important;
//             border: none !important;
//             padding: 12px 30px !important;
//             font-size: 1.1rem !important;
//             font-weight: 700 !important;
//             border-radius: 8px !important;
//             color: white !important;
//             box-shadow: 0 4px 15px rgba(126, 34, 206, 0.4);
//             transition: all 0.3s ease;
//             max-width: 250px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//         }

//         .resume-btn:hover {
//             transform: translateY(-2px);
//             box-shadow: 0 8px 25px rgba(126, 34, 206, 0.6);
//             background: linear-gradient(135deg, #c084fc 0%, #9333ea 100%) !important;
//         }

//         /* --- PDF PAGE STYLING --- */
//         .pdf-container {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//         }

//         .pdf-page-wrapper {
//             margin-bottom: 30px;
//             box-shadow: 0 0 30px rgba(168, 85, 247, 0.25); /* Purple Glow around paper */
//             border: 1px solid rgba(255, 255, 255, 0.1);
//             border-radius: 4px; /* Slight rounded corners */
//             overflow: hidden;
//         }

//         /* Adjust canvas inside react-pdf to handle border radius properly */
//         .react-pdf__Page canvas {
//             display: block;
//             width: 100% !important;
//             height: auto !important;
//         }
//         `}
//       </style>

//       <Container fluid className="resume-section">
        
//         {/* DOWNLOAD BUTTON */}
//         <Row style={{ justifyContent: "center", position: "relative", marginBottom: "50px" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             className="resume-btn"
//           >
//             <AiOutlineDownload style={{ marginRight: "10px", fontSize: "1.2em" }} />
//             Download CV
//           </Button>
//         </Row>

//         {/* PDF VIEWER */}
//         <Row className="resume">
//           <Document 
//             file={pdf} 
//             className="d-flex flex-column align-items-center justify-content-center"
//           >
            
//             {/* PAGE 1 */}
//             <div className="pdf-page-wrapper"> 
//                 <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//             </div>

//             {/* PAGE 2 */}
//             <div className="pdf-page-wrapper">
//                 <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
//             </div>

//           </Document>
//         </Row>

      

//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="section-bg">
      <Container>
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "50px" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume justify-content-center">
          <Document file={pdf} className="d-flex flex-column align-items-center">
            <div className="mb-4" style={{ boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}> 
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </div>
            <div style={{ boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}>
                <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
            </div>
          </Document>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;