import { portfolioData } from "../data/portfolio-data.js";
import {
  renderExperience,
  renderNotes,
  renderProjectDirectory,
  renderSkills,
  renderStats,
  setActiveNav,
  setupContactForm,
  setupHeroImage,
  setupMobileMenu,
  setupScrollTopButton,
} from "../shared/site.js";

renderStats(portfolioData);
renderSkills(portfolioData);
renderExperience(portfolioData);
renderNotes(portfolioData);
renderProjectDirectory(portfolioData);
setupHeroImage(portfolioData);
setupContactForm();
setupMobileMenu();
setupScrollTopButton();
setActiveNav();
