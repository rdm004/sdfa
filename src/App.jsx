import './App.css';
import logo from './assets/qb_transparent.png';
import navlogo from './assets/qb_transparent_website.png';


import{
    FaCheckCircle,
    FaChessKnight,

}from'react-icons/fa';

import { PiBookOpenTextFill } from "react-icons/pi";

import{GiAmericanFootballHelmet}from'react-icons/gi';

import {
    FaYoutube,
    FaInstagram,
    FaTiktok,
    FaFacebook
} from 'react-icons/fa';

function App() {
    const youtubeUrl = 'https://www.youtube.com/@SnapDecisionsFA';

    return (
        <div className="site">
            <nav className="navbar">
                <a className="brand" href="#home">
                    <span className="logo-wrap">
                        <img
                            src={navlogo}
                            alt="Snap Decisions Football Academy Logo"
                            className="logo"
                        />
                    </span>

                    <span>Snap Decisions Football Academy</span>
                </a>

                <div className="nav-links">
                    <a href="#videos">Videos</a>
                    <a href="#about">About</a>
                    <a href="#pillars">Pillars</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <main>
                {/* =========================================================
                                          HERO
                ========================================================= */}
                <section id="home" className="hero">
                    <img
                        src={logo}
                        alt=""
                        aria-hidden="true"
                        className="hero-bg-logo"
                    />

                    <div className="hero-content">
                        <p className="eyebrow">
                            Football IQ • Decision-Making • Confidence • Leadership
                        </p>

                        <h1>
                            Winning Starts <span>Before the Snap</span>
                        </h1>

                        <p className="hero-text">
                            Snap Decisions Football Academy helps athletes, parents,
                            coaches, and football fans understand the game at a deeper
                            level.
                        </p>

                        <div className="hero-buttons centered">
                            <a className="btn primary" href="#videos">
                                Watch Breakdowns
                            </a>
                        </div>
                    </div>
                </section>

                <SectionDivider logo={logo} />

                {/* =========================================================
                                           INTRO VIDEOS
                ========================================================= */}
                <section className="section intro-video">
                    <div className="section-header">
                        <p className="eyebrow">Welcome to SDFA</p>

                        <p>
                            Learn why SDFA was created and how Football IQ,
                            Decision-Making, Confidence, and Leadership can help
                            athletes better understand the game.
                        </p>
                    </div>

                    <div className="intro-video-grid">
                        <div className="intro-video-card">
                            <div className="intro-video-frame">
                                <iframe
                                    src="https://www.youtube.com/embed/H7EtHs1gw1c"
                                    title="Why Snap Decisions Football Academy Was Created"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        <div className="intro-video-card">
                            <div className="intro-video-frame">
                                <iframe
                                    src="https://www.youtube.com/embed/Em0d6LsALvQ"
                                    title="Who Snap Decisions Football Academy Is For"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <SectionDivider logo={logo} />

                {/* =========================================================
                                        FEATURED VIDEO
                    ========================================================= */}
                <section id="videos" className="section">
                    <div className="section-header">
                        <p className="eyebrow">Film Room</p>

                        <h2>Featured Breakdown</h2>

                        <p>
                            Start learning how to recognize defensive structure
                            and process what you see with simple, direct football
                            instruction.
                        </p>
                    </div>

                    <div className="video-card">
                        <div className="video-frame">
                            <iframe
                                src="https://www.youtube.com/embed/APPcuscZ5AQ"
                                title="How to Read a Defense Before the Snap"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>

                        <div className="video-info">
                            <span className="tag">Football IQ Series</span>

                            <h3>How to Read a Defense Before the Snap</h3>

                            <p>
                                Start with the safeties, check cornerback depth,
                                read their eyes, and combine the clues to understand
                                the full picture.
                            </p>

                            <a
                                className="text-link"
                                href={youtubeUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Watch more on YouTube →
                            </a>
                        </div>
                    </div>
                </section>

                <SectionDivider logo={logo} />

                {/* =========================================================
                                          ABOUT
                =========================================================*/}
                <section id="about" className="section dark">
                    <div className="two-column about-section">
                        <div>
                            <h3 className="eyebrow">About SDFA</h3>

                            <h2>
                                Understand the game <span>before the snap.</span>
                            </h2>


                        </div>

                        <div className="about-content">
                            <p>
                                Snap Decisions Football Academy was created to help
                                athletes understand the game at a deeper level. The
                                goal is not simply to teach players what to do, but
                                to help them understand why they are doing it.
                            </p>

                            <p>
                                Our curriculum focuses on pre-snap recognition,
                                defensive structure, coverages, route concepts, and
                                situational football. Through that process, we develop
                                the four pillars of SDFA: Football IQ, Decision-Making,
                                Confidence, and Leadership.
                            </p>

                            <p>
                                Athletes who understand what they are seeing are
                                better prepared to process information, make confident
                                decisions, and play faster.
                            </p>

                            <div className="about-list">
                                <span>Pre-Snap Recognition</span>
                                <span>Coverage Understanding</span>
                                <span>Defensive Structure</span>
                                <span>Situational Football</span>
                            </div>
                        </div>
                    </div>
                </section>

                <SectionDivider logo={logo} />

                {/* =========================================================
                                     MISSION AND VISION
                ========================================================= */}
                <section className="section mission-section">
                    <div className="section-header">
                        <p className="eyebrow">Our Purpose</p>
                        <h2>Why SDFA Exists</h2>
                    </div>

                    <div className="mission-grid">
                        <div className="mission-card">
                            <h3>Mission Statement</h3>

                            <p>
                                Snap Decisions Football Academy exists to help athletes,
                                parents, coaches, and football fans better understand the
                                game by simplifying complex football concepts and
                                developing Football IQ, Decision-Making, Confidence,
                                and Leadership.
                            </p>

                            <p>
                                We teach athletes how to recognize what they see,
                                understand why it matters, and apply that knowledge
                                with confidence on and off the field.
                            </p>

                            <p>
                                We believe athletes play faster, smarter, and more
                                confidently when they truly understand the game.
                            </p>
                        </div>

                        <div className="mission-card">
                            <h3>Vision Statement</h3>

                            <p>
                                Our vision is to build a community where athletes, parents, and coaches grow their
                                understanding of football together while developing Football IQ, Decision-Making,
                                Confidence, and Leadership.
                            </p>

                            <p>
                                By teaching athletes to control what they can control—their attitude, effort, and
                                discipline—we aim to make the game more accessible, more understandable, and more
                                enjoyable for everyone who loves football.
                            </p>

                            <div className="mission-quote">
                                Winning starts before the snap.
                            </div>
                        </div>
                    </div>
                </section>

                <SectionDivider logo={logo} />

                {/* =========================================================
                                       FOUR PILLARS
                =========================================================*/}
                <section id="pillars" className="section pillars-section">
                    <div className="section-header">
                        <p className="eyebrow">The SDFA Foundation</p>

                        <h2>The Four Pillars</h2>

                        <p>
                            Everything we teach is designed to help athletes understand the game,
                            make better decisions, build confidence, and become stronger leaders.
                        </p>
                    </div>

                    <div className="pillar-grid">

                        <div className="pillar-card">
                            <div className="pillar-icon pillar-icon-green">
                                <PiBookOpenTextFill/>
                            </div>

                            <h3>Football IQ</h3>

                            <p>
                                Understand defensive structure, coverages, leverage, assignments,
                                and the clues that reveal what may happen next.
                            </p>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-icon pillar-icon-blue knight-icon">
                                <FaChessKnight/>
                            </div>

                            <h3>Decision-Making</h3>

                            <p>
                                Process information, recognize available options, and make smart
                                decisions under pressure.
                            </p>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-icon pillar-icon-green">
                                <FaCheckCircle/>
                            </div>

                            <h3>Confidence</h3>

                            <p>
                                Play faster and more decisively because you understand what you
                                are seeing and trust your preparation.
                            </p>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-icon pillar-icon-blue">
                                <GiAmericanFootballHelmet/>
                            </div>

                            <h3>Leadership</h3>

                            <p>
                                Lead through communication, preparation, accountability,
                                consistency, and example.
                            </p>
                        </div>

                    </div>
                </section>

                <SectionDivider logo={logo} />

                {/* =========================================================
                                            CORE VALUES
                ========================================================= */}
                <section className="section values-section">
                    <div className="section-header">
                        <p className="eyebrow">The SDFA Standard</p>

                        <h2>Control What You Can Control</h2>

                        <p>
                            You can't control every outcome, but you can always control your
                            attitude, effort, and discipline.
                        </p>
                    </div>

                    <div className="control-grid">

                        <div className="control-card">
                            <h3>Attitude</h3>

                            <p>
                                Choose how you respond. Bring a positive mindset, be coachable,
                                and lift up those around you.
                            </p>
                        </div>

                        <div className="control-card">
                            <h3>Effort</h3>

                            <p>
                                Give your best physically and mentally. Every rep matters—
                                from practice and games to film study and preparation.
                            </p>
                        </div>

                        <div className="control-card">
                            <h3>Discipline</h3>

                            <p>
                                Do the right things consistently. Discipline is repeatedly
                                doing the things that move you closer to your goals.
                            </p>
                        </div>

                    </div>

                    <div className="team-question">

                        <p className="eyebrow">
                            One Question Every Athlete Should Ask
                        </p>

                        <h3>
                            Does it hurt the team or <span>help the team?</span>
                        </h3>

                    </div>
                </section>

                <SectionDivider logo={logo} />

                {/* =========================================================
                                       SDFA DEVELOPMENT PATH
                  ========================================================= */}
                <section className="section development-path-section">
                    <div className="section-header">
                        <p className="eyebrow">How Athletes Grow</p>

                        <h2>The SDFA Development Path</h2>

                        <p>
                            We simplify the game, build understanding one step at a time,
                            and help athletes turn knowledge into confident decisions.
                        </p>
                    </div>

                    <div className="development-board">

                        <div className="development-card">
                            <span className="development-stage">Foundation</span>
                            <h3>Learn the Concept</h3>
                            <p>
                                Break complex football concepts into simple lessons that build a strong foundation.
                            </p>
                        </div>

                        <div className="development-arrow">→</div>

                        <div className="development-card">
                            <span className="development-stage">Recognition</span>
                            <h3>Recognize the Concept</h3>
                            <p>
                                Use safeties, cornerback alignment, defensive fronts, leverage,
                                and other clues to identify what the defense may be showing.
                            </p>
                        </div>

                        <div className="development-arrow">→</div>

                        <div className="development-card">
                            <span className="development-stage">Understanding</span>
                            <h3>Understand the Structure</h3>
                            <p>
                                Understand each defender's responsibility and where space may
                                develop within the coverage.
                            </p>
                        </div>

                        <div className="development-card">
                            <span className="development-stage">Evaluate</span>
                            <h3>Evaluate the Advantage</h3>
                            <p>
                                Find leverage, recognize matchups, and determine where the defense
                                may be vulnerable.
                            </p>
                        </div>

                        <div className="development-arrow">→</div>

                        <div className="development-card">
                            <span className="development-stage">Decision</span>
                            <h3>Make the Right Decision</h3>
                            <p>
                                Process the information, trust your read, and decide without hesitation.
                            </p>
                        </div>

                        <div className="development-arrow">→</div>

                        <div className="development-card">
                            <span className="development-stage">Execution</span>
                            <h3>Execute Fast</h3>
                            <p>
                                Trust your preparation, play fast, and with confidence.
                            </p>
                        </div>

                    </div>

                    <div className="development-path-summary">
                        <p>
                            See. Think. Decide. Execute.
                        </p>
                    </div>
                </section>

                <SectionDivider logo={logo} />

                {/* =========================================================
                                            CONTACT
                 ========================================================= */}
                <section id="contact" className="section contact">
                    <p className="eyebrow">Connect</p>

                    <h2>Follow the Academy</h2>

                    <p>
                        Football IQ breakdowns, pre-snap recognition,
                        decision-making, confidence, and leadership content.
                    </p>

                    <div className="socials">
                        <a
                            href={youtubeUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
                        </a>

                        <a
                            href="https://www.tiktok.com/@snapdecisionsfa"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="TikTok"
                        >
                            <FaTiktok />
                        </a>

                        <a
                            href="https://www.instagram.com/snapdecisionsfa"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.facebook.com/profile.php?id=61585367008802"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </a>
                    </div>

                    <p className="social-handle">@snapdecisionsfa</p>

                    <div className="email-box">
                        <span className="email-icon" aria-hidden="true">
                            ⌲
                        </span>

                        <a href="mailto:coachryan@snapdecisionsfa.com">
                            coachryan@snapdecisionsfa.com
                        </a>
                    </div>
                </section>
            </main>


            {/* =========================================================
                                            FOOTER
                 ========================================================= */}
            <footer>
                <p>
                    © 2026 Snap Decisions Football Academy. Winning starts before
                    the snap!
                </p>
            </footer>
        </div>
    );
}

function SectionDivider({ logo }) {
    return (
        <div className="section-divider" aria-hidden="true">
            <div className="divider-icon">
                <img src={logo} alt="" />
            </div>
        </div>
    );
}

export default App;