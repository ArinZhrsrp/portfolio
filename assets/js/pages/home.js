import { portfolioData } from "../data/portfolio-data.js";
import {
  renderExperience,
  renderInvolvement,
  renderProjectDirectory,
  renderSkills,
  renderStats,
  setActiveNav,
  setupContactForm,
  setupHeroImage,
  setupMobileMenu,
  setupSiteFooter,
  setupScrollTopButton,
} from "../shared/site.js";

renderStats(portfolioData);
renderSkills(portfolioData);
renderExperience(portfolioData);
renderInvolvement(portfolioData);
renderProjectDirectory(portfolioData);
setupHeroImage(portfolioData);
setupContactForm();
setupMobileMenu();
setupScrollTopButton();
setupSiteFooter(portfolioData);
setActiveNav();
