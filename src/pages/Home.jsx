import "./Home.css";
import img from "../assets/img1.png"
import book from "../assets/book.png"
import chats from "../assets/chats.png"
import courses from "../assets/courses.svg"

export default function Home({ onNavigate }) {
    return (
        <div className="home">

            {/* HERO SECTION */}
            <section className="hero">
                <img src={img} className="hero-logo" />

                <h1 className="hero-title">Unlock Your Potential</h1>

                <p className="hero-subtitle">
                    Upskill. Innovate. Connect.
                </p>

                <div className="hero-buttons">
                    <button onClick={() => onNavigate("services")}>Explore Services</button>
                    <button onClick={() => onNavigate("contact")} className="outline">
                        Contact Us
                    </button>
                </div>
            </section>

            {/* SERVICES PREVIEW */}
            <section className="services-preview">
                <div className="sp-card">
                    <img src={book} />
                    <h3>Comprehensive Courses</h3>
                </div>

                <div className="sp-card">
                    <img src={courses} />
                    <h3>Career Development</h3>
                </div>

                <div className="sp-card">
                    <img src={chats} />
                    <h3>Communication Classes</h3>
                </div>
            </section>
        </div>
    );
}
