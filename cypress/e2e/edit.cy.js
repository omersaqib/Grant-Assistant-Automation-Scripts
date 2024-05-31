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
      cy.contains("p", "OmerAutomationtestproposal975")
        .should("be.visible")
        .click();
      cy.contains("button", "Design").should("be.visible").click();
      cy.wait(2000)
      
     //------------------------------------------------------------------Technical Approach-------------------------------------------------------------------------------------------------//    
      cy.contains("button", "Edit").should("be.visible").click();
      cy.get('textarea').clear().type("The American Institute for Peace and Human Rights (AIPHR) proposes a robust Technical Approach to bolster the Guinea Local Health System Strengthening (GLHSS) Activity.");
      cy.contains("button", "Submit").should("be.visible").click().wait(15000);
      cy.wait(10000)

//------------------------------------------------------------------=--------------Problem Statement-----------------------------------------------------------------------------------//



cy.contains("div","Problem Statement").click()
cy.wait(2000)
cy.contains("button", "Edit").should("be.visible").click();
cy.get('textarea').clear().type("The Republic of Guinea faces a myriad of health system challenges, exacerbated by the active conflict that has impacted the country's social and geographic fabric.");
cy.contains("button", "Submit").should("be.visible").click().wait(15000);
cy.wait(5000)


 //---------------------------------------------------------------------------------Operating Environment-----------------------------------------------------------------------------------//



cy.contains("div","Operating Environment").click().wait(2000)
cy.contains("button", "Edit").should("be.visible").click();
cy.get('textarea').clear().type("CConakry, as the capital city, is a central hub that offers several strategic advantages. It boasts a higher concentration of health facilities and skilled healthcare professionals.");
cy.contains("button", "Submit").should("be.visible").click().wait(15000);
cy.wait(5000)


 //---------------------------------------------------------------------------------Description Approach-----------------------------------------------------------------------------------//



 cy.contains("div","Description of the Approach").click().wait(2000)
 cy.contains("button", "Edit").should("be.visible").click();
 cy.get('textarea').clear().type("The American Institute for Peace and Human Rights (AIPHR) proposes a multifaceted strategy to enhance the health systems in Guinea. ");
 cy.contains("button", "Submit").should("be.visible").click().wait(15000);
 cy.wait(5000)



 //---------------------------------------------------------------------------------Program Objectives-----------------------------------------------------------------------------------//



 cy.contains("div","Program Objectives").click().wait(2000)
 cy.contains("button", "Edit").should("be.visible").click();
 cy.get('textarea').clear().type("AIPHR intends to implement Social Behavior Change Communication (SBCC) as a cross-cutting strategy to bolster all elements of the project.");
 cy.contains("button", "Submit").should("be.visible").click().wait(15000);
 cy.wait(15000)



 //---------------------------------------------------------------------------------Outcomes And Results-----------------------------------------------------------------------------------//



 cy.contains("div","Outcomes & Results").click().wait(2000)
 cy.contains("button", "Edit").should("be.visible").click();
 cy.get('textarea').clear().type("Building upon the strategic framework outlined by The American Institute for Peace and Human Rights (AIPHR), our focus within the Guinea Local Health System Strengthening (GLHSS) Activity.");
 cy.contains("button", "Submit").should("be.visible").click().wait(15000);
 cy.wait(5000)
 //---------------------------------------------------------------------------------Crosscutting Themes-----------------------------------------------------------------------------------//



 cy.contains("div","Crosscutting Themes").click().wait(2000)
 cy.contains("button", "Edit").should("be.visible").click();
 cy.get('textarea').clear().type("In alignment with the strategic objectives of the Guinea Local Health System Strengthening (GLHSS) Activity, The American Institute for Peace and Human Rights (AIPHR) seeks to embed essential crosscutting themes into the fabric of the proposal.");
 cy.contains("button", "Submit").should("be.visible").click().wait(15000);
 cy.wait(5000)
//---------------------------------------------------------------------------------Resource Partnership-----------------------------------------------------------------------------------//



      cy.contains("div","Resource Partnership").click().wait(2000)
      cy.contains("button", "Edit").should("be.visible").click();
      cy.get('textarea').clear().type("AIPHR will prioritize partnerships with local NGOs, CSOs, and the private sector.");
      cy.contains("button", "Submit").should("be.visible").click().wait(15000);
      cy.wait(5000)
