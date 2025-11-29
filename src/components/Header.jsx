import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png"

export default function Header({ navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo" onClick={() => navigate("home")}>
        <img
          src={logo}
          alt="MindroTech Logo"
          className="logo-img"
        />
        <span className="logo-text">MindroTech</span>
      </div>

      {/* Desktop Navigation */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a onClick={() => navigate("home")}>Home</a>
        <a onClick={() => navigate("about")}>About</a>
        <a onClick={() => navigate("services")}>Services</a>
        <a onClick={() => navigate("contact")}>Contact</a>
      </nav>

      {/* Mobile Hamburger Button */}
      <div
        className={`menu-btn ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
