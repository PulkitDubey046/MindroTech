import React from 'react'
import './About.css'

export default function About() {
  return (
    <main className="page about">
      <h2>Who We Are</h2>
      <p>
        MindroTech is a forward-thinking EdTech and IT company dedicated to
        making education and technology accessible, practical, and impactful.
        We aim to bridge the gap between knowledge and application, empowering
        learners and businesses to thrive in a fast-evolving digital world.
      </p>

      <h3>What We Do</h3>
      <p>
        We integrate education, technology, and innovation to deliver
        comprehensive learning programs and IT solutions. From engaging digital
        courses to full-scale IT services, we provide opportunities to enhance
        your skills, advance your career, and grow your business.
      </p>

      <h3>Our Promise</h3>
      <ul className="promise-list">
        <li>Quality Learning: Courses designed by industry experts</li>
        <li>Real-world Skills: Training that applies directly to professional environments</li>
        <li>Modern Technology: Leveraging the latest tech for better outcomes</li>
        <li>Smart Solutions: Tailored IT services for students, startups, and enterprises</li>
        <li>Trusted Support: Guidance and assistance whenever you need it</li>
      </ul>
    </main>
  )
}
