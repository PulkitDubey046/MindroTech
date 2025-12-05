import React from 'react'

export default function Services() {
  const services = [
    {
      emoji: "🎓",
      title: "EdTech Services",
      items: [
        "Live & Recorded Online Courses",
        "Coding & Programming for Beginners",
        "Data Analytics Training",
        "Web Development Training",
        "AI & Machine Learning Fundamentals",
        "Internship & Practical Training Programs",
        "Career Mentorship & Skill Development",
        "School & College Tech Workshops"
      ]
    },
    {
      emoji: "💻",
      title: "IT Services",
      items: [
        "Website & Mobile App Development",
        "IT Consulting & Advisory",
        "Digital Marketing & Branding Solutions",
        "SEO Optimization & Online Presence Management",
        "Software Automation & Productivity Tools",
        "Cloud Infrastructure & Server Setup",
        "UI/UX Design & User Experience Services"
      ]
    },
    {
      emoji: "🧠",
      title: "Skill Development",
      items: [
        "Effective Communication & Soft Skills",
        "Productivity & Career Enhancement Skills",
        "Tech Awareness & Digital Literacy Programs",
        "Corporate Training & Employee Upskilling"
      ]
    }
  ]

  return (
    <main className="max-w-6xl mx-auto px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-16">
      {/* Main Title */}
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-[#ff007b] via-[#ff8a00] to-[#ff007b] bg-clip-text text-transparent tracking-tight">
          Our Services
        </h2>
      </div>

      {/* Service Blocks */}
      <div className="space-y-8 md:space-y-10 lg:space-y-12 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <section
            key={index}
            className="group bg-white p-8 md:p-10 lg:p-12 rounded-3xl shadow-[0_3px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_5px_18px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 border-l-6 border-transparent hover:border-l-[#ff007b] hover:border-opacity-100 relative overflow-hidden max-w-4xl mx-auto"
          >
            {/* Gradient border effect */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#ff007b] to-[#ff8a00] -translate-x-1 group-hover:translate-x-0 transition-transform duration-300 rounded-r-full"></div>
            
            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 text-gray-900 relative z-10 pl-8 md:pl-10">
              <span className="text-3xl md:text-4xl lg:text-5xl mr-3">{service.emoji}</span>
              {service.title}
            </h3>
            
            {/* List Items */}
            <ul className="space-y-4 md:space-y-5 pl-0 list-none relative z-10">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-4 text-lg md:text-xl text-gray-600 font-medium pb-3 md:pb-4 last:pb-0">
                  <span className="text-2xl font-black text-[#ff007b] flex-shrink-0 min-w-[32px]">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
