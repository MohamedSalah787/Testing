class OpenAccountPage {
  openNewAccount() {
    cy.contains("Open New Account").click();
    cy.get("select#type").select("CHECKING");
    cy.get("input.button").click();
    cy.contains("Account Opened!").should("be.visible");
  }
}

export default new OpenAccountPage();
