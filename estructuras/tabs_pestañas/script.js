// ------------------------------- 2. Tabs (Pestañas) "Underline Slide" ------------------------

const tabs = document.querySelectorAll(".tab-btn");
const panes = document.querySelectorAll(".tab-pane");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Quitar active de todos
    tabs.forEach((t) => t.classList.remove("active"));
    panes.forEach((p) => p.classList.remove("active"));

    // Activar el clickeado
    tab.classList.add("active");
    const target = document.querySelector(tab.dataset.target);
    target.classList.add("active");
  });
});
