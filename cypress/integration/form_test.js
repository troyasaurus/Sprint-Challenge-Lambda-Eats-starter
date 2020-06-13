describe('Testing out form Inputs', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000/pizza')
    })
    it('test name input', function() {
        cy.get("[data-cy=name]").type('testing name out');
    });
    it('test checkboxes', function() {
        cy.get('[data-cy=checkbox1]').check().should('be.checked')
    })
    it('test checkboxes', function() {
        cy.get('[data-cy=checkbox2]').check().should('be.checked')
    })
    it('test checkboxes', function() {
        cy.get('[data-cy=checkbox3]').check().should('be.checked')
    })
    it('test form submit', function() {
        cy.get('[data-cy=submit]').submit()
    })
});