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
        cy.visit(`https://${Cypress.env('environment')}.grantassistant.ai/`)
    })
  
    it('Should login with valid credentials', () => {
        cy.visit(`https://${Cypress.env('environment')}.grantassistant.ai/`)
        cy.intercept('POST', `https://${Cypress.env('environment')}.api.grantassistant.ai/api/auth/login`).as('loginRequest');
        cy.get('[name="email"]').type(Cypress.env('VALID_EMAIL'));
        cy.get('[name="password"]').type(Cypress.env('VALID_PASSWORD'));
        cy.contains('LOGIN').click();
        cy.wait('@loginRequest').its('response.statusCode').should('eq', 201);
        cy.wait(4000)
    })
  
    it('Should handle invalid login attempts', () => {
        cy.visit(`https://${Cypress.env('environment')}.grantassistant.ai/`)
        cy.intercept('POST', `https://${Cypress.env('environment')}.api.grantassistant.ai/api/auth/login`).as('loginRequest');
        cy.get('[name="email"]').type(Cypress.env('INVALID_EMAIL'));
        cy.get('[name="password"]').type(Cypress.env('INVALID_PASSWORD'));
        cy.contains('LOGIN').click();
        cy.wait('@loginRequest').its('response.statusCode').should('eq', 401);
        cy.wait(4000);
    })
  })