import React from "react";


import projects from '../../data/Projects';
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import Project from "../../components/Project";


function Gallery() {
  return (
    <div>
     
      <Wrapper>
      <Title>Deployed Projects/Challenges</Title>
      {projects.map(f => <Project title={f.title} github={f.github} deploy={f.deploy} image={f.image} />)}
    </Wrapper>
     
    </div>
  );
}

export default Gallery;
