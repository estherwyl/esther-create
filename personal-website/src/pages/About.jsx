import './About.css';

export default function About() {
  return (
    <div className="page">
      <div className="container">
        <div className="about-layout">

          {/* ── Left: Text ── */}
          <div className="about-text">

            <h1 className="about-title">Hi, I'm Esther</h1>
            <p className="about-subtitle">
              Product leader and creative builder exploring AI, storytelling, and human connection.
            </p>

            <div className="about-body">
              <p>
                Like many people who build their careers in tech, I once believed success followed a very
                clear path: work hard, climb the ladder, and keep moving toward bigger titles and
                responsibilities.
              </p>

              <p>
                Earlier in my career, I pursued what I thought was the pinnacle of that path — building
                digital products at scale.
              </p>

              <p>
                Over the past decade, I worked across consulting and startups, eventually leading product
                initiatives across multiple markets at a Southeast Asian unicorn. Along the way, I helped
                build platforms used by thousands of customers and teams.
              </p>

              <p>
                But after years of building and scaling products, I began asking myself a deeper question:
              </p>

              <blockquote className="about-quote">
                "What kind of work do I actually want to do?"
              </blockquote>

              <p>
                Not just what I'm good at.<br />
                Not just what looks impressive on paper.<br />
                But work that feels meaningful, creative, and aligned with who I am.
              </p>

              <p>Once I clarified what mattered to me, I began exploring new directions:</p>

              <ul className="about-list">
                <li>Learning how to build AI-powered products from scratch</li>
                <li>Experimenting with rapid prototypes and hackathon projects</li>
                <li>Writing about technology, creativity, and personal growth</li>
                <li>Exploring how storytelling and technology can create richer human experiences</li>
              </ul>

              <p>Today, my work sits at the intersection of three things:</p>

              <div className="about-pillars">
                <div className="about-pillar">
                  <span className="about-pillar__label">AI</span>
                  <p>Experimenting with new ways to build products using generative AI.</p>
                </div>
                <div className="about-pillar">
                  <span className="about-pillar__label">Storytelling</span>
                  <p>Exploring how technology can transform information into engaging narratives.</p>
                </div>
                <div className="about-pillar">
                  <span className="about-pillar__label">Human connection</span>
                  <p>Building ideas and communities that help people understand themselves and each other better.</p>
                </div>
              </div>

              <p className="about-lab-intro">This website is my creative lab.</p>

              <p>A place where I document:</p>
              <ul className="about-list">
                <li>AI projects and experiments I'm building</li>
                <li>Ideas I'm exploring through writing</li>
                <li>Reflections on technology, work, and life</li>
              </ul>

              <p className="about-closing">
                If something here resonates with you, feel free to reach out.
              </p>
            </div>

          </div>

          {/* ── Right: Portrait placeholder ── */}
          <div className="about-portrait-col">
            <div className="about-portrait">
              <div className="about-portrait__placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Portrait photo</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
