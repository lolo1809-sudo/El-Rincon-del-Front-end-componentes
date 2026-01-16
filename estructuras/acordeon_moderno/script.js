// ------------------------------- 1. Acordeón Moderno (Smooth Reveal)  ------------------------

const items = document.querySelectorAll(".accordion-item");

items.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Cierra todos primero (opcional, estilo acordeón estricto)
    items.forEach((i) => {
      i.classList.remove("active");
      i.querySelector(".accordion-content").style.maxHeight = null;
    });

    // Si no estaba activo, ábrelo
    if (!isActive) {
      item.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
