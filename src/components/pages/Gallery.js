import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Project from './Project';

function Gallery() {
  return (
    <div>
      <h1>Gallery</h1>
      <p>
      Must render dynamically 6 instances of the Project component
      Imports data from JSON
      </p>
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        <Route path="learn" element={<Project />} />
      </Routes>
    </div>
  );
}

export default Gallery;
