class ProductsPage {
  addBackpackToCart() {
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
      .parents('.inventory_item')
      .find('button[id^="add-to-cart"]')
      .click();
  }
  goToCart() {
    cy.get('.shopping_cart_link').click();
  }
}

export default ProductsPage;
