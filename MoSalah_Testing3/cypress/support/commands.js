import transferPage from "../page_objects/transferPage";
import openAccountPage from "../page_objects/openAccountPage";
import loanPage from "../page_objects/loanPage";
import updateContactPage from "../page_objects/updateContactPage";

Cypress.Commands.add("login", (username, password) => {
  cy.get('#loginPanel input[name="username"]').type(username);
  cy.get('#loginPanel input[name="password"]').type(password);
  cy.get('#loginPanel input[type="submit"]').click();
});
Cypress.Commands.add("openNewAccount", (accountType = "SAVINGS") => {
  cy.get('a[href*="openaccount"]').click();
  cy.get('select#type').select(accountType);
  cy.wait(1000); // Wait for the account type to be selected
  cy.get('input.button[value="Open New Account"]').click();
});
Cypress.Commands.add("ensureSecondAccountExists", () => {
  cy.visit("https://parabank.parasoft.com/parabank/overview.htm");
  cy.get("table#accountTable tbody tr").then(($rows) => {
    if ($rows.length < 2) {
      openAccountPage.openNewAccount();
    }
  });
});

Cypress.Commands.add("transferFunds", (amount) => {
  transferPage.visitTransferPage();
  transferPage.performTransfer(amount);
  transferPage.verifyTransferSuccess();
});

Cypress.Commands.add("requestLoan", (amount, downPayment) => {
  loanPage.visit();
  loanPage.requestLoan(amount, downPayment);
  loanPage.verifyLoanRequestSuccess();
});

Cypress.Commands.add("requestLoanAndExpectFailure", (amount, downPayment) => {
  loanPage.visit();
  loanPage.requestLoan(amount, downPayment);
  loanPage.verifyLoanRequestDenied();
});


Cypress.Commands.add("updateContactDetails", (details = {}) => {
  updateContactPage.visit();
  updateContactPage.updateContactInfo(details);
  updateContactPage.verifyUpdateSuccess();
});
