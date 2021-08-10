import React from "react";
import { Link } from "react-router-dom";
import profile from "../logos/profile2.jpg";
import Footer from "./Footer";
import Introduction from "./Introduction";
import MySkills from "./MySkills";
export default function About() {
  return (
    <div>
      <div className="about">
        <div className="info">
          <img src={profile} alt="profile" />
          <span>Welcome! I am Senait Ekubai</span>
          <span>Web Developer From Birmingham</span>
        </div>
        <Link to="/contact">
          <button className="btn btn-warning">Get in touch</button>
        </Link>
      </div>
      <Introduction />
      <MySkills />
      <Footer />
    </div>
  );
}
