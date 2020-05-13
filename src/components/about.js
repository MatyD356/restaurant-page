const about = (container) => {
    let aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about");
    container.appendChild(aboutDiv);
    console.log("about goes click");
}
export { about };