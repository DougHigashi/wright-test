import { test } from '@fixtures/fixtures'

test.describe('Checkout', async () => {

	test('Add two product to the cart and checkout successfuly', async (
		{
			loginPage, inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage
		}) => {

		await test.step('Given the user adds two products in the cart', async () => {

			await loginPage.goto()

			await loginPage.login('standard_user', 'secret_sauce')

			await loginPage.clickLogin()

			await inventoryPage.expectProductGridTo('be visible')

			await inventoryPage.addProductToCart('Sauce Labs Backpack')

			await inventoryPage.addProductToCart('Sauce Labs Bike Light')

			await inventoryPage.validateCartBadgeCount(2)

			await inventoryPage.goToCart()
		})

		await test.step('When the user checks out his order', async () => {

			await cartPage.validateItemQuantity(2)

			await cartPage.clickCheckout()

			await checkoutStepOnePage.fillCheckoutInformation('John', 'Doe', '12345')

			await checkoutStepOnePage.clickContinue()

			await checkoutStepTwoPage.validateItemQuantity(2)

			await checkoutStepTwoPage.clickFinish()
		})

		await test.step('Then it should present the message "Thank you for your order!"', async () => {
			// Validate successful checkout message
			await checkoutCompletePage.validateCheckoutComplete()
		})
	})
})