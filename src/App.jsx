import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Skills from './components/Skills'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
     <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </>
    </BrowserRouter>

    </>
  )
}

export default App;
