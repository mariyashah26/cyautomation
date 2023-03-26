//cypress does not handle child tabs. For that we have to remove the target:_blank attribute in
// the html code by using a method called invoke


describe('Child Tabs', () => {
    
      it('approach 1', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')  //parent tab

        //removing target attribute then clicking

        cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click();

    //validating that new window is the child tab
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.wait(4000);
        //go back to parent tab

        cy.go('back');


      })


      it('approach 2', ()=>{           //approach 2 doesnt work if domains of parent and child tabs are different

        cy.visit('https://the-internet.herokuapp.com/windows')  //parent tab

        //capture href link and visit that again 

        cy.get('.example >a').then((e)=>{

            let url=  e.prop('href');    //url = child tab

            cy.visit(url);

        })

         //validating that new window is the child tab
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.wait(4000);
        //go back to parent tab

        cy.go('back');


      })
    
    
    








})