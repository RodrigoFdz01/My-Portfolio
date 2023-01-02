import React from "react";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import projects from "../../Projects/Projects.js";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <section id="Portfolio" className="section projects">
      <h2 className="section__title">Portfolio</h2>

      <div className="portfolio-grid">
        {projects.map((item, index) => (
          <ProjectContainer key={index} project={item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
