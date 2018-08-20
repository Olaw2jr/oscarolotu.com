import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithubAlt,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faQuoteLeft, faTags } from "@fortawesome/free-solid-svg-icons";
// import hljs from "highlight.js";

export default {
  init() {
    // JavaScript to be fired on all pages
    // hljs.initHighlightingOnLoad();

    library.add(
      faTwitter,
      faCalendar,
      faTags,
      faGithubAlt,
      faInstagram,
      faQuoteLeft,
      faUserCircle
    );

    dom.watch();
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
