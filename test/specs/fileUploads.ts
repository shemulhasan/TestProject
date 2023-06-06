describe('File Attached Feature', () => {

    it('Check File upload and Save', async () => {
        await browser.url('https://the-internet.herokuapp.com/upload')
        await browser.maximizeWindow();
        const input = $('#file-upload');
        await input.setValue('D:\\All Project\\Prolific cloud\\Image\\carousel-day.jpg')

        // const submitBtn = $('//*[@id="file-submit"]');

        // const filepath = path.join(__dirname, 'D:\\All Project\\Prolific cloud\\Image\\sunset.jpg');
        // const remoteFilepath = browser.uploadFile(filepath);
        // await input.setValue('D:\\All Project\\Prolific cloud\\Image\\sunset.jpg')
        // browser.url('https://the-internet.herokuapp.com/upload');

        const submitBtn = $('//*[@id="file-submit"]');
        await submitBtn.click();
        await browser.pause(10000)

    });

});