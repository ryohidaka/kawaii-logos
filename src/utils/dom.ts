import { getImageHeight, getImageURL } from ".";

/**
 * This function retrieves the anchor elements and their parents from the DOM.
 * @param {string[]} anchors - The selectors of the anchor elements.
 * @returns {Object[]} An array of objects each containing an anchor element and its parent.
 */
const getAnchorAndParentElements = (
  anchors: string[],
): { anchor: Element; parent: HTMLElement }[] => {
  return anchors
    .map((anchor) => {
      // Select the anchor element from the DOM
      const anchorElement = document.querySelector(anchor);
      if (!anchorElement) return;

      // Get the parent of the anchor element
      const parentElement = anchorElement.parentNode as HTMLElement;
      return { anchor: anchorElement, parent: parentElement };
    })
    .filter(
      (element): element is Exclude<typeof element, undefined> =>
        element !== undefined,
    );
};

/**
 * This function creates image elements with a specified source and height.
 * @param {string} imageURL - The source URL of the image.
 * @param {number[]} heights - The heights of the images.
 * @returns {HTMLImageElement[]} The created image elements.
 */
const createImageElements = (imageURL: string, heights: number[]) => {
  return heights.map((height) => {
    // Create a new image element
    const imgElement = document.createElement("img");
    imgElement.src = imageURL;
    imgElement.style.height = `${height}px`;

    return imgElement;
  });
};

/**
 * This function replaces multiple anchor elements in the DOM with images.
 * @param {string} fileName - The name of the image file.
 * @param {string[]} anchors - The selectors of the anchor elements.
 */
export const replaceImages = (fileName: string, anchors: string[]) => {
  // Get the URL of the image
  const imageURL = getImageURL(fileName);

  // Get the anchor elements and their parent elements
  const elements = getAnchorAndParentElements(anchors);

  if (!elements) return;

  // Filter out any undefined elements
  const validElements = elements.filter((element) => element.parent);

  // Get the heights of the parent elements or image height
  const heights = validElements.map((element) => getImageHeight(element));

  // Create image elements with the heights of the parent elements
  const imgElements = createImageElements(imageURL, heights);

  // Replace the anchor elements with the new image elements
  validElements.forEach((element, index) => {
    element.parent.replaceChild(imgElements[index], element.anchor);
  });
};
