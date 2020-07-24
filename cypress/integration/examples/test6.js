/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'
describe("My fourth Test Suite", function () {
  it("Handling mouseover with JQuery", function () {
    cy.get("opentab").then(function (el) {
      const url = el.prop("href");
      cy.visit(url)
    });
  });
});
