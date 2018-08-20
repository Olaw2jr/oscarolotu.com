import aboutUs from "./routes/about";
import common from "./routes/common";
import home from "./routes/home";
// import local dependencies
import Router from "./util/Router";

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
});

// Load Events 2
document.addEventListener("DOMContentLoaded", routes.loadEvents());
