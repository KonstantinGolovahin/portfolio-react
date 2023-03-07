import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card projectcard">
      <div className="img-container">
        <img alt={props.title} src={process.env.PUBLIC_URL + props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.title}
          </li>
          <li>
            <a
              className="btn btn-link btn-floating btn-lg  m-1"
              href={props.github}
              role="button"
              data-mdb-ripple-color="dark"
            >GitHub Repo</a>
          </li>
          <li>
            <a
              className="btn btn-link btn-floating btn-lg  m-1"
              href={props.deploy}
              role="button"
              data-mdb-ripple-color="dark"
            >Visit Live URL</a>
          </li>
                 </ul>
      </div>

    </div>
  );
}

export default ProjectCard;
