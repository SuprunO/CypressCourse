//import of pageObject class
import HomePage from "../pageObjects/homePage";
import ProductsPage from "../pageObjects/productsPage";
import DeliveryLocationPage from "../pageObjects/deliveryLocationPage";

describe("FirstCypressTestFramework", function () {
  before(() => {
    // runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Handling Hooks", function () {
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const deliveryLocationPage = new DeliveryLocationPage();
    //variable comes from cypress.json file
    cy.visit(Cypress.env("url"));
    homePage.getNameField().type(this.data.name);
    homePage.getEmailField().type(this.data.email);
    homePage.getPasswordField().type(this.data.password);
    homePage.getGenderField().select(this.data.gender);
    homePage.getRadioBtn().check().should("be.checked");
    homePage.getBirthDateField().type(this.data.birthdate);
    homePage.getSubmitBtn().click();
    homePage.getBindingExampleField().should("have.value", this.data.name);
    //attributes check
    homePage.getNameField().should("have.attr", "minlength", "2");
    //radio-button status check
    homePage.getInactiveRadioBtn().should("be.disabled");
    //trim
    homePage.getAlertText().each(($el, index, $list) => {
      $el.text().includes("Success! The Form has been submitted successfully!");
    });
    homePage.getShopLink().click();
    //custom commands (commands.js) + iterate through products

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });
    productsPage.getCheckoutBtn().click();
    //------------------------------------------------
    // Sum product prices and compare them to total
    var sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each(($el, index, $list) => {
        // extract text log
        //cy.log($el.text())

        const amount = $el.text();
        var res = amount.split(" ");
        res = res[1].trim();
        sum = Number(sum) + Number(res);
      })
      .then(function () {
        cy.log(sum);
      });

    cy.get("h3 strong").then(function (element) {
      const amount = element.text();
      var res = amount.split(" ");
      var total = res[1].trim();
      expect(Number(sum)).to.equal(Number(total));
    });
    //-----------------------------------------------
    cy.contains("Checkout").click();
    //-------------------------------------
    deliveryLocationPage.getCountryField().type("India");
    // change config within one class
    Cypress.config("defaultCommandTimeout", 10000);

    deliveryLocationPage.getCountryResultsField().click();
    deliveryLocationPage.getCheckbox().click({ force: true });
    deliveryLocationPage.getSubmitBtn().click();
    deliveryLocationPage.getAlertText().then(function (element) {
      const actualText = element.text();
      expect(actualText.includes("Success")).to.be.true;
    });
  });
});
