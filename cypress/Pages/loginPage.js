//LOCATORS====================================================================
let logoField = '.login_logo';
let usernameField ='input#user-name';
let passwordField = 'input#password';
let loginButton = 'input#login-button';
let titleField = 'span.title';
let errorMessage ='h3[data-test="error"]';
let errorMessageButton = 'button.error-button' ;

//FUNCTIONS===================================================================

export function LaunchApp() {
    cy.visit('https://www.saucedemo.com')
    cy.get(logoField).should('be.exist')
    cy.get(logoField).should('be.visible')
}

export function LoginFunction(username, password) {

    //validate the username field displayed
    //if ID use input#'id'
    cy.get(usernameField).should('be.exist')
    cy.get(usernameField).should('be.visible')

    //validate the password field is displayed
    cy.get(passwordField).should('be.exist')
    cy.get(passwordField).should('be.visible')

    //enter the username
    cy.get(usernameField).type(username)

    //enter the password
    cy.get(passwordField).type(password)

    //validate the login button
    cy.get(loginButton).should('be.exist')
    cy.get(loginButton).should('be.visible')

    //click on login button
    cy.get(loginButton).click()

}
//after login - product page
export function ProductPage(title) {
    cy.get(titleField).should('be.visible')
    cy.get(titleField).should('be.exist')
    cy.get(titleField).should('have.text', title)
}

export function ErrorMessage(errMess) {
    //test title
    cy.get(errorMessage).should('be.visible')
    cy.get(errorMessage).should('be.exist')
    cy.get(errorMessage).should('have.text', errMess)
    //test X button of error message
    cy.get(errorMessageButton).should('be.visible')
    cy.get(errorMessageButton).should('be.exist')

    cy.get(errorMessageButton).click()

}