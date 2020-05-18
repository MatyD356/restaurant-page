import Icon from '../assets/logo.jpg';

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
    aboutButton.classList.add("btn");
    aboutButton.textContent = "ABOUT";
    navDiv.appendChild(aboutButton);
    //menu button
    let menuButton = document.createElement("button");
    menuButton.classList.add("btn");
    menuButton.textContent = "MENU";
    navDiv.appendChild(menuButton);
    //contact button
    let contactButton = document.createElement("button");
    contactButton.classList.add("btn");
    contactButton.textContent = "CONTACT";
    navDiv.appendChild(contactButton);
}
export { navbar }