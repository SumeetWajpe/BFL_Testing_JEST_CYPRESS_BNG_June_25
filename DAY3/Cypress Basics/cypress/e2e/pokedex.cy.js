describe("test suite for pokedex app", () => {
  it("should visit pokedex app at localhost", () => {
    cy.visit("http://localhost:4200/");
  });
});
