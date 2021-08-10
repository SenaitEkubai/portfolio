import React from "react";
import linkedin from "../logos/linkedin.svg";
import email from "../logos/email.svg";
import github from "../logos/github.png";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Get in touch </h2>
      <p>
        If you have any queries. Feel free to keep in touch. Bellow are some of
        the ways to get in touch.{" "}
      </p>
      <div>
        <img src={linkedin} width="20" height="20" alt="linkedin logo"></img>
        <a href="https://www.linkedin.com/in/senait-ekubai/">SenaitEkubai</a>
      </div>
      <div>
        <img src={github} width="20" height="20" alt="github logo"></img>
        <a href="https://github.com/SenaitEkubai">SenaitEkubai</a>
      </div>
      <div>
        <img src={email} width="20" height="20" alt="email log"></img>
        <a href="https://">SenaitEkubai@gmail.com</a>
      </div>
    </div>
  );
}
