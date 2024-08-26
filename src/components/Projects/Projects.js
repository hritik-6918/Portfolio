import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";
import uploader from "../../Assets/Projects/uploader.png";
import generator from "../../Assets/Projects/generator.png";
import memo from "../../Assets/Projects/memo.png";
import dsa from "../../Assets/Projects/dsa.png";
import rental from "../../Assets/Projects/rental.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import shortner from "../../Assets/Projects/shortner.png";
import lofi from "../../Assets/Projects/lofi.png";
import expense from "../../Assets/Projects/expense.jpeg";
import code from "../../Assets/Projects/code.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Next.js Blog"
              description="This is a Next.js, Tailwind CSS, Shadcn blogging platform. This version is using Next.js 14 App Router with React Server Components and uses Wisp for publishing blog posts.The most feature-rich Next.js blog app out there that is easily configurable and customizable."
              ghLink="https://github.com/hritik-6918/nextjs-blog-cms-wisp"
              demoLink="https://nextjs-blog-cms-wisp-hritik6918.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uploader}
              isBlog={false}
              title="file-uploader"
              description="This is a file uploader built with shadnc/ui, and react-dropzone. It is bootstrapped with create-t3-app."
              ghLink="https://github.com/hritik-6918/file-uploader"
              demoLink="https://file-uploader-steel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={generator}
              isBlog={false}
              title="Code-image-generator"
              description="Code image generator is a tool that creates visually appealing images of code snippets, allowing programmers to share their work on social media and other platforms without the limitations of text formatting."
              ghLink="https://github.com/hritik-6918/code-image-generator"
              demoLink="https://code-image-convertor.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dsa}
              isBlog={false}
              title="DailyDSA"
              description="DailyDSA-Platform is an online educational platform focused on teaching Data Structures and Algorithms (DSA) through a structured and interactive approach. The platform is designed to cater to learners of all levels, from beginners to advanced programmers, and aims to enhance their problem-solving skills, particularly in preparation for technical interviews."
              ghLink="https://github.com/hritik-6918/DailyDSA-Platform"
              demoLink="https://daily-dsa-platform.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memo}
              isBlog={false}
              title="StickerImage"
              description="The Open Source Laptop Sticker Maker is a project designed to create custom stickers, particularly for promoting open source software and projects."
              ghLink="https://github.com/hritik-6918/StickerImage"
              demoLink="https://sticker-image.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Dashboard"
              description="App dashboard is a centralized interface that provides users with an overview of key metrics and activities related to a specific application. It serves as a powerful tool for data visualization and management, enabling users to track performance, monitor activities, and make informed decisions based on real-time data."
              ghLink="https://github.com/hritik-6918/dashboard-app"
              demoLink="https://dashboard-app-hritik.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce App"
              description="An eCommerce website built with React, Redux, Bootstrap, and the Fake Store API is a modern web application designed to provide a seamless online shopping experience."
              ghLink="https://github.com/hritik-6918/Ecommerce-Website"
              demoLink="https://ecommerce-website-zeta-pearl.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lofi}
              isBlog={false}
              title="Lofi-Music-App"
              description="Lofi is a web-based music application that uses soothing and uplifting sounds to help users stay motivated and focused when they work, exercise, or meditate. Built with TypeScript and React, Lofi offers a seamless and intuitive user experience, with a clean and simple design that is easy to navigate."
              ghLink="https://github.com/hritik-6918/Lofi-Music-App"
              demoLink="https://hritik-6918-lofi-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rental}
              isBlog={false}
              title="Car Rental"
              description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an easy-to-use interface for searching, comparing, and reserving cars from a wide selection of vehicles that vary in make, model, size, and price."
              ghLink="https://github.com/hritik-6918/car-rental-website"
              demoLink="https://car-rental-ten.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={code}
              isBlog={false}
              title="Realtime Code Editor"
              description="The Realtime Code Editor is a web-based code editor that allows multiple users to edit the same codebase simultaneously in realtime. It is built with React.js, Node.js, Socket.IO, and Tailwind CSS."
              ghLink="https://github.com/hritik-6918/realtime-code-editor"
              demoLink="https://hritik-6918-realtime-code-editor.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Invoice Generator"
              description="An Invoice Generator project built with React and TailwindCSS. Add items, quantity, prices, tax rates and discounts. Download Generated Invoices as PDFs to your device and print out. Use html-to-image to capture the data from modal and convert it from canvas to pdf with jsPDF."
              ghLink="https://github.com/hritik-6918/invoice-generator-app"
              demoLink="https://invoice-generator-app-hritik-6918.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shortner}
              isBlog={false}
              title="URL Shortener"
              description="A URL shortener app built using Next.js, Prisma, and Tailwind CSS is a modern web application that allows users to convert long URLs into shorter, more manageable links. This application typically includes a user-friendly interface, efficient backend processing, and a stylish design. "
              ghLink="https://github.com/hritik-6918/URL-Shortener-App"
              demoLink="https://github.com/hritik-6918/URL-Shortener-App"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
