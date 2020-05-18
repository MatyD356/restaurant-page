import { navbar } from "./components/navbar.js"
import { footer } from "./components/footer.js"
import { about } from "./components/about.js"
import { menu } from "./components/menu.js"
import { contact } from "./components/contact.js"

class app {
    constructor(state) {
        this.state = state;
        this.container = document.querySelector("#content");
    }
    render() {
        navbar(this.container);
        about(this.container);
        menu(this.container);
        contact(this.container);
        footer(this.container);
    }
    changeState(newState) {
        if (this.state !== newState) {
            this.render();
        }
        this.state = newState;
    };
}
const application = new app("about");
application.render();