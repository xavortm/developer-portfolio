/**
 * Measure height of a DOM element.
 *
 * @param {Element} element What to measure the height of
 * @returns
 */
const measureHeight = (element) => {
  const array = Array.from(element.children);
  return array.reduce(
    (accumulator, value) => accumulator + value.offsetHeight,
    0
  );
};

/**
 * Manage toggle of content.
 *
 * @param {string} toggle The element you click on.
 * @param {string} parent The element to update class state.
 * @param {string} content Where we count the height.
 * @returns
 */
const toggleFolders = (parent, toggle, content) => {
  const parentToggle = document.querySelectorAll(parent);
  if (!parentToggle) return;

  parentToggle.forEach((folder) => {
    const toggleButton = folder.querySelector(toggle);
    const toggleContent = folder.querySelector(content);
    if (!toggleButton || !toggleContent) return;

    const contentHeight = measureHeight(toggleContent);
    toggleContent.style.setProperty(
      "--items-height-total",
      contentHeight + "px"
    );

    toggleButton.addEventListener("click", () => {
      folder.classList.toggle("is-open");
    });
  });
};

export default toggleFolders;
