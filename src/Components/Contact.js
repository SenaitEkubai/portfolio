import React from "react";
import linkedin from "../logos/linkedin.svg";
import email from "../logos/email.svg";
import github from "../logos/github.png";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Get in touch </h2>
      <hr></hr>
      <p>
        If you have any queries. Feel free to get in touch. I am currently
        looking for a job. Below are some of the ways to get in touch.{" "}
      </p>
      <div>
        <div>
          <img src={linkedin} width="20" height="20" alt="linkedin logo"></img>
          <a
            href="https://www.linkedin.com/in/senait-ekubai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SenaitEkubai
          </a>
        </div>
        <div>
          <img src={github} width="20" height="20" alt="github logo"></img>
          <a
            href="https://github.com/SenaitEkubai"
            target="_blank"
            rel="noopener noreferrer"
          >
            SenaitEkubai
          </a>
        </div>
        <div>
          <img src={email} width="20" height="20" alt="email log"></img>
          <a href="https://">SenaitEkubai@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
