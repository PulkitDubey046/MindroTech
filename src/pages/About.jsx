export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-16 leading-relaxed">
      {/* Who We Are */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 bg-gradient-to-r from-[#ff007b] via-[#ff8a00] to-[#ff007b] bg-clip-text text-transparent tracking-tight">
        Who We Are
      </h2>
      
      <p className="text-lg md:text-xl text-gray-600 mb-20 md:mb-24 text-center max-w-3xl mx-auto leading-8">
        MindroTech is a forward-thinking EdTech and IT company dedicated to
        making education and technology accessible, practical, and impactful.
        We aim to bridge the gap between knowledge and application, empowering
        learners and businesses to thrive in a fast-evolving digital world.
      </p>

      {/* What We Do */}
      <div className="mb-20 md:mb-24">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 pl-4 md:pl-6 relative pr-4 md:pr-6">
          <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#ff007b] to-[#ff8a00] rounded-full"></span>
          What We Do
        </h3>
        <p className="text-lg md:text-xl text-gray-600 leading-8 max-w-3xl mx-auto">
          We integrate education, technology, and innovation to deliver
          comprehensive learning programs and IT solutions. From engaging digital
          courses to full-scale IT services, we provide opportunities to enhance
          your skills, advance your career, and grow your business.
        </p>
      </div>

      {/* Our Promise */}
      <div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 pl-4 md:pl-6 relative pr-4 md:pr-6">
          <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#ff007b] to-[#ff8a00] rounded-full"></span>
          Our Promise
        </h3>
        
        <ul className="space-y-4 max-w-3xl mx-auto">
          {[
            "Quality Learning: Courses designed by industry experts",
            "Real-world Skills: Training that applies directly to professional environments",
            "Modern Technology: Leveraging the latest tech for better outcomes",
            "Smart Solutions: Tailored IT services for students, startups, and enterprises",
            "Trusted Support: Guidance and assistance whenever you need it"
          ].map((promise, index) => (
            <li
              key={index}
              className="group bg-white p-6 md:p-8 rounded-2xl mx-auto mb-4 md:mb-5 w-full max-w-2xl shadow-[0_3px_10px_rgba(0,0,0,0.07)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.12)] hover:translate-x-2 transition-all duration-300 border-l-4 border-transparent bg-gradient-to-r bg-clip-border border-image-slice-1 border-image-source-linear-gradient\(45deg\,_#ff007b\,_#ff8a00\)"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-black text-[#ff007b] flex-shrink-0 min-w-[30px]">✔</span>
                <span className="text-lg md:text-xl text-gray-700 font-medium group-hover:text-gray-900">
                  {promise}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
