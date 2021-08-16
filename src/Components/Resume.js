import React from "react";
import profile from "../logos/profile2.jpg";
import { technicalSkills } from "./Skills";
import linkedin from "../logos/linkedin.svg";
import email from "../logos/email.svg";

export default function Resume() {
  return (
    <div className="resume">
      <div className="left-side">
        <img src={profile}></img>
        <h3>Senait Ekubai</h3>
        <hr></hr>
        <p>
          A dedicated and passionate front end web developer looking to utilise
          my problem-solving, critical thinking, collaboration and leadership
          skills.
        </p>
        <h5>Skills</h5>
        <hr></hr>
        <div className="skills">
          <div className="hardskills">
            <h6>Technical Skills</h6>
            <ul>
              <li>HTML, </li>
              <li> CSS,</li>
              <li>Javascript,</li>
              <li>React,</li>
              <li>Bootstrap,</li>
              <li>RESTful Apis</li>
              <li>Node Js,</li>
              <li>Postgresql</li>
              <li>Git,</li>
              <li>Github</li>
            </ul>
          </div>
          <div className="softskills">
            <h6>Other Skills</h6>
            <ul>
              <li> Agile methodology,</li>
              <li> Time management,</li>
              <li>Work ethic,</li>
              <li>Active listening,</li>
              <li>Adaptability, </li>
              <li>Flexibility</li>
            </ul>
          </div>
          <h5>Contacts</h5>
          <hr></hr>
          <div className="contacts">
            <img
              src={linkedin}
              width="20"
              height="20"
              alt="linkedin logo"
            ></img>
            <a href="https://www.linkedin.com/in/senait-ekubai/">
              SenaitEkubai
            </a>
          </div>
          <div className="contacts">
            <img src={email} width="20" height="20" alt="email log"></img>
            <a href="https://">SenaitEkubai@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="right-side">
        <h3>Experience</h3>
        <hr></hr>

        <div className="experience">
          <h5> Sep 2020 - July 2021</h5>
          <ul>
            <li>Code Your Future</li>
            <li>
              Worked within a development team to deliver a web application to
              enable refugees and migrants advertise and sell their home repair
              services using Agile workflow
            </li>
            <li>
              Facilitated discovery workshops to capture client requirements and
              define MVP
            </li>
            <li>
              Run regular stand up meetings to update the project team on the
              development progress
            </li>
            <li>
              Supported wireframes development to define structure of
              application
            </li>
            <li>
              Researched accessibility and developed the application to meet
              accessibility standards
            </li>
            <li>Carried out system testing and end user system testing</li>
          </ul>
        </div>
        <div className="experience">
          <h5> Jan 2020 - present</h5>
          <ul>
            <li> Cooksongold</li>
            <li>
              Ensuring all individual orders are prepped according to relevant
              customer order and volumes as detailed within the Company order
              prepping systems (AS400 based).
            </li>
            <li>
              Scanning and securely storing all individual line items in
              accordance with the existing Logistics structure and operational
              layout.
            </li>
            <li>
              Auditing of the product line to reduce errors in picking volume
              based on the Company’s accepted level of tolerance – 0.1%
            </li>
          </ul>
        </div>
        <div className="experience">
          <h5> Sep 2018 - Jan 2021</h5>
          <ul>
            <li> Word360</li>
            <li>
              Facilitated communication between parties who speak English and
              Tigrinya
            </li>
            <li>
              Provided face-face, telephone and video interpreting services for
              NHS, charities, businesses and local authorities
            </li>
          </ul>
        </div>
        <div className="experience">
          <h5> Oct 2017-March 2018</h5>
          <ul>
            <li> Logistics Operative </li>
            <li>
              Processed all individual customer returns and credits in line with
              Company procedures and time scales.
            </li>
            <li>
              Generated and attached all relevant documentation prior to return
              to the supplier.
            </li>
            <li>
              Ensured that all stock made good for resale is processed in line
              with Company procedures and returned to the correct storage
              location.
            </li>
          </ul>
        </div>
        <h3>Education</h3>
        <hr></hr>
        <div className="education">
          <h5>Sep 2020 - July 2021</h5>
          <ul>
            <li>Code Your Future</li>
            <li>Achievements</li>
            <li>
              HTML, CSS, Bootstrap, Javascript, Restful Apis, Json, Git, Github,
              Postgresql, React and Node{" "}
            </li>
          </ul>
        </div>
        <div className="education">
          <h5>Sep 2017 - June 2018</h5>
          <ul>
            <li>Birmingham Metropolitan College</li>
            <li>Achievements</li>
            <li>GCSE English</li>
            <li>GCSE Math</li>
          </ul>
        </div>
        <div className="education">
          <h5>Sep 2016 - June 2017</h5>
          <ul>
            <li>Birmingham Metropolitan College</li>
            <li>Achievement</li>

            <li>Access to Higher Education(Science) Diploma</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
