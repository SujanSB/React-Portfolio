import React from "react";
import Project from "./project";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

function Work() {
  return (
    <div>
      <h1 className="heading">
        <Fade bottom cascade>
          My Latest Works
        </Fade>
      </h1>
      <p>Here are some recent projects.</p>
      <div className="work-content">
        {data.projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            imageSrc={project.imageSrc}
            url={project.url}
          ></Project>
        ))}
      </div>
    </div>
  );
}

export default Work;
