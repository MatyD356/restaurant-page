const menu = (container) => {
    let menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");
    container.appendChild(menuDiv);
    //menu container
    let menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menuDiv.appendChild(menuContainer);
    //menu title
    let menuTitle = document.createElement("h2");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "MENU";
    menuContainer.appendChild(menuTitle);
    //menu card
    let foodArr = [{
        name: "Soup",
        price: "12$"
    }, {
        name: "Meat",
        price: "24$"
    }, {
        name: "Drink",
        price: "4$"
    }]
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    for (let i = 0; i < foodArr.length; i++) {
        let menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");
        let cardTitle = document.createElement("h2");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = foodArr[i].name;
        menuCard.appendChild(cardTitle);
        let cardPrice = document.createElement("h3");
        cardPrice.classList.add("card-price");
        cardPrice.textContent = foodArr[i].price;
        menuCard.appendChild(cardPrice);
        cardContainer.appendChild(menuCard);
    }
    menuContainer.appendChild(cardContainer)
}
export { menu };