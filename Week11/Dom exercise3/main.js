//You are given some names of different fruit and an unordered list html element; add a list item for each to the unordered list.

// var fruitList = ["apple", "banana", "tomato"];

// var ulElement = document.querySelector('ul');

// fruitList.forEach(function(fruit) {
//   var itemElement = document.createElement('li');
//   itemElement.textContent = fruit;
//   ulElement.appendChild(itemElement);
// })

// Add the  logo (image element) as a child element to the existing div element.

// var imgSrc = "https://crocoder.dev/icon.png";
// var divElement = document.querySelector('div');
// var imgElement = document.createElement('img');
// imgElement.src = imgSrc;
// divElement.appendChild(imgElement);

// Change the text in the first and the last list item element in every unordered list element on this page. Change it to 'first' and 'last'.

var listItems = document.getElementsByTagName('li');
listItems[0].innerHTML = 'first';
listItems[listItems.length - 1].innerHTML = 'last';

