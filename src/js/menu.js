import menuCard from '../templates/menu.hbs'
import data from '../menu.json'

console.log(data);
console.log(menuCard);

const menu = document.querySelector('.js-menu');
let menuCardTpl = menuCard(data);

menu.insertAdjacentHTML('beforeend', menuCardTpl);
// function createCards(data) {
//     return data.map(menuCard).join('');
// }