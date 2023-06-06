describe('Live Project Login Check', () => {

    before('Open This App', async() => {
        await browser.url('https://demos.pc-staging.com/');
        await browser.maximizeWindow();
        await browser.pause(3000);
        
    });

    it('Visit Business Site and New Window check', async() => {
        
        const clickSignIn = $('//*[@id="web-primary-menu-nav"]/div/div[1]/div[3]/a/button');
        await clickSignIn.click();

// // This is vNew Window
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0]);
        // await browser.closeWindow()
        await browser.switchToWindow(handles[1]);
        await browser.switchToWindow(handles[2]);
        
    });

    it('Prolific Cloud Log in for CA', async () => {
  
        const emailInput = $('//*[@id="field-3"]');
        await emailInput.setValue('demo1@yopmail.com');
        const passWord = $('//*[@id="field-4"]');
        await passWord.setValue('123456789')

        const elem1 = await $('span#securityNumberOne');
        const num1 = await elem1.getText();
        console.log('Print Num 1:::', num1);

        const elem2 = await $('span#securityNumberTwo')
        const num2 = await elem2.getText();
        console.log('Print Num 2:::', num2);

        const result = (Number(num1) + Number(num2));
        console.log('Print this Result:::', result);

        const resultInput = $('//*[@id="field-5"]');
        await resultInput.setValue(result);

        const loginButton = $('//*[@id="root"]/main/div/div[1]/div/form/div/button[1]');
        await loginButton.click();
        await browser.pause(10000);

        const welcomeText = $('//*[@id="root"]/main/div/div[2]/div[2]/div/h2');
        console.log('This Is Welcome text:::', await welcomeText.getText());
        await expect(welcomeText).toHaveTextContaining('Welcome back, This IS Demo');

    });

});