describe("Continue", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.error("Caught unhandled exception: ", err.message);
      return false;
    });
  });

  it("Login", () => {
    cy.login();
    cy.contains("p", "OmerAutomationtestproposal353")
      .should("be.visible")
      .click();
    cy.contains("button", "Read More").should("be.visible").click();
    cy.contains("button", "Solicitation Brief").should("be.visible").click();
    cy.get('svg[xmlns="http://www.w3.org/2000/svg"]').eq(6).click();
    cy.wait(2000)
    cy.contains("button", "Design").should("be.visible").click();
    cy.wait(2000)
    //------------------------------------------------------------------Technical Approach-------------------------------------------------------------------------------------------------//



    cy.get('textarea').should('be.visible').type("Omer is testing automation");
    cy.contains("button", "Submit").should("be.visible").click().wait(5000);
    
    


//------------------------------------------------------------------=--------------Problem Statement-----------------------------------------------------------------------------------//



    cy.contains("div","Problem Statement").click()
    cy.get('textarea').should('be.visible').type("Omer is testing automation");
    cy.contains("button", "Submit").should("be.visible").click().wait(5000);
    


     //---------------------------------------------------------------------------------Operating Environment-----------------------------------------------------------------------------------//



    cy.contains("div","Operating Environment").click()
    cy.get('textarea').should('be.visible').type("Omer is testing automation");
    cy.contains("button", "Submit").should("be.visible").click().wait(5000);
    
  
 
     //---------------------------------------------------------------------------------Description Approach-----------------------------------------------------------------------------------//



     cy.contains("div","Description of the Approach").click()
     cy.get('textarea').should('be.visible').type("Omer is testing automation");
     cy.contains("button", "Submit").should("be.visible").click().wait(5000);
     
   


     //---------------------------------------------------------------------------------Program Objectives-----------------------------------------------------------------------------------//



     cy.contains("div","Program Objectives").click()
     cy.get('textarea').should('be.visible').type("Omer is testing automation");
     cy.contains("button", "Submit").should("be.visible").click().wait(5000);
     
   


     //---------------------------------------------------------------------------------Outcomes And Results-----------------------------------------------------------------------------------//



     cy.contains("div","Outcomes & Results").click()
     cy.get('textarea').should('be.visible').type("Omer is testing automation");
     cy.contains("button", "Submit").should("be.visible").click().wait(5000);


     //---------------------------------------------------------------------------------Crosscutting Themes-----------------------------------------------------------------------------------//



     cy.contains("div","Crosscutting Themes").click()
     cy.get('textarea').should('be.visible').type("Omer is testing automation");
     cy.contains("button", "Submit").should("be.visible").click().wait(5000);

//---------------------------------------------------------------------------------Resource Partnership-----------------------------------------------------------------------------------//



          cy.contains("div","Resource Partnership").click()
          cy.get('textarea').should('be.visible').type("Omer is testing automation");
          cy.contains("button", "Submit").should("be.visible").click().wait(5000);
          

//---------------------------------------------------------------------------------Organization Structure-----------------------------------------------------------------------------------//



cy.contains("div","Organization Structure").click()
cy.get('textarea').should('be.visible').type("Omer is testing automation");
cy.contains("button", "Submit").should("be.visible").click().wait(5000);




//---------------------------------------------------------------------------------Management Plan-----------------------------------------------------------------------------------//



cy.contains("div","Management Plan").click()
cy.get('textarea').should('be.visible').type("Omer is testing automation");
cy.contains("button", "Submit").should("be.visible").click().wait(5000);



//---------------------------------------------------------------------------------Staffing Plan-----------------------------------------------------------------------------------//



cy.contains("div","Staffing Plan").click()
cy.get('textarea').should('be.visible').type("Omer is testing automation");
cy.contains("button", "Submit").should("be.visible").click().wait(5000);


//---------------------------------------------------------------------------------Key Personnel-----------------------------------------------------------------------------------------//



cy.contains("div","Key Personnel").click()
cy.get('textarea').should('be.visible').type("Omer is testing automation");
cy.contains("button", "Submit").should("be.visible").click().wait(5000);





//---------------------------------------------------------------------------------Monitorting Plan-----------------------------------------------------------------------------------//



cy.contains("div","Monitorting Plan").click()
cy.get('textarea').should('be.visible').type("Omer is testing automation");
cy.contains("button", "Submit").should("be.visible").click().wait(5000);




//---------------------------------------------------------------------------------Outcome Monitoring Approach-----------------------------------------------------------------------------------//



cy.contains("div","Outcome Monitoring Approach").click()
cy.get('textarea').should('be.visible').type("Omer is testing automation");
cy.contains("button", "Submit").should("be.visible").click().wait(5000);


//---------------------------------------------------------------------------------Evaluation Plan-----------------------------------------------------------------------------------//



cy.contains("div","Evaluation Plan").click()
cy.get('textarea').should('be.visible').type("Omer is testing automation");
cy.contains("button", "Submit").should("be.visible").click().wait(5000);



   });
});
