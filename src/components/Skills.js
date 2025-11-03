import React from "react";
import "./Skills.css";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React JS", "GitHub"];

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
