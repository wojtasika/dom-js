/* tworzenie wzelow, to jest podsawa wykorzystywania JS do interaktywnegi interfejsu */
const listHeading = document.createElement('h2');
console.log(listHeading);

const headingText = document.createTextNode('Nagłowek');
console.log(headingText);

listHeading.appendChild(headingText);
/* shojstowalo sie i naglowek wpadl do h2 */

/* wrzuc h2 na koniec listy */
const toDoList = document.getElementById('to-do-list');
toDoList.appendChild(listHeading);

const paragraph = document.createElement('p');
const parText = document.createTextNode('terść paragrafu');
paragraph.appendChild(parText);

paragraph.setAttribute('id', 'new-par');

document.body.insertBefore(paragraph, toDoList);


/* usuwanie wezlow np. chcemy usunac cale h1, wezel rodzica i co z tego wezla bedziemy usuwali , skad = usun dziecko*/
document.body.removeChild(document.querySelector('h1'));

