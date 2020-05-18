import { navbar } from "./components/navbar.js"
import { footer } from "./components/footer.js"
import { about } from "./components/about.js"
import { menu } from "./components/menu.js"
import { contact } from "./components/contact.js"

function changeAppState(x) {
    console.log("change")
    application.changeState(x);
}
class app {
    constructor(state) {
        this.state = state;
        this.container = document.querySelector("#content");
    }
    render() {
        this.container.innerHTML = "";
        navbar(this.container);
        if (this.state === "about") {
            about(this.container);
        } else if (this.state === "menu") {
            menu(this.container);
        } else if (this.state === "contact") {
            contact(this.container);
        };
        footer(this.container);
    }
    changeState(newState) {
        this.state = newState;
    };
    watchForChange() {
        let lastState = this.state;
        setInterval(() => {
            if (lastState !== this.state) {
                lastState = this.state;
                this.render();
            }
        }, 1);
    }
}
const application = new app("about");
application.render();
application.watchForChange();
export { changeAppState }