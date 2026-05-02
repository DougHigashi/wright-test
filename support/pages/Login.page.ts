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

	async login(login: string, password: string) {
		await test.step(`Logging in with user "${login}" and password "${password}"`, async () => {
			await this.loginField.fill(login)

			await this.passwordField.fill(password)

			await this.loginButton.click()
		})
	}

	async expectErrorMessage(message: string) {
		await test.step(`Expecting error message to contain "${message}"`, async () => {
			await expect(this.errorMesage).toContainText(message)
		})
	}

	async goto() {
		await this._page.goto('/')
	}

}