# Playwright Test Suite
This project uses Playwright to perform a series of tests on the [Swag Labs](https://www.saucedemo.com/) website.
This project has Page Object Models, custom fixtures and test steps

## Login Feature
```gherkin
Scenario: Successful Login
    Given the user provides valid login credential
    When he clicks Login
    Then it should redirect to "/inventory.html"
```

```gherkin
Scenario: Unsuccessful login with wrong password
    Given the user provides a wrong password
    When he clicks Login
    Then it should present the message "Username and password do not match any user in this service"
```

## Checkout Feature
```gherkin
Scenario: Add two product to the cart and checkout successfuly
    Given the user adds two products in the cart
    When the user checks out his order
    Then it should present the message "Thank you for your order!"
```


## Installation
Clone the project with:
```
git clone https://github.com/DougHigashi/playwright-login-tests.git
```

## Running the Tests
To run the tests, make sure you have Node.js installed and then execute the following commands in the project's root folder:

```
npm install
npm run test
```

The tests will be run on the login page of the [https://www.saucedemo.com/](https://www.saucedemo.com/) website.

To view the test execution results, run:

```
npm run report
```
And access the [link](http://localhost:9323) that will be available on your localhost

### Test Cases Covered
- **Successful Login**: Verifies if a user can log in with valid credentials.
- **Unsuccessful Login (Incorrect Password)**: Verifies if an error message is displayed when attempting to log in with an incorrect password.
- **Successful Checkout with Two Items**: Adds two items to the cart and proceeds to checkout the items.

### Technologies Used
- [Node.js](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/)

### References
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Getting Started with Playwright](https://playwright.dev/docs/getting-started)