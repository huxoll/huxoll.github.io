<template>
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
