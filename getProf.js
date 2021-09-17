const cheerio = require('cheerio');
const request = require('request');

function getSchoolPage(school) {
  switch (school) {
    case 'Electrical & Computer Engineering': return 'https://www.ece.utoronto.ca/';
  }
}

async function search(prof) {
  const homepage = getSchoolPage(prof.school);
  let options = {
    'method': 'GET',
    'url': `https://www.ece.utoronto.ca/?s=${encodeURIComponent(prof.name)}`,
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
}

module.exports = async function getProf(prof) {
  const homepage = getSchoolPage(prof.school);
  await search(prof);
}