import React from "react";
import dataSkills from "../../Data Skills/dataSkills";
import "./skills.css";

const Skills = () => {
  return (
    <section className="section skills" id="Skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {dataSkills.map((e, index) => (
          <li key={index} className="skills__list-item btn btn--plain">
            {e}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
