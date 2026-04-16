describe('BrowserStack Demo Login', () => {
    it('should login successfully', async () => {
        // 1. Navigate to the site
        await browser.url('https://bstackdemo.com/');
        
        // 2. Set viewport (optional, WDIO handles this in config usually)
        await browser.maximizeWindow();

        // 3. Click "Sign In"
        const signInBtn = await $('#signin');
        await signInBtn.waitForDisplayed({ timeout: 5000 });
        await signInBtn.click();

        // 4. Select Username (Handles the custom dropdown behavior)
        const usernameDropdown = await $('#username');
        await usernameDropdown.click();
        
        const userOption = await $('#react-select-2-option-0-0');
        await userOption.waitForDisplayed();
        await userOption.click();

        // 5. Select Password
        const passwordDropdown = await $('#password');
        await passwordDropdown.click();

        const passOption = await $('#react-select-3-option-0-0');
        await passOption.waitForDisplayed();
        await passOption.click();

        // 6. Click Log In button
        const loginBtn = await $('#login-btn');
        await loginBtn.click();

        // Optional: Add an assertion to verify login success
        // await expect(browser).toHaveUrlContaining('?signin=true');
        await expect(browser).toHaveUrl(expect.stringContaining('?signin=true'));
    });
});