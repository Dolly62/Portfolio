import React from "react";
import { skills } from "../Data/data";

const Skills = () => {
  return (
    <>
      {skills.map((skill) => (
        <div className="skills__item" key={skill.id}>
          <div className="skills__icon">
            <img src={skill.icons} alt={skill.title} />
          </div>
          <h3 className="skills__title">{skill.title}</h3>
        </div>
      ))}
    </>
  );
};

export default Skills;
