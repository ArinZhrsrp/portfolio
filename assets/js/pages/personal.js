import { portfolioData } from "../data/portfolio-data.js";
import {
  renderProjectsPage,
  setActiveNav,
  setupMobileMenu,
  setupSiteFooter,
  setupScrollTopButton,
} from "../shared/site.js";

renderProjectsPage(portfolioData);
setupMobileMenu();
setupScrollTopButton();
setupSiteFooter(portfolioData);
setActiveNav();
