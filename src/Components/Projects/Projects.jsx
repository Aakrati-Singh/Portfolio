import React from "react";
import ProjectCard1 from "./ProjectCard1";
import ProjectCard2 from "./ProjectCard2";
import ProjectCard3 from "./ProjectCard3";
import ProjectCard4 from "./ProjectCard4";

const Projects = () => {
  return (
    <div id="Projects" className="p-20 md:p-20 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex gap-5 overflow-x-auto md:overflow-x-hidden flex-nowrap justify-center">
        <ProjectCard1
          title="Weather App"
          main="A sleek app that provides real-time weather updates using live API data based on user location or search."
        />
        <ProjectCard2
          title="Youtube Clone"
          main="A functional YouTube replica that allows users to browse, search, and stream videos"
        />
        <ProjectCard3
          title="Netflix Clone"
          main="A fully responsive Netflix-inspired UI showcasing movies and TV shows."
        />
        <ProjectCard4
          title="Quiz App"
          main="A dynamic React-based quiz app that delivers interactive questions with instant feedback and scoring."
        />
      </div>
      <p className="text-lg">Many more projects upcoming-</p>
      <ul>
        <li>-Chat App</li>
        <li>-E-commerce website</li>
      </ul>
    </div>
  );
};

export default Projects;
