describe("Perform a Login test:", ()=>{
   
    it('Login to A website using Standerd User:', async() => {

        await browser.url('https://www.saucedemo.com/');
        await browser.maximizeWindow();
        await browser.pause(3000);

        const userNameTextbox = $('#user-name');
        const passwordTextbox = $('//*[@id="password"]');
        const logInbutton = $('//*[@id="login-button"]');

        await userNameTextbox.setValue('standard_user');
        await passwordTextbox.setValue('secret_sauce');
        await browser.pause(3000);
        await logInbutton.click();

        const productTitle = $('.title');

        await expect(productTitle).toBeDisplayed();

        await browser.pause(5000);
    

    });

})
