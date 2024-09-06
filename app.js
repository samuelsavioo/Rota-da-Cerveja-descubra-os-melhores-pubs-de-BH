
 function pesquisar () {
  let section = document.getElementById("resultados-pesquisa")

  let campoPesquisa = document.getElementById("campo-pesquisa").value 

  if (!campoPesquisa) {
    section.innerHTML =  "<p>Nada foi encontrado. Você precisa digitar o nome de algum bar ou o que deseja encontrar</p>"
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  let resultados = ""
  let titulo = ""
  let descricao = ""
  let tags = ""

    for(let dado of dados) {

      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

     if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)
    ){
      resultados += 
      `<div class="item-resultado">
      
     <h2>
        ${dado.titulo}
     </h2> 
   
     <p 
     class="descricao-meta"> ${dado.descricao}
     </p>
   
     <a
      href="${dado.link}">Mais informações
      </a>
   
   </div>`; 
      
      }

     }
       
  if (!resultados) {
       resultados = "<p>Poxaa, não encontramos o seu bar</p>"

  }

  section.innerHTML = resultados;

}
  