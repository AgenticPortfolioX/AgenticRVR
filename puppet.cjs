const puppeteer = require('puppeteer');
(async () => {
    try {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        
        await page.goto('http://localhost:3000/AgenticRVR/', {waitUntil: 'networkidle0'});
        
        await page.evaluate(() => {
           window.history.pushState({}, '', '/AgenticRVR/AMPDemo');
           window.dispatchEvent(new Event('popstate'));
        });
        await new Promise(r => setTimeout(r, 2000));
        
        const mainHtml = await page.evaluate(() => document.querySelector('main').innerHTML.substring(0, 1000));
        console.log("MAIN CONTENT:", mainHtml);
        await browser.close();
    } catch(err) {
        console.error(err);
    }
})();
