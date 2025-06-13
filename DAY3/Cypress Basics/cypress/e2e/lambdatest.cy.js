const LoginPage = require("../pages/loginPage");
describe("test suite for Lambdatest.io", () => {
  xit("logs in successfully using email & pwd", () => {
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

  it("login successfully but using fixture", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
    );
    cy.fixture("login").then(data => {
      cy.get("#input-email").type(data.email);
      cy.get("#input-password").type(data.pwd);
      cy.get("form > .btn").click();
      cy.url().should(
        "eq",
        "https://ecommerce-playground.lambdatest.io/index.php?route=account/account",
      );
    });
  });
  it("login using PageObject for reusable biz logic", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
    );
    const loginPage = new LoginPage();
    loginPage.login(); // this is using login method from Page Object
    cy.url().should(
      "eq",
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/account",
    );
  });
});
