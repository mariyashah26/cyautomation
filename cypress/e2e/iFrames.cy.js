import 'cypress-iframe'  //to use iframe plugin


describe('Iframes', () => { 
    
    it("approach 1", ()=>{

      cy.visit('https://the-internet.herokuapp.com/iframe');


      const iframe=cy.get("#mce_0_ifr")   //capture iframe
         .its('0.contentDocument.body')
         .should('be.visible')
         .then (cy.wrap);


         iframe.clear().type("Winter is here!{ctrl+a}");

         cy.get("[aria-label='Bold']").click();
     })
    

     it("approach 2- using custom command", ()=>{      //multiple iframes

        cy.visit('https://the-internet.herokuapp.com/iframe');
  
  
        cy.getIframe("#mce_0_ifr").clear().type("Hello!!!{ctrl+a}");
      

        cy.get("[aria-label='Bold']").click();

     })



     it("approach 3- using cypress-iframe plugin", ()=>{      //multiple iframes

        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.frameLoaded("#mce_0_ifr");  //frame loaded built in methods gets/loads the iframe
  
        cy.iframe("#mce_0_ifr").clear().type("I am cypress iframe plugin {ctrl+a}"); //iframe method to interact with the frame

        cy.get("[aria-label='Bold']").click();
        
     })
    










    })