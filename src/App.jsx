import { useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {

  // Smooth scrolling handler
  function navigate(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="app-root">
      <Header navigate={navigate} />

      {/* All sections on a single page */}
      <div className="content">

        <section id="home">
          <Home onNavigate={navigate} />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
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
