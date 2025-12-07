import { useState, useEffect } from "react";

import book from "../assets/book.png";
import chats from "../assets/chats.png";
import courses from "../assets/growth.png";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import hero7 from "../assets/hero7.jpg";
import hero8 from "../assets/hero8.jpg";

import logo from "../assets/logo.png";

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8];

const dynamicTexts = [
  "Unlock Your Potential",
  "Learn Premium Tech Skills",
  "Become Job‑Ready",
  "Master Data, Development & Marketing",
];

export default function Home({ onNavigate }) {
  const [index, setIndex] = useState(0);

  // auto‑slide every 5s
  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % heroImages.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImages[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 800ms ease-in-out",
        }}
      >
        {/* soft overlay for readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/35 backdrop-blur-[2px]" />

        {/* content */}
        <div className="relative z-10 flex flex-col items-center px-5 md:px-8 lg:px-10">
          {/* logo */}
          <div className="flex items-center gap-3 mb-5 md:mb-6">
            <img
              src={logo}
              alt="MindroTech logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            <span className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">
              MindroTech
            </span>
          </div>

          {/* main text */}
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 max-w-3xl leading-tight drop-shadow-lg transition-all duration-700">
            {dynamicTexts[index % dynamicTexts.length]}
          </h1>

          <p className="text-gray-100 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl">
            Upskill. Innovate. Connect. Learn industry‑ready tech skills with
            real‑world projects and placement support.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate("services")}
              className="px-8 py-3 md:px-10 md:py-4 rounded-xl font-semibold text-base md:text-lg bg-gradient-to-r from-[#ff007b] to-[#ff8a00] text-white shadow-xl hover:-translate-y-1 hover:opacity-90 transition-all duration-300"
            >
              Explore Services
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-3 md:px-10 md:py-4 rounded-xl font-semibold text-base md:text-lg border-2 border-white text-white bg-white/5 shadow-xl hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* dots */}
          <div className="flex gap-2 mt-8">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full border border-white/70 transition-all ${
                  i === index
                    ? "bg-white shadow-md scale-110"
                    : "bg-white/30 hover:bg-white/70"
                }`}
                aria-label={`Hero slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 md:py-20 lg:py-24 px-5 md:px-8 lg:px-10 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
          What You Get With Mindrotech
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
          <div className="group bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-[0_3px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#ff007b] hover:border-opacity-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff007b]/5 to-[#ff8a00]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src={book}
              alt="Comprehensive Courses"
              className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 leading-tight relative z-10">
              Comprehensive Courses
            </h3>
            <p className="text-sm md:text-base text-gray-600 relative z-10">
              Structured learning paths from fundamentals to advanced,
              project‑based training.
            </p>
          </div>

          <div className="group bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-[0_3px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#ff007b] hover:border-opacity-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff007b]/5 to-[#ff8a00]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src={courses}
              alt="Career Development"
              className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 leading-tight relative z-10">
              Career Development
            </h3>
            <p className="text-sm md:text-base text-gray-600 relative z-10">
              Resume building, mock interviews, and placement support to launch
              your career.
            </p>
          </div>

          <div className="group bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-[0_3px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#ff007b] hover:border-opacity-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff007b]/5 to-[#ff8a00]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src={chats}
              alt="Communication Classes"
              className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
            />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 leading-tight relative z-10">
              Communication Classes
            </h3>
            <p className="text-sm md:text-base text-gray-600 relative z-10">
              Improve your communication, presentation, and professional
              confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
