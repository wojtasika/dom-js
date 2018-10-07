function changeBackground() {
    console.log('test');
    this.style.backgroundColor = 'red';
}

/*document.querySelector('h1').onclick = changeBackground;
document.querySelector('ul').onclick = changeBackground;*/

document.querySelector('h1').addEventListener('click', changeBackground);
/*document.querySelector('h1').addEventListener('click', function(){
    window.location.href = 'https://google.com';
});*/

document.querySelector('ul').addEventListener('click', function() {
    this.style.backgroundColor = 'yellow';
    document.querySelector('h1').removeEventListener('click', changeBackground);
});

/* chce napisac taki link ktorynie przeniesie mnie do googla tylko zmieni kolor fontu */

document.querySelector('a').addEventListener('click', function(event) { 
    event.preventDefault();
    console.log(event);
    let url = event.target.href;
    
    window.setTimeout(function() {
        console.log('test');
        window.location.href = url;
    }, 3000);
    this.style.color = 'green';
});


/* propagacja zdarzen */
document.querySelector('h3').addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    this.style.backgroundColor = 'pink';
});

document.querySelector('section').addEventListener('click', function() {
    this.style.backgroundColor = 'orange';
});