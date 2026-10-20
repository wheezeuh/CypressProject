describe('This spec file will use fixture to load data', () => {


    it('Fill the contact information using fixtures', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')


        cy.fixture('data').then((data) => {


            cy.get('input[name="firstName"]').type(data.firstName)
            cy.get('input[name="lastName"]').type(data.lastName)
            cy.get('input[name="phone"]').type(data.phone)
            cy.get('input[name="userName"]').type(data.email)
        })
    })


    it('Fill the   Mailing Information using fixtures', () => {
        cy.visit('https://demo.guru99.com/test/newtours/register.php')


        cy.fixture('mailingData').then((data) => {


            cy.get('input[name="address1"]').type(data.Address)
            cy.get('input[name="city"]').type(data.City)
            cy.get('input[name="state"]').type(data.State_Province)
            cy.get('input[name="postalCode"]').type(data.PostalCode)
            cy.get('select[name="country"]').select(data.Country)

        })
    })

})
