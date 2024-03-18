import React from 'react';
import './css/Project.css'
function Project(){
    const projects = [
        {
          title: 'VOICE WEB',
          techstack: 'HTML, CSS, JavaScript, WIX',
          webpage:'https://mayuresh936.wixsite.com/voice-web',
          description: 'Voice-Web is a web platform designed to revolutionize the way farmers engage with information, collaboration, and support within the agriculture community. Led by a team proficient in HTML, CSS, JavaScript, and leveraging the capabilities of Wix, AgriVoice offers a user-friendly interface accessible to farmers of all technological backgrounds. At the heart of AgriVoice lies its innovative use of JavaScript to introduce voice-enabled features, providing farmers with an intuitive and hands-free browsing experience. This pioneering approach has resulted in a remarkable 40% increase in farmer literacy, empowering agricultural communities with newfound knowledge and resources.',
        },
        {
          title: 'CULINARY COMPASS',
          techstack: 'React.Js, APIs',
          webpage:'https://recipefinderop.netlify.app/',
          description: 'Culinary Compass is your ultimate guide to exploring the world of cuisines with ease. Developed using React.js and powered by a comprehensive database of over 5000 recipes from diverse culinary traditions, this web application promises to tantalize your taste buds and inspire your culinary adventures. With a seamless and intuitive user interface, Culinary Compass allows users to effortlessly search for recipes based on ingredients, cuisine types, dietary preferences, and more. Whether you are craving Italian pasta, spicy Thai curry, or comforting American classics, Culinary Compass has got you covered.',
        },
        {
          title: 'SLITHERING SERPENT',
          techstack: 'HTML, CSS, JavaScript',
          webpage:'https://github.com/krmayur/Snake-Game.git',
          description: "Slithering Serpent is a classic Snake game that brings back the nostalgia of the iconic retro game. With its simple yet addictive gameplay, this browser-based game is designed to entertain players of all ages. The objective is straightforward: control the movements of a snake as it slithers across the screen, consuming food and growing longer with each bite. But beware, as the more the snake grows, the more challenging it becomes to navigate without colliding with the walls or its own tail.",
        },
      ];
    return(
        <>
        <div className="bg-gray-100 min-h-screen p-8">
  
      {projects.map((project, index) => (
        <div key={index} className={`max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md mb-8 ${index < projects.length - 1 ? 'mb-8' : ''}`}>
          <h2 className="text-xl font-bold mb-4">{project.title}</h2>
          <h5 className="text-xl font-bold mb-4">{project.techstack}</h5>
          <a href={project.webpage} target="_blank" rel="noopener noreferrer" className="text-m  underline mb-4">Webpage</a>
          <p className="text-gray-600 mb-4">{project.description}</p>
        </div>
      ))}
    </div>
        </>
    )
}
export default Project;