import Icon from '../assets/logo.jpg';

const navbar = (container) => {
    //creating navbar
    let navDiv = document.createElement("div");
    navDiv.classList.add("navbar");
    container.appendChild(navDiv);
    //crearting logo
    let logo = document.createElement("img");
    logo.src = Icon;
    navDiv.appendChild(logo);
    console.log("navbar goes click");
}
export { navbar }