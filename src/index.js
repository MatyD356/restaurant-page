import { navbar } from "./components/navbar.js"
import { footer } from "./components/footer.js"
import { about } from "./components/about.js"

class app {
    constructor(state) {
        this.state = state;
        this.container = document.querySelector("#content");
    }
    render() {
        navbar(this.container);
        about(this.container);
        footer(this.container);
    }
}
const application = new app("main");
application.render();
