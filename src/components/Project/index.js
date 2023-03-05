import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={process.env.PUBLIC_URL +props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.title}
          </li>
          <li>
            <strong>Repo</strong> {props.github}
          </li>
          <li>
            <strong>Live URL</strong> {props.deploy}
          </li>
        </ul>
      </div>
     
    </div>
  );
}

export default FriendCard;
