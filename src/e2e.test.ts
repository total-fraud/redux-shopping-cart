import puppeteer from "puppeteer"

describe("Whole app test", () => {
    let browser: puppeteer.Browser
    let page: puppeteer.Page

    beforeAll(async () => {
        browser = await puppeteer.launch(
            // { headless: false, slowMo: 100 }
        )
        page = await browser.newPage()
    })

    it("contains text for cart link", async () => {
        await page.goto("http://localhost:5000/redux-shopping-cart/")
        await page.waitForSelector("._text_b1e58_11")
        const text = await page.$eval("._text_b1e58_11", (e) => e.textContent)
        expect(text).toContain("Cart")
    })

    it("navigates to the cart page", async () => {
        await page.goto("http://localhost:5000/redux-shopping-cart/")
        await page.waitForSelector("._text_b1e58_11")
        await page.click("._text_b1e58_11")
        await page.waitForSelector("h1")
        const cartHeader = await page.$eval("h1", (e) => e.textContent)
        expect(cartHeader).toContain("Shopping Cart")
    })

    it("show all items", async () => {
        await page.goto("http://localhost:5000/redux-shopping-cart/")
        await page.waitForSelector("._products_1ava0_1")
        const products = await page.$$("li")
        expect(products).toHaveLength(5)
    })

    it("should open main page, add item and show the right total price at the cart page", async () => {
        await page.goto("http://localhost:5000/redux-shopping-cart/")
        await page.waitForSelector("p")
        const productPrice = await page.$eval("ul > li:nth-child(1) > article > div > p", (e): string => e.textContent!)
        await page.waitForSelector("ul > li:nth-child(1) ._toCart_1ava0_107")
        await page.click("ul > li:nth-child(1) ._toCart_1ava0_107")
        await page.waitForSelector("._text_b1e58_11")
        await page.click("._text_b1e58_11")
        await page.waitForSelector("._total_onvq6_39")
        const totalPrice = await page.$eval("._total_onvq6_39", (e): string => e.textContent!)
        expect(productPrice).toEqual(totalPrice)
    })

    afterAll(() => browser.close())
})