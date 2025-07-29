class CheckoutPage {
  verifyTitle() {
    cy.get('.title').should('have.text', 'Checkout: Your Information');
  }
  enterFirstName(firstName) {
    cy.get('#first-name').type(firstName);
  }
  enterLastName(lastName) {
    cy.get('#last-name').type(lastName);
  }
  enterPostalCode(postalCode) {
    cy.get('#postal-code').type(postalCode);
  }
  clickContinue() {
    cy.get('#continue').click();
  }
  clickFinish() {
    cy.get('#finish').click();
  }
  verifySuccessMessage() {
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  }
}

export default CheckoutPage;
