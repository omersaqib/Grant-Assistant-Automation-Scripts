describe('Login Functionality', () => {
    beforeEach(() => {
      // Set the viewport to 1920x1080 before each test
      cy.viewport(1920, 1080);
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Caught unhandled exception: ', err.message);
        return false; // Prevent Cypress from failing the test
      });
    });
    it('Should display home page', () => {
        cy.login();

    })
  
   
     
     

  })