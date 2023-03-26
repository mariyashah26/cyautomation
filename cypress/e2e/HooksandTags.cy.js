//4 types of hooks -> Mocha Framework Pre-requisites before executing the script

//before -> executes before only once


//after -> executes after only once


//beforeEach ->executes before each it block


//AfterEach -> executes after each it block


//Tags 1. it.skip --> to skip any it block from executing

  //   2. it.only --> to execute only one it block 
  
describe('describe block', () => {
    
    before(()=>{
        cy.log('This is before hook')

    })

    beforeEach(()=>{
        cy.log('this before Each hook')

    })

    after(()=>{
        cy.log('this is after hook')

    })

    afterEach(()=>{

        cy.log('this is afterEach hook')
    })
    it('block 1', ()=>{

        cy.log('this is block 1')


    })
    
    
    
     it('block 2', ()=>{

        cy.log('this is block 2')
    })
    
    it('block 3', ()=>{
        cy.log('this is block 3')
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 })