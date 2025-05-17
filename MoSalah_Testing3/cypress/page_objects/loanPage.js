class LoanPage {
  visit() {
    cy.visit("https://parabank.parasoft.com/parabank/requestloan.htm");
  }

  requestLoan(amount, downPayment) {
    cy.get("input[id='amount']").clear().type(amount);
    cy.get("input[id='downPayment']").clear().type(downPayment);

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
        throw new Error("No distinct account available for loan disbursement.");
      }

      cy.get("select#fromAccountId").select(toText);
      cy.get("input.button[value='Apply Now']").click();
    });
  }

  verifyLoanRequestSuccess() {
    cy.contains("Loan Request Processed").should("be.visible");
  }

  verifyLoanRequestDenied() {
  cy.contains("We cannot process your loan request at this time.").should("be.visible");
}

}

export default new LoanPage();
