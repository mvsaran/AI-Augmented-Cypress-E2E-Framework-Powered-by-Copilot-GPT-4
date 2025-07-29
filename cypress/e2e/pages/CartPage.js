class CartPage {
  verifyBackpackInCart() {
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack').should('exist');
  }
  clickCheckout() {
    cy.get('#checkout').click();
  }
}

export default CartPage;
