describe("Testing trips viewing", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#cookie-btn").click();
  });

  it("Should display slider with trips", () => {
    cy.get("div[data-cy='trips-carousel']").should('exist');
    cy.get("h2.title").should("not.exist");
  });

  it("Should display recently viewed trips", () => {
    cy.get("div[data-name='Italian Espresso'] a").eq(0).click({ force: true });
    cy.get("h1").contains("Italian Espresso").should('exist');
    cy.get("a").click();
    cy.get("div[data-cy='recently-viewed']").children().should('have.length', 1);
    cy.get("div[data-cy='recently-viewed']").find("div[data-name='Italian Espresso']").should('exist');

    cy.get("div[data-name='Greek Islands'] a").eq(0).click({ force: true });
    cy.get("h1").contains("Greek Islands").should('exist');
    cy.get("a").click();
    cy.get("div[data-cy='recently-viewed']").children().should('have.length', 2);
    cy.get("div[data-cy='recently-viewed']").find("div[data-name='Greek Islands']").should('exist');

    cy.get("div[data-name='European Quest'] a").eq(0).click({ force: true });
    cy.get("h1").contains("European Quest").should('exist');
    cy.get("a").click();
    cy.get("div[data-cy='recently-viewed']").children().should('have.length', 3);
    cy.get("div[data-cy='recently-viewed']").find("div[data-name='European Quest']").should('exist');

    cy.get("div[data-name='Simply Italy'] a").eq(0).click({ force: true });
    cy.get("h1").contains("Simply Italy").should('exist');
    cy.get("a").click();
    cy.get("div[data-cy='recently-viewed']").children().should('have.length', 3);
    cy.get("div[data-cy='recently-viewed']").find("div[data-name='Simply Italy']").should('exist');
    cy.get("div[data-cy='recently-viewed']").find("div[data-name='Italian Espresso']").should('not.exist');
  });
});
