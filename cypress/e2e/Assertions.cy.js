describe('Assertions demo', () => { 
    
    it('Implicit assertions', () =>{

         cy.visit('https://www.google.com/')

         //.should .and implicit assertions

         cy.url().should('include','google.com')  //cy.url captures url
         cy.url().should('eq','https://www.google.com/')
         cy.url().should('contain','google')

                 //or

         cy.url().should('include','google.com')  //cy.url captures url
         .and('eq','https://www.google.com/')
         .and('not.contain','apple')

         cy.title().should('include','Google') //cy.title gets the title

         cy.get('.lnXdpd').should('be.visible')   //check wheather logo is visible and it exists
         .and('exist')

         cy.xpath('//a').should('have.length','25') //verify no. of links/anchor tags on a page


         cy.get('.gLFyf').type('cypress') //write a value in the search box
         cy.get('.gLFyf').should('have.value','cypress') //value check

         cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()



    })
    
    it('Explicit assertions', () =>{

        cy.visit('https://www.google.com/')

        let expString = "Images";

        cy.get(':nth-child(2) > .gb_m').then ((x) => {    //resolve promise

             let actualString  = x.text()
             //BDD style
             expect(actualString).to.equal(expString)
        //      expect(actualString).to.not.equal(expString)

             //TDD style
             assert.equal(actualString,expString)

        }

        )



   })
   
    
    })