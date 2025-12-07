import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

export default function Header({ navigate }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Scroll effects + PERFECT section detection
  useEffect(() => {
    const handleScroll = () => {
      // Header color change
      setScrolled(window.scrollY > 50)
      
      // Auto-detect active section
      const sections = ['home', 'about', 'services', 'courses', 'contact'];
      const scrollPosition = window.scrollY + 72 // header height

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          const offsetBottom = offsetTop + offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initial
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Click helper: scroll + set active immediately
  function handleNav(section) {
    navigate(section)
    setActiveSection(section)
  }

  const navItems = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Services', section: 'services' },
    { label: 'Courses', section: 'courses' }, // new
    { label: 'Contact', section: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100' 
          : 'bg-white/80 backdrop-blur-md shadow-lg'
      }`}
      style={{ height: '72px' }}
    >
      <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity group"
        >
          <img 
            src={logo} 
            alt="MindroTech" 
            className={`w-10 h-auto transition-all duration-300 ${scrolled ? 'drop-shadow-sm' : ''}`} 
          />
          <span className={`text-xl font-extrabold transition-all duration-300 ${
            scrolled 
              ? 'bg-gradient-to-r from-pink-600 via-orange-500 to-pink-600 bg-clip-text text-transparent drop-shadow-sm' 
              : 'bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'
          }`}>
            MindroTech
          </span>
        </div>

        {/* Desktop nav - Auto active highlighting */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map(({ label, section }) => (
            <button 
              key={section}
              onClick={() => handleNav(section)}
              className={`relative font-medium px-4 py-2 rounded-full transition-all duration-300 group ${
                activeSection === section 
                  ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg shadow-pink-500/25 scale-105' 
                  : scrolled 
                    ? 'text-gray-800 hover:text-pink-600 hover:bg-pink-50 shadow-sm hover:shadow-md hover:-translate-y-0.5' 
                    : 'text-gray-700 hover:text-pink-500 hover:bg-white/50 backdrop-blur-sm'
              }`}
            >
              {label}
              {activeSection === section && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full shadow-lg animate-pulse"></div>
              )}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            scrolled 
              ? 'focus:ring-pink-500 bg-pink-50 hover:bg-pink-100 shadow-sm' 
              : 'focus:ring-pink-400 hover:bg-gray-50'
          }`}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-5 flex flex-col justify-between transition-all duration-300 ${
            scrolled ? 'space-y-1' : 'space-y-0.5'
          }`}>
            <span className={`block h-0.5 w-full rounded-full transition-all duration-300 origin-center bg-gradient-to-r from-pink-500 to-orange-500 ${
              open ? 'rotate-45 translate-y-1.5 scale-110' : ''
            }`}></span>
            <span className={`block h-0.5 w-full rounded-full transition-all duration-300 bg-gradient-to-r from-pink-500 to-orange-500 ${
              open ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}></span>
            <span className={`block h-0.5 w-full rounded-full transition-all duration-300 origin-center bg-gradient-to-r from-pink-500 to-orange-500 ${
              open ? '-rotate-45 -translate-y-1.5 scale-110' : ''
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu - Auto active highlighting */}
      {open && (
        <div className={`md:hidden transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-200' 
            : 'bg-white/90 backdrop-blur-lg shadow-xl border-t border-gray-100'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
            {navItems.map(({ label, section }) => (
              <button 
                key={section}
                onClick={() => { handleNav(section); setOpen(false); }} 
                className={`text-left py-4 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg shadow-pink-500/25 scale-105' 
                    : scrolled 
                      ? 'text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-orange-500/20 shadow-sm hover:shadow-md hover:-translate-x-1' 
                      : 'text-gray-700 hover:text-pink-500 hover:bg-white/70 backdrop-blur-sm hover:-translate-x-1'
                }`}
              >
                {activeSection === section && (
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                )}
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
