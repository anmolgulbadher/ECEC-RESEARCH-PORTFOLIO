document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.getElementById('main-content');
  
  // Render all contexts to the DOM, initially hidden except 'home'
  // But wait, 'home' is just the hero section which is already in index.html.
  // We will generate the 5 Context tabs and the References tab.
  
  let htmlString = '';
  
  portfolioData.contexts.forEach(context => {
    htmlString += `
      <section class="tab-pane" id="${context.id}">
        
        <div class="section-header">
          <div class="section-icon-wrapper">${context.icon}</div>
          <h2 class="section-title">${context.title}</h2>
          <p class="section-desc">${context.desc}</p>
        </div>

        <!-- A. Understanding the Context -->
        <article class="content-block">
          <h3 class="block-title">🧠 A. Understanding the Context</h3>
          <div class="two-col-text">
            <div>
              <h4>Definition</h4>
              <p>${context.A.definition}</p>
              <h4 style="margin-top: 1rem;">Relevance to ECEC</h4>
              <p>${context.A.relevance}</p>
            </div>
            <div>
              <h4>Sociological Theories</h4>
              <p>${context.A.theories}</p>
              <h4 style="margin-top: 1rem;">Australian Perspective</h4>
              <p>${context.A.australian}</p>
            </div>
          </div>
        </article>

        <!-- B. Impact on Children and Families -->
        <article class="content-block">
          <h3 class="block-title">👶 B. Impact on Children & Families</h3>
          <ul class="icon-list">
            ${context.B.points.map(point => `<li>${point}</li>`).join('')}
          </ul>
        </article>

        <!-- Image Placeholder -->
        <img src="${context.image}" alt="${context.title} Visual Placeholder" class="placeholder-img" style="margin-bottom: var(--spacing-xl);">

        <!-- C. Social Policy -->
        <article class="content-block">
          <h3 class="block-title">📊 C. Social Policy & Australian Responses</h3>
          <ul class="icon-list">
            ${context.C.policies.map(policy => `<li><strong>${policy.split(':')[0]}:</strong> ${policy.split(':')[1] || ''}</li>`).join('')}
          </ul>
          <div class="placeholder-graph">
            <span style="font-size: 0.85rem; font-weight: normal; margin-top: 0.5rem; display: block; color: var(--color-primary-dark);">${context.C.stats}</span>
          </div>
          <p style="margin-top: 1rem;"><strong>Systemic Impact:</strong> ${context.C.impact}</p>
        </article>

        <!-- D. Strategies for Practice -->
        <article class="content-block" style="background: transparent; border: none; box-shadow: none; padding: 0;">
          <h3 class="block-title" style="border: none; margin-bottom: var(--spacing-sm);">🛠 D. Strategies for Practice</h3>
          <p style="margin-bottom: var(--spacing-md);">How educators apply these strategies practically in an early childhood setting.</p>
          <div class="grid-cards">
            ${context.D.map(strategy => `
              <div class="card">
                <div class="card-icon">🎯</div>
                <h4>${strategy.title}</h4>
                <p style="font-size: 0.9rem;">${strategy.desc}</p>
                <div class="card-subtitle">In Practice</div>
                <p style="font-size: 0.85rem; color: var(--color-text-main);">${strategy.example}</p>
              </div>
            `).join('')}
          </div>
        </article>

        <!-- E. Community Partnerships -->
        <article class="content-block" style="background: transparent; border: none; box-shadow: none; padding: 0; margin-top: var(--spacing-xl);">
          <h3 class="block-title" style="border: none; margin-bottom: var(--spacing-sm);">🤝 E. Community & Professional Partnerships</h3>
          <p style="margin-bottom: var(--spacing-md);">Crucial collaborations with external organizations and professionals.</p>
          <div class="grid-cards">
            ${context.E.map(org => `
              <div class="card">
                <div class="card-icon">🏛</div>
                <h4>${org.name}</h4>
                <div class="card-subtitle">${org.role}</div>
                <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--color-text-main);">${org.collaboration}</p>
              </div>
            `).join('')}
          </div>
        </article>

        <!-- F. Resources -->
        <article class="content-block">
          <h3 class="block-title">📖 F. Resources for Educators & Children</h3>
          
          <div class="resources-grid">
            <div>
              <h4 style="color: var(--color-primary-dark); margin-bottom: 1rem; border-bottom: 1px solid var(--color-border); padding-bottom: 0.5rem;">Websites & Programs</h4>
              ${context.F.websites.map(res => `
                <div style="margin-bottom: 1rem;">
                  <strong style="color: var(--color-text-main);">${res.title}</strong>
                  <p style="font-size: 0.85rem; margin-bottom: 0.2rem;">Purpose: ${res.purpose}</p>
                  <p style="font-size: 0.85rem; color: var(--color-primary-dark);"><em>Builds empathy: ${res.empathy}</em></p>
                </div>
              `).join('')}
            </div>

            <div>
              <h4 style="color: var(--color-primary-dark); margin-bottom: 1rem; border-bottom: 1px solid var(--color-border); padding-bottom: 0.5rem;">Storybooks (0-5 Years)</h4>
              ${context.F.books.map(res => `
                <div style="margin-bottom: 1rem;">
                  <strong style="color: var(--color-text-main);">${res.title}</strong>
                  <p style="font-size: 0.85rem; margin-bottom: 0.2rem;">Purpose: ${res.purpose}</p>
                  <p style="font-size: 0.85rem; color: var(--color-primary-dark);"><em>Builds empathy: ${res.empathy}</em></p>
                </div>
              `).join('')}
            </div>

            <div>
              <h4 style="color: var(--color-primary-dark); margin-bottom: 1rem; border-bottom: 1px solid var(--color-border); padding-bottom: 0.5rem;">Videos / Podcasts</h4>
              ${context.F.videos.map(res => `
                <div style="margin-bottom: 1rem;">
                  <strong style="color: var(--color-text-main);">${res.title}</strong>
                  <p style="font-size: 0.85rem; margin-bottom: 0.2rem;">Purpose: ${res.purpose}</p>
                  <p style="font-size: 0.85rem; color: var(--color-primary-dark);"><em>Builds empathy: ${res.empathy}</em></p>
                </div>
              `).join('')}
            </div>
          </div>
        </article>

      </section>
    `;
  });

  // Render References Page
  htmlString += `
    <section class="tab-pane" id="references">
      <div class="section-header">
        <div class="section-icon-wrapper">📑</div>
        <h2 class="section-title">References</h2>
        <p class="section-desc">Academic citations in APA 7 formatting.</p>
      </div>
      <article class="content-block">
        <ul class="reference-list">
          ${portfolioData.references.map(ref => `<li>${ref}</li>`).join('')}
        </ul>
      </article>
    </section>
  `;

  // Inject into DOM
  mainContent.innerHTML = htmlString;
});

// Tab Switching logic
window.switchTab = function(tabId) {
  // Hide all sections inside main content
  const panes = document.querySelectorAll('.tab-pane');
  panes.forEach(pane => pane.classList.remove('active'));

  // Handle Home specifically (it's outside main)
  const heroSection = document.getElementById('home');
  const mainContent = document.getElementById('main-content');
  
  if (tabId === 'home') {
    heroSection.style.display = 'flex';
    mainContent.style.display = 'none';
  } else {
    heroSection.style.display = 'none';
    mainContent.style.display = 'block';
    // Show specific tab
    const targetPane = document.getElementById(tabId);
    if(targetPane) targetPane.classList.add('active');
  }

  // Update Navbar Active State
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-target') === tabId) {
      item.classList.add('active');
    }
  });

  // Scroll to top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
