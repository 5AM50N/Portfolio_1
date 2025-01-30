import React from "react";
import { useState } from "react";

function Project(){
    const [projects] = useState([
        {
            title:"QR code Generator",
            img: "Project1.png",
            gitlink: "",
            link: "https://project-01-qr-generator.vercel.app/",
            desc: ["Developed a QR code generator web application leveraging Node.js for backend logic and HTML/CSS for frontend presentation.",
                    "Utilized Node.js libraries such as qrcode to implement dynamic QR code generation functionality, ensuring efficiency and reliability.",
                    "Ensured user-friendly experience through responsive design.",
                    "Deployed the application on cloud platform vercel, ensuring accessibility and scalability."]
        },
        {
            title:"Blog App",
            img: "Project2.png",
            gitlink: "",
            link: "https://blog-app-two-umber.vercel.app/",
            desc: ["Developed a responsive blog application using the MERN stack.",
                    "Implemented user authentication for secure post creation, modification and deletion",
                    "Implemented user registration and login system with secure token-based authentication",
                    "Designed and implemented CRUD operations for managing blog posts.",
                    "Utilized MongoDB for database storage and Mongoose for backend integration",
                    "Created a dynamic and responsive user interface using React.js for frontend development."]
        },
        {
            title:"Email Sender",
            img: "Project3.png",
            gitlink: "",
            link: "https://email-sender-nodejs-theta.vercel.app/",
            desc: ["Developed a Node.js-based web application for sending emails, integrating Nodemailer for streamlined functionality.",
                    "Designed a user-friendly interface allowing users to input email content, recipient addresses, and other relevant details.",
                    "Integrated with email service providers, used a custom SMTP server for sending emails"]
        },
    ]);
    return(
        <div className="projects" id="projects">
            <div className="container">
                <div className="title">
                    <h3>Featured Projects</h3>
                    {/* <a href="" className="btn">View All
                    <i className="fa fa-globe"></i>
                    </a> */}
                </div>
                <div className="projects-wrapper">
                    {projects.map((project, i)=>{
                        return(
                            <div className="project" key={i}>
                                <div className="img-container">
                                    <img src={project.img} alt={project.title} />
                                </div>
                                <div className="description">
                                    <h4>{project.title}</h4>
                                    <div className="links">
                                    
                                        <a href={project.link} target="_blank" rel="noreferrer">
                                            <i className="fa fa-globe" title=""></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="details">
                                    <ul>
                                    {project.desc.map((detail,i)=>{
                                        return(<li key={i}>{detail}</li>);
                                    })}
                                    </ul>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;