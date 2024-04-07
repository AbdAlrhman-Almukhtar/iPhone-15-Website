import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Highlights from './components/Highlights.jsx'
import Model from './components/Model.jsx'
import Features from './components/Features.jsx'
import Chip from './components/Chip.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <Chip/>
      <Footer/>
    </main>
  )
}

export default App
