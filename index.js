const puppeteer = require ('puppeteer')

    async function getdata() {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://ikman.lk/en/ads/sri-lanka/vehicles');

        const data = await page.evaluate(function () {
            const events = document.querySelectorAll('.normal--2QYVk');
            const array = [];

            for (i = 0; i < events.length; i++) {
                array.push({
                    details: events[i].querySelector('.content--3JNQz').innerText,
                     // description: events[i].querySelector('p').innerText,
                     // dates: events[i].querySelector('p').outerText,
                })
            }

            return array;
        })
        console.log(data);
    };

getdata();