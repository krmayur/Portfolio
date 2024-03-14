import React from 'react';
import './css/Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar=()=>{
    return(
        <>
        <nav className='bg-blue-800'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className="relative flex h-16 items-center justify-between">
            <NavLink to="/"><li className='text-2xl underline'>Home</li></NavLink>
            <NavLink to="/resume"><li className='text-2xl underline'>Resume</li></NavLink>
            <NavLink to="/project"><li className='text-2xl underline'>Project</li></NavLink>
            <NavLink to="/contact"><li className='text-2xl underline'>Contact</li></NavLink>
            </div>
            </div>
        </nav>
        </>
    )
}
export default Navbar;