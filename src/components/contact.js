const contact = (container) => {
    let contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");
    container.appendChild(contactDiv);
    //adding form
    let formDiv = document.createElement("form");
    formDiv.classList.add("contact-form");
    contactDiv.appendChild(formDiv);
    //form title
    let formTitle = document.createElement("h2");
    formTitle.classList.add("form-title");
    formTitle.textContent = "CONTACT US";
    formDiv.appendChild(formTitle);
    let inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");
    formDiv.appendChild(inputContainer);
    //name input
    let nameLabel = document.createElement("div");
    let nameP = document.createElement("p");
    nameP.classList.add("p-title");
    nameP.textContent = "Name";
    inputContainer.appendChild(nameP);
    inputContainer.appendChild(nameLabel);
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.classList.add("inpt", "name");
    nameLabel.appendChild(nameInput);
    //email input
    let emailLabel = document.createElement("div");
    let emailP = document.createElement("p");
    emailP.classList.add("p-title");
    emailP.textContent = "Email";
    emailLabel.appendChild(emailP);
    inputContainer.appendChild(emailLabel);
    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.classList.add("inpt", "email");
    emailLabel.appendChild(emailInput);
    //textarea
    let textareaLabel = document.createElement("div");
    let textareaP = document.createElement("p");
    textareaP.classList.add("p-title");
    textareaP.textContent = "Message";
    textareaLabel.appendChild(textareaP);
    let textarea = document.createElement("textarea");
    textarea.classList.add("inpt", "textarea");
    textareaLabel.appendChild(textarea);
    formDiv.appendChild(textareaLabel);
    //form button
    let formButton = document.createElement("button");
    formButton.classList.add("btn", "send-button");
    formButton.textContent = "SEND";
    formDiv.appendChild(formButton);
}
export { contact };