
const titulo = document.getElementById('titulo');
const texto = titulo.textContent;
titulo.textContent = ''; // Limpa o texto para começar o efeito

let i = 0;
function digitar() {
  if (i < texto.length) {
    titulo.textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 80); // velocidade da digitação
  }
}
digitar();

/*----------linha do tempo----------*/
function mostrarGeracao(elemento) {
  const jaAtivo = elemento.classList.contains('ativo'); // verifica se já está aberto

  // Fecha todas as outras gerações
  document.querySelectorAll('.geracao').forEach(div => {
    div.classList.remove('ativo');
  });

  // Se ele não estava ativo, abre. Se estava, apenas fecha (não faz nada)
  if (!jaAtivo) {
    elemento.classList.add('ativo');
  }
}