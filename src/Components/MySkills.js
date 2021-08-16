import React from "react";
import { technicalSkills } from "./Skills";
import { SoftSkills } from "./Skills";

export default function MySkills() {
  return (
    <div className="technologies-and-skills">
      <h2>Technologies and other skills</h2>
      <h3>Technical Skills</h3>
      <div className="grid-container">
        {technicalSkills.map((skill, index) => (
          <img
            key={index}
            src={skill.image}
            className="image"
            alt="images"
          ></img>
        ))}
      </div>
      <h3>Other Skills</h3>
      <div>
        {SoftSkills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </div>
    </div>
  );
}
