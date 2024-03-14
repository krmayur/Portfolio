import React from 'react';
import './css/Project.css'
function Project(){
    const projects = [
        {
          title: 'Project 1',
          description: 'Description of Project 1.',
        },
        {
          title: 'Project 2',
          description: 'Description of Project 2.',
        },
        {
          title: 'Project 3',
          description: 'Description of Project 3.',
        },
      ];
    return(
        <>
        <div className="bg-gray-100 min-h-screen p-8">
  
      {projects.map((project, index) => (
        <div key={index} className={`max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md mb-8 ${index < projects.length - 1 ? 'mb-8' : ''}`}>
          <h2 className="text-xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          {/* Add more project details here */}
        </div>
      ))}
    </div>
        </>
    )
}
export default Project;