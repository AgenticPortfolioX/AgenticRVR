const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ 
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        
        console.log("Navigating to Google Search...");
        await page.goto('https://www.google.com/search?q=Alspector+Sosin+%26+Associates+PLLC+Birmingham+Michigan+address+phone', { waitUntil: 'networkidle2' });
        
        // Check for consent page
        const html = await page.content();
        console.log("HTML length:", html.length);
        
        if (html.includes('L2AGLb') || html.includes('Before you continue to Google')) {
            console.log("Bypassing consent page...");
            await page.click('button#L2AGLb').catch(e => console.log("Failed to click #L2AGLb"));
            await page.waitForNavigation({ waitUntil: 'networkidle2' }).catch(e => {});
        }
        
        // Extract text content of body
        const bodyText = await page.evaluate(() => document.body.innerText);
        console.log("First 1000 chars of body:");
        console.log(bodyText.substring(0, 1000));
        
        await browser.close();
    } catch(err) {
        console.error("Puppeteer Error:", err);
    }
})();
