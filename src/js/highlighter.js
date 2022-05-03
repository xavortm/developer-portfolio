import escapeHtml from 'escape-html';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/night-owl.css';

const testValue = `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`;

const highlighterInit = () => {
  const codeTest = document.querySelector('.code-snippet code');
  codeTest.innerHTML = escapeHtml(testValue);
  hljs.registerLanguage('javascript', javascript);
  hljs.highlightElement(codeTest);
}

export default highlighterInit;
