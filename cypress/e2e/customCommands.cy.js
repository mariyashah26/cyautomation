//click on link using label
//over writing existing contains() command
// re-usable custom command






describe('Custom Commands', () => {
      it('handling links',()=>{

       cy.visit('https://demo.nopcommerce.com/');

       //direct approach
      // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()


        // using custom command clickLink

       cy.clickLink("Apple MacBook Pro 13-inch")
       cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')


     
         


      })
    
    
     it.skip('overwriting existing command',()=>{




        
      })


      it('login command',()=>{

        cy.visit('https://demo.nopcommerce.com/');

        cy.clickLink('Log in'); //custom command

        cy.logInapp('testing@gmail.com', 'test123'); //login custom command


        
      })
    
    
    
    
    
    
    
    
    
    
 })