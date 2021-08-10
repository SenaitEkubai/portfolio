import React from "react";
import { skills } from "./Skills";

export default function MySkills() {
  return (
    <div>
      <h2>Technologies learned so far</h2>
      <div className="grid-container">
        {skills.map((skill, index) => (
          <img
            key={index}
            src={skill.image}
            className="image"
            alt="images"
          ></img>
        ))}
      </div>
    </div>
  );
}
