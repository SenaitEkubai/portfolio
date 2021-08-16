import React from "react";
import { Link } from "react-router-dom";
export default function navLinks() {
  return (
    <div className="navLinks">
      <Link to="/">Home</Link>
      <Link to="/Skills">Skills</Link>
      <Link to="/resume">Resume </Link>
      <Link to="/contact">Contact </Link>
    </div>
  );
}
