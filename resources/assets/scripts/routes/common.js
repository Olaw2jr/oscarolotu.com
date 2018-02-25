import * as hljs from 'highlight.js';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeConfig from '@fortawesome/fontawesome';
import faTags from '@fortawesome/fontawesome-free-solid/faTags';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faCalendar from '@fortawesome/fontawesome-free-regular/faCalendar';
import faGithubAlt from '@fortawesome/fontawesome-free-brands/faGithubAlt';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faQuoteLeft from '@fortawesome/fontawesome-free-solid/faQuoteLeft';
import faPaperPlane from '@fortawesome/fontawesome-free-regular/faPaperPlane';
import faUserCircle from '@fortawesome/fontawesome-free-regular/faUserCircle';

export default {
  init() {
    // JavaScript to be fired on all pages
    hljs.initHighlightingOnLoad();

    fontawesome.library.add(faTwitter, faCalendar, faTags, faGithubAlt, faInstagram, faQuoteLeft, faPaperPlane, faUserCircle);

    // Enable Font-Awesome in CSS
    FontAwesomeConfig.searchPseudoElements = true;
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
