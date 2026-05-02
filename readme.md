# Playwright Test Suite - Login Functionality 2025

## Test Suite for Login Functionality
This project uses Playwright to perform a series of tests on the [Swag Labs](https://www.saucedemo.com/v1/) website. The test cases cover successful login and unsuccessful login with an incorrect password.

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

The tests will be run on the login page of the [https://www.saucedemo.com/v1/](https://www.saucedemo.com/v1/) website.

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
- [Playwright](https://playwright.dev/)

### References
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Getting Started with Playwright](https://playwright.dev/docs/getting-started)