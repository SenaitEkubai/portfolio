import React from "react";
import { projects } from "./ProjectList.js";

export default function Projects() {
  return (
    <div className="projects">
      <h2>Check out My Projects</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.name}</h3>
            <img src={project.img} alt=""></img>
            <p>{project.desc}</p>
            <div className="buttons">
              <a href={project.app}>app</a>
              <a href={project.github}>code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
