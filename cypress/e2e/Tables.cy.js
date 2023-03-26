describe('Handle Tables', () => { 
    
    beforeEach('Login',()=>{
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get("button[type='submit']").click();  //login

        cy.get('.btn-close').click()

        //customers main menu-> customers sub menu

        cy.get('#menu-customer>a').click(); //customers main menu

        cy.get('#menu-customer>ul>li:first-child').click() //child item --> opens table

        })


    it('Find no. of rows & columns',()=>{

        //capture rows and assert the number of rows
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10);
        //capture columns and assert the number of columns
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 7);
    })



    it.skip('Check cell data from specific row and column',()=>{
         
        //get a particular cell and validate the value
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("princytrainings4@gmail.com")
    })




    it.skip('Read all the rows & columns data in the first page',()=>{
         //by using each loop iterate all values 
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")    //capture all rows
             .each(   ($row, index, $rows) =>{

                 cy.wrap($row).within(()=>{
                          
                     cy.get("td").each(($col, index, $cols)=>{      //capture columns
                        cy.log($col.text())
                      })
            })

        })
    
    })

    it.skip('Pagination',()=>{

        //find total number of pages
      /*   let totalPages;
        cy.get(".col-sm-6.text-end").then((e)=>{

               let myText= e.text();             //Showing 1 to 10 of 9069 (907 Pages)
                
               totalPages= myText.substring(myText.indexOf("(")+1, myText.indexOf("Pages")-1);
               cy.log("Total pages in the table ==>"+ totalPages);
        }) */


        //read data from pages one by one by loop

        let totalPages=5;

        for(let p=1; p<=5; p++)

        {
          if(totalPages>1)
            {
                cy.log("Active page is ==>"+p);
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(3000);

                //read data from particular page

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each(($row, index, $rows) =>{

                    cy.wrap($row).within(  ()=>{
                        cy.get("td:nth-child(3)").then((el)=>{
                            cy.log(el.text());  //captures email of all rows
                        })
                    })


                })


            }

        }


        
    })
})


























