const puppeteer = require('puppeteer');
(async () => {
    try {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        
        page.on('console', msg => {
            console.log('BROWSER LOG:', msg.type(), msg.text());
        });
        page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
        
        await page.goto('https://agenticportfoliox.github.io/AgenticRVR/AMPDemo', {waitUntil: 'networkidle0'});
        
        const mainHtml = await page.evaluate(() => document.querySelector('body').innerHTML.substring(0, 1000));
        console.log("BODY CONTENT:", mainHtml);
        await browser.close();
    } catch(err) {
        console.error(err);
    }
})();
