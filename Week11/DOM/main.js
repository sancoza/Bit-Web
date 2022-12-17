// var htmlNode = document.documentElement;

// console.log('htmlNode:',htmlNode);
// console.log(htmlNode.nodeName);
// console.log(htmlNode.attributes);
// console.log(htmlNode.id);
// console.log(htmlNode.className);

// console.log(htmlNode.hasChildNodes());

// var bodyNode = htmlNode.childNodes[2];
// var divHeadNode = bodyNode.childNodes[1];

// bodyNode = divHeadNode.parentNode;

// console.log(bodyNode.hasChildNodes());

// console.log(bodyNode.nodeName);
// console.log(bodyNode.attributes);
// console.log(bodyNode.id);
// console.log(bodyNode.className);
// console.log(bodyNode.childNodes);

// var divHeaderNode = document.getElementById('header');
// console.log(divHeaderNode.nodeName);
// console.log(divHeaderNode.attributes);
// console.log(divHeaderNode.id);
// console.log(divHeaderNode.className);
// console.log(divHeaderNode.childNodes);

// var mainHeaderNode = document.querySelector('.main-header');

// console.log(mainHeaderNode.nodeName);
// console.log(mainHeaderNode.attributes);
// console.log(mainHeaderNode.id);
// console.log(mainHeaderNode.className);
// console.log(mainHeaderNode.childNodes);

// var paragraphNodes = document.getElementsByTagName('p');
// console.log(paragraphNodes);

// var sixthPNode =paragraphNodes[5];
// console.log(sixthPNode);

// console.log(sixthPNode.nodeName);
// console.log(sixthPNode.attributes);
// console.log(sixthPNode.id);
// console.log(sixthPNode.className);
// console.log(sixthPNode.childNodes);

// sixthPNode.className = 'strong-paragraph';

// var mainHeaders = document.getElementsByClassName('mein-header');
// var mainHeaders1 = document.querySelectorAll('.mein-header');

// setTimeout(function () {
//   sixthPNode.className = 'strong-paragraph';
// },2000);

// setTimeout(function () {
//   if(sixthPNode.className === 'strong-paragraph') {
//       sixthPNode.className = '';
//       return;
//   }
//   sixthPNode.className='strong-paragraph';

// },2000);

// // var divHeaderNode = document.getElementById('header');
// // console.log(divHeaderNode.children);
// // console.log(divHeaderNode.children[4].children);
// // console.log(divHeaderNode.previousElementSibling);
// // console.log(divHeaderNode.firstElementChild);
// // console.log(divHeaderNode.lastElementChild);
// // console.log(divHeaderNode.nextElementSibling);

// var sixthPNode = paragraphNodes[5];

// setInterval(function () {
//   if(sixthPNode.innerText === 'jeeee') {
//       sixthPNode.innerText = 'nijeeee';
//       return;
//   }
//   sixthPNode.innerText='jeeeee';

// },500);

// setTimeout(function () {
// // divHeaderNode.innerHTML ='<ul><li>First Item</li><li>Second Item</li></ul>';//briše sve i stavlja novo
// divHeaderNode.outerHTML ='<ul><li>First Item</li><li>Second Item</li></ul>';//obriše i element i unutrašnjost
// },3000);

/********* ubacivanje elemenata *********/

// var divHeaderNode = document.getElementById('header');

// var newPNode = document.createElement('p');
// var textNode = document.createTextNode('Ćaooo'); // newPNode.textContent='pozdraaaavvvv';
// newPNode.appendChild(textNode); //ubacuje element na poslednje mesto

// setTimeout(function () {
//   divHeaderNode.appendChild(newPNode);
// }, 3000);

// /********* brisanje *********/

// var nodeToDelete = document.getElementById('delete');
// var parentNode = nodeToDelete.parentElement;

// setTimeout(function () {
//   parentNode.removeChild(nodeToDelete);
// }, 3000);

// nodeToDelete.hasAttribute('id');
// console.log(nodeToDelete.hasAttribute('id')); //dali ima

// nodeToDelete.hasAttribute('id');
// // console.log(nodeToDelete.getAttribute('href'));
// console.log(nodeToDelete.setAttribute('class', 'bla bla-bla'));

// var linkNode = document.createElement('a');
// linkNode.textContent = 'Google';
// linkNode.setAttribute('href', 'https://google.com');

// linkNode.setAttribute('target', '_blank');
// divHeaderNode.appendChild(linkNode);

// var input = document.querySelector('input');
// input.setAttribute('style', 'color:red;');
// console.log(input.value);
// input.value = 'newValue';
// console.log(input.getAttribute('value'));

// /******** class list*****/

// console.log(divHeaderNode.className); //prikazuje sve klase

// divHeaderNode.classList.add('neka-nova');
// divHeaderNode.classList.remove('switch');
// divHeaderNode.classList.toggle('cao');
// divHeaderNode.classList.toggle('container');


