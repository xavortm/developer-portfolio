import highlighterInit from './highlighter';

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
