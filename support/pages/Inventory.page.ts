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

    async expectProductGridTo(expectation: 'be visible' | 'not be visible') {
        await test.step(`Expecting inventory grid to ${expectation}`, async () => {
            if (expectation === 'be visible')
                await expect(this.productGrid).toBeVisible()
            else
                await expect(this.productGrid).not.toBeVisible()
        })
    }
}