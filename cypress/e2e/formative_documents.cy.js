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
      cy.openProposal();
    
    });
    });