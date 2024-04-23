/**
 * This function generates a full image URL given a file name.
 * @param {string} fileName - The name of the image file (without extension).
 * @returns {string} - The full URL of the image.
 */
export const getImageURL = (fileName: string): string => {
  // Construct the full path of the image file in the 'logos' directory.
  const fullPath = `/logos/${fileName}.png`;

  // @ts-ignore
  // Use the browser's runtime API to get the full URL of the image file.
  const imageURL = browser.runtime.getURL(fullPath);

  // Return the full image URL.
  return imageURL;
};

/**
 * Function to get the height of an image based on the element type.
 * @param {Object} element - The element containing the anchor and its parent.
 * @returns {number} The height of the image.
 */
export const getImageHeight = (element: {
  anchor: Element;
  parent: HTMLElement;
}): number => {
  switch (element.anchor.tagName.toLowerCase()) {
    case "svg":
      return (element.anchor as SVGSVGElement).height.baseVal.value;
    default:
      return element.parent.offsetHeight;
  }
};
