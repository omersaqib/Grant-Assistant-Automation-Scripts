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
    cy.get("a svg").should("be.visible");
    cy.get("a svg").eq(2).click();
    cy.contains("button", "Start a New Proposal").should("be.visible").click();
    cy.contains(
      "p",
      "Would you like to respond to a solicitation issued by a funder?"
    )
      .should("be.visible")
      .click();
      
    cy.contains("button", "Next").should("be.visible").click();
    
    cy.wait(2000);
    cy.contains(
      "h4",
      "Click or drag a document to upload the document from your computer"
    ).should("be.visible");

    cy.fixture("GHLSS RFA_72067522RFA00004.pdf", "binary").then(
      (fileContent) => {
        cy.get('input[type="file"]').attachFile({
          fileContent,
          fileName: "GHLSS RFA_72067522RFA00004.pdf",
          mimeType: "application/pdf",
          encoding: "binary",
        });
      }
    );

    cy.intercept('POST', `https://${Cypress.env('environment')}.api.grantassistant.ai/api/document/ingest`).as('documentIngest');

    cy.contains("button", "Next").should("be.visible").click();

    cy.wait('@documentIngest').then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
    });
    cy.wait(6000);
    cy.contains("button", "Next").should("be.visible").click();
    cy.wait(6000);
    cy.contains("button", "Next").should("be.visible").click();
    cy.intercept('POST', `https://${Cypress.env('environment')}.api.grantassistant.ai/api/proposal`).as('proposalRequest');
    cy.wait('@proposalRequest').its('response.statusCode').should('eq', 201);
    cy.wait(4000);
    cy.xpath('/html/body/div[1]/main/div[1]/div[2]/div/div/div[1]/div/div[3]/div/div[1]/div').click();
    cy.wait(10000);
    cy.contains("button", "Next").should("be.visible").click();
    cy.wait(6000);
    cy.xpath('/html/body/div[1]/main/div[1]/div[2]/div/div/div[1]/div/div[3]/div/div[2]').click();
    cy.wait(6000);
  });
});
