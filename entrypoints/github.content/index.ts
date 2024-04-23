import { replaceImages } from "@/src";

export default defineContentScript({
  matches: ["*://*.github.com/*"],
  main() {
    const fileName = "Github";
    const anchor = [".octicon.octicon-mark-github"];

    replaceImages(fileName, anchor);
  },
});
