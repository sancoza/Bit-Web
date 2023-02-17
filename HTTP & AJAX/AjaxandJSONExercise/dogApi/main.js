var btn = document.getElementById('button');
var div = document.getElementById('gallery');
btn.addEventListener('click', getRandomDog);
function getRandomDog() {
  var dogObject;
  var request = new XMLHttpRequest();
  request.open('GET', 'https://dog.ceo/api/breeds/image/random');
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      dogObject = JSON.parse(request.responseText);
      var src = dogObject.message;
      img = document.createElement('img');
      img.setAttribute('src', src);
      div.appendChild(img);
    }
  };
  request.send();
  isDog = true;
}
