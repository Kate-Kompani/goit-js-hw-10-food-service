import menuCards from '../templates/menu.hbs'
import menuCard from '../templates/menu.hbs'
import dishes from '../menu.json'

//1 вариант когда один шаблон для 1й карточки 
// console.log(dishes);
// console.log(menuCards(dishes));

// const menu = document.querySelector('.js-menu');
// let menuCardsTpl = createMenuCards(dishes);

// menu.insertAdjacentHTML('beforeend', menuCardsTpl);
// function createMenuCards(dishes) {
//     return dishes.map(menuCard).join('');
// }

//2 вариант +each сразу для всех карточек

console.log(menuCards(dishes));
const menu = document.querySelector('.js-menu');
let menuCardsTpl = createMenuCards(dishes);

menu.insertAdjacentHTML('beforeend', menuCardsTpl);
function createMenuCards(dishes) {
    return menuCards(dishes);
}