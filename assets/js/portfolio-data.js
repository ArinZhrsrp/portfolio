console.warn("Deprecated: use assets/js/data/portfolio-data.js instead of assets/js/portfolio-data.js.");

import("./data/portfolio-data.js").then(({ portfolioData }) => {
  window.portfolioData = portfolioData;
});
