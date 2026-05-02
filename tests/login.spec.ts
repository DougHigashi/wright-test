// @ts-check
import { test, expect } from '@fixtures/fixtures';

test.describe.only('Login', async () => {

	test('Successful login', async ({ page, loginPage, inventoryPage }) => {

		await loginPage.goto()

		await loginPage.login('standard_user', 'secret_sauce')

		// Validates the login was successful by asserting the products grid
		await inventoryPage.expectProductGridTo('be visible')
	})

	test('Unsuccessful login with wrong password', async ({ loginPage }) => {

		await loginPage.goto()

		await loginPage.login('standard_user', 'wrongpass')

		await loginPage.expectErrorMessage('Username and password do not match any user in this service')
	})
})
