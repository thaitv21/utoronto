const cheerio = require('cheerio');
const request = require('request');

function getHomepage(program) {
  return new Promise((resolve, reject) => {
    let options = {
      'method': 'GET',
      'url': program.url,
    };
    request(options, function (error, response) {
      if (error) {
        reject(new Error(error));
      } else {
        const html = response.body;
        const $ = cheerio.load(html);
        const aside = $('aside p');
        const nodes = aside.filter(((index, value) => value.firstChild.type === 'text' && value.firstChild.data.startsWith('Web:')));
        return nodes.map((i, el) => $('a', el).attr('href')).toArray();
      }
    });
  })
}

module.exports = async function getListProfsByProgram(program) {
  const urls = await getHomepage(program);

}