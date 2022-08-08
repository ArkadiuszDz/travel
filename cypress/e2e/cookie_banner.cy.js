describe("Testing showing and hiding cookie banner", () => {
  beforeEach(() => {
    cy.visit("/")
  });

  it("Should show and close cookie banner", () => {
    cy.get("div[data-cy='cookie-banner']").should('exist');
    cy.get("#cookie-btn").click();
    cy.get("div[data-cy='cookie-banner']").should('not.exist');
  });
  
});