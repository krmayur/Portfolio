import React from 'react';

export default function Skills() {
  return (
    <div>
      <section id="skills" className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="mb-3">
            <span className="text-3xl font-medium">Programming Languages</span>
          </div>
          <ul className="flex flex-wrap gap-4">
            <li>
              <i className="fab fa-html5 text-5xl text-red-600" >C++</i>
            </li>
            <li>
              <i className="fab fa-css3-alt text-5xl text-blue-500" >Java</i>
            </li>
            <li>
              <i className="fab fa-js-square text-5xl text-yellow-500" >HTML</i>
            </li>
            <li>
              <i className="fab fa-react text-5xl text-blue-400" >CSS</i>
            </li>
            <li>
              <i className="fab fa-node-js text-5xl text-green-500" >JavaScript</i>
            </li>
            
            <li>
              <i className="fab fa-npm text-5xl text-red-500" ></i>
            </li>
          </ul>



          <div className=" mt-5 mb-3">
            <span className="text-3xl font-medium">Tools</span>
          </div>
          <ul className="flex flex-wrap gap-4">
          <li>
              <i className="fab fa-sass text-5xl text-pink-400" >ReactJS</i>
            </li>
            <li>
              <i className="fab fa-wordpress text-5xl text-blue-400" >NodeJS</i>
            </li>
            <li>
              <i className="fab fa-grunt text-5xl text-yellow-600" >TailWindCSS</i>
            </li>
            <li>
              <i className="fab fa-grunt text-5xl text-blue-600" >Figma</i>
            </li>
          </ul>
          <div className="mt-8 mb-3">
            <span className="text-3xl font-medium">Technologies</span>
          </div>
          <div className='flex'>
          <ul className="mr-20">
            <li>Git/GitHub</li>
            <li>WIX/Netlify</li>
            <li>Supabase</li>
            <li>Figma</li>
          </ul>
          
          <ul className="list-disc list-inside">
            <li></li>
            <li>WIX/Netlify</li>
            <li>Supabase</li>
            <li>Figma</li>
          </ul>
          </div>
        </div>
      </section>
      <hr className="border-gray-300" />
    </div>
  );
}
