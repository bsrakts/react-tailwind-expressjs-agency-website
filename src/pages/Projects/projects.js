import { useState, useEffect } from 'react';
import { fetchProjectDetail } from '../../api/api';
import { Link } from "react-router-dom";
import { Fade } from 'react-reveal';
import React from "react";
import './projects.css';



export const ProjectsPage = () => {

   const [projectsData, setProjectsData] = useState([]);

   useEffect(() => {
      fetchProjectDetail().then((projectData) => setProjectsData(projectData));
   }, [setProjectsData]);

   const projectData = projectsData.map((projectData) => {
      const { projectsİmg, projectsName } = projectData;

      return (
         <Fade left>
            <li key={projectData.id} className="reference-square col-span-1">
            <Link to={`/projects/${projectData.id}`}>
               <a className="projects-page-img">
                  <img className="projects-page-img" src={projectsİmg}/>
               </a>
               </Link>
            </li>
         </Fade>
      )
   }) 

   return (
      <div className="references-page">
         <div className="container mx-auto min-h-screen">
            <div className="grid grid-cols-1">
               <div className="references-content">
                  <div className="references-title">
                     <h1 className="flex justify-center">
                        Kimlerle Çalıştık ? 
                     </h1>
                  </div>
                  <ul className="img-list-reference grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                     {projectData}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}