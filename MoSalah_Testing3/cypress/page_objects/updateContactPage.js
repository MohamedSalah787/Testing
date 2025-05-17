class UpdateContactPage {
  visit() {
    cy.contains("Update Contact Info").click();
  }

  updateContactInfo({
    firstName = "Updated",
    lastName = "User",
    address = "123 Updated Street",
    city = "Updated City",
    state = "CA",
    zipCode = "90210",
    phone = "5551234567"
  }) {
    cy.get("input[name='customer.firstName']").clear().type(firstName);
    cy.get("input[name='customer.lastName']").clear().type(lastName);
    cy.get("input[name='customer.address.street']").clear().type(address);
    cy.get("input[name='customer.address.city']").clear().type(city);
    cy.get("input[name='customer.address.state']").clear().type(state);
    cy.get("input[name='customer.address.zipCode']").clear().type(zipCode);
    cy.get("input[name='customer.phoneNumber']").clear().type(phone);

    cy.get("input.button[value='Update Profile']").click();
  }

  verifyUpdateSuccess() {
    cy.contains("Your updated address and phone number have been added to the system.").should("be.visible");
  }
}

export default new UpdateContactPage();
