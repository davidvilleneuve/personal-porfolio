import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import { useTranslation } from "react-i18next";

import "../styles/Projects.css";

function Projects() {
  const { t, i18n } = useTranslation();
  return (
    


    <div className="projects">
      <h1> {t("My Personal Projects")}</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
