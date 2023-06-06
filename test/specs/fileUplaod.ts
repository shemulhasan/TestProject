describe('File Attached/Uplaod Check', () => {

    it('Select A File To Uplaod', async () => {

        await browser.url('https://the-internet.herokuapp.com/upload');
        await browser.maximizeWindow();

        const inputImage = $('#file-upload');
        await inputImage.setValue('D:\\All Project\\Prolific cloud\\Image\\carousel-day.jpg');

        const fileUplaod =$ ('#file-submit');
        await fileUplaod.click();

        await browser.pause(5000);




    });

});