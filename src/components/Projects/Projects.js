import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// Note: ProjectCards import is unused in your specific code block below since you built the card inline, 
// but I kept the import as requested to not change logic.
import ProjectCard from "./ProjectCards";

// --- IMAGES IMPORT ---
import adminImg from "../../Assets/Projects/admin.png";
import hospitalImg from "../../Assets/Projects/hospital.png";
import emailImg from "../../Assets/Projects/email.png";
import foodImg from "../../Assets/Projects/food.png";
import youtubeImg from "../../Assets/Projects/youtube.png";
import naturalImg from "../../Assets/Projects/natural.png";
import crudImg from "../../Assets/Projects/crud.png";

function Projects() {
  const projects = [
    // 1. Food Delivery Project
    {
      image: foodImg,
      title: "Food Delivery App",
      technologyUsed: "React.js, Node.js, Express.js, MongoDB",
      description: "A full-stack food ordering platform similar to Swiggy/Zomato. Users can browse menus, add items to the cart, and place orders. Features a responsive UI and seamless backend integration.",
      link: "https://food-delivery-project-frontend-3ayw.onrender.com",
    },
    // 2. Natural Thread
    {
      image: naturalImg,
      title: "Natural Thread",
      technologyUsed: "React.js, Context API, HTML5",
      description: "Developed a fully responsive front-end for an e-commerce platform. Engineered a global state management system using React Context API for handling the shopping cart and user data efficiently.",
      link: "https://natural-thread-project.vercel.app/",
    },
    // 3. YouTube Clone
    {
      image: youtubeImg,
      title: "YouTube Clone",
      technologyUsed: "React.js, Material UI, RapidAPI",
      description: "A responsive video streaming application mimicking the core features of YouTube. Built purely using React.js and RapidAPI to fetch videos, channels, and search results without a backend.",
      link: "https://you-tube-clone-psi-seven.vercel.app",
    },
    // 4. MERN CRUD (Web Application)
    {
      image: crudImg,
      title: "MERN Stack CRUD",
      technologyUsed: "React.js, Node.js, Express.js, MongoDB",
      description: "A full-stack web application enabling users to Create, Read, Update, and Delete data. Features a responsive React frontend and RESTful APIs built with Node.js and Express connected to MongoDB.",
      link: "https://task-manager-frontend-ixu4u625b-shubhangi2326s-projects.vercel.app",
    },
    // 5. Hospital Management
    {
      image: hospitalImg,
      title: "Hospital Management",
      technologyUsed: "MERN Stack, Bootstrap",
      description: "A digital healthcare solution designed to streamline hospital operations. Allows management of patient records, doctor appointments, and inventory. Built with a responsive Bootstrap UI.",
      link: "https://hospital-management-system-1-w0d9.onrender.com",
    },
    // 6. Admin Panel
    {
      image: adminImg,
      title: "Admin Dashboard",
      technologyUsed: "React.js, Node.js, Express.js",
      description: "A comprehensive MERN stack admin dashboard for managing application data. Features include secure user authentication, real-time data visualization, user management, and full CRUD capabilities.",
      link: "https://mern-stack-frontend-bjqs.onrender.com/dashboard",
    },
    // 7. Bulk Email Sender
    {
      image: emailImg,
      title: "Bulk Email Sender",
      technologyUsed: "React.js, Nodemailer",
      description: "An automated marketing tool designed to send mass emails efficiently. Features include composing HTML emails, managing recipient lists, and tracking email delivery status.",
      link: "https://bulk-email-sender-frontend.vercel.app",
    },
  ];

  return (
    <>
      {/* CSS For Reducing Height */}
      <style type="text/css">
        {`
        .project-card-view {
            background: rgba(20, 20, 30, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 20px 15px; /* Reduced Padding */
            height: 100%;
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease;
        }
        
        .project-card-view:hover {
            transform: translateY(-5px);
            border-color: #c084fc;
            box-shadow: 0 10px 30px rgba(168, 85, 247, 0.2);
        }

        /* 1. Reduce Image Height */
        .card-img-top {
            height: 180px; /* Reduced form standard 200-250px */
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 15px;
        }

        .card-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 5px;
        }

        .tech-stack-text {
            color: #c084fc;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 10px;
            display: block;
        }

        /* 2. Limit Description Text (Line Clamp) to Reduce Height */
        .project-description {
            color: #d1d5db;
            font-size: 0.95rem;
            line-height: 1.5;
            display: -webkit-box;
            -webkit-line-clamp: 3; /* Show only 3 lines */
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 20px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #a855f7 0%, #7e22ce 100%);
            border: none;
            width: 100%;
            font-weight: 600;
        }
        `}
      </style>

      <Container fluid className="section-bg">
        <Container>
          <h1 className="project-heading">
          <strong className="text-purple"> My Recent Works </strong>
        </h1>
          <p style={{ color: "white", textAlign: "center", marginBottom: "50px" }}>
            Here are a few projects I've worked on recently.
          </p>
          
          <Row className="g-5" style={{ justifyContent: "center", paddingBottom: "10px" }}>
            
            {projects.map((item, index) => (
              <Col md={6} lg={4} className="project-card" key={index}>
                
                <div className="project-card-view">
                   <img src={item.image} alt="card-img" className="card-img-top" />
                   
                   <div className="card-body d-flex flex-column" style={{ flex: 1 }}>
                      <h5 className="card-title">{item.title}</h5>
                      
                      <span className="tech-stack-text">
                          {item.technologyUsed}
                      </span>
                      
                      {/* Description limited to 3 lines by CSS above */}
                      <p className="project-description">
                         {item.description}
                      </p>
                      
                      <div className="mt-auto">
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                              View Project
                          </a>
                      </div>
                   </div>
                </div>

              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;