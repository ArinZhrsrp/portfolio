import { portfolioData } from "../data/portfolio-data.js";
import {
  renderProjectsPage,
  setActiveNav,
  setupMobileMenu,
  setupScrollTopButton,
} from "../shared/site.js";

renderProjectsPage(portfolioData);
setupMobileMenu();
setupScrollTopButton();
setActiveNav();
