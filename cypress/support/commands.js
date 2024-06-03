
Cypress.Commands.add('login', () => {
    // Perform login steps here
    cy.visit('https://dev.grantassistant.ai/')
    cy.intercept('POST', ' https://dapi.grantassistant.ai/api/auth/login').as('loginRequest');
    cy.get('[name="email"]').type('testuser1ga@yopmail.com');
    cy.get('[name="password"]').type("omer66978")
    cy.contains('LOGIN').click();
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 201);
    cy.wait(4000)
    // Add any additional assertions if needed
  });
  
  Cypress.Commands.add('proposal_creation', () => {
    cy.contains('p', "choose a different template").should('be.visible').click();
    cy.contains('li', "USAID").should('be.visible').click();
    cy.contains('button', "Confirm").should('be.visible').click();
    cy.wait(2000)
    cy.contains('button', "Select Template").should('be.visible').click();
    cy.wait(5000)
    cy.get('._customEditor_u46rg_1').type('we will look into this');
    cy.wait(5000)
    cy.contains('button', "next question").should('be.visible').wait(6000).click();
   
    cy.get('._customEditor_u46rg_1').type('we will look into this');
    cy.wait(5000)
    cy.contains('button', "next question").should('be.visible').wait(6000).click();
    
    cy.get('._customEditor_u46rg_1').type('we will look into this');
    cy.wait(5000)
    cy.contains('button', "next question").should('be.visible').wait(6000).click();
 
    cy.get('._customEditor_u46rg_1').type('we will look into this');
    cy.wait(5000)
    cy.contains('button', "next question").should('be.visible').wait(6000).click();
    cy.wait(5000)
    const randomNumber = Math.floor(Math.random() * 1000); 
    const proposalName = `OmerAutomationtestproposal${randomNumber}`;
    cy.get('.px-8 > .h-10').type(proposalName)
    cy.contains('button', "Complete Setup").should('be.visible').click();
  });

  Cypress.Commands.add('widgets', () => {
    cy.wait(2000)
        //For Notes Entering
        cy.get('svg[xmlns="http://www.w3.org/2000/svg"]').eq(9).click();
        cy.get('._textarea_9f4d4_13').type("This is note{enter}")
        //Entering Comments
        cy.get('svg[xmlns="http://www.w3.org/2000/svg"]').eq(10).click();
        cy.get('.relative > .w-full').type("This is Comment{enter}")
       
       //Entering Reply
       cy.wait(1000)
       cy.get('.relative > .flex').type("This is Reply{enter}")
        //  //Entering Idea
        //  cy.get('svg[xmlns="http://www.w3.org/2000/svg"]').eq(11).click();
        //  cy.get('._textarea_13lnu_13').type("This is Idea{enter}")
    
});
let proposalName;

Cypress.Commands.add('setProposalName', (value) => {
    proposalName = value;
    cy.log(`Proposal name: ${proposalName}`);
});

Cypress.Commands.add('openProposal', () => {
    
  cy.get('a svg').should('be.visible');
  cy.get('a svg').eq(1).click(); 
cy.contains('div.cursor-pointer.text-primary', "OmerAutomationtestproposal").should("be.visible").click();
    
});
  
  
  //UPLOADING RFP
  Cypress.Commands.add('upload', () => {
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

      cy.wait("@uploadRequest", { timeout: 60000 }).wait(5000).then((interception) => {
        expect(interception.response.statusCode).to.equal(201); 
      });
  });
});







import 'cypress-file-upload';
Cypress.Commands.add('upload_file', (fileName, fileType = ' ', selector) => {
cy.get(selector).then(subject => {
cy.fixture(fileName, 'base64').then(content => {
const el = subject[0];
const testFile = new File([content], fileName, { type: fileType });
const dataTransfer = new DataTransfer();
dataTransfer.items.add(testFile);
el.files = dataTransfer.files;
});
});
});