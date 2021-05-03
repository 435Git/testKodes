describe('Login Page - Successful Login Test', () => {
    it('Visits Login Page ', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.contains('Login Page')
    })
    it('Enters Valid Username', () => {
        cy.get('#username')
            .type('tomsmith')
    })
    it('Enters Valid Password', () => {
        cy.get('#password')
            .type('SuperSecretPassword!')
    })
    it('Clicks Login button', () => {
        cy.get('.fa').click()
        cy.contains('You logged into a secure area!')
    })
    it('Clicks Logout button', () => {
        cy.get('.button').click()
        cy.contains('You logged out of the secure area!')
    })
})
describe('Login Page - Invalid Username Login Test', () => {
    it('Visits Login Page ', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.contains('Login Page')
    })
    it('Enters Invalid Username', () => {
        cy.get('#username')
            .type('johnsmith')
    })
    it('Enters Valid Password', () => {
        cy.get('#password')
            .type('SuperSecretPassword!')
    })
    it('Clicks Login button', () => {
        cy.get('.fa').click()
        cy.contains('Your username is invalid!')
    })
})
describe('Login Page - Invalid Username Login Test', () => {
    it('Visits Login Page ', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.contains('Login Page')
    })
    it('Enters Valid Username', () => {
        cy.get('#username')
            .type('tomsmith')
    })
    it('Enters Invalid Password', () => {
        cy.get('#password')
            .type('SuperSecretPassword')
    })
    it('Clicks Login button', () => {
        cy.get('.fa').click()
        cy.contains('Your password is invalid!')
    })
})