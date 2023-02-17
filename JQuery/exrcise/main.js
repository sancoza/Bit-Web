$(function () {
  $('li:first').replaceWith('<li>Novo nesto</li>');
  $('li.active').html('<p>Pragraf</p>');
  // $('li:last').remove();
  $('li').addClass('klasa');
  $('ul').hide().delay(100).fadeIn(1000);

  var li = $('li');
  li.text('Tekst Noviiii');

  var lista = $('<li>Nešto piše</li>');
  $('li:last').after(lista);

  $('ul').before('<p>Prvi tekst</p>');
  $('li:first').text('bla');
  $('li.active').attr('id', 'novi-id');
  // $('li.active').removeClass('active');
  $('li.active').removeAttr('id');
  // $('li.active').css('background-color','#ff0000');
  $('li.active').css({
    'background-color': '#ff0000',
    'font-size': '40px',
    color: '#fff',
  });

  $('li').on('mouseover click', function () {
    $(this).children('span').remove();
    $(this).append('<span class = "kkllaassaa">  blaaa   </span>');
  });
});
