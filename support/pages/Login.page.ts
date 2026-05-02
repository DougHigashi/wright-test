import { test, expect } from '@fixtures/fixtures';
import type { Page } from '@playwright/test';

export class LoginPage {
	private readonly _page: Page

	constructor(public readonly page: Page) {
		this._page = page
	}

	private get loginField() {
		return this._page.getByPlaceholder('Username')
	}

	private get passwordField() {
		return this._page.getByPlaceholder('Password')
	}

	private get loginButton() {
		return this._page.getByText('Login')
	}

	private get errorMesage() {
		return this._page.locator('[data-test="error"]')
	}

	async goto() {
		await this._page.goto('/')
	}

	/**
	 * Logs in with the given credentials
	 * @param login The username to log in with
	 * @param password The password to log in with
	 */
	async login(login: string, password: string) {
		await test.step(`Logging in with user "${login}" and password "${password}"`, async () => {
			await this.loginField.fill(login)

			await this.passwordField.fill(password)
		})
	}

	async clickLogin() {
		await test.step('Clicking the login button', async () => {
			await this.loginButton.click()
		})
	}

	/**
	 * Expects an error message to be displayed
	 * @param message The expected error message
	 */
	async expectErrorMessage(message: string) {
		await test.step(`Expecting error message to contain "${message}"`, async () => {
			await expect(this.errorMesage).toContainText(message)
		})
	}
}