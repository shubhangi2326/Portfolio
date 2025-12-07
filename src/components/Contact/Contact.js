
// import React, { useState, useRef } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import emailjs from "@emailjs/browser";
// import { AiOutlineMail, AiOutlinePhone, AiOutlineSend } from "react-icons/ai";
// import { BiMap } from "react-icons/bi";

// function Contact() {
//   const form = useRef();
//   const [done, setDone] = useState(false);
//   const [notDone, setNotDone] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

   
//     emailjs
//       .sendForm(
//         "service_62drygi",   
//         "template_ox4ansn",   
//         form.current,
//         "O_V5J_Ud6psgYOSNQ"     
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true);
//           setNotDone(false);
//           setLoading(false);
//           e.target.reset();
//           setTimeout(() => setDone(false), 5000);
//         },
//         (error) => {
//           console.log(error.text);
//           setNotDone(true);
//           setDone(false);
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <>
//       {/* Internal CSS Styles - Advanced Styling without external file */}
//       <style type="text/css">
//         {`
//         .contact-section {
//             background-color: #0b0b13;
//             background-image: radial-gradient(at 0% 0%, #2d1b4e 0px, transparent 50%),
//                               radial-gradient(at 100% 100%, #2d1b4e 0px, transparent 50%);
//             min-height: 100vh;
//             padding: 80px 0;
//             color: #fff;
//             position: relative;
//             overflow: hidden;
//         }

//         .heading-title {
//             font-size: 3rem;
//             font-weight: 800;
//             margin-bottom: 20px;
//         }

//         .text-purple {
//             background: linear-gradient(to right, #c084fc, #a855f7);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//         }

//         .contact-desc {
//             color: #9ca3af;
//             font-size: 1.1rem;
//             margin-bottom: 40px;
//             line-height: 1.6;
//         }

//         /* Info Cards on Left */
//         .info-card {
//             display: flex;
//             align-items: center;
//             background: rgba(255, 255, 255, 0.03);
//             border: 1px solid rgba(255, 255, 255, 0.1);
//             padding: 20px;
//             border-radius: 16px;
//             margin-bottom: 20px;
//             transition: all 0.3s ease;
//         }

//         .info-card:hover {
//             transform: translateY(-5px);
//             background: rgba(255, 255, 255, 0.08);
//             border-color: #a855f7;
//             box-shadow: 0 10px 30px -10px rgba(168, 85, 247, 0.3);
//         }

//         .icon-box {
//             width: 50px;
//             height: 50px;
//             background: rgba(168, 85, 247, 0.2);
//             border-radius: 50%;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             margin-right: 20px;
//             color: #c084fc;
//             font-size: 1.5rem;
//         }

//         /* Form Container Right */
//         .glass-form {
//             background: rgba(20, 20, 35, 0.6);
//             backdrop-filter: blur(20px);
//             border: 1px solid rgba(255, 255, 255, 0.1);
//             padding: 40px;
//             border-radius: 24px;
//             box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
//         }

//         .form-label {
//             color: #e5e7eb;
//             font-size: 0.9rem;
//             font-weight: 600;
//             margin-bottom: 8px;
//         }

//         .styled-input {
//             background: rgba(0, 0, 0, 0.4) !important;
//             border: 1px solid rgba(255, 255, 255, 0.1) !important;
//             color: #fff !important;
//             border-radius: 12px;
//             padding: 14px;
//             transition: all 0.3s ease;
//         }

//         .styled-input:focus {
//             background: rgba(0, 0, 0, 0.6) !important;
//             border-color: #a855f7 !important;
//             box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.1) !important;
//         }

//         .glow-btn {
//             background: linear-gradient(135deg, #a855f7 0%, #7e22ce 100%);
//             border: none;
//             padding: 15px;
//             font-size: 1rem;
//             font-weight: 700;
//             border-radius: 12px;
//             letter-spacing: 0.5px;
//             transition: all 0.3s ease;
//             box-shadow: 0 4px 15px rgba(126, 34, 206, 0.4);
//         }

//         .glow-btn:hover {
//             transform: translateY(-2px);
//             box-shadow: 0 8px 25px rgba(126, 34, 206, 0.6);
//             background: linear-gradient(135deg, #c084fc 0%, #9333ea 100%);
//         }
        
//         .glow-btn:disabled {
//             opacity: 0.7;
//             cursor: not-allowed;
//         }

//         /* Success/Error Messages */
//         .msg-box {
//             margin-top: 15px;
//             padding: 10px;
//             border-radius: 8px;
//             text-align: center;
//             font-weight: 600;
//         }
//         .msg-success { background: rgba(16, 185, 129, 0.2); color: #34d399; }
//         .msg-error { background: rgba(239, 68, 68, 0.2); color: #f87171; }

//         @media (max-width: 768px) {
//             .heading-title { font-size: 2.2rem; }
//             .glass-form { padding: 25px; margin-top: 40px; }
//             .contact-section { padding-top: 40px; }
//         }
//         `}
//       </style>

//       <section className="contact-section">
//         <Container>
//           <Row className="justify-content-center align-items-center">
            
