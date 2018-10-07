/* wezel rodzica */

const listItemParent = document.querySelector('.to-do-item');

console.log(listItemParent);
console.log(listItemParent.parentElement);

/* wezly dzieci */
const toDoList = document.getElementById('to-do-list');


/* opcja children zwraca nam tylko elementy znacznikowe, 
childNodes zwraca nam elementy znacznikowe rownia */
console.log(toDoList);
console.log(toDoList.children);
console.log(toDoList.childNodes);
console.log(toDoList.firstElementChild);
console.log(toDoList.lastElementChild);


/*const listHeading = document.createElement('h2');
listHeading.innerTest = 'Cześć';
toDoList.lastChild.insertBefore();*/

toDoList.lastElementChild.style.backgroundColor = 'yellow';


/* elementy rodzenstwa */
toDoList.previousElementSibling.style.color = 'blue';
listItemParent.nextElementSibling.style.color = 'green';
/* to powyzej spowodowalo ze drugi element listy jest zielony */



