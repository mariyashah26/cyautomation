describe('API Testing ', () => {
    
    it("GET request", ()=>{


        cy.request({
            
            method: 'GET',
            url: "https://reqres.in/api/users/2"})
           .then((response) => {
            expect(response.body).to.have.property( "support");
            

        })
    })

    it("POST request", ()=>{


        cy.request({
            
            method: 'POST',
            url: "https://reqres.in/api/users",
             body: {

                "email": "eve.holt@reqres.in",
                "password": "pistol"
             }})
             .then((response) => { 
                expect(response.body).has.property("email", 'eve.holt@reqres.in');
           
            

        })
    })


    it("PUT request", ()=>{


        cy.request({
            
            method: 'PUT',
            url: "https://reqres.in/api/users/2",
             body: {

                
                    "name": "morpheus",
                    "job": "zion resident"
                
             }})
             .then((response) => { 
                expect(response.body).has.property("name", 'morpheus');
           
            

        })
    })


    
    it("DELETE request", ()=>{


        cy.request({
            
            method: 'DELETE',
            url: "https://reqres.in/api/users/2",
            })
            .then((response) => {
                expect(response.body).to.be.empty;
           
            

        })
    })


    
    
    
    
    
    
    
    
    

})