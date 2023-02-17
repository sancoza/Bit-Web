var btn = document.getElementById('change');
var btnReset = document.getElementById('reset')

btn.addEventListener('click', function onClick() {
  //change backgroundcolor
  document.body.style.backgroundColor = 'red';
});
btnReset.addEventListener('click', function onClick() {
  //change backgroundcolor
  document.body.style.backgroundColor = '#2d3e4f';
});