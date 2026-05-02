import type { Page } from '@playwright/test';
import { test, expect } from '@fixtures/fixtures';

export class CartPage {
    private readonly _page: Page

    constructor(public readonly page: Page) {
        this._page = page
    }

    private get cartItem() {
        return this._page.locator('.cart_item')
    }

    private get checkoutButton() {
        return this._page.locator('.checkout_button')
    }

    /**
     * Validates the quantity of items in the cart
     * @param expectedQuantity quantity of items expected in the cart
     */
    async validateItemQuantity(expectedQuantity: number) {
        await expect(this.cartItem).toHaveCount(expectedQuantity)
    }

    /**
     * Clicks the checkout button and validates the URL
     */
    async clickCheckout() {
        await this.checkoutButton.click()
        await expect(this._page).toHaveURL('/checkout-step-one.html')
    }

}