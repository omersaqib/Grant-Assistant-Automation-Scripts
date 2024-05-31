describe('Login Functionality', () => {
    beforeEach(() => {
      // Set the viewport to 1920x1080 before each test
      cy.viewport(1920, 1080);
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Caught unhandled exception: ', err.message);
        return false; // Prevent Cypress from failing the test
      });
    });
    it('Should display login page', () => {
        cy.visit('https://dev.grantassistant.ai/')
    })
  
    it('Should login with valid credentials', () => {
        cy.visit('https://dev.grantassistant.ai/')
        cy.intercept('POST', ' https://dapi.grantassistant.ai/api/auth/login').as('loginRequest');
        cy.get('[name="email"]').type('testuser1ga@yopmail.com');
        cy.get('[name="password"]').type("omer66978")
        cy.contains('LOGIN').click();
        cy.wait('@loginRequest').its('response.statusCode').should('eq', 201);
        cy.wait(4000)
    })
  
    it('Should handle invalid login attempts', () => {
      
      cy.visit('https://dev.grantassistant.ai/')
      cy.intercept('POST', 'https://dapi.grantassistant.ai/api/auth/login').as('loginRequest');
      cy.get('[name="email"]').type('QA-admin@gmail.com');
      cy.get('[name="password"]').type("QA1bytendjkak")
      cy.contains('LOGIN').click();
      cy.wait('@loginRequest').its('response.statusCode').should('eq', 401);
      cy.wait(4000);
      
     
     
    })
  })