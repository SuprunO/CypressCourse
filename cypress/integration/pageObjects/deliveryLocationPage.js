class DeliveryLocationPage {
  getCountryField() {
    return cy.get("#country");
  }
  getCountryResultsField() {
    return cy.get(".suggestions a");
  }
  getCheckbox() {
    return cy.get("#checkbox2");
  }
  getSubmitBtn() {
    return cy.get('[type="submit"]');
  }
  getAlertText() {
      return cy.get(".alert") 
  }
}

export default DeliveryLocationPage;
