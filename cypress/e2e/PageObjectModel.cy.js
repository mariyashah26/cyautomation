import Login from "../PageObjects/LoginPage"
describe('POM', () => { 
    
    
    
    it('Login ',()=>{

        cy.visit('https://practicetestautomation.com/practice-test-login/')

        
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
 
        cy.get('.post-title').should('have.text','Logged In Successfully' )


}) 

it('Login using POM',()=>{

    cy.visit('https://practicetestautomation.com/practice-test-login/')

    const ln = new Login();      //new object
    ln.setUsername('student')      
    ln.setPassword('Password123')
    ln.clickLogin();
    ln.verifyLogin();

   

})

it('Login using POM with fixture file',()=>{

    cy.visit('https://practicetestautomation.com/practice-test-login/')
    
    cy.fixture("logindata.json").then((data)=>{

        const ln = new Login();      //new object
        ln.setUsername(data.username)      
        ln.setPassword(data.password)
        ln.clickLogin();
        ln.verifyLogin();
    



    })
    
}) 





    
})
    
 