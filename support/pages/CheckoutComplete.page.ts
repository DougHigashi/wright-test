import type { Page } from '@playwright/test'
import { test, expect } from '@fixtures/fixtures'

export class CheckoutCompletePage {
	private readonly _page: Page

	constructor(public readonly page: Page) {
		this._page = page
	}

	/** 
     * Validates that the checkout complete page is displayed with the correct messages.
    */
	async validateCheckoutComplete() {
		await test.step('Validating checkout complete page', async () => {
			await expect(this._page.locator('#checkout_complete_container h2')).toHaveText('Thank you for your order!')
			await expect(this._page.locator('#checkout_complete_container > div')).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there! ')
		})
	}

    
}