class AccountPage {
  goToOpenAccount() {
    cy.get('a[href*="openaccount"]').click();
  }

  selectAccountType(type) {
    cy.get('select#type').select(type);
    cy.wait(1000); // Wait for the account type to be selected
  }

  submit() {
    cy.get('input.button[value="Open New Account"]').click();
  }
  
  getConfirmation() {
    return cy.get('#newAccountId');
  }
}

export default new AccountPage();
