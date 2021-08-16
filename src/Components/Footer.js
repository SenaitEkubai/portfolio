import React from "react";
import linkedin from "../logos/linkedin.svg";
import email from "../logos/email.svg";
import github from "../logos/github.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div>
        <p>Senait Ekubai&copy; 2021 </p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/senait-ekubai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} width="20" height="20" alt="linkedin logo"></img>
        </a>
      </div>

      <div>
        <Link to="/contact">
          {" "}
          <img src={email} width="20" height="20" alt="email log"></img>
        </Link>
      </div>
    </div>
  );
}
