describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('/');

    // Find a link with an href attribute containing "about" and click it
    cy.get('li[data-testid*="nav-link-clients"]').click();

    // The new url should include "/about"
    cy.url().should('include', '/clients');
  });
});
