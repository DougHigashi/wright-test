import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../pages/Login.page'
import { InventoryPage } from '../pages/Inventory.page'
import { CartPage } from '../pages/Cart.page'
import { CheckoutStepOnePage } from '../pages/Checkout.1.page'
import { CheckoutStepTwoPage } from '../pages/Checkout.2.page'
import { CheckoutCompletePage } from '../pages/CheckoutComplete.page'

const test = base.extend<{ loginPage: LoginPage, inventoryPage: InventoryPage, cartPage: CartPage, checkoutStepOnePage: CheckoutStepOnePage, checkoutStepTwoPage: CheckoutStepTwoPage, checkoutCompletePage: CheckoutCompletePage }>({
	loginPage: async({ page }, use) => await use(new LoginPage(page)),
	inventoryPage: async({ page }, use) => await use(new InventoryPage(page)),
	cartPage: async({ page }, use) => await use(new CartPage(page)),
	checkoutStepOnePage: async({ page }, use) => await use(new CheckoutStepOnePage(page)),
	checkoutStepTwoPage: async({ page }, use) => await use(new CheckoutStepTwoPage(page)),
	checkoutCompletePage: async({ page }, use) => await use(new CheckoutCompletePage(page))
})

export { test, expect }