//             {/* LEFT SIDE: INFO */}
//             <Col lg={5} md={12}>
//               <div className="content-left">
//                 <h1 className="heading-title">
//                   Let's Work <br />
//                   <span className="text-purple">Together</span>
//                 </h1>
//                 <p className="contact-desc">
//                   Have a project in mind or just want to say hi? 
//                   I am always open to discussing new projects, creative ideas 
//                   or opportunities to be part of your visions.
//                 </p>

//                 <div className="info-wrapper">
//                   <div className="info-card">
//                     <div className="icon-box"><AiOutlinePhone /></div>
//                     <div>
//                       <div style={{fontSize: '0.85rem', color: '#9ca3af'}}>Phone</div>
//                       <div style={{fontWeight: '500'}}>+91 9755993551</div>
//                     </div>
//                   </div>

//                   <div className="info-card">
//                     <div className="icon-box"><AiOutlineMail /></div>
//                     <div>
//                       <div style={{fontSize: '0.85rem', color: '#9ca3af'}}>Email</div>
//                       <div style={{fontWeight: '500'}}>shubhangimahajan2311@gmail.com</div>
//                     </div>
//                   </div>

//                   <div className="info-card">
//                     <div className="icon-box"><BiMap /></div>
//                     <div>
//                       <div style={{fontSize: '0.85rem', color: '#9ca3af'}}>Location</div>
//                       <div style={{fontWeight: '500'}}>Vijay Nagar, Indore, MP</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Col>

//             {/* RIGHT SIDE: FORM */}
//             <Col lg={6} md={12} className="offset-lg-1">
//               <div className="glass-form">
//                 <h3 className="mb-4" style={{fontWeight: '700'}}>Send a Message 🚀</h3>
                
//                 <Form ref={form} onSubmit={sendEmail}>
//                   <Form.Group className="mb-4">
//                     <Form.Label className="form-label">Full Name</Form.Label>
//                     <Form.Control 
//                       type="text" 
//                       name="user_name" 
//                       placeholder="John Doe" 
//                       required 
//                       className="styled-input"
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-4">
//                     <Form.Label className="form-label">Email Address</Form.Label>
//                     <Form.Control 
//                       type="email" 
//                       name="user_email" 
//                       placeholder="name@example.com" 
//                       required 
//                       className="styled-input"
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-4">
//                     <Form.Label className="form-label">Your Message</Form.Label>
//                     <Form.Control 
//                       as="textarea" 
//                       name="message" 
//                       rows={4} 
//                       placeholder="Tell me about your project..." 
//                       required 
//                       className="styled-input"
//                     />
//                   </Form.Group>

//                   <Button variant="primary" type="submit" className="w-100 glow-btn" disabled={loading}>
//                     {loading ? "Sending..." : "Send Message"}
//                   </Button>

//                   {done && <div className="msg-box msg-success">Message sent successfully!</div>}
//                   {notDone && <div className="msg-box msg-error">Failed to send, please check your connection.</div>}
//                 </Form>
//               </div>
//             </Col>

//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// }

// export default Contact;

import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiMap } from "react-icons/bi";

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    // Add your emailJS logic here
    setTimeout(() => { setDone(true); setLoading(false); }, 2000); // Dummy for UI
  };

  return (
    <Container fluid className="section-bg">
      <Container>
        <Row className="justify-content-center align-items-center ">
          
          {/* Info Side */}
          <Col lg={5} md={12} className="mb-5">
            <h1 className="heading-name">
              Let's Work <span className="text-purple">Together</span>
            </h1>
            <p className="text-white mt-4">
              I am always open to discussing new projects, creative ideas or opportunities.
            </p>

            <div className="mt-5">
              <div className="d-flex align-items-center mb-4 glass-card p-3">
                <AiOutlinePhone className="purple fs-2 me-3" />
                <div>
                  <div className="text-gray-500 small">Phone</div>
                  <div className="fw-bold text-white">+91 9755993551</div>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-4 glass-card p-3">
                <AiOutlineMail className="purple fs-2 me-3" />
                <div>
                  <div className="text-gray-500 small">Email</div>
                  <div className="fw-bold text-white">shubhangimahajan2311@gmail.com</div>
                </div>
              </div>

              <div className="d-flex align-items-center glass-card p-3">
                <BiMap className="purple fs-2 me-3" />
                <div>
                  <div className="text-gray-500 small">Location</div>
                  <div className="fw-bold text-white">Vijay Nagar, Indore, MP</div>
                </div>
              </div>
            </div>
          </Col>

          {/* Form Side */}
          <Col lg={6} md={12} className="offset-lg-1">
            <div className="glass-card p-4 p-md-5">
              <h3 className="mb-4 text-white">Send a Message 🚀</h3>
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-4">
                  <Form.Label className="text-white">Full Name</Form.Label>
                  <Form.Control type="text" className="bg-dark text-white border-secondary" placeholder="John Doe" required />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="text-white">Email Address</Form.Label>
                  <Form.Control type="email" className="bg-dark text-white border-secondary" placeholder="name@example.com" required />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="text-white">Your Message</Form.Label>
                  <Form.Control as="textarea" rows={4} className="bg-dark text-white border-secondary" placeholder="Type here..." required />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {done && <div className="mt-3 text-success text-center fw-bold">Message sent successfully!</div>}
              </Form>
            </div>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Contact;