import React from "react";
import { Link } from "react-router-dom";
export default function navLinks() {
  return (
    <div className="navLinks">
      {/* <Link to="/">Home</Link> */}
      <Link to="/">About me</Link>
      <Link to="/projects">Projects</Link>
      {/*  <Link to="/blogs">Blogs</Link> */}
      <Link to="/contact">Contact </Link>
    </div>
  );
}
