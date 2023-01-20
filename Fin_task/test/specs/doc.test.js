const BasePage = require("../pageobjects/pages/base.page");
const { page } = require("../pageobjects/pages/factory");

describe("Doctors page test suite", () => {
    beforeEach(async () => {
    await page("dashboard").open();
    }); 
    it("should open page", async () => {
        //await browser.url("https://ej2.syncfusion.com")
        await expect(browser).toHaveTitle(
            "Appointment Planner - Syncfusion Angular Components Showcase App"
        );
    });
    it("should open modal", async () => {
        await page("dashboard").sideMenu.item("doctors").click();
        await page("doctors").doctorListHeader.addNewDoctorBtn.click();
        await expect(page("doctors").addDoctorModal.rootEl).toBeDisplayed();
    }) 
    
});
