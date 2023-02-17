'use strict';

var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');

var btnOpenModal = document.querySelectorAll('.show-modal');
var btnCloseModal = document.querySelector('.close-modal');

var openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

var closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
  // close on x
  btnCloseModal.addEventListener('click', closeModal);
  // close on overlay
  overlay.addEventListener('click', closeModal);
  // close on escape keybord
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
