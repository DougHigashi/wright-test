import type { Page } from '@playwright/test'
import { test, expect } from '@fixtures/fixtures'

export class CheckoutStepTwoPage {
	private readonly _page: Page

	constructor(public readonly page: Page) {
		this._page = page
	}

	private get cartItem() {
		return this._page.locator('.cart_item')
	}

	private get finishButton() {
		return this._page.getByRole('button', { name: 'Finish' })
	}

	/** Validates the quantity of items in the cart
     * @param expectedQuantity The expected quantity of items in the cart
    */
	async validateItemQuantity(expectedQuantity: number) {
		await expect(this.cartItem).toHaveCount(expectedQuantity)
	}

	/** 
     * Clicks the finish button and validates the URL
    */
	async clickFinish() {
		await test.step('Clicking finish button', async () => {
			await this.finishButton.click()
			await expect(this._page).toHaveURL('/checkout-complete.html')
		})
	}
}