//---------------------------------------------------------------------------------Organization Structure-----------------------------------------------------------------------------------//



cy.contains("div","Organization Structure").click().wait(2000)
cy.contains("button", "Edit").should("be.visible").click();
cy.get('textarea').clear().type("AIPHR aims to collaborate with local NGOs, CSOs, private sectors, and the Ministry of Health. Local partners will enrich programs with indigenous insights, while NGOs focus on community engagement. The private sector may offer resources, and government entities ensure democratic norms. Academic institutions will aid data utilization, while international donors might provide funding and expertise.");
cy.contains("button", "Submit").should("be.visible").click().wait(15000);
cy.wait(5000)

//---------------------------------------------------------------------------------Management Plan-----------------------------------------------------------------------------------//



cy.contains("div","Management Plan").click().wait(2000)
cy.contains("button", "Edit").should("be.visible").click();
cy.get('textarea').clear().type("Our management plan prioritizes robust communication and collaboration. Regular meetings, reports, and shared platforms facilitate coordination among stakeholders, including USAID and other implementing bodies. We employ transparent channels, encouraging knowledge exchange and joint problem-solving. This fosters synergy, aligning efforts for impactful and cohesive implementation while leveraging collective expertise and resources.");
cy.contains("button", "Submit").should("be.visible").click().wait(15000);
cy.wait(5000)

//---------------------------------------------------------------------------------Staffing Plan-----------------------------------------------------------------------------------//



cy.contains("div","Staffing Plan").click().wait(2000)
cy.contains("button", "Edit").should("be.visible").click();
cy.get('textarea').clear().type("Anticipating a diverse project scope, we estimate a staff count aligned with operational needs. This could range from core team members, including project managers, coordinators, and specialists, to short-term technical assistants or consultants, the exact count contingent upon project phases and requirements, flexibly adjusting as needed for optimal efficiency.");
cy.contains("button", "Submit").should("be.visible").click().wait(15000);
cy.wait(5000)
//---------------------------------------------------------------------------------Key Personnel-----------------------------------------------------------------------------------------//



cy.contains("div","Key Personnel").click().wait(2000)
cy.contains("button", "Edit").should("be.visible").click();
cy.get('textarea').clear().type("The team comprises Maria Rodriguez, a Master's in Public Health holder with 15+ years of global health initiative management experience. Ahmed Khan, an MBA graduate, brings expertise in international development, aiding project management and program leadership. Dr. Gabriela Lopez, a Ph.D. in Public Health, leverages extensive research experience, offering technical guidance and leading health strategies.");
cy.contains("button", "Submit").should("be.visible").click().wait(15000);
cy.wait(5000)



//---------------------------------------------------------------------------------Monitorting Plan-----------------------------------------------------------------------------------//



cy.contains("div","Monitorting Plan").click().wait(2000)
cy.contains("button", "Edit").should("be.visible").click();
cy.get('textarea').clear().type("The team comprises Maria Rodriguez, a Master's in Public Health holder with 15+ years of global health initiative management.");
cy.contains("button", "Submit").should("be.visible").click().wait(15000);
cy.wait(5000)


//---------------------------------------------------------------------------------Outcome Monitoring Approach-----------------------------------------------------------------------------------//



cy.contains("div","Outcome Monitoring Approach").click().wait(2000)
cy.contains("button", "Edit").should("be.visible").click();
cy.get('textarea').clear().type("The data collection and monitoring approach will be tailored to the specific country context.");
cy.contains("button", "Submit").should("be.visible").click().wait(15000);
cy.wait(5000)
//---------------------------------------------------------------------------------Evaluation Plan-----------------------------------------------------------------------------------//



cy.contains("div","Evaluation Plan").click().wait(2000)
cy.contains("button", "Edit").should("be.visible").click();
cy.get('textarea').clear().type("The Evaluation Plan will ensure accountability by engaging stakeholders in the process, incorporating their feedback and perspectives.");
cy.contains("button", "Submit").should("be.visible").click().wait(15000);
cy.wait(5000)

    });
  });
  