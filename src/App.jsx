import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Courses from "./pages/Courses";   // ← add this
import Contact from "./pages/Contact";

function App() {
  // Smooth scrolling handler with header offset
  function navigate(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 72; // header height in px
      const rect = section.getBoundingClientRect();
      const offset = rect.top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header navigate={navigate} />

      {/* All sections on a single page */}
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <section id="home">
          <Home onNavigate={navigate} />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="courses">
          <Courses />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
