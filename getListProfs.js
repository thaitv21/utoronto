const cheerio = require('cheerio');
const request = require('request');

class Prof {
  constructor () {

  }
}

function parseResponse(html) {
  const $ = cheerio.load(html);
  const nodes = $('article p').not(':first');
  const profs = [];
  nodes.map((index, node) => {
    node.children.filter(item => item.type === 'text').forEach(item => {
      const data = item.data.split('–');
      profs.push({
        name: data[0].trim(),
        school: data[1].trim(),
      });
    })
  });
  return profs;
}

module.exports = async function getListProps() {
  return new Promise((resolve, reject) => {
    let options = {
      'method': 'GET',
      'url': 'https://facultyandstaff.sgs.utoronto.ca/gfm/faculty-members-a-z/full-members/#section_0',
      'headers': {
      }
    };
    request(options, function (error, response) {
      if (error) {
        reject(new Error(error));
      } else {
        const profs = parseResponse(response.body);
        resolve(profs);
      }
    });
  })
};