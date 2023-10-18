export const helperGrid = () => {
  const grid = document.querySelector(".js-helper-grid-area");
  const lines = document.querySelectorAll(".js-helper-grid-lines");
  let isGridVisible = false;
  let size = 1.6667;

  if (!grid || !lines) return;

  // グリッドラインのレンダリング
  const renderLinePosition = () => {
    lines.forEach((line, index) => {
      line.style.left = `calc(${index + 1} * ${size}vw`;
    });
  };
  renderLinePosition();

  window.addEventListener("resize", () => {
    renderLinePosition();
  });

  // "Dキー"押下によるグリッドの表示・非表示
  document.addEventListener("keypress", (e) => {
    if (e.code == "KeyD" && isGridVisible == false) {
      grid.classList.remove("is-invisible");
      isGridVisible = true;
    } else {
      grid.classList.add("is-invisible");
      isGridVisible = false;
    }
  });
};
