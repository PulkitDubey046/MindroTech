import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="brand">MindroTech © 2025</div>
        <div className="tag">Empowering Minds Through Technology</div>

        <div className="socials">
          <span>Instagram</span> | 
          <span>LinkedIn</span> | 
          <span>YouTube</span>
        </div>

        <div className="links">
          <span>Home</span> |
          <span>About Us</span> |
          <span>Services</span> |
          <span>Courses</span> |
          <span>Blog</span> |
          <span>Contact Us</span>
        </div>
      </div>
    </footer>
  )
}
