import 'cypress-iframe'

require('@4tw/cypress-drag-drop')
describe('Mouse Operations', () => {
    
    
     it("MouseHover", ()=>{

         cy.visit("https://demo.opencart.com/")

         cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
         .should('not.be.visible');

         cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();   //trigger method used

         cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
         .should('be.visible');


     })


     it("Right Click", ()=>{

        //approach 1- using trigger method (contextmenu)

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

      /*  cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");

        cy.get('.context-menu-icon-copy > span').should("be.visible"); */

        //approach 2 - directly get element and right click method

        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-icon-copy > span').should("be.visible");
     })

     it("Double Click", ()=>{

           cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")

           cy.frameLoaded('#iframeResult') //load the frame

           //approach 1- using trigger method

          // cy.iframe('#iframeResult').find(" button[ondblclick='myFunction()']").trigger('dblclick'); // switch to frame and find the double click element
 

           // cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!');


            //approach 2- using dbl click method


          cy.iframe('#iframeResult').find(" button[ondblclick='myFunction()']").dblclick();

          cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!');
     })

     it("Drag and Drop using Plugin", ()=>{
         
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

        cy.get('#box6').should('be.visible');
        cy.get('#box106').should('be.visible');

        cy.wait(3000);

        cy.get('#box6').drag('#box106', {force:true});  //using drag plugin
    })


     it.only("Scrolling Page", ()=>{

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        //scroll down

        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000});


        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible');

        //scroll up 

        cy.get(':nth-child(2) > tbody > :nth-child(35) > :nth-child(1) > img').scrollIntoView({duration:200});

        cy.get(':nth-child(2) > tbody > :nth-child(35) > :nth-child(1) > img').should('be.visible');

        //scroll down to footer

        cy.get('#footer').scrollIntoView();

     })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    })