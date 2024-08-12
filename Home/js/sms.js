document.body.id = "content";

window.onscroll = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById('navbar').classList.add('scrolled');
  } else {
    document.getElementById('navbar').classList.remove('scrolled');
  }
}

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

var $btnAumentar = $("#btnAumentar");
var $btnDiminuir = $("#btnDiminuir");

$btnAumentar.on('click', function () {
  alterarTamanhoFonte(1.2);
});

$btnDiminuir.on('click', function () {
  alterarTamanhoFonte(0.8);
});

function alterarTamanhoFonte(fator) {
  var corpo = document.getElementById('content');
  var tamanhoAtual = window.getComputedStyle(corpo, null).getPropertyValue('font-size');
  var novoTamanho = parseFloat(tamanhoAtual) * fator;
  corpo.style.fontSize = novoTamanho + 'px';

  // Percorre todos os elementos com texto e ajusta o tamanho da fonte
  var elementosComTexto = corpo.querySelectorAll('*:not(script):not(style)');
  elementosComTexto.forEach(function (elemento) {
    var tamanhoAtualElemento = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
    var novoTamanhoElemento = parseFloat(tamanhoAtualElemento) * fator;
    elemento.style.fontSize = novoTamanhoElemento + 'px';
  });
}
