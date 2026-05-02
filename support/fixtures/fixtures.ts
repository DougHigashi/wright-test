import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../pages/Login.page'
import { InventoryPage } from '../pages/Inventory.page'

// Extend basic test by providing a "todoPage" fixture.
const test = base.extend<{ loginPage: LoginPage, inventoryPage: InventoryPage }>({
	loginPage: async({ page }, use) => await use(new LoginPage(page)),
	inventoryPage: async({ page }, use) => await use(new InventoryPage(page)),
})

export { test, expect }