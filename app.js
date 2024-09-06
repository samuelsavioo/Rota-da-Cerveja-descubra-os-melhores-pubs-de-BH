function pesquisar() {
  // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos.
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor digitado pelo usuário no campo de pesquisa e converte para minúsculas para facilitar a comparação.
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Verifica se o usuário digitou algum termo de pesquisa. Se não, exibe uma mensagem informativa.
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de algum bar ou o que deseja encontrar</p>";
    return; // Interrompe a função, pois não há o que pesquisar.
  }

  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultados = "";

  // Itera sobre cada registro (bar) nos dados.
  for (let dado of dados) {
    // Converte todas as propriedades do objeto para minúsculas para facilitar a comparação com o termo de pesquisa.
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let tags = dado.tags.toLowerCase();

    // Verifica se o termo de pesquisa está presente em alguma das propriedades do registro.
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Se o termo foi encontrado, cria um novo elemento HTML para exibir o resultado da pesquisa.
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  // Verifica se algum resultado foi encontrado. Se não, exibe uma mensagem informativa.
  if (!resultados) {
    resultados = "<p>Poxaa, não encontramos o seu bar</p>";
  }

  // Atualiza o conteúdo da seção de resultados com os resultados da pesquisa (ou mensagem de erro).
  section.innerHTML = resultados;
}
