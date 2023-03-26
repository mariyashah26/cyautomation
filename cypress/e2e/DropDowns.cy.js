describe('Handle Dropdowns', () => { 


  it('Dropdown with select ',()=> {   //dropdown with select tag

       cy.visit('https://www.zoho.com/crm/crmplus/request-demo.html')
       cy.get('#zcf_address_country').select('Italy')
       .should('have.value', 'Italy')
       })



       
  it('Dropdown without select ',()=> {   //dropdown without select tag (Bootstrap dropdowns)

    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    cy.get('#select2-billing_country-container').click()
    
    cy.get('.select2-search__field').type('India').type('{enter}') 

    cy.get('#select2-billing_country-container').should('have.text','India')

  })




  it('AutoSuggest Dropdown  ',()=> {   //dropdown with auto suggestions static options

    cy.visit('https://www.wikipedia.org/')
    cy.get('#searchInput').type('Delhi')
    
    cy.get('.suggestion-title').contains('Delhi University').click()

  })

  it('Dynamic Dropdown  ',()=> {   //dropdown with auto suggestions dynamic options

    cy.visit('https://www.google.com/')
    cy.get("input[name='q']").type('cypress automation')
    

    cy.wait(3000)

    cy.get('.wM6W7d').should('have.length', 11)

    cy.get('div.wM6W7d>span').each( ($el, index, $list)=>{      //each is a jquery function which loops throuh an array and takes 3 arguments

          if($el.text()==='cypress automation tutorial')
         {
             cy.wrap($el).click()      }
        })


        cy.get('input.gLFyf').should('have.value','cypress automation tutorial')

  })





})