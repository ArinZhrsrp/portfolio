(function () {
  const data = window.portfolioData;

  if (!data) {
    return;
  }

  const icons = {
    device:
      '<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M12 17h.01" /></svg>',
    layers:
      '<svg viewBox="0 0 24 24"><path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" /><path d="m3 12 9 4.5 9-4.5" /><path d="m3 16.5 9 4.5 9-4.5" /></svg>',
    spark:
      '<svg viewBox="0 0 24 24"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /></svg>',
    briefcase:
      '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></svg>',
    star:
      '<svg viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>',
    pencil:
      '<svg viewBox="0 0 24 24"><path d="M12 20h9" /><path d="m16.5 3.5 4 4L8 20l-5 1 1-5 12.5-12.5Z" /></svg>',
    arrow:
      '<svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>',
    arrowUp:
      '<svg viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>',
    external:
      '<svg viewBox="0 0 24 24"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>',
    code:
      '<svg viewBox="0 0 24 24"><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m14 4-4 16" /></svg>',
  };

  const platformOrder = {
    mobile: 0,
    web: 1,
    desktop: 2,
  };

  function iconSvg(type) {
    return icons[type] || icons.device;
  }

  function isExternalLink(href) {
    return /^https?:\/\//i.test(href);
  }

  function titleCase(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function sortPlatforms(platforms) {
    return [...platforms].sort((left, right) => {
      const leftRank = platformOrder[left] ?? 99;
      const rightRank = platformOrder[right] ?? 99;
      return leftRank - rightRank || left.localeCompare(right);
    });
  }

  function uniquePlatforms(projects) {
    return sortPlatforms(new Set(projects.flatMap((project) => project.platforms)));
  }

  function actionLink(label, href, className, iconType) {
    if (!href) {
      return "";
    }

    const target = isExternalLink(href) ? ' target="_blank" rel="noreferrer"' : "";

    return `
      <a class="${className}" href="${href}"${target}>
        ${label}
        <span class="icon" aria-hidden="true">${iconSvg(iconType)}</span>
      </a>
    `;
  }

  function renderStats() {
    const grid = document.getElementById("statsGrid");

    if (!grid) {
      return;
    }

    grid.innerHTML = data.stats
      .map(
        (item) => `
          <div class="stat-chip">
            <p class="stat-value">${item.value}</p>
            <p class="stat-label">${item.label}</p>
          </div>
        `,
      )
      .join("");
  }

  function renderSkills() {
    const grid = document.getElementById("skillsGrid");

    if (!grid) {
      return;
    }

    grid.innerHTML = data.skills
      .map(
        (skill) => `
          <article class="skill-card">
            <div class="icon-box icon" aria-hidden="true">${iconSvg(skill.icon)}</div>
            <div class="skill-copy">
              <p class="skill-name">${skill.label}</p>
              <p class="skill-note">Refined, product-focused execution</p>
            </div>
          </article>
        `,
      )
      .join("");
  }

  function renderExperience() {
    const list = document.getElementById("experienceList");

    if (!list) {
      return;
    }

    list.innerHTML = data.experience
      .map(
        (item) => `
          <article class="experience-card">
            <div class="experience-line"></div>
            <div class="experience-dot"></div>
            <div class="experience-head">
              <div>
                <h4 class="experience-role">${item.role}</h4>
                <p class="experience-company">${item.company}</p>
              </div>
              <span class="experience-period">${item.period}</span>
            </div>
            <p class="experience-copy">${item.detail}</p>
          </article>
        `,
      )
      .join("");
  }

  function renderInvolvement() {
    const grid = document.getElementById("involvementGrid");

    if (!grid) {
      return;
    }

    grid.innerHTML = data.involvement
      .map(
        (item) => `
          <article class="article-card">
            <div class="article-head">
              <div>
                <h4 class="article-title">${item.title}</h4>
                <p class="article-date">${item.label}</p>
              </div>
              <div class="article-icon-box icon" aria-hidden="true">
                ${iconSvg("pencil")}
              </div>
            </div>
            <p class="article-copy">${item.excerpt}</p>
          </article>
        `,
      )
      .join("");
  }

  function projectPreviewMarkup(project) {
    const accentClass = project.accent === "coral" ? "coral-soft" : "teal-soft";
    const media = project.image
      ? `<img class="project-preview-image" src="${project.image}" alt="${project.title} project preview" />`
      : `<div class="project-preview-placeholder">${project.title}</div>`;

    return `
      <div class="project-preview ${accentClass}">
        <div class="project-preview-inner project-preview-media">
          ${media}
        </div>
      </div>
    `;
  }

  function projectBadgeMarkup(project) {
    const ownershipTone = project.ownership === "work" ? "teal" : "coral";
    const platformBadges = project.platforms
      .map((platform) => `<span class="project-badge neutral">${titleCase(platform)}</span>`)
      .join("");

    return `
      <div class="project-badge-row">
        <span class="project-badge ${ownershipTone}">${titleCase(project.ownership)}</span>
        ${platformBadges}
      </div>
    `;
  }

  function projectActionsMarkup(project, ownership) {
    if (ownership === "work") {
      return project.siteLink
        ? actionLink("View Site", project.siteLink, "action-btn teal", "external")
        : '<span class="private-pill">Private Deployment</span>';
    }

    const actions = [];
    const codeHref = project.repoLink || data.site.github;

    if (codeHref) {
      actions.push(actionLink("View Code", codeHref, "action-btn", "code"));
    }

    if (project.siteLink) {
      const tone = project.accent === "coral" ? "coral" : "teal";
      actions.push(actionLink("Visit Site", project.siteLink, `action-btn ${tone}`, "external"));
    }

    return actions.join("") || '<span class="private-pill">Links coming soon</span>';
  }

  function projectCardMarkup(project, ownership) {
    const tagClass = project.accent === "coral" ? "coral" : "teal";

    return `
      <article class="project-card">
        ${projectPreviewMarkup(project)}
        ${projectBadgeMarkup(project)}
        <h4 class="project-name">${project.title}</h4>
        <div class="project-detail-stack">
          <div class="project-detail-line">
            <span class="project-detail-label">Type</span>
            <span class="project-detail-value">${project.category}</span>
          </div>
          <div class="project-detail-line">
            <span class="project-detail-label">Year</span>
            <span class="project-detail-value">${project.year}</span>
          </div>
          <div class="project-tech-row">
            ${project.stats.map((stat) => `<span class="tag ${tagClass}">${stat}</span>`).join("")}
          </div>
        </div>
        <p class="project-copy">${project.description}</p>
        <div class="project-actions">
          ${projectActionsMarkup(project, ownership)}
        </div>
      </article>
    `;
  }

  function renderProjectDirectory() {
    const grid = document.getElementById("projectDirectoryGrid");

    if (!grid) {
      return;
    }

    grid.innerHTML = Object.entries(data.collections)
      .map(([ownership, collection]) => {
        const projects = data.projects.filter((project) => project.ownership === ownership);
        const platforms = uniquePlatforms(projects);
        const tone = collection.accent;

        return `
          <article class="project-directory-card">
            <div class="project-directory-head">
              <span class="pill ${tone}">${collection.eyebrow}</span>
              <span class="meta-pill">${projects.length} ${projects.length === 1 ? "project" : "projects"}</span>
            </div>
            <h4 class="project-name">${collection.title}</h4>
            <p class="project-copy">${collection.description}</p>
            <div class="project-badge-row">
              ${platforms.map((platform) => `<span class="project-badge neutral">${titleCase(platform)}</span>`).join("")}
            </div>
            <div class="project-directory-list">
              ${projects
                .map(
                  (project) => `
                    <div class="project-directory-item">
                      <span>${project.title}</span>
                      <span>${project.platforms.map(titleCase).join(", ")}</span>
                    </div>
                  `,
                )
                .join("")}
            </div>
            <div class="project-actions">
              ${actionLink(collection.cta, collection.href, `action-btn ${tone}`, "arrow")}
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderProjectsPage() {
    const ownership = document.body.dataset.projectOwnership;
    const grid = document.getElementById("projectsGrid");
    const filters = document.getElementById("projectFilters");

    if (!ownership || !grid) {
      return;
    }

    const projects = data.projects.filter((project) => project.ownership === ownership);
    const platformFilters = ["all", ...uniquePlatforms(projects)];
    let activeFilter = "all";

    const renderGrid = () => {
      const visibleProjects =
        activeFilter === "all"
          ? projects
          : projects.filter((project) => project.platforms.includes(activeFilter));

      grid.innerHTML = visibleProjects.length
        ? visibleProjects.map((project) => projectCardMarkup(project, ownership)).join("")
        : `
            <article class="project-empty">
              <h4 class="project-name">No projects in this filter yet</h4>
              <p class="project-copy">
                Try another platform filter or add a new project entry in
                <code>assets/js/portfolio-data.js</code>.
              </p>
            </article>
          `;
    };

    if (filters) {
      filters.innerHTML = platformFilters
        .map(
          (filter) => `
            <button
              class="filter-pill${filter === "all" ? " active" : ""}"
              type="button"
              data-filter="${filter}"
            >
              ${filter === "all" ? "All Platforms" : titleCase(filter)}
            </button>
          `,
        )
        .join("");

      filters.addEventListener("click", (event) => {
        const button = event.target.closest("[data-filter]");

        if (!button) {
          return;
        }

        activeFilter = button.dataset.filter;

        filters.querySelectorAll("[data-filter]").forEach((item) => {
          item.classList.toggle("active", item === button);
        });

        renderGrid();
      });
    }

    renderGrid();
  }

  function setupHeroImage() {
    const placeholder = document.getElementById("heroImagePlaceholder");

    if (!placeholder) {
      return;
    }

    if (data.site.heroImage) {
      placeholder.innerHTML = `<img src="${data.site.heroImage}" alt="${data.site.heroImageAlt || data.site.heroImageLabel}" />`;
      return;
    }

    placeholder.innerHTML = `<span>${data.site.heroImageLabel}</span>`;
  }

  function setupContactForm() {
    const form = document.getElementById("contactForm");

    if (!form) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const name = formData.get("name") || "";

      alert(
        `Thanks${name ? ", " + name : ""}! Replace this alert with your own email or backend integration.`,
      );
    });
  }

  function setActiveNav() {
    const activeKey = document.body.dataset.page;

    document.querySelectorAll(".nav-link[data-nav]").forEach((link) => {
      link.classList.toggle("active", link.dataset.nav === activeKey);
    });
  }

  function setupMobileMenu() {
    const topbar = document.querySelector(".topbar");
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("siteNav");

    if (!topbar || !toggle || !nav) {
      return;
    }

    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        toggle.getAttribute("aria-expanded") === "true" &&
        !topbar.contains(event.target)
      ) {
        closeMenu();
      }
    });
  }

  function setupScrollTopButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "scroll-top-btn";
    button.setAttribute("aria-label", "Scroll to top");
    button.innerHTML = `<span class="icon" aria-hidden="true">${iconSvg("arrowUp")}</span>`;

    const updateVisibility = () => {
      button.classList.toggle("is-visible", window.scrollY > 320);
    };

    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();
    document.body.appendChild(button);
  }

  function init() {
    renderStats();
    renderSkills();
    renderExperience();
    renderInvolvement();
    renderProjectDirectory();
    renderProjectsPage();
    setupHeroImage();
    setupContactForm();
    setupMobileMenu();
    setupScrollTopButton();
    setActiveNav();
  }

  init();
})();
