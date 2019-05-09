const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://zapcircle.net/';

axios(url)
    .then(res =>{
        const html = res.data;
        const $ = cheerio.load(html, {xmlMode: true});
        const listItems = $('main > article');
        const articles = [];

        listItems.each(function(){
            const title = $(this).find('h3 > a').text();
            const author = $(this).find('.article-meta-author-name').text();
            const date = $(this).find('.article-meta-published-at').text();
            const tempContent = $(this).find('p').text();
            const[u1,u2,u3,u4,u5,u6,content] = tempContent.split('\n');


            // console.log($(this).find('.article-meta-author-name').text());
            // console.log(content)

            articles.push({
                title,
                author,
                date,
                content
               
            });
        });

            console.log(articles);
   
    })
        .catch(console.error);
