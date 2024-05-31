describe("Continue", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.error("Caught unhandled exception: ", err.message);
      return false;
    });
  });
  it("Write_with_magic", () => {
    cy.login();
    cy.contains("p", "QATestProposal").should("be.visible").click();

    cy.wait(2000);
    cy.contains("button", "Write").should("be.visible").click();
    cy.wait(2000);
    // //Write with magic
    //---------------------------------------------------------------------------Technical Approach-----------------------------------------------------------------------------------------
    cy.get('p.ck-placeholder[data-placeholder="Define your technical approach. How would you tackle this problem?"]').click();
    Cypress._.times(100, () => {
        
        cy.get('svg[xmlns="http://www.w3.org/2000/svg"]').eq(7).click();
        cy.get('svg[xmlns="http://www.w3.org/2000/svg"]').eq(8).click();
        cy.intercept("GET", "https://sapi.grantassistant.ai/api/proposal/120").as("getProposal");
        cy.wait("@getProposal", { timeout: 200000 }).its("response.statusCode").should("eq", 200);
        cy.wait(2000);
      });
  });
});
