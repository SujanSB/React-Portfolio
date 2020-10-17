import React from "react";
import Fade from "react-reveal/Fade";

function Project(props) {
  return (
    <Fade bottom>
      <div className="project">
        <img src={props.imageSrc} alt={props.title}></img>
        <div className="cover">
          <div className="middle">
            <h2>{props.title}</h2>
            <a href={props.url}>View Details</a>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Project;
