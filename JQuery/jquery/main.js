// Intro
// Create a page that is using the jQuery library
// Print ‘Hello, world!’ in console when DOM loads

// Selecting
// Create a page that contains navigation (ul element)
// Navigation should contain odd number of elements
// Select the first element of the list and give it a bottom border
// Select all list elements and transform their text to uppercase
// Select active element of the list and change its font color
// Find the middle one and change its background color
// $(function() {
//   $(document).ready(function helloWorld () {
//     console.log('Hello World');
//   });

//   $('li:first').addClass('bottom-border');

//   $('li').css('text-transform','uppercase');
//   $('li.active').css('color','red');
//   $('li:eq(2)').css('color', 'green');

// });
// Inserting elements
// Start with a blank HTML page
// Using just JS (jQuery), create an image gallery
// All links to images in the gallery should be elements of the same array!
// When the gallery is created and visible on the page, create gallery title and
// insert it before the gallery images
// Go through gallery images and set a random size to each gallery image

$(function () {
  var $galeryContainer = $('<div></div>');
  $galeryContainer.addClass('.gallery');
  $('body').append($galeryContainer);
  $galeryContainer.prepend('<h2>Gallery Title</h2>');
  $galeryContainer
    .find('h2')
    .css({ marginLeft: '50%', transform: 'translateX(-15%)' });
  function addImmg(node, imgUrl) {
    $img = $('<img/>');
    $img.attr('src', imgUrl);
    node.append($img);
  }
  var imgUrlarr = [
    'https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];
  imgUrlarr.forEach(function (el) {
    addImmg($galeryContainer, el);
  });
  function setWidthAndHight() {
    return Math.round(Math.random() * (750 - 150 + 1) + 150);
  }
  $galeryContainer.find('img').each(function (index, el) {
    var newEl = $(el);
    newEl.height(setWidthAndHight());
    newEl.width(setWidthAndHight());
    if (newEl.width() < 250) {
      newEl.css({ border: '3px solid green' });
    }
  });
});
