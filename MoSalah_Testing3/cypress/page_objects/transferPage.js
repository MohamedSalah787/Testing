class TransferPage {
  visitTransferPage() {
    cy.visit("https://parabank.parasoft.com/parabank/transfer.htm");
  }

  performTransfer(amount = "100") {
    cy.get("select#fromAccountId option").should("have.length.greaterThan", 1);

    cy.get("select#fromAccountId").then(($select) => {
      const options = $select.find("option");
      const fromText = options.eq(0).text().trim();
      let toText = null;

      for (let i = 1; i < options.length; i++) {
        const candidate = options.eq(i).text().trim();
        if (candidate !== fromText) {
          toText = candidate;
          break;
        }
      }

      if (!toText) {
        throw new Error("No distinct 'to account' found for transfer.");
      }

      cy.get("#amount").clear().type(amount);
      cy.get("select#fromAccountId").select(fromText);
      cy.get("select#toAccountId").select(toText);
      cy.get('input.button[value="Transfer"]').click();
    });
  }

  verifyTransferSuccess() {
    cy.contains("Transfer Complete!").should("be.visible");
  }
}

export default new TransferPage();
