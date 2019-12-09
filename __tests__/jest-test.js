const { openBrowser, write, closeBrowser, goto, press, text, focus, inputField, toRightOf, intercept } = require('taiko');

describe('Getting Started with Jest and Taiko', () => {

    beforeAll(async () => {
        await openBrowser({ headless: false });
    });

    describe('Search Taiko Repository', () => {

        test('Go to trendyol.com', async () => {
            await intercept("https://www.trendyol.com/api/home/banners?systemName=HomeIndex&position=right&cssClass=bannerItem%20homepage-banner-item&isMillaboutique=False");
            await goto("https://www.trendyol.com/");
        });

        test('Search for "Erkek Saat"', async () => {
            await click("Erkek");
            await write("Erkek Saat", into(textBox({placeholder: "Aradığınız ürün veya markayı yazınız"})));
            await press("Enter");
        });

        test('Check list items', async () => {
            await listItem(below('Erkek Saat')).exists();
        });

    });

    afterAll(async () => {
        await closeBrowser();
    });

});