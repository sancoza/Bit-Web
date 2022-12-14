/*
Selecting One/Multiple Elements
Create two unordered lists on the page.
    
Create a function that selects the second list and applies a class 
that sets some background color to it.
Create a second function that, when triggered, selects all <li> elements on the page. 
The function also sets a class that sets some bg color to every <li> element.
*/

// function setBackgroundColor() {
//   var lists = document.getElementsByTagName('ul');
//   lists[1].style.backgroundColor = 'blue';
// }
// setBackgroundColor();

// function myFunction() {
//   var element = document.getElementById("second");
//   element.classList.add("mystyle");
// }
// myFunction();

// function selectAllListItems() {
//   var listItems = document.getElementsByTagName('li');
//   for (var i = 0; i < listItems.length; i++) {
//     listItems[i].style.backgroundColor = 'yellow';
//   }
// }

// selectAllListItems();

// function selectAll() {
//   var listElement = document.getElementsByTagName('li');
//   for (let i = 0; i < listElement.length; i++) {
//     listElement[i].classList.add('new')

//   }
// }
// selectAll();

// function rowBackground(){
//   var rows = document.querySelector("body").getElementsByTagName("li")
//   for (var i = 0; i < rows.length; i++) {
//     switch (i) {
//       case 0:
//           rows[i].style.backgroundColor = "red";
//           break;
//       case 1:
//           rows[i].style.backgroundColor = "green";
//           break;
//       case 2:
//             rows[i].style.backgroundColor = "blue";
//             break;
//       case 3:
//             rows[i].style.backgroundColor = "yellow";
//             break;
//       case 4:
//             rows[i].style.backgroundColor = "pink";
//             break;
//       case 5:
//             rows[i].style.backgroundColor = "violet";
//             break;
//       default:
//             rows[i].style.backgroundColor = "white"
//     }
//   }
//   console.log(rows)
// }
// rowBackground();

/*
Create one more unordered list and one more function
The function​ should select only <li> elements from that last list
Each <li> element should get a class that sets some bg color and transforms the text to uppercase.*/

// function thirdList() {
//   var thirdList = document.getElementsByTagName("ul")[2];
//   var thirdListItems = thirdList.children;
//   for (i = 0; i < thirdListItems.length; i++) {
//       thirdListItems[i].classList.add("thirdList");
//   }
//   console.log(thirdListItems);
// }
// var result = thirdList();
// console.log(result);

//Traversing
/*
Create two unordered lists.
Each list should be wrapped in a div element.
One <li> element in the second list should have a class “active”, which sets its background color.
Create a function that selects the <li> element with class “active”.
Remove the class from that element, and then select the first <li> element 
in the first unordered list using node relations.
Apply class to that newly selected <li> element
*/

// function changeActive() {
//   var activeLiNode = document.querySelector('.active');
//   activeLiNode.classList.remove('active');
//   var newActiveLiNode =
//     activeLiNode.parentElement.parentElement.previousElementSibling
//       .firstElementChild.firstElementChild;
//   newActiveLiNode.classList.add('active');
// }

// changeActive();

/*
Access/Update Text Node
Create an unordered list containing <li> items that represent navigation.
Create a function that takes text from one of the <li> elements and presents it on screen using alert.
  
Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list 
and replace its text with text passed as the function argument.
*/
function alert() {
  var row = document.querySelector(".alert").firstElementChild.firstElementChild;
  var alert = row.textContent;
  console.log(alert);
}
alert();

function changeText() {
  var liEl = document.querySelector("ul li");
  document.querySelector("ul li").textContent = "novi clan";
  console.log(liEl);
}
changeText();

function alertText() {
  var listNodes = document.querySelector('ul');
  var liNode = listNodes.firstElementChild;
  window.alert(liNode.textContent);
}
alertText();

function changeText() {
  document.querySelector('ul li').textContent;
  document.querySelector('ul li').textContent = 'Some new paragraph text';
}

changeText();


// InnerHTML
// Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
// Create a function that is used for building a dropdown/select element.
// It first builds a dropdown and then adds it to the DOM.
// The function takes two arguments: the first is an array of strings and the second is a
// DOM node to which the dropdown will be added.
// Create options that correspond to items in the passed array and add them to the select element.
// Add the whole dropdown list to DOM .
// Use this function to create two selects on the page.
// The first select should be appended to the first div on the page.
// The second select should be appended to the last div on the page.

// function createDropdown(arr, domNode) {
//     var select = document.createElement('select');
//     for (var i = 0; i < arr.length; i++) {
//         var option = document.createElement('option');
//          option.innerHTML = arr[i];
//          select.appendChild(option);
//     }
//     var body = document.querySelector('body');
//     var node = document.createElement(domNode);
//     node.appendChild(select);
//     body.appendChild(node);
// }

// var array = ['Home', 'About', 'Contact'];
// createDropdown(array, 'div');
// createDropdown (['Box_1', 'Box_2', 'Box_3'], 'div');

// Attributes
// Create a form that contains multiple input elements with labels.
// Some of those elements should be required.
// Create a function that validates the form.
// The function checks each input element that belongs to the form.
// If the element has the required attribute and no data, it should get red borders.

// function validateForm () {
//   var input = document.getElementsByTagName('input');
//   for (var i = 0; i < input.length; i++) {
//       if (input[i].hasAttribute('required') && input[i].value === "") {
//           input[i].style.borderColor = 'red';
//       }
//   }
// }
// validateForm ();









