describe('This will test the login using xpath',()=>{
    it('Login Success funtionality',()=>{
        cy.launchApp();

        cy.xpath('//input[@id="username"]').type('student');
        cy.xpath('//input[@id="password"]').type('Password123');
        cy.xpath('//button[@id="submit"]').click();
        //validate
        cy.xpath('//h1').should('have.text', 'Logged In Successfully');

    })

     it('Login Failure with Username funtionality',()=>{
       cy.launchApp();

        cy.xpath('//input[@id="username"]').type('incorrectUser ');
        cy.xpath('//input[@id="password"]').type('Password123');
        cy.xpath('//button[@id="submit"]').click();
        
        //validate
        cy.xpath('//div[@id="error"]').should('have.text','Your username is invalid!');
    })


    it('Login Failure with Password funtionality',()=>{
        cy.launchApp();
        cy.xpath('//input[@id="username"]').type('student');
        cy.xpath('//input[@id="password"]').type('incorrectPassword');
        cy.xpath('//button[@id="submit"]').click();
        
        //validate
        cy.xpath('//div[@id="error"]').should('have.text','Your password is invalid!');
    })


})