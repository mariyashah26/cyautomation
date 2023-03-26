describe('My Test Suite', () => {
    
    
    it('Data Driven Test',()=>{

        cy.visit('https://practicetestautomation.com/practice-test-login/')

        cy.fixture('logindata2.json').then((data)=>{

             data.forEach((userdata) => {

                cy.get('#username').type(userdata.username)
                cy.get('#password').type(userdata.password)
                cy.get('#submit').click()

                if(userdata.username=="student" && userdata.password=="Password123"){
              
                    cy.get('.post-title').should('have.text', userdata.expected)

                    cy.get('.wp-block-button__link').click() //logout


                } 
                else if(userdata.username!=="student" && userdata.password=="Password123"){

                    cy.get('#error').should('have.text', userdata.expected)
                }

                else if(userdata.username=="student" && userdata.password!=="Password123"){

                    cy.get('#error').should('have.text',userdata.expected)
                }
            
               
                
             });


        })
    })
    
})