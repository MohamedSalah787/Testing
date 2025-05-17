import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../page_objects/loginPage";

Given("I open the Parabank login page", () => {
  loginPage.visit();
});

When("I login with username {string} and password {string}", (user, pass) => {
  loginPage.fillUsername(user);
  loginPage.fillPassword(pass);
  loginPage.submit();
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should('include', '/overview.htm');
});

Then("I should see an error message", () => {
  loginPage.getError().should('be.visible');
});
