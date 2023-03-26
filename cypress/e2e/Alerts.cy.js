describe('Handling Alerts', () => { 

    //1. JavaScript alert: It will have some text and an 'OK' button
    //2. JavaScript Confirm Alert: It will have some text with "OK" and "Cancel" buttons
    //3. Javascript Prompt Alert: It will have some text with a text box for user input along with an 'OK' button
    //4. Authentication Alert: User has to enter a username and p.w

    //Cypress handles alerts automatically but if we have to do some validations on alerts then we have to trigger some events to do the validation.
    
    it('JS Alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();


        cy.on('window:alert', (t)=>{                      //cy.on -> method  window:alert -> event  (t) is the variable that wraps the alert
            expect(t).to.contains('I am a JS Alert');     //event to validate text on alert
        })

        //alert window is automaticlly closed by cypress

        cy.get('#result').should('have.text',"You successfully clicked an alert")
        })
    

        it('JS Confirmation Alert using OK button', ()=>{

            //cypress closes the confirm alert by itself but if we want to press cancel we will have to trigger an event 
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

            cy.get("button[onclick='jsConfirm()']").click();
    
    
            cy.on('window:confirm', (t)=>{                      //cy.on -> method  window:confirm -> event  (t) is the variable that wraps the alert
                expect(t).to.contains('I am a JS Confirm');     //event to validate text on alert
            })
    
            //cypress automatically closed alert window by using ok button-default
    
            cy.get('#result').should('have.text',"You clicked: Ok")
            })
        
    
            it('JS Confirmation Alert using cancel button', ()=>{

                //cypress closes the confirm alert by itself but if we want to press cancel we will have to trigger an event 
                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
                cy.get("button[onclick='jsConfirm()']").click();
        
        
                cy.on('window:confirm', (t)=>{                      //cy.on -> method  window:confirm -> event  (t) is the variable that wraps the alert
                    expect(t).to.contains('I am a JS Confirm');     //event to validate text on alert
                })


                cy.on('window:confirm', ()=> false);  //uses cancel button by default it is true
        
                //cypress automatically closed alert window by using ok button-default
        
                cy.get('#result').should('have.text',"You clicked: Cancel")


                })



                it('JS Prompt Alert', ()=>{

                    //cypress closes the confirm alert by itself but if we want to press cancel we will have to trigger an event 
                    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

                    //trigger event before opening alert window

                    cy.window().then((win) => {

                        cy.stub(win, 'prompt').returns('welcome'); //writing welcome on the input box
                        
                    })
        
                    cy.get("button[onclick='jsPrompt()']").click();
        
                    //cypress automatically closed alert window by using ok button-default

                 cy.get('#result').should('have.text',"You entered: welcome")
    
                    
                    })


                    it('Authenticated Alert', ()=>{

                        //approach 1: passing username and p.w along with the url as json object
                        cy.visit('https://the-internet.herokuapp.com/basic_auth',
                        {auth:
                        {
                            username: "admin",
                            password: "admin"
                        }});

                        //validating the message after loggin in

                        cy.get("div[class='example'] p").should('have.contain', "Congratulations!")
    
                        //approach 2: injecting username and p.w inside url

                        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
                        
                        cy.get("div[class='example'] p").should('have.contain', "Congratulations!")
                        
                        })
            
    
    
    
    
    
     })