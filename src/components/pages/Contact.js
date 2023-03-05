import React from 'react';
import contacts from '../../data/Personal';

// idea from https://scrimba.com/articles/react-list-array-with-map-function/    
const Skills = () => {
  const skills = contacts[0].skills.languages.map((skill, index)=>
    <li className="list-group-item" key={index}>{skill}</li>)
  return <header>{skills}</header>
}

function Contact(props) {
  return (

    <div className="card" >
      <img  src={process.env.PUBLIC_URL + contacts[0].image} alt={contacts[0].name} width={64} height={64}></img>
      <div className="card-body">
        <h5 className="card-title">{contacts[0].name}</h5>
        <p className="card-text">Please see below key skills </p>
      </div>
      <ul className="list-group list-group-flush">
        {Skills()}
      </ul>
      <div className="card-body">
        <a href={contacts[0].links.github} class="card-link">GitHub</a>
        <a href={contacts[0].links.linkedin} class="card-link">LinkedIn</a>
        <a href={contacts[0].links.email} class="card-link">Email Me</a>
        <a href={contacts[0].links.resume} download class="card-link">Download Resume</a>
      </div>
    </div>
      );
}

export default Contact;
