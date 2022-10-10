describe('xpath and css selector example spec', () => {
  it('finds login button with xpath and css selectors', () => {
    cy.visit('../minimalExamplePage.html');

    cy.xpath('//button').should('be.visible');
    cy.xpath('//*[@id="loginButton"]').should('be.visible');
    cy.xpath('/html/body/div/button').should('be.visible');
    
    cy.get('#loginButton').should('be.visible');
    cy.get('.login').should('be.visible');
    cy.get('button').should('be.visible');
  })
})