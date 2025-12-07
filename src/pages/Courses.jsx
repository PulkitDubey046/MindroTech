// src/pages/Courses.jsx
import powerBi from "../assets/power-bi.jpeg";
import digitalMarketing from "../assets/digital-marketing-courses.jpeg";
import python from "../assets/python.jpeg";
import servicesBanner from "../assets/services.jpeg";
import seoWeb from "../assets/seoweb.jpeg";
import reactCourse from "../assets/react.jpeg";
import dataAnalyst from "../assets/data-analyst.jpeg";

export default function Courses() {
  return (
    <main className="py-20 px-5 md:px-8 lg:px-10 text-center">
      <section className="max-w-6xl mx-auto">
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
    </main>
  );
}
