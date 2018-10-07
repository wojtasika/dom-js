/* wyszukiwanie po id # */
const toDoList = document.getElementById('to-do-list');

console.log(toDoList);
console.dir(toDoList);
/* console.dir - wyciagam wszystkie wlasciwosci */

/* wyszukiewanie po klasie, składnia sugeruje ze to funkcjonuje jak tablica, w uproszczeniu to dziala jak tablica ale w rzeczywistosci to nie jest tablica */

const listItems = document.getElementsByClassName('to-do-item');

console.log(listItems);
console.log(listItems[1]);

for(let i = 0; i<listItems.length; i++) {
    listItems[i].style.fontSize = '3em';
}



/* wyszukiwanie po znaczniku , dostajemy colection a nie pojedynczy objekt, ten pojedynczy object musimy z colekcji wyciagnac */

const heading = document.getElementsByTagName('h1');

console.log(heading);

heading[0].style.color = 'red';

/* wyszukiwanie po selektorach */
const firstListItem = document.querySelector('#to-do-list .to-do-item');

console.log(firstListItem);

/* zwroci wszystkie */

/*const allListItem = document.querySelectorAll('#to-do-list .to-do-item');

console.log(allListItem);*/

/* zwraca tylko parzyste nth-of-type(even) */
const allListItem = document.querySelectorAll('#to-do-list .to-do-item:nth-of-type(even)');

console.log(allListItem);