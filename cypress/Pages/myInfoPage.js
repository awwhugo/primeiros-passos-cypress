class MyInfoPage {
    selectorsList() {
        const selectors = {
            FirstNameField: '[name="firstName"]',
            MiddleNameField: '[name="middleName"]',
            LastNameField: '[name="lastName"]',
            genericField: '.oxd-input--active',
            dateField: '[placeholder="dd-yyyy-mm"], [placeholder="yyyy-dd-mm"], [placeholder="yyyy-mm-dd"]',
            dataCloseButton: '.--close',
            submitButton: '[type="submit"]',
            dropdownButton: '.oxd-select-text--arrow'

        };

        return selectors;
    }

    fillPersonalDetails(FirstName, MiddleName, LastName) {
        cy.get(this.selectorsList().FirstNameField).clear().type(FirstName);
        cy.get(this.selectorsList().MiddleNameField).clear().type(MiddleName);
        cy.get(this.selectorsList().LastNameField).clear().type(LastName);
    }
    /*Employee Id, Other Id, Driver License*/
    fillEmployeeDetails(employeeId, OtherId, DriverLicense, ExpireDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId);
        cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherId);
        cy.get(this.selectorsList().genericField).eq(5).clear().type(DriverLicense);
        cy.get(this.selectorsList().dateField).eq(0).clear().type(ExpireDate);
        cy.get(this.selectorsList().dataCloseButton).click();
        cy.get(this.selectorsList().dropdownButton).eq(0).click()
    }

    fillStatusDetails(dateDetails) {
        cy.get(':nth-child(27)').click();
        cy.get(this.selectorsList().dropdownButton).eq(1).click();
        cy.get('.oxd-select-dropdown > :nth-child(2)').click();
        cy.get('.oxd-radio-input--active').eq(1).click();
        cy.get(this.selectorsList().dateField).eq(1).clear().type(dateDetails);
        cy.get(this.selectorsList().dataCloseButton).click();
    }

    submitForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click();
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-container')
    }

}

export default MyInfoPage;

