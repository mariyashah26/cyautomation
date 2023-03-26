describe('Check UI Elements', () => { 
    
    it('Checking Radio Buttons', () =>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        //check visibility of radio buttons
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')


        //selecting radio buttons (only one button can be checked at a time)

        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')


        
        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')
         
    })   


    it('Checking Check Boxes', () =>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        //check visibility of check box
        cy.get('input#monday').should('be.visible')
      


        //selecting one check box - monday 
        cy.get('input#monday').check().should('be.checked')

        //unselecting single checkbox
        cy.get('input#monday').uncheck().should('not.be.checked')

        //selecting all check boxes- choose common locator
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')


        //select first checkbox

        cy.get("input.form-check-input[type='checkbox']").first().check()
        //select last checkbox
        cy.get("input.form-check-input[type='checkbox']").last().check()
       
        
    })
    
    
    
    
    
    
    
    
 })