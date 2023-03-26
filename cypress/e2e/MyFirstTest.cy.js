

describe('My First Test', () => {

    it('verify title-positive test', () => {
      cy.visit("google.co.in")
      cy.title().should('eq','Google')   //assertion
    })




    it('verify title-negative test', () => {
        cy.visit("google.co.in")
        cy.title().should('eq','Google12')   //assertion
      })

})