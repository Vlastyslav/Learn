const BasePage = require("./base.page")
class DashboardPage extends BasePage {
    constructor() {
        super("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
    }
}

module.exports = DashboardPage;