import './App.css';
import logo from './assets/qb_transparent.png'
import navlogo from './assets/qb_transparent_website.png'

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
    <img src={navlogo} alt="Snap Decisions Football Academy Logo" className="logo" />
  </span>
                    <span>Snap Decisions Football Academy</span>
                </a>

                <div className="nav-links">
                    <a href="#videos">Videos</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <main>
                <section id="home" className="hero">
                    <img
                        src={logo}
                        alt="SDFA Background Logo"
                        className="hero-bg-logo"
                    />

                    <div className="hero-content">
                        <p className="eyebrow">QB Development • Football IQ • Leadership</p>

                        <h1>
                            Winning Starts <span>Before the Snap</span>
                        </h1>

                        <p className="hero-text">
                            Snap Decisions Football Academy helps quarterbacks, athletes, parents,
                            and coaches understand the game at a deeper level.
                        </p>

                        <div className="hero-buttons centered">
                            <a className="btn primary" href="#videos">Watch Breakdowns</a>
                        </div>
                    </div>
                </section>

                <div className="section-divider">
                    <div className="divider-icon">
                        <img src={logo} alt="SDFA Divider Logo" />
                    </div>
                </div>


                <section className="section intro-video">
                    <div className="section-header">
                        <p className="eyebrow">Welcome to SDFA</p>

                        <h2>Start Here</h2>

                        <p>
                            Learn why SDFA was created and who this content is built for.
                        </p>
                    </div>

                    <div className="intro-video-grid">
                        <div className="intro-video-card">
                            <h3>Why I Started SDFA</h3>

                            <div className="intro-video-frame">
                                <iframe
                                    src="https://www.youtube.com/embed/H7EtHs1gw1c"
                                    title="Why I Started SDFA"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        <div className="intro-video-card">
                            <h3>Who This Content Is For</h3>

                            <div className="intro-video-frame">
                                <iframe
                                    src="https://www.youtube.com/embed/Em0d6LsALvQ"
                                    title="Who This Content Is For"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="section-divider">
                    <div className="divider-icon">
                        <img src={logo} alt="SDFA Divider Logo" />
                    </div>
                </div>



                <section id="videos" className="section">
                    <div className="section-header">
                        <p className="eyebrow">Film Room</p>
                        <h2>Featured Breakdown</h2>
                        <p>
                            Start learning how to read defenses before the snap with simple,
                            direct QB coaching.
                        </p>
                    </div>

                    <div className="video-card">
                        <div className="video-frame">
                            <iframe
                                src="https://www.youtube.com/embed/AIWr7YJhYH0"
                                title="How to Read a Defense Before the Snap"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>

                        <div className="video-info">
                            <span className="tag">QB IQ Series</span>
                            <h3>How to Read a Defense Before the Snap</h3>
                            <p>
                                Start with the safeties, check cornerback depth, read their eyes,
                                and put it all together.
                            </p>
                            <a className="text-link" href={youtubeUrl} target="_blank" rel="noreferrer">
                                Watch more on YouTube →
                            </a>
                        </div>
                    </div>
                </section>

                <div className="section-divider">
                    <div className="divider-icon">
                        <img src={logo} alt="SDFA Divider Logo" />
                    </div>
                </div>


                <section id="about" className="section dark">
                    <div className="two-column about-section">
                        <div>

                            <h2>
                                Understand the game <span>before the snap.</span>
                            </h2>
                            <p className="about-lead">
                                Built for quarterbacks, athletes, parents, and coaches who want the game explained clearly.
                            </p>
                        </div>

                        <div className="about-content">
                            <p>
                                Snap Decisions Football Academy was created to help quarterbacks and athletes
                                understand the game at a deeper level. The goal is not just to teach players
                                what to do, but to help them understand why they are doing it.
                            </p>

                            <p>
                                We focus on football IQ, defensive recognition, decision-making, leadership,
                                confidence, and the mental side of the game. Players who can recognize what
                                they are seeing before the snap are better prepared to play fast and make
                                confident decisions.
                            </p>


                            <div className="about-list">
                                <span>Pre-snap recognition</span>
                                <span>Coverage understanding</span>
                                <span>QB decision-making</span>
                                <span>Leadership & confidence</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="section-divider">
                    <div className="divider-icon">
                        <img src={logo} alt="SDFA Divider Logo" />
                    </div>
                </div>

                <section className="section mission-section">
                    <div className="section-header">
                        <p className="eyebrow">Our Purpose</p>

                    </div>

                    <div className="mission-grid">

                        <div className="mission-card">
                            <h3>Mission Statement</h3>

                            <p>
                                Snap Decisions Football Academy exists to help athletes,
                                parents, coaches, and football fans better understand the game
                                through football IQ, leadership, confidence, and decision-making
                                development.
                            </p>

                            <p>
                                Our goal is to simplify complex football concepts, teach athletes
                                how to recognize what they see before the snap, and help players
                                develop confidence both on and off the field.
                            </p>

                            <p>
                                We believe athletes play faster, smarter, and more confidently
                                when they truly understand the game.
                            </p>
                        </div>

                        <div className="mission-card">
                            <h3>Vision Statement</h3>

                            <p>
                                Our vision is to build a community where athletes, parents,
                                and coaches can grow their understanding of football together
                                while developing leadership, confidence, discipline,
                                and football IQ.
                            </p>

                            <p>
                                We aim to make the game more accessible, more understandable,
                                and more enjoyable for everyone who loves football.
                            </p>

                            <div className="mission-quote">
                                Winning starts before the snap.
                            </div>
                        </div>

                    </div>
                </section>

                <div className="section-divider">
                    <div className="divider-icon">
                        <img src={logo} alt="SDFA Divider Logo" />
                    </div>
                </div>

                <section className="section cards-section">
                    <div className="section-header">
                        <p className="eyebrow">What We Teach</p>
                        <h2>Simple concepts.</h2>
                        <h2> Real football value.</h2>
                    </div>

                    <div className="cards">
                        <div className="card">
                            <h3>Read Defenses</h3>
                            <p>Safeties, corners, coverage structure, and pre-snap clues.</p>
                        </div>

                        <div className="card">
                            <h3>Make Faster Decisions</h3>
                            <p>Stop guessing and learn how to simplify the picture.</p>
                        </div>

                        <div className="card">
                            <h3>Lead With Confidence</h3>
                            <p>Control attitude, effort, and discipline.</p>
                        </div>
                    </div>
                </section>

                <div className="section-divider">
                    <div className="divider-icon">
                        <img src={logo} alt="SDFA Divider Logo" />
                    </div>
                </div>

                <section id="contact" className="section contact">
                    <p className="eyebrow">Connect</p>
                    <h2>Follow the academy</h2>
                    <p>New QB breakdowns, football IQ videos, and leadership content.</p>

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
                        <span className="email-icon">⌲</span>
                        <a href="mailto:snapdecisionsfa@gmail.com">
                            snapdecisionsfa@gmail.com
                        </a>
                    </div>
                </section>
            </main>

            <footer>
                <p>© 2026 Snap Decisions Football Academy. Winning starts before the snap!</p>
            </footer>
        </div>
    );
}

export default App;