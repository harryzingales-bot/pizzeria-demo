// ===== Pizzeria Da Nonno Marco — script.js =====

// Menu hamburger per mobile
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.nav ul');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('aperto');
    });
  }

  // Evidenzia il link della pagina corrente
  var pagina = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function (link) {
    if (link.getAttribute('href') === pagina) {
      link.classList.add('attivo');
    }
  });

  // Form contatti: messaggio di conferma (demo, non invia nulla)
  var form = document.querySelector('form.contatto');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      document.querySelector('.messaggio-invio').classList.add('visibile');
      form.reset();
    });
  }
});
