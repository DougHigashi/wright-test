import type { Page } from '@playwright/test'
import { test, expect } from '@fixtures/fixtures'

export class CheckoutStepOnePage {
	private readonly _page: Page

	constructor(public readonly page: Page) {
		this._page = page
	}

	private get firstNameField() {
		return this._page.locator('.checkout_info #first-name')
	}

	private get lastNameField() {
		return this._page.locator('.checkout_info #last-name')
	}

	private get postalCodeField() {
		return this._page.locator('.checkout_info #postal-code')
	}

	private get continueButton() {
		return this._page.locator('.checkout_buttons input')
	}

	/**
     * Fills the checkout information fields
     * @param firstName first name
     * @param lastName last name
     * @param postalCode postal code
     */
	async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
		await test.step('Filling checkout information', async () => {
			await this.firstNameField.fill(firstName)
			await this.lastNameField.fill(lastName)
			await this.postalCodeField.fill(postalCode)
		})
	}

	/**
     * Clicks the continue button to proceed to the next step of checkout
     */
	async clickContinue() {
		await test.step('Clicking continue button', async () => {
			await this.continueButton.click()
			await expect(this._page).toHaveURL('/checkout-step-two.html')
		})
	}

    

}