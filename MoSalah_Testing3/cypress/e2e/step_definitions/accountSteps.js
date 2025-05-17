import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import accountPage from "../../page_objects/accountPage";
import loginPage from "../../page_objects/loginPage";

Given("I am logged in as {string} with password {string}", (username, password) => {
  loginPage.visit();
  loginPage.fillUsername(username);
  loginPage.fillPassword(password);
  loginPage.submit();
  cy.url().should('include', '/overview.htm');
});


When("I open a new account of type {string}", (accountType) => {
  accountPage.goToOpenAccount();
  accountPage.selectAccountType(accountType);
  accountPage.submit();
});

Then("I should see the new account created", () => {
  cy.get("#newAccountId")
    .should("be.visible")
    .invoke("text")
    .should("match", /^\d+$/); 
});
