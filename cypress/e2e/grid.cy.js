context('Grid', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/selectable')
  })

  it('gridElements', () => {
    cy.get("#demo-tab-grid").click()
    
    cy.contains('li','Two').click()
    cy.contains('li','Four').click()
    cy.contains('li','Six').click()
    cy.contains('li','Eight').click()
    
    cy.contains('li','Two').should('have.class', 'list-group-item active list-group-item-action')
    cy.contains('li','Four').should('have.class', 'list-group-item active list-group-item-action')
    cy.contains('li','Six').should('have.class', 'list-group-item active list-group-item-action')
    cy.contains('li','Eight').should('have.class', 'list-group-item active list-group-item-action')
    
    cy.contains('li','One').should('have.class', 'list-group-item list-group-item-action')
    cy.contains('li','Three').should('have.class', 'list-group-item list-group-item-action')
    cy.contains('li','Five').should('have.class', 'list-group-item list-group-item-action')
    cy.contains('li','Seven').should('have.class', 'list-group-item list-group-item-action')
    cy.contains('li','Nine').should('have.class', 'list-group-item list-group-item-action')
  })
})
