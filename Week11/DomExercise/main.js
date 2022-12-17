/*** 1. promena pozadine grandparent uz pomoć id-ja ili querySelektora***/

// var grandparentId = document.getElementById('grandparent-id');
// changeColor(grandparentId);

// var granparentQuery = document.querySelector('#grandparent-id');
// changeColor(granparentQuery);

/*** 2.promena pozadine jednog parent-a ili promena pozadine svih parenta uz pomoć qurySelector i querySelectorAll***/

/*jedan sa parent klasom */

// var parentQuery = document.querySelector('.parent');
// changeColor(parentQuery);

/*svi sa parent klasom*/

/*jedan način*/

// var parentAll = Array.from(document.getElementsByClassName('parent'));
// parentAll.forEach(changeColor);

/*drugi način*/

// var parentAll = document.querySelectorAll('.parent');
// parentAll.forEach(changeColor);

/*** 3.promena pozadine child***/

/*prvo dete*/
// var child1 = document.querySelector('.child');
// changeColor(child1);

/*sva deca*/
// var childAll= document.querySelectorAll('.child');
// childAll.forEach(changeColor);

/*** 4. Traversing  ***/

/*a. obeležimo div koji obavija elemente*/
// var grandparent = document.querySelector('.grandparent');

/*b. proverimo koliko elemenata sadrži 
var children = grandparent.children;
console.log(children.length);*/

/* c. obojimo drugi element parent*/

// var parent = grandparent.children[1];
// changeColor(parent);

/*d. obojimo prvi elemente unutar drugog parent-a zakomentarisati c.changeColor*/

// var child = parent.children;
// var firstChild = child[0];
// changeColor(firstChild);

/*e. obojimo drugi elemente unutar drugog parent-a*/

// var child = parent.lastElementChild;
// changeColor(child);

/*šablon funkcije za menjanje boja*/

// function changeColor(element) {
//   element.style.backgroundColor = '#FF9E9E';
// }


/*** 5. Add Element - dodati naslov insertBefore('element','location') ***/

//dodavanje pre grandparent

// var container = document.querySelector('.grandparent');
// var h1 = document.createElement('h1');
// var text = document.createTextNode('Dom exercise');
// h1.appendChild(text);
// document.body.insertBefore(h1,container);

// dodavanje na prvo mesto u grandparent



/*** 5. Add Element - dodati tekst na dno stranice ***/

var h2 = document.createElement('h2');

var text = document.createTextNode('Made with ❤ ');

h2.appendChild(text);

var container1 = document.querySelector('.grandparent');

container1.appendChild(h2);