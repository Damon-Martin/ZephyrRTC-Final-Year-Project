/// <reference types="cypress" />


describe('E2E: Login Page', () => {
  beforeEach(() => {
    cy.visit('https://localhost/')
  })

  it('test-correct-login-details-should-open-friend-list', () => {

    cy.get('.todo-list li').should('have.length', 2)

    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog')

    assert.fail('Test Not Made Yet');
  })

})
