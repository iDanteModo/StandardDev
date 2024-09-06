import "./styles/style.css";
import { createLogo } from "./js/logo";
import { home } from "./js/home";
import { contact } from "./js/about";
import { menu } from "./js/menu";

function checkPage() {
    const aboutButton = document.querySelector("#about");
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");

    homeButton.addEventListener("click", () => {
        home();
    })

    aboutButton.addEventListener("click", () => {
        contact();
    })

    menuButton.addEventListener("click", () => {
        menu();
    })
}

createLogo();
checkPage();


