// function test() {
//   console.log('click!!!!!!');
// }

// var p=document.getElementById('delete');
// p.onclick= function() {
//   console.log('deleeeteee');
// }

// var p=document.getElementById('delete');
// p.onclick= function() {
//   // var perent = p.parentElement;
//   var perent = this.parentElement;
//   perent.removeChild(this);
// }




var p=document.getElementById('delete');
var input =document.getElementById('input');
var bodyNode =document.getElementById('body');

var onClick = function() {
  var perent = this.parentElement;
  perent.removeChild(this);
}
var anotherOnClick = function() {
  console.log('caoooo')
}
p.addEventListener('click', onClick);
p.addEventListener('click',anotherOnClick);


var keyUpHandler = function(e) {
  // console.log(e);
  // console.log('Up')
  if(e.key === ' Enter') {
    console.log('Submit');
    console.log(e);
  }
}
var changeHandler = function(e) {
  console.log(e);
  }

input.addEventListener('keyup', keyUpHandler);
input.removeEventListener('keyup', keyUpHandler);
input.addEventListener('change', changeHandler);

bodyNode.addEventListener('click',function(e) {
  console.log('x: ' + e.clientX + ' y: ' + e.clientY);
});

var aNode = document.getElementById('link');
aNode.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('click on a ocures')
})