const footer = (container) => {
    //creating footer
    let footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");
    container.appendChild(footerDiv);
    //logo attribiution link
    let atrLink = document.createElement("a");
    atrLink.classList.add("link");
    atrLink.setAttribute("href", "https://www.freepik.com/free-photos-vectors/logo");
    atrLink.textContent = "Logo designed by Freepik";
    footerDiv.appendChild(atrLink);
}
export { footer };
