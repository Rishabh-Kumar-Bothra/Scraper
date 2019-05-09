const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const url = "https://www.reddit.com/r/news/";

(async ()=>{
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(url);
const html = await page.content();

// console.log(html)

const $ = cheerio.load(html, {xmlMode: true});
const itemList = $('.rpBJOHq2PR60pnwJlUyP0.s34aip-0.dvQtYX > div');
const newsHeading = [];
// console.log($('.rpBJOHq2PR60pnwJlUyP0.s34aip-0.dvQtYX > div').length)

itemList.each(function(){
    const heading = $(this).find('a > h2').text();

    // console.log(heading);
    newsHeading.push({
        Headline: heading
    });
})
console.log(newsHeading);
})();