describe("IMPORT", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      Cypress.on("uncaught:exception", (err, runnable) => {
        console.error("Caught unhandled exception: ", err.message);
        return false; 
      });
    });
    it("Verifies the proposal creation journey", () => {
      cy.login();
      cy.get('a svg').should('be.visible');
      cy.get('a svg').eq(1).click(); 
      cy.get('div.cursor-pointer.text-primary').eq(1).click();
      cy.contains("button", "Yes").should("be.visible").click();
      cy.contains("button", "let's set up the proposal").should("be.visible").click();
      cy.wait(4000);
      cy.contains("button", "Select this Template").should("be.visible").click();
      cy.contains("button", "Proceed with this template").should("be.visible").click();
      cy.wait(4000);
      cy.contains("button", "Continue").should("be.visible").click();
      cy.wait(4000);
      cy.contains("p", " SUGGEST A RESPONSE TO THIS").should("be.visible").click();
      cy.wait(25000);
      cy.contains("button","Next").should("be.visible").click();
      cy.wait(4000);
      cy.contains("p", " SUGGEST A RESPONSE TO THIS").should("be.visible").click();
      cy.wait(25000);
      cy.contains("button","Next").should("be.visible").click();
      cy.wait(4000);
      cy.contains("p", " SUGGEST A RESPONSE TO THIS").should("be.visible").click();
      cy.wait(25000);
      cy.contains("button","Next").should("be.visible").click();
      cy.wait(4000);
      cy.contains("p", " SUGGEST A RESPONSE TO THIS").should("be.visible").click();
      cy.wait(25000);
      cy.contains("button","Next").should("be.visible").click();
      cy.wait(4000);
      const randomNumber = Math.floor(Math.random() * 1000); 
      const proposalName = `OmerAutomationtestproposal${randomNumber}`;
      cy.get('.gap-6 > .flex-col > .border').type(proposalName)
      cy.contains('button', "Complete Setup").should('be.visible').click();
    });
    });