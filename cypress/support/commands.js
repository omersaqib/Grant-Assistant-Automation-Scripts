Cypress.Commands.add('getEnvironmentUrl', () => {
    const env = Cypress.env('environment') || 'dev';
    return `https://${env}.grantassistant.ai`;
});

Cypress.Commands.add('login', () => {
    cy.visit(`https://${Cypress.env('environment')}.grantassistant.ai/`)
    cy.intercept('POST', `https://${Cypress.env('environment')}.api.grantassistant.ai/api/auth/login`).as('loginRequest');
    cy.get('[name="email"]').type(Cypress.env('VALID_EMAIL'));
    cy.get('[name="password"]').type(Cypress.env('VALID_PASSWORD'));
    cy.contains('LOGIN').click();
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 201);
    cy.wait(2000)
    // Add any additional assertions if needed
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