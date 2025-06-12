# BFL_Testing_JEST_CYPRESS_BNG_June_25

# Github Repo
https://github.com/SumeetWajpe/BFL_Testing_JEST_CYPRESS_BNG_June_25

# Teample test suite

describe("test suite for matchers", () => {
    it("",()=>{
        
    })
});

# Angular and Jest Dependencies
npm i jest jest-preset-angular @types/jest --save-dev

# Lambda test URL
Main -  https://ecommerce-playground.lambdatest.io/
Login - https://ecommerce-playground.lambdatest.io/index.php?route=account/login

// Test if Url -> https://ecommerce-playground.lambdatest.io/index.php?route=account/account

cy.url().should("eq","https://ecommerce-playground.lambdatest.io/index.php?route=account/account")