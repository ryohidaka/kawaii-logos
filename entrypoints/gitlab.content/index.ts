import { replaceImages } from "@/src";

export default defineContentScript({
  matches: ["*://*.gitlab.com/*"],
  main() {
    const fileName = "Gitlab";
    const anchor = ["img[alt*='GitLab.com']"];

    replaceImages(fileName, anchor);
  },
});
