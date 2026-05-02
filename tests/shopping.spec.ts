import { test, expect } from '@playwright/test';


test.describe('Checkout', async () => {

    // Access the URL before each test and assert robot image is present
    test.beforeEach(async ({ page }) => {
        await page.goto('/')

        await page.getByPlaceholder('Username').fill('standard_user')

        await page.getByPlaceholder('Password').fill('secret_sauce')

        await page.getByText('Login').click()

        await expect(page).toHaveURL('/inventory.html')
    })

    test('Add two product to the cart and checkout successfuly', async ({ page }) => {

        await page.locator('div > .inventory_item:nth-child(1) button').click()

        await page.locator('div > .inventory_item:nth-child(2) button').click()

        const cartBadge = page.locator('.shopping_cart_badge')

        // Asserting the quantity of items added to cart
        await expect(cartBadge).toHaveText('2')

        await page.locator('#shopping_cart_container > a').click()

        await expect(page).toHaveURL('/cart.html')

        // Validate two items in the cart
        await expect(page.locator('.cart_list .cart_item')).toHaveCount(2)

        await page.locator('.checkout_button').click()

        await expect(page).toHaveURL('/checkout-step-one.html')

        await page.locator('.checkout_info #first-name').fill('John')

        await page.locator('.checkout_info #last-name').fill('Doe')

        await page.locator('.checkout_info #postal-code').fill('0102030405')

        await page.locator('.checkout_buttons input').click()

        await expect(page).toHaveURL('/checkout-step-two.html')

        // Validate two items in the cart again
        await expect(page.locator('.cart_list .cart_item')).toHaveCount(2)

        await page.locator('.cart_footer a:nth-child(2)').click()

        await expect(page.locator('#checkout_complete_container h2')).toHaveText('THANK YOU FOR YOUR ORDER')

        await expect(page.locator('#checkout_complete_container > div')).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there! ')

    })
})