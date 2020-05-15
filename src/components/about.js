import Photo from "../assets/aboutImg.jpg"

const about = (container) => {
    let aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about");
    container.appendChild(aboutDiv);
    //title div
    let title = document.createElement("h1");
    title.classList.add("about-title");
    title.textContent = "RESTAURANT";
    aboutDiv.appendChild(title);
    //text div
    let text = document.createElement("p");
    text.classList.add("aboutText");
    text.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!";
    aboutDiv.appendChild(text);
}
export { about };