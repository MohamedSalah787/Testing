import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I have more than one account", () => {
  cy.ensureSecondAccountExists();
});

When("I request a loan of {string} with a down payment of {string}", (amount, downPayment) => {
  cy.requestLoan(amount, downPayment);
});

Then("I should see the loan request processed successfully", () => {
  cy.contains("Loan Request Processed").should("be.visible");
});

Then("I should see that the loan request was denied", () => {
  cy.contains("We cannot grant a loan in that amount with your available funds.").should("be.visible");
});