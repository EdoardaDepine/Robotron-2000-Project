const controle = document.querySelectorAll("[data-controle]");

controle.forEach((botao) => {
  botao.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
  });
});

function manipulaDados(operacao, controle) {
  const peca = document.querySelector("[data-contador]");

  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}
