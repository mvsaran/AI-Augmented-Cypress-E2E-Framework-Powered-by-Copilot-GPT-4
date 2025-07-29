import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

/// <reference types="cypress" />

describe('SauceDemo End-to-End Test', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  let testData;

  before(() => {
    cy.fixture('data').then((data) => {
      testData = data;
    });
  });

  it('should complete the order for Sauce Labs Backpack', () => {
    // 1. Launch the app
    loginPage.visit(testData.url);
    // 2. Enter Username and Password
    loginPage.enterUsername(testData.username);
    loginPage.enterPassword(testData.password);
    // 3. Click on Login Button
    loginPage.clickLogin();
    // 4-5. Select Product and Add to Cart
    productsPage.addBackpackToCart();
    // 6. Click on Shopping cart
    productsPage.goToCart();
    // 7. Verify Backpack in Cart
    cartPage.verifyBackpackInCart();
    // 8. Click on Checkout
    cartPage.clickCheckout();
    // 9. Verify the title
    checkoutPage.verifyTitle();
    // 10-12. Enter user info
    checkoutPage.enterFirstName('Test');
    checkoutPage.enterLastName('User');
    checkoutPage.enterPostalCode('5000082');
    // 13. Click on Continue
    checkoutPage.clickContinue();
    // 14. Click on Finish
    checkoutPage.clickFinish();
    // 15. Verify success message
    checkoutPage.verifySuccessMessage();
  });
});
