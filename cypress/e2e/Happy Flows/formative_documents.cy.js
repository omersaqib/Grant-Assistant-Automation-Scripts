describe("IMPORT", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      Cypress.on("uncaught:exception", (err, runnable) => {
        console.error("Caught unhandled exception: ", err.message);
        return false; 
      });
    });
    it("Attaching formative documents from library", () => {
      cy.login();
      cy.get("a svg").should("be.visible");
      cy.get("a svg").eq(2).click();
      cy.wait(2000);
      cy.xpath('/html/body/div[1]/main/div[1]/div[2]/div[1]/div[2]/div/div[2]/div/div[2]/div[2]/div/div[1]/table/tbody/tr[1]/td[2]/div').click();
      cy.wait(2000);
      cy.xpath('/html/body/div[1]/main/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/div[2]/div/div/div[1]/div[2]/div[2]/button[1]').click();
      cy.wait(4000);
      cy.xpath('/html/body/div[4]/div[3]/div[2]/div[2]/div[1]/h3/button/div[3]/div/button').click();
      cy.wait(4000);
      cy.xpath('/html/body/div[4]/button').click();
    });

    it("Verifies uploading a formative document", () => {
      cy.login();
      cy.get("a svg").should("be.visible");
      cy.get("a svg").eq(2).click();
      cy.wait(2000);
      cy.xpath('/html/body/div[1]/main/div[1]/div[2]/div[1]/div[2]/div/div[2]/div/div[2]/div[2]/div/div[1]/table/tbody/tr[1]/td[2]/div').click();
      cy.wait(2000);
      cy.xpath('/html/body/div[1]/main/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/div[2]/div/div/div[1]/div[2]/div[2]/button[2]').click();
      cy.contains('button', 'Research').click();
      cy.wait(2000);
      cy.contains('div', 'Intelligence').should('be.visible').click();
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
  
      cy.intercept('POST', `${cy.getEnvironmentUrl()}/api/document/ingest`).as('documentIngest');
      cy.xpath('/html/body/div[4]/div[5]/button[2]').click();
      cy.wait(2000);
      cy.xpath('/html/body/div[4]/div[3]/button').click();
    });

    it("Verifies deleting a formative document", () => {
      cy.login();
      cy.get("a svg").should("be.visible");
      cy.get("a svg").eq(2).click();
      cy.wait(2000);
      cy.xpath('/html/body/div[1]/main/div[1]/div[2]/div[1]/div[2]/div/div[2]/div/div[2]/div[2]/div/div[1]/table/tbody/tr[1]/td[2]/div').click();
      cy.wait(2000);
      cy.xpath('/html/body/div[1]/main/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/div[2]/div/div/div[3]/ul/li[1]/div[2]/button').click();
      cy.wait(2000);
    });
});