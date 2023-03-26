class Login
{
 //properties

 txtUserName= '#username';
 txtPassword=  '#password';
 btnLogin= '#submit';

 labelmsg='.post-title';


 //methods

 setUsername(username)
 {
    cy.get(this.txtUserName).type(username);
 }

 setPassword(password)
 {
    cy.get(this.txtPassword).type(password);
 }

 clickLogin()
 {
    cy.get(this.btnLogin).click();
 }

 verifyLogin()

 {

    cy.get('.post-title').should('have.text',"Logged In Successfully");
 }


}

export default Login;