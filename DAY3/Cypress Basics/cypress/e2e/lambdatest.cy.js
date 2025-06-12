// https://ecommerce-playground.lambdatest.io/index.php?route=account/login

describe("test suite for Lambdatest.io", () => {
  it("logs in successfully using email & pwd", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
    );
    cy.get("#input-email").type("aniketadmin@gmail.com");
    cy.get("#input-password").type("admin@1");
    cy.get("form > .btn").click();
    cy.url().should(
      "eq",
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/account",
    );
  });
});
