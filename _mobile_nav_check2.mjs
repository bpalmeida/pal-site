import { chromium } from 'playwright';
const browser = await chromium.launch();
const errors = [];

const page = await (await browser.newContext({ viewport: { width: 390, height: 844 } })).newPage();
page.on('pageerror', e => errors.push('MOBILE PAGEERROR: ' + e.message));
await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(300);

await page.click('button[aria-label="Open menu"]');
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/final-mobile-open.png' });
console.log('mobile: visible switch count:', await page.locator('[aria-label="Language"]:visible').count());

await page.click('text=Escola de equitação');
await page.waitForTimeout(300);
console.log('mobile: Aulas link visible after accordion open?', await page.locator('a:has-text("Aulas")').isVisible());
await page.screenshot({ path: '/tmp/final-mobile-accordion.png' });

await page.click('a:has-text("Aulas")');
await page.waitForTimeout(400);
console.log('mobile: url after click', page.url());
console.log('mobile: menu closed after nav?', await page.locator('button[aria-label="Open menu"]').isVisible());
const h1 = await page.locator('h1').first().textContent();
console.log('mobile: landed page h1:', h1);

console.log('ERRORS:', errors);
await browser.close();
