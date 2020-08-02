class HomePage {
  getNameField() {
    return cy.get("[minlength]");
  }

  getEmailField() {
    return cy.get('[name="email"]');
  }

  getPasswordField() {
    return cy.get("[placeholder]");
  }

  getGenderField() {
    return cy.get("select#exampleFormControlSelect1");
  }

  getRadioBtn() {
    return cy.get('div:nth-of-type(1) > input[name="inlineRadioOptions"]');
  }

  getBirthDateField() {
    return cy.get('input[name="bday"]');
  }

  getSubmitBtn() {
    return cy.get('[type="submit"]');
  }

  getBindingExampleField() {
    return cy.get('h4 > input[name="name"]');
  }

  getInactiveRadioBtn() {
    return cy.get("#inlineRadio3");
  }

  getShopLink() {
    return cy.get(":nth-child(2) > .nav-link");
  }
  getAlertText(){
    return cy.get(".alert.alert-dismissible.alert-success");
  }
}
export default HomePage;
