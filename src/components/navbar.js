import Icon from '../assets/logo.jpg'
import { changeAppState } from '../index'

const navbar = (container) => {
    //creating navbar
    let navDiv = document.createElement("div");
    navDiv.classList.add("navbar");
    container.appendChild(navDiv);
    //crearting logo
    let logo = document.createElement("img");
    logo.classList.add("logo-img");
    logo.src = Icon;
    navDiv.appendChild(logo);
    //about button
    let aboutButton = document.createElement("button");
    aboutButton.onclick = function () {
        changeAppState("about");
    };
    aboutButton.textContent = "ABOUT";
    aboutButton.classList.add("btn");
    navDiv.appendChild(aboutButton);
    //menu button
    let menuButton = document.createElement("button");
    menuButton.onclick = function () {
        changeAppState("menu");
    };
    menuButton.textContent = "MENU";
    menuButton.classList.add("btn");
    navDiv.appendChild(menuButton);
    //contact button
    let contactButton = document.createElement("button");
    contactButton.onclick = function () {
        changeAppState("contact");
    };
    contactButton.textContent = "CONTACT";
    contactButton.classList.add("btn");
    navDiv.appendChild(contactButton);
}
export { navbar }