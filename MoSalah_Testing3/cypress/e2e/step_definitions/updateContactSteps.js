import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I update my contact information with new details", () => {
  cy.updateContactDetails({
    firstName: "Jane",
    lastName: "Doe",
    address: "987 Cypress Ave",
    city: "Testville",
    state: "TX",
    zipCode: "75001",
    phone: "9876543210"
  });
});

Then("I should see a confirmation that my information was updated", () => {
  cy.contains("Your updated address and phone number have been added to the system.").should("be.visible");
});
