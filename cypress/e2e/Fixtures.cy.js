describe('MyTestSuite', () => {
    
    //Direct Access

    it('FixturesDemo', ()=>{

       cy.visit('https://practicetestautomation.com/practice-test-login/')

       cy.fixture("logindata").then((data)=>{
       cy.get('#username').type(data.username)
       cy.get('#password').type(data.password)
       cy.get('#submit').click()

       cy.get('.post-title').should('have.text', data.expected)
    })
    
}) 
    
    
    
    //Access through Hook - for multiple it blocks

    let userdata;   //global variable

    before(()=>{

        cy.fixture('logindata.json').then((data)=>{
            userdata=data;                           //making the login data global
        })
    })
    
      it('FixturesDemo', ()=>{

        cy.visit('https://practicetestautomation.com/practice-test-login/')

        
        cy.get('#username').type(userdata.username)
        cy.get('#password').type(userdata.password)
        cy.get('#submit').click()
 
        cy.get('.post-title').should('have.text', userdata.expected)

        
    
    
    
})   
    
    
    
    
    
})