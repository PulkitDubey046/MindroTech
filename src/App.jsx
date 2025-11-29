import React, { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  const [page, setPage] = useState('home')

  function navigate(to) {
    setPage(to)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-root">
      <Header navigate={navigate} />

      <div className="content">
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'about' && <About />}
        {page === 'services' && <Services />}
        {page === 'contact' && <Contact />}
      </div>

      <Footer />
    </div>
  )
}

export default App
