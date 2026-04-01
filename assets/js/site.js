console.warn("Deprecated: use assets/js/pages/*.js instead of assets/js/site.js.");

Promise.all([
  import("./data/portfolio-data.js"),
  import("./shared/site.js"),
]).then(([{ portfolioData }, site]) => {
  site.renderStats(portfolioData);
  site.renderSkills(portfolioData);
  site.renderExperience(portfolioData);
  site.renderInvolvement(portfolioData);
  site.renderNotes(portfolioData);
  site.renderProjectDirectory(portfolioData);
  site.renderProjectsPage(portfolioData);
  site.setupHeroImage(portfolioData);
  site.setupContactForm();
  site.setupMobileMenu();
  site.setupScrollTopButton();
  site.setActiveNav();
});
