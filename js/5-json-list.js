let persons = {
    "osoby": [
        {
            imie: "Krystian",
            nazwisko: "Dziopa",
            wzrost: 180,
            oczy: "niebieskie",
            zainteresowania: [
                { nazwa: "podroze" },
                { nazwa: "gotowanie" }
            ]
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "gotowanie" },
                { nazwa: "języki" }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]

        },
        {
            imie: "Agnieszka",
            nazwisko: "Wojtasik",
            wzrost: 179,
            oczy: "zielone",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]

        }
    ]
}

const list = document.createElement('ul');
const heading = document.createElement('h2');
const headingText = document.createTextNode('Użytkownicy');

document.body.appendChild(list);

heading.appendChild(headingText);
/* do naglowka wstaw text */
list.parentNode.insertBefore(heading, list);


persons.osoby.forEach(function(element) {
    const listItem = document.createElement('li');
    const userText = document.createTextNode(element.imie + '  ' + element.nazwisko);
    listItem.appendChild(userText);
    list.appendChild(listItem);
    /* stworzylo 3 obiekty w tablicy li bo mamy trzy obiekty w tablicy */
});


