//import of pageObject class
import HomePage from '../pageObjects/homePage'
import ProductsPage from '../pageObjects/productsPage'

describe("FirstCypressTestFramework", function () {
  before(() => {
    // runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Handling Hooks", function () {
    const homePage = new HomePage()
    const productsPage = new ProductsPage()
    cy.visit("https://rahulshettyacademy.com/angularpractice");
    homePage.getNameField().type(this.data.name);
    homePage.getEmailField().type(this.data.email);
    homePage.getPasswordField().type(this.data.password);
    homePage.getGenderField().select(this.data.gender)
    homePage.getRadioBtn()
    .check()
    .should("be.checked");
homePage.getBirthDateField().type(this.data.birthdate);
   homePage.getSubmitBtn().click();
  homePage.getBindingExampleField().should("have.value", this.data.name);
    //attributes check
    homePage.getNameField().should(
      "have.attr",
      "minlength",
      "2"
    );
    //radio-button status check
    homePage.getInactiveRadioBtn().should("be.disabled");
    //trim
   homePage.getAlertText().each(
      ($el, index, $list) => {
        $el
          .text()
          .includes("Success! The Form has been submitted successfully!");
      }
    );
    homePage.getShopLink().click();
    //custom commands (commands.js) + iterate through products

    this.data.productName.forEach(function (element) {
        cy.selectProduct(element);
    });
    productsPage.getCheckoutBtn().click()
  });
});
