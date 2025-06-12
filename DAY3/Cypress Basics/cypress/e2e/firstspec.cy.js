xdescribe("template spec", () => {
  // it("visits flipkart website", () => {
  //   cy.visit("https://www.flipkart.com/");
  // });
  it("visits flipkart website and types iphone", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get("input.Pke_EE").type("iphone");
  });
});

// Pke_EE
