describe("My Third Test Suite", function () {
  it("Handling alerts", function () {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    cy.wait(5000)
    //alert handling
    cy.get("#alertbtn").click();
    cy.get("[value=Confirm]").click();
    //window:alert
    cy.on("window.alert", (str) => {
      //Mocha assertion
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.on("window.confirm", (str) => {
        //Mocha assertion
        expect(str).to.equal(
          "Hello , Are you sure you want to confirm?"
        );
      });

      cy.get('#opentab').invoke('removeAttr','target').click()
      
 //VALIDATE url
cy.url().should('include','rahul')
 //return to previous page
cy.go('back')
  });
});
