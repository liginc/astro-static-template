import { helperGrid } from "./helper/helper-grid";
import { viewportSpFix } from "./utility/viewport-fix";
import { viewportSize } from "./utility/viewport-size";

// modules
helperGrid();

window.addEventListener("load", () => {
  viewportSpFix();
  viewportSize();
});

window.addEventListener("resize", () => {
  viewportSpFix();
  viewportSize();
});
