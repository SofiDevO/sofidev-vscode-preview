import { themeData } from "./assets/data/themeData.js";
const themePanel = document.querySelector(".code__container");
const iconContainer = document.querySelector(".caja_icon");

// Renderizar los iconos
const iconBtn = themeData
  .map(
    (iconData) => `
<div class="icon__container" data-language="${iconData.language}">
<iconify-icon class="icon__lang" icon=${iconData.icon}></iconify-icon>
</div>
`
  )
  .join("");
iconContainer.innerHTML = iconBtn;
renderView("javascript");

// Al hacer clic en el icono
const iconsClicked = document.querySelectorAll(".icon__container");

iconsClicked.forEach((icon) => {
    icon.addEventListener("click", () => {
        const language = icon.dataset.language;
        renderView(language);
    });
});

function renderView(language) {
    const data = themeData.find((item) => item.language === language);
    if (data) {
        const codeEditor = `
            <div class="theme-preview">
                <img loading="eager" src="${data.src}" alt="${language}">
            </div>
        `;
        themePanel.innerHTML = codeEditor;
    } else {
        console.error(`No se encontraron datos para el lenguaje ${language}`);
    }
}
