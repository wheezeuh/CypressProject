describe('This spec file will launch and test the application', () => {

    it('Launch google', () => {
      cy.visit('https://google.com')
    })

    it('Launch another page', () => {
      cy.visit('https://google.com/search?q=testing')
    })

    it('Launch about page', () => {
      cy.visit('https://google.com/about')
    })

})