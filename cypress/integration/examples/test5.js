describe("My fourth Test Suite", function () {
  it("Handling mouseover with JQuery", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#mousehover").invoke("show");
    cy.contains("Top").click({ force: true }); // with no hover
    cy.url().should("include", "#top");
  });
});
