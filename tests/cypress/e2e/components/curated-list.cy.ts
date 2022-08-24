describe('curated list component', () => {
  it('should render a curated list', () => {
    cy.visit('/')
    cy.getCy('curated-list')
      .find('img')
      .first()
      .should('not.have.attr', 'src', '/placeholder-white.webp')
    cy.getCy('curated-name').should('exist')

    cy.getCy('chain-select').click()
    cy.getCy('chain-dropdown-bsx').click()
    cy.getCy('curated-list')
      .find('img')
      .first()
      .should('not.have.attr', 'src', '/placeholder-white.webp')
    cy.getCy('curated-name').should('exist')

    cy.getCy('chain-select').click()
    cy.getCy('chain-dropdown-moonsama').click()
    cy.getCy('curated-list')
      .find('img')
      .first()
      .should('not.have.attr', 'src', '/placeholder-white.webp')
    cy.getCy('curated-name').should('exist')
  })
})
