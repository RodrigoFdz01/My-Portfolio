import React from "react";
import { Github, ArrowUpRightCircle } from "react-bootstrap-icons";
import "./ProjectContainer.css";
const ProjectContainer = ({ project }) => {
  return (
    <div className="project">
      <h3>{project.name}</h3>
      <p className="project__description">{project.description}</p>

      <a
        href={project.code}
        aria-label="source code"
        className="link link--icon"
      >
        <Github />
      </a>

      <a
        href={project.deploy}
        aria-label="source code"
        className="link link--icon"
      >
        <ArrowUpRightCircle />
      </a>
    </div>
  );
};

export default ProjectContainer;
