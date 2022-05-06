import highlighterInit from './highlighter';
import calculateScrollArea from './calculateScrollArea';
import toggleFolders from "./toggleFolders";

/**
 * Change with the code snippet you will output on the page.
 */
const codeSnippet = `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`;

highlighterInit('.code-snippet code', codeSnippet);
calculateScrollArea();

toggleFolders(".folder-browser__item--folder", "button", ".folder-browser");
toggleFolders(".widget", ".widget__header button", ".widget__content");
