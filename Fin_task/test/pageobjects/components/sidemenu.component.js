const BaseComponent = require("./base.component");

class SideMenuComponent extends BaseComponent {
    constructor() {
        super('#plannerSideBar');
    }

    get name() {
        return this.rootEl.$('p.name');
    }

    item(name) {
        const selectors = {
            dashboard : '[routerlink="/dashboard"',
            schedule : '[routerlink="calenadar"',
            doctors : '[routerlink="doctors"',
        };
        return this.rootEl.$(selectors[name.toLoweCase()]);
    }
}

module.exports = SideMenuComponent;