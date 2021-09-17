const cheerio = require('cheerio');
const request = require('request');

function parseResponse(html) {
  const $ = cheerio.load(html);
  const rows = $('table tbody tr');
  const programs = [];
  rows.map((i, row) => {
    const data = $('td', row);
    const url = $('a', data[0]).attr('href');
    const name = data.text();
    programs.push({
      url,
      name,
    })
  })
  return programs;
}

module.exports = async function getProgram() {
  return new Promise((resolve, reject) => {
    let options = {
      'method': 'GET',
      'url': 'https://www.sgs.utoronto.ca/programs/',
      'headers': {
      }
    };
    request(options, function (error, response) {
      if (error) reject(new Error(error));
      else resolve(parseResponse(response.body));
    });
  })
}