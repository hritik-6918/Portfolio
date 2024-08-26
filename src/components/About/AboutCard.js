import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hritik Kumar </span>
            from <span className="purple"> Kolkata, India ✈️.</span>
            <br />
            I am Software Development Engineer (Full-Stack Developer) 👨‍💻.
            <br />
            I love to dig and explore fundamental Engineering concepts around the Web listening to conferences, podcasts and reading articles over the Internet. ❤️
            <br />
            <br />
            Apart from coding, some other activities that I love to do! 🤗
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs 📝
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Vlogging 🎬
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hritik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
