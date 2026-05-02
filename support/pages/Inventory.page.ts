import type { Page } from '@playwright/test';
import { test, expect } from '@fixtures/fixtures';

export class InventoryPage {
    private readonly _page: Page

    constructor(public readonly page: Page) {
        this._page = page
    }

    private get productGrid() {
        return this._page.locator('.inventory_container')
    }

    private getProductCard() {
        return this._page.locator('.inventory_item')
    }

    private get cartButton() {
        return this._page.locator('#shopping_cart_container > a')
    }
    
    /**
     * Navigates to the cart page
     */
    async goToCart() {
        await test.step('Navigating to cart page', async () => {
            await this.cartButton.click()
            await expect(this._page).toHaveURL('/cart.html')
        })
    }

    /**
     * Validates the product grid to be visible or not visible
     * @param expectation condition of the product grid
     */
    async expectProductGridTo(expectation: 'be visible' | 'not be visible') {
        await test.step(`Expecting inventory grid to ${expectation}`, async () => {
            if (expectation === 'be visible')
                await expect(this.productGrid).toBeVisible()
            else
                await expect(this.productGrid).not.toBeVisible()
        })
    }

    /**
     * Adds a product to the cart
     * @param productName name of the product to add
     */
    async addProductToCart(productName: string) {
        await test.step(`Adding product "${productName}" to cart`, async () => {
            const product = this.getProductCard().filter({ hasText: new RegExp(productName) })
            await expect(product).toBeVisible()
            await product.locator('button').click()
        })
    }

    /**
     * Validates the cart badge count
     * @param expectedCount The expected count of items in the cart
     */
    async validateCartBadgeCount(expectedCount: number) {
        await test.step(`Validating cart badge count to be "${expectedCount}"`, async () => {
            const cartBadge = this._page.locator('.shopping_cart_badge')
            await expect(cartBadge).toHaveText(expectedCount.toString())
        })
    }
}