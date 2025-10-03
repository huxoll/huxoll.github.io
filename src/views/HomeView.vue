<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

  <div class="home-view">
    <!-- div class="hero-section">
      <h1>Welcome</h1>
      <p class="hero-description">
        Blah blah blah.
      </p>
    </div-->

    <!--div class="quick-actions">
      <h2>Quick Actions</h2>
      <div class="actions-grid">
        <RouterLink to="/resume" class="action-card">
          <div class="action-icon">📄</div>
          <h3>Resume</h3>
          <p>My work background and experience</p>
        </RouterLink>
      </div>
    </div-->

    <!-- div class="stats-section">
      <h2>System Overview</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">30</div>
          <div class="stat-label">Years of Experience</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">100+</div>
          <div class="stat-label">Projects</div>
        </div>
      </div>
    </div-->
  </div>
</template>

<style scoped>
.home-view {
  padding: 2rem;
  max-width: 1200px;
}

.hero-section {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.hero-section h1 {
  font-size: 3rem;
  color: #343a40;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-description {
  font-size: 1.25rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.quick-actions {
  margin-bottom: 3rem;
}

.quick-actions h2 {
  color: #343a40;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.action-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  text-align: center;
}

.action-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #007bff;
}

.action-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.action-card h3 {
  color: #343a40;
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.action-card p {
  color: #6c757d;
  margin: 0;
  line-height: 1.5;
}

.stats-section h2 {
  color: #343a40;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #6c757d;
  font-size: 1rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .home-view {
    padding: 1rem;
  }

  .hero-section h1 {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .actions-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
