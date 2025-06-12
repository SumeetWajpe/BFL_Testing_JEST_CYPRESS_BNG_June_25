// /// <reference types="Cypress" />
describe("test suite for pokedex app", () => {
  it("should visit pokedex app at localhost", () => {
    cy.visit("http://localhost:4200/");
    //cy.get("#search_pokemon").type("bu");
    //cy.get(".pokemon-content").should("have.length", 2);
    // cy.get("app-pokemon-item")
    //   .find(".pokemon-content")
    //   .should("have.length", 2);

    cy.get("span.main-title").should(
      "have.text",
      " Search for any Pokemon that exists on the planet ",
    );
  });
});
