# 🤖 AI-Augmented Cypress E2E Framework – Powered by Copilot + GPT-4

This project showcases how you can build an **entire end-to-end Cypress automation framework** using **AI Augmentation** with:

- 🧠 **ChatGPT (GPT-4.1)**
- 🤖 **GitHub Copilot**

---

## 🚀 What This Project Demonstrates

✅ Cypress automation for [SauceDemo](https://www.saucedemo.com)  
✅ Page Object Model (POM) architecture  
✅ Clean separation of tests, page classes, and test data  
✅ Uses `data.json` for credentials  
✅ One single natural language prompt → Full working framework

---

## 💡 How AI Was Used

| Component | AI Contribution |
|----------|------------------|
| **Test Planning → Code** | ChatGPT (GPT-4.1) translated scenario into Cypress test logic |
| **Page Classes** | GitHub Copilot generated JavaScript classes for each page (`LoginPage`, `CartPage`, etc.) |
| **Folder Structure** | AI auto-suggested correct folder hierarchy (`/e2e/pages`, `/fixtures`) |
| **Data Management** | Credentials moved to `data.json` via GPT suggestion |
| **Locator Usage** | Copilot created reusable page methods using supplied locators |
| **Code Quality** | AI followed Cypress best practices by default |

---

## 🗂️ Project Structure

cypress/
├── e2e/
│ ├── pages/
│ │ ├── LoginPage.js
│ │ ├── ProductsPage.js
│ │ ├── CartPage.js
│ │ └── CheckoutPage.js
│ └── tests/
│ └── saucedemoTest.cy.js
├── fixtures/
│ └── data.json
├── support/
│ └── commands.js

🎯 Why This Is Important

⏱ Saves hours of framework setup time

🧠 You focus on test logic and strategy, AI handles code implementation

🧹 Reduces repetitive coding

📈 Accelerates onboarding and POC creation

🤖 Empowers QA Engineers to build faster with fewer blockers

📌 Tools Used

Cypress

JavaScript

POM (Page Object Model)

JSON Fixtures

GitHub Copilot

ChatGPT (GPT-4.1)

## 🤖 Step-by-Step: Reproduce This with GitHub Copilot Agent in VS Code

🧱 Prerequisites
Before running this project or using AI to generate it, make sure:

📁 You’ve created a local project folder:

mkdir AIAugmentedCypressProject
cd AIAugmentedCypressProject

📦 Initialized it with Node.js:

npm init -y
🧪 Installed Cypress:

npm install cypress --save-dev

💻 Opened the project in Visual Studio Code

🧠 Enabled GitHub Copilot (Agent Mode) and/or ChatGPT

You can generate this entire framework by following these simple steps:

---

### 1️⃣ Enable Copilot Agent in VS Code

- Ensure you have:
  - Latest version of **[Visual Studio Code](https://code.visualstudio.com/)**
  - **GitHub Copilot extension** installed
  - Access to **Copilot Chat (Agent Mode)** — available with Copilot for Individuals or Business

---

### 2️⃣ Open VS Code and Start Copilot Agent Chat

- Use the **Copilot sidebar**, or press `Ctrl + I` (or click the Copilot Chat icon)
- In the prompt box, **paste the following prompt** and hit `Enter`

---

### 🧠 Prompt to Use

```plaintext
Please write a Cypress script for the below scenario,
Read the locators 
Keep the url and username password in data.json file under fixture and read them in testcase
Separate page classes and tests in separate folders under e2e

1. Launch https://www.saucedemo.com/
2. Enter Username and Password
3. Click on Login Button
4. Select Product where .inventory_item_name contains Sauce Labs Backpack
5. Click on add to cart button
6. Click on Shopping cart
7. Verify .inventory_item_name contains Sauce Labs Backpack
8. Click on Checkout
9. Verify the title Checkout: Your Information
10. Enter "Test" in Firstname
11. Enter "User" in Lastname 
12. Enter Postal code as 5000082
13. Click on Continue
14. Click on Finish
15. Verify success message "Thank you for your order!"

Locators:
- Username: #user-name
- Password: #password
- Login button: #login-button
- #add-to-cart
- .shopping_cart_link
- #checkout
- .title
- #first-name
- #last-name
- #postal-code
- #continue
- #finish
- .complete-header

Username: standard_user
Password: secret_sauce

### Hit Enter

### Let AI Do the Work
Copilot will:

Create a data.json fixture

Generate POM page classes (LoginPage, ProductsPage, etc.)

Build the test case step-by-step in saucedemoTest.cy.js

Organize everything under proper folders
