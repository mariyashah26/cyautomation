// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress" />

/// <reference types="cypress-xpath" />

//custom command for iframes

Cypress.Commands.add('getIframe', (iframe)=>{

    return cy.get(iframe)   //capture iframe
    .its('0.contentDocument.body')
    .should('be.visible')
    .then (cy.wrap);
})


//custom command for clicking on a link using label

Cypress.Commands.add('clickLink',(label)=>{

    cy.get("a").contains(label).click();
})

// custom command for Login

Cypress.Commands.add('logInapp',(email,password)=>{

  cy.get("#Email").type(email);
  cy.get('#Password').type(password);
  cy.get(".button-1.login-button").click();

})