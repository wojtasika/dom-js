/* manipulacja przez wlasciwosci , bierzemy naglowek h1 i jego wlasciwosciami bedziemy manipulowac*/
const heading = document.querySelector('h1');

console.dir(heading);


heading.innerHTML = 'Nowy <span>nagłowek</span>';
/*heading.innerText = 'Nowy <span>nagłowek</span>';
 outer - wyrzucil nam zawartosc i znacznik h1 i wstawil na jego miejsce nowa tresc 
heading.outerHTML = 'Nowy <span>nagłowek</span>';*/

heading.id =  'main-heading';

let listId = document.querySelector('ul').id;
console.log(listId);



heading.className = 'new-class';

const listItem = document.querySelector('li');


/* element bierzemy i dodajemy do niego klase */
listItem.classList.add('first-element');
listItem.classList.remove('to-do-items');

/* ta własciwosc pozwala ustalic style liniowe na elementcie */
listItem.style.backgroundColor = 'pink';





