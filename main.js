
async function getPokemons(){
  //On récupère l'API avec fetch() en faisant une demande https
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=1279')
  //On récupère la réponse de l'API avec les infos
  .then (function(response){
    return response.json();
  })

  

}

// On veut afficher les pokémons
async function loadPok(){
  const pok = await getPokemons()
  
  // On récupère la barre de recherche ave son id
    let searchinput = document.getElementById('pokemon');

    
    searchinput.addEventListener('keyup', function(){
      let input = searchinput.value;

      // ON FILTRE LES RESULTATS PAR NOM EN PRENANT CELUI QUI COMME PAR LA LETTRE SAISIE
      let result = pok.results.filter(item => {
        return item.name.startsWith(input)
        
      })

      // ON REMPLI LA DIV SUGGESTION ET ON Y AFFICHE LES RESULTATS
      let suggestion = '';

      if(input != ''){
        result.forEach(resultItem =>
          suggestion +=
          `<div class="suggestion id="">${resultItem.name}</div>`
          // forEach()

          
          
        )
      }



      // resultItem.name.addEventListener('click', function(){
      //   `<h1 class="nompokemon"></h1>
      //   <ul>
      //     <li class="j">${result.order}</li>
      //     <li class="s">${result.is_mythical}</li>
      //     <li class="d">${result.is_legendary}</li>
      //     <li class="f">${result.is_baby}</li>
      //   </ul>`
      // })
      
      document.getElementById('suggestions').innerHTML = suggestion;
      
    })
  }
  
  loadPok()



