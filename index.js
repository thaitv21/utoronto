const getListProps = require('./getListProfs');
const getProf = require('./getProf');
const getPrograms = require('./getPrograms');
const getListProfsByProgram = require('./getListProfsByProgram');

// getListProps().then(res => console.log('res', res)).catch(e => console.log('e', e));

// const profA = {
//   name: 'Aarabi, Parham',
//   school: 'Electrical & Computer Engineering'
// };
//
// getProf(profA).then(res => console.log('res', res)).catch(e => console.log('e', e));

// getPrograms().then().catch()

getListProfsByProgram({
  url: 'https://www.sgs.utoronto.ca/programs/laboratory-medicine-and-pathobiology/',
  name: 'Laboratory Medicine and PathobiologyLaboratory Medicine and PathobiologyMSc / PhD'
}).then();