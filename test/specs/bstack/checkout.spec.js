describe('BrowserStack Demo Checkout Flow', () => {
    it('should login, add to cart, and fill out shipping info', async () => {
        // 1. Navigate to the website
        await browser.url('https://bstackdemo.com/');
        await browser.maximizeWindow();

        // Start accessibility scan before interactions
        // await startA11yScanning()
        // await browser.accessibilityStart();
        // await browser.execute('browserstack_executor: {"action": "accessibility", "arguments": {"command": "start"}}');

        // 2. Click Sign In
        const signIn = await $('#signin');
        await signIn.waitForClickable();
        await signIn.click();

        // 3. Select Username (Handles custom dropdown)
        const usernameDropdown = await $('#username');
        await usernameDropdown.click();
        const userOption = await $('#react-select-2-option-0-0');
        await userOption.waitForDisplayed();
        await userOption.click();

        // 4. Select Password
        const passwordDropdown = await $('#password');
        await passwordDropdown.click();
        const passOption = await $('#react-select-3-option-0-0');
        await passOption.waitForDisplayed();
        await passOption.click();

        // 5. Log In
        const loginBtn = await $('#login-btn');
        await loginBtn.click();

        // Stop accessibility scan after interactions
        // await browser.accessibilityStop();
        // await browser.execute('browserstack_executor: {"action": "accessibility", "arguments": {"command": "stop"}}');


        // 6. Add iPhone 12 to cart (The selector '#1' usually needs escaping in WDIO/CSS)
        const addToCartBtn = await $('[id="1"] .shelf-item__buy-btn');
        await addToCartBtn.waitForClickable();
        await addToCartBtn.click();

        // 7. Proceed to Checkout
        const checkoutBtn = await $('.buy-btn');
        await checkoutBtn.waitForClickable();
        await checkoutBtn.click();

        // 8. Fill Shipping Details
        const firstName = await $('#firstNameInput');
        await firstName.setValue('Paul');

        const lastName = await $('#lastNameInput');
        await lastName.setValue('Anderson');

        const address = await $('#addressLine1Input');
        await address.setValue('Strait of Hormuz');

        const province = await $('#provinceInput');
        await province.setValue('Antartica');

        const postCode = await $('#postCodeInput');
        await postCode.setValue('100000');

        // 9. Submit Checkout
        const submitBtn = await $('#checkout-shipping-continue');
        await submitBtn.click();

        // Optional: Add an assertion to verify the success message
        // await expect(browser).toHaveUrlContaining('confirmation');
        await expect(browser).toHaveUrl(expect.stringContaining('confirmation'));
    });
});