import img from "../assets/img1.png";
import book from "../assets/book.png";
import chats from "../assets/chats.png";
import courses from "../assets/growth.png";

import powerBi from "../assets/power-bi.jpeg";
import digitalMarketing from "../assets/digital-marketing-courses.jpeg";
import python from "../assets/python.jpeg";
import servicesBanner from "../assets/services.jpeg";
import seoWeb from "../assets/seoweb.jpeg";
import reactCourse from "../assets/react.jpeg";
import dataAnalyst from "../assets/data-analyst.jpeg";

export default function Home({ onNavigate }) {
  return (
    <div className="py-20 px-5 md:px-8 lg:px-10 text-center">
      {/* HERO SECTION */}
      <section className="mb-20 md:mb-24 lg:mb-28">
        <img
          src={img}
          alt="MindroTech Hero"
          className="w-full max-w-6xl mx-auto mb-8 md:mb-10 lg:mb-12 block rounded-2xl shadow-2xl"
        />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 lg:mb-8 bg-gradient-to-r from-[#ff007b] via-[#ff8a00] to-[#ff007b] bg-clip-text text-transparent tracking-tight">
          Unlock Your Potential
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 md:mb-12 lg:mb-16 leading-relaxed max-w-2xl mx-auto">
          Upskill. Innovate. Connect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto">
          <button
            onClick={() => onNavigate("services")}
            className="px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 rounded-xl font-semibold text-base md:text-lg lg:text-xl bg-gradient-to-r from-[#ff007b] to-[#ff8a00] text-white shadow-lg hover:shadow-xl hover:-translate-y-1 hover:opacity-90 transition-all duration-300 whitespace-nowrap flex-1 sm:flex-none"
          >
            Explore Services
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 rounded-xl font-semibold text-base md:text-lg lg:text-xl border-2 border-[#ff007b] text-[#ff007b] bg-white shadow-lg hover:shadow-xl hover:bg-[#ff007b] hover:text-white hover:-translate-y-1 transition-all duration-300 whitespace-nowrap flex-1 sm:flex-none"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mb-20 md:mb-24 lg:mb-28">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
          What You Get With Mindrotech
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
          <div className="group bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-[0_3px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#ff007b] hover:border-opacity-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff007b]/5 to-[#ff8a00]/5 group-hover:opacity-100 transition-opacity" />
            <img
              src={book}
              alt="Comprehensive Courses"
              className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 leading-tight relative z-10">
              Comprehensive Courses
            </h3>
            <p className="text-sm md:text-base text-gray-600 relative z-10">
              Structured learning paths from fundamentals to advanced projects.
            </p>
          </div>

          <div className="group bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-[0_3px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#ff007b] hover:border-opacity-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff007b]/5 to-[#ff8a00]/5 group-hover:opacity-100 transition-opacity" />
            <img
              src={courses}
              alt="Career Development"
              className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 leading-tight relative z-10">
              Career Development
            </h3>
            <p className="text-sm md:text-base text-gray-600 relative z-10">
              Mentorship, projects, and placement support to launch your career.
            </p>
          </div>

          <div className="group bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-[0_3px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#ff007b] hover:border-opacity-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff007b]/5 to-[#ff8a00]/5 group-hover:opacity-100 transition-opacity" />
            <img
              src={chats}
              alt="Communication Classes"
              className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 leading-tight relative z-10">
              Communication Classes
            </h3>
            <p className="text-sm md:text-base text-gray-600 relative z-10">
              Build soft skills and confidence for interviews and workplace success.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES GALLERY */}
      <section className="mt-10 md:mt-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-8 md:mb-10 bg-gradient-to-r from-[#ff007b] via-[#ff8a00] to-[#ff007b] bg-clip-text text-transparent">
          Featured Courses & Programs
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-8 md:mb-10">
          Learn in-demand skills with job-focused programs in data, development, and digital marketing.
        </p>

        <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-2">
          <img
            src={powerBi}
            alt="Master Power BI - Mindrotech Power BI Courses"
            className="w-full rounded-3xl shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
          />
          <img
            src={digitalMarketing}
            alt="Digital Marketing Courses - Mindrotech"
            className="w-full rounded-3xl shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
          />
          <img
            src={python}
            alt="Master Python for Data Science - Mindrotech"
            className="w-full rounded-3xl shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
          />
          <img
            src={dataAnalyst}
            alt="Master Data Analyst - Mindrotech"
            className="w-full rounded-3xl shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
          />
          <img
            src={reactCourse}
            alt="Learn React Development - Mindrotech"
            className="w-full rounded-3xl shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
          />
          <img
            src={seoWeb}
            alt="Website Design & SEO Services - Mindrotech"
            className="w-full rounded-3xl shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
          />
          <img
            src={servicesBanner}
            alt="Mindrotech Digital Growth Services"
            className="w-full rounded-3xl shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 md:col-span-2"
          />
        </div>
      </section>
    </div>
  );
}
