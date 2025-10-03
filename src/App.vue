<script setup></script>

<template>
  <div class="site">
    <header class="hero">
      <nav class="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a class="cv" href="/jgardner-resume-2022-06.html">Experience / CV</a>
      </nav>
      <div class="hero-inner">
        <h1>John Huxoll Gardner</h1>
        <p class="tagline">Engineer • Builder • Problem Solver</p>
        <p class="lede">
          I design and build pragmatic software with a focus on clarity, performance, and delightful
          user experiences.
        </p>
        <div class="cta">
          <a href="#projects" class="btn primary">See my work</a>
          <a href="#contact" class="btn">Get in touch</a>
        </div>
      </div>
    </header>

    <main>
      <section id="about" class="section">
        <div class="container">
          <h2>About</h2>
          <p>
            I'm a hands-on engineer who enjoys shipping end-to-end solutions — from thoughtful UX to
            robust backend systems. I value strong fundamentals, maintainable code, and clear
            communication.
          </p>
          <ul class="skills">
            <li>TypeScript / JavaScript</li>
            <li>Vue / React</li>
            <li>Node / Python</li>
            <li>APIs / Databases</li>
            <li>Cloud / CI-CD</li>
          </ul>
        </div>
      </section>

      <section id="projects" class="section alt">
        <div class="container">
          <h2>Selected Projects</h2>
          <div class="grid">
            <article class="card">
              <h3>Austin Eat Outside</h3>
              <p>
                Local restaurant discovery with outdoor seating focus. Built with a modern Vue
                frontend and a Python API.
              </p>
              <div class="meta"><span>Vue</span><span>Python</span><span>SQLite</span></div>
            </article>
            <article class="card">
              <h3>Portfolio Starter</h3>
              <p>
                This site — a clean, responsive starter showcasing modern design patterns and
                accessible components.
              </p>
              <div class="meta"><span>Vue</span><span>Vite</span><span>CSS</span></div>
            </article>
            <article class="card">
              <h3>Open Source</h3>
              <p>
                Contributions across tooling and developer experience: Software, Automation, and
                Design, CI and CD, and documentation.
              </p>
              <div class="meta"><span>Tooling</span><span>DX</span><span>Docs</span></div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container">
          <h2>Contact</h2>
          <p>
            Interested in collaborating or have an opportunity in mind? I'm always open to
            thoughtful conversations.
          </p>
          <div class="contact-links">
            <a class="btn primary" href="mailto:gab.20.huxoll@spamgourmet.com">Email me</a>
            <!-- a class="btn" href="https://www.linkedin.com/in/jhuxoll" target="_blank" rel="noopener"
              >LinkedIn</a
          -->
            <a class="btn" href="https://github.com/huxoll" target="_blank" rel="noopener"
              >GitHub</a
            >
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <span>© {{ new Date().getFullYear() }} Justin Gardner</span>
        <a href="/jgardner-resume-2022-06.docx" target="_blank" rel="noopener">Download CV</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Layout */
.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #0b1020 0%, #0a0d18 60%, #0b1020 100%);
  color: #e7e9ee;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero {
  position: relative;
  padding: 24px 0 72px;
  background:
    radial-gradient(1000px 400px at 50% -10%, rgba(99, 102, 241, 0.25), transparent 60%),
    radial-gradient(800px 300px at 0% 0%, rgba(56, 189, 248, 0.18), transparent 60%),
    radial-gradient(800px 300px at 100% 0%, rgba(16, 185, 129, 0.18), transparent 60%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  padding: 0 20px;
}

.nav a {
  color: #cdd3e1;
  text-decoration: none;
  font-weight: 500;
}

.nav a:hover {
  color: #ffffff;
}

.nav .cv {
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
}

.hero-inner {
  max-width: 1000px;
  margin: 56px auto 0;
  padding: 0 20px;
  text-align: left;
}

.hero h1 {
  font-size: 48px;
  line-height: 1.1;
  margin: 0 0 8px;
}

.tagline {
  color: #9aa3b2;
  margin: 0 0 12px;
}

.lede {
  color: #cdd3e1;
  max-width: 680px;
}

.cta {
  margin-top: 20px;
  display: flex;
  gap: 12px;
}

.btn {
  display: inline-block;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #e7e9ee;
  text-decoration: none;
  transition: all 160ms ease;
}

.btn:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.28);
}

.btn.primary {
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  border: none;
}

/* Sections */
.section {
  padding: 64px 0;
}
.section.alt {
  background: rgba(255, 255, 255, 0.02);
}

.section h2 {
  margin: 0 0 16px;
  font-size: 28px;
}

.section p {
  color: #cdd3e1;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
  padding: 0;
  list-style: none;
}

.skills li {
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #cdd3e1;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
}

.card {
  grid-column: span 12;
  background: rgba(12, 16, 32, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 18px;
}

@media (min-width: 720px) {
  .card {
    grid-column: span 4;
  }
}

.card h3 {
  margin: 0 0 8px;
}
.card p {
  margin: 0 0 12px;
  color: #cdd3e1;
}

.meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.meta span {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: #cdd3e1;
}

/* Contact */
.contact-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 16px;
}

/* Footer */
.footer {
  margin-top: auto;
  padding: 24px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: #9aa3b2;
}

.footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
