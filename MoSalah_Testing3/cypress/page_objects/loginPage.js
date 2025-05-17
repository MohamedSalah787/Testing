class LoginPage {
  visit() {
    cy.visit("/");
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  submit() {
    cy.get('input[type="submit"]').click();
  }

  getError() {
    return cy.get('.error');
  }
}

export default new LoginPage();
