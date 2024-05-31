describe("IMPORT", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.error("Caught unhandled exception: ", err.message);
      return false; 
    });
  });
//upload
  it("Uploading RFP Document", () => {
    cy.login();
    cy.contains("button", "START SOLICITED PROPOSAL").should("be.visible").click();
   
    cy.fixture("GHLSS RFA_72067522RFA00004.pdf", "binary").then((fileContent) => {
      cy.intercept(
        {
          method: "POST",
          url: "https://dapi.grantassistant.ai/api/document/upload",
        },
        (req) => {
          req.headers["Authorization"] =
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTcwMjk5NzAwNCwiZXhwIjoxNzM0NTMzMDA0fQ.OwiQy9PAJK61YGC9OvX7VMNzCimFScocoWMufi0g2NE";
        }
      ).as("uploadRequest");
      

      cy.get("input[type=file]").attachFile({
        fileContent: fileContent,
        fileName: "GHLSS RFA_72067522RFA00004.pdf",
        mimeType: "application/pdf",
        encoding: "binary"
      });
      cy.contains("button", "Start processing solicitation (5-10 minutes)").should("be.visible").click();

     
  });
  });
});



    // cy.wait(2000);

    //   cy.upload()
    //   cy.proposal_creation()

 

