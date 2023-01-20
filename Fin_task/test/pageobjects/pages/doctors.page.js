const BasePage = require("./base.page");
const {
    AddDoctorModal,
    DoctorListHeader,
    SpecialistCard,
} = require("../components");


class DoctorsPage extends BasePage {
    constructor() {
        super("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors");
        this.AddDoctorModal = new AddDoctorModal();
        this.DoctorListHeader = new DoctorListHeader();
    }
    SpecialistCard(id) {
        return new SpecialistCard(id);
    }
}

module.exports = DoctorsPage;