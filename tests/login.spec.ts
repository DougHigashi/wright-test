// @ts-check
import { test, expect } from '@fixtures/fixtures';

test.describe('Login', async () => {

	test('Successful login', async ({ loginPage, inventoryPage }) => {

		await test.step('Given the user provides valid login credential', async () => {
			await loginPage.goto()

			await loginPage.login('standard_user', 'secret_sauce')
		})

		await test.step('When he clicks Login', async () => {
			await loginPage.clickLogin()
		})

		await test.step('Then it should redirect to "/inventory.html"', async () => {
			await inventoryPage.expectProductGridTo('be visible')
		})

	})

	test('Unsuccessful login with wrong password', async ({ loginPage }) => {

		await test.step('Given the user provides a wrong password', async () => {
			await loginPage.goto()

			await loginPage.login('standard_user', 'wrongpass')
		})

		await test.step('When he clicks Login', async () => {
			await loginPage.clickLogin()
		})

		await test.step('Then it should present the message "Username and password do not match any user in this service"', async () => {
			await loginPage.expectErrorMessage('Username and password do not match any user in this service')
		})

	})
})
