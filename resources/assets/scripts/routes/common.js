import * as hljs from 'highlight.js';

export default {
  init() {
    // JavaScript to be fired on all pages
    hljs.initHighlightingOnLoad();
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
