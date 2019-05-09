const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://zapcircle.net/';

axios(url)
    .then(res =>{
        const html = res.data;
        const $ = cheerio.load(html);
        console.log($('main > article').length)
        
        // console.log(html);
    })
        .catch(console.error);
