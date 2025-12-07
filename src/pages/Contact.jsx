import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus("Sending...")

    emailjs
      .send(
        "service_meizt2n",
        "template_zfeqqul",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "MYsic2vqWBJAmAxM3"
      )
      .then(
        () => {
          setStatus("Message sent successfully!")
          setForm({ name: '', email: '', message: '' })
        },
        (error) => {
          console.error(error)
          setStatus("Failed to send message. Try again.")
        }
      )
  }

  return (
    <main className="max-w-3xl mx-auto px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-16 text-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-10 lg:mb-12 bg-gradient-to-r from-[#ff007b] via-[#ff8a00] to-[#ff007b] bg-clip-text text-transparent tracking-tight">
        Contact Us 
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto">
        We'd love to hear from you! Whether you have questions about our courses, 
        need assistance, or want to discuss custom IT solutions, our team is here to help.
      </p>
      
      <div className="space-y-3 mb-12 md:mb-16 lg:mb-20 max-w-2xl mx-auto">
        <p className="text-lg md:text-xl text-gray-600">
          📧 Email:{" "}
          <a
            href="mailto:info@mindrotech.com"
            className="font-semibold text-gray-800 hover:text-[#ff007b] underline underline-offset-4"
          >
            info@mindrotech.com
          </a>
        </p>
        <p className="text-lg md:text-xl text-gray-600">📍 Location: A-103 block Noida Sector 63 </p>
        <p className="text-lg md:text-xl text-gray-600">Pin Code- 201301, India</p>
      </div>

      <form className="bg-white p-8 md:p-12 lg:p-14 rounded-3xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] max-w-2xl mx-auto text-left" onSubmit={handleSubmit}>
        {/* Name */}
        <label className="block mb-4 md:mb-5">
          <span className="block text-lg md:text-xl font-semibold text-gray-800 mb-3">Name</span>
          <input 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            required 
            className="w-full mt-2 px-5 py-4 md:py-5 rounded-2xl border border-gray-300 text-lg md:text-xl focus:outline-none focus:border-[#ff007b] focus:ring-4 focus:ring-[#ff007b]/25 focus:ring-offset-0 transition-all duration-300 placeholder-gray-500"
            placeholder="Your full name"
          />
        </label>

        {/* Email */}
        <label className="block mb-4 md:mb-5">
          <span className="block text-lg md:text-xl font-semibold text-gray-800 mb-3">Email</span>
          <input 
            name="email" 
            type="email"
            value={form.email} 
            onChange={handleChange} 
            required 
            className="w-full mt-2 px-5 py-4 md:py-5 rounded-2xl border border-gray-300 text-lg md:text-xl focus:outline-none focus:border-[#ff007b] focus:ring-4 focus:ring-[#ff007b]/25 focus:ring-offset-0 transition-all duration-300 placeholder-gray-500"
            placeholder="your@email.com"
          />
        </label>

        {/* Message */}
        <label className="block mb-8 md:mb-10">
          <span className="block text-lg md:text-xl font-semibold text-gray-800 mb-3">Message</span>
          <textarea 
            name="message" 
            rows={5} 
            value={form.message} 
            onChange={handleChange} 
            required 
            className="w-full mt-2 px-5 py-4 md:py-5 rounded-2xl border border-gray-300 text-lg md:text-xl resize-vertical focus:outline-none focus:border-[#ff007b] focus:ring-4 focus:ring-[#ff007b]/25 focus:ring-offset-0 transition-all duration-300 placeholder-gray-500"
            placeholder="Tell us about your project or questions..."
          />
        </label>

        {/* Submit Button */}
        <button 
          type="submit"
          className="w-full mt-6 md:mt-8 py-5 md:py-6 px-8 rounded-3xl font-semibold text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-[#ff007b] via-[#ff8a00] to-[#ff007b] text-white shadow-xl hover:shadow-[0_6px_15px_rgba(255,92,0,0.3)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer active:scale-[0.98]"
        >
          Submit
        </button>
      </form>

      {/* Status Message */}
      {status && (
        <p className="mt-8 md:mt-10 p-6 md:p-8 bg-gray-50 border-2 border-gray-200 rounded-2xl text-lg md:text-xl font-semibold text-gray-800 max-w-2xl mx-auto">
          {status}
        </p>
      )}


      {/* Divider between form and career section */}
      <div className="mt-16 mb-10 h-px max-w-2xl mx-auto bg-gradient-to-r from-transparent via-gray-300 to-transparent" />  

      {/* Career Development & Placement Support Section */}
      <section className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-md border-l-4 border-transparent">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          🎯 Career Development &amp; Placement Support
        </h3>
        <p className="text-gray-700 mb-4">
          At Mindrotech Academy, our commitment to you doesn't end when your course finishes. 
          We help you transition from student to working professional with end-to-end career support.
        </p>

        {/* 1. Personalized Career Development */}
        <h4 className="text-xl font-semibold mt-4 mb-2">
          1. 💼 Personalized Career Development
        </h4>
        <ul className="list-none space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">Resume &amp; Portfolio Building:</span> 
            &nbsp;We help you build an industry-ready resume and portfolio that showcases 
            your Mindrotech projects (React, SQL, Power BI, etc.) and practical skills.
          </li>
          <li>
            <span className="font-semibold">Interview Preparation:</span> 
            &nbsp;Mock interviews covering technical topics (Python, SQL, problem-solving) 
            and behavioral questions so you are fully interview-ready.
          </li>
          <li>
            <span className="font-semibold">LinkedIn &amp; Professional Branding:</span> 
            &nbsp;Learn how to optimize your LinkedIn profile and use networking strategies 
            to attract recruiters and new opportunities.
          </li>
          <li>
            <span className="font-semibold">Salary Negotiation Workshops:</span> 
            &nbsp;Gain strategies and confidence to negotiate your starting salary and grow your earning potential.
          </li>
        </ul>

        {/* 2. Dedicated Placement Assistance */}
        <h4 className="text-xl font-semibold mt-6 mb-2">
          2. 🤝 Dedicated Placement Assistance
        </h4>
        <ul className="list-none space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">Exclusive Job Board:</span> 
            &nbsp;Access curated job and internship openings shared directly with Mindrotech Academy.
          </li>
          <li>
            <span className="font-semibold">Hiring Partner Network:</span> 
            &nbsp;Connect with companies—from startups to established organizations—actively seeking our graduates.
          </li>
          <li>
            <span className="font-semibold">Recruitment Drives &amp; Career Fairs:</span> 
            &nbsp;Participate in exclusive virtual and in-person hiring events hosted by Mindrotech.
          </li>
          <li>
            <span className="font-semibold">Post-Placement Follow-up:</span> 
            &nbsp;Even after you get hired, we stay in touch to support you during your first months in the job.
          </li>
        </ul>
      </section>
    </main>
  )
}
