import React from 'react';
import contacts from '../../data/Personal';
import 'font-awesome/css/font-awesome.min.css';
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import "./style.css";


// idea from https://scrimba.com/articles/react-list-array-with-map-function/  
// list all skills from an array  
const Skills = () => {
  const skills = contacts[0].skills.languages.map((skill, index)=>
    <li className="list-group-item" key={index}>{skill}</li>)
  return <header>{skills}</header>
}

function Home(props) {
  return (
    <div className='container-fluid min-vh-100' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg_home.jpeg'})`,
    backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat' }}  >
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4"> <span><img  src={process.env.PUBLIC_URL + contacts[0].image} alt={contacts[0].name} width={64} height={64}></img></span>{contacts[0].name}</h1>
    <h3>{contacts[0].statement}</h3>
    <p class="lead">{contacts[0].portfolio}</p>
  </div>
</div>
<div className="container-fluid w-50" >
      
      <div className="card-body">
        <h3 className="card-title">Please see below a list of skills</h3>
      
      </div>
      <ul className="list-group list-group-flush">
        {Skills()}
      </ul>
      <div className="card-body">
              
      </div>
    </div>

    <footer className="page-footer fixed-bottom font-small bg-dark text-white pt-5"> 
 
  <div className="container pt-4">
  
    <section className="mb-4">
          <a
        className="btn btn-link btn-floating btn-lg  m-1"
        href={contacts[0].links.github}
        role="button"
        data-mdb-ripple-color="dark"
        ><i ><FaGithub /></i>GitHub</a>
<a
        className="btn btn-link btn-floating btn-lg  m-1"
        href={contacts[0].links.linkedin}
        role="button"
        data-mdb-ripple-color="dark"
        ><i ><BsLinkedin /></i>LinkedIn</a>

<a
        className="btn btn-link btn-floating btn-lg  m-1"
        href={contacts[0].links.resume} 
        role="button"
        data-mdb-ripple-color="dark"
        download
        ><i ><BsDownload /></i>Download resume</a>
   
    </section>
   
  </div>
  
</footer>
    
    </div>

    
      );
}

export default Home;
