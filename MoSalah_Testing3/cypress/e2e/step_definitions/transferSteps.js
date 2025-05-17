import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in to the Parabank application", () => {
  cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  cy.get('input[name="username"]').type("john");
  cy.get('input[name="password"]').type("demo");
  cy.get('input.button[value="Log In"]').click();
  cy.contains("Accounts Overview").should("be.visible");
});

Given("I open a new account to enable transfers", () => {
  cy.ensureSecondAccountExists();
});

When("I transfer {string} from one account to another", (amount) => {
  cy.transferFunds(amount);
});

Then("I should see the transfer completed successfully", () => {
  cy.contains("Transfer Complete!").should("be.visible");
});
