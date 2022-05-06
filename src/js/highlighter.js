import escapeHtml from 'escape-html';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/night-owl.css';

/**
 * Enable highlighter.js for the selected HTML tag.
 *
 * How to use:
 * <pre class="code-snippet"><code class="language-javascript"></code></pre>
 */
const highlighterInit = (selector, code) => {
  const codeTest = document.querySelectorAll(selector);

  if (!selector || !code) {
    return;
  }

  codeTest.forEach(element => {
    element.innerHTML = escapeHtml(code);
    hljs.registerLanguage('javascript', javascript);
    hljs.highlightElement(element);
  });

}

export default highlighterInit;
