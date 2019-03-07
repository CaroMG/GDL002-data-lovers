// ;

// function poketmon(allPokemon){
//     let templateCard =`
//       <div class="card-container">
//         <div class="card">
//           <div class="side">
//             <h2>${allPokemon.name}</h2>
//             <img src="${allPokemon.img}">
//           </div>
//         </div>
//       </div>
//       `; 
//     return templateCard;
//   };

//   const allCards = (data,fullList) => {
//     let pokemonGap = " ";
//       for (let allPokemon of data) {
//         pokemonGap = pokemonGap + poketmon(allPokemon);
//         }
//       fullList.innerHTML = pokemonGap;
//       console.log(pokemonGap);
//      return pokemonGap; 
//   };



// let card = document.getElementById("listaPoke");

// //Template dinamico para flip card con pokemones filtrados
// function dinamicPoke(onePokemon){
//     let dinamiCard =`
//       <div class="card-container">
//         <div class="card">
//           <div class="side">
//             <h2>${onePokemon.name}</h2>
//             <img src="${onePokemon.img}">
//           </div>
//           <div class="back">
//             <p id="heightPokeFind">Talla:${onePokemon.height}</p>
//             <p id="weightPokeFind">Peso:${onePokemon.weight}</p>
//             <p id="typePokeFind">Tipo:${onePokemon.type}</p>
//             <p id="weaknessesPokeFind">Debilidades:${onePokemon.weaknesses}</p>
//           </div>
//         </div>
//       </div>
//       `; 
//     return dinamiCard;
//   };
  
//   //Imprime los pokemones filtrados en el template dinamico
// const showCards = (data,card) => {
//     let pokemonSpace = " ";
//       for (let onePokemon of data) {
//         pokemonSpace = pokemonSpace + dinamicPoke(onePokemon);
//         }
//       card.innerHTML = pokemonSpace;
//      return pokemonSpace; 
//   };


// //Funciones de Botones, cambio de pantallas
// const pageStar = () => {
//     document.getElementById("card").style.display="block";
//     document.getElementById("cardPokemon").style.display="none";
//     document.getElementById("listPokemon").style.display="none";
// };

// document.getElementById("backStart").addEventListener("click",pageStar);
// document.getElementById("start").addEventListener("click",pageStar);

// const pageFindPoke = () => { 
//     document.getElementById("card").style.display="none";
//     document.getElementById("cardPokemon").style.display="block";
// };

// document.getElementById("findPkemon").addEventListener("click",pageFindPoke);

// const pokelist = () => {
//     document.getElementById("card").style.display="none";
//     document.getElementById("cardPokemon").style.display="none";
//     document.getElementById("listPokemon").style.display="block";
// };

// document.getElementById("pokelist").addEventListener("click",pokelist);
// document.getElementById("backPokelist").addEventListener("click",pokelist);


// //Para hacer arreglo con el valor de los botones para hacer filtrado segun tipo
//  let arrayButtons = Array.from(document.getElementsByClassName("typeButton"));


//  for(let i=0; i <= arrayButtons.length; i++) {
//    let buttonsValue = arrayButtons[i];
//    buttonsValue.addEventListener("click",() => {
//      let condition = buttonsValue.value;
//      console.log(condition);
//      let filter = filPokeType(POKEMON.pokemon,condition); 
//     // showCards(filter);
//    })
//  };  


//Funciones de Botones, cambio de pantallas
const pageStar = () => {
  document.getElementById("card").style.display="block";
  document.getElementById("cardPokemon").style.display="none";
  document.getElementById("listPokemon").style.display="none";
};

document.getElementById("backStart").addEventListener("click",pageStar);
document.getElementById("start").addEventListener("click",pageStar);

const pageFindPoke = () => {
  document.getElementById("card").style.display="none";
  document.getElementById("cardPokemon").style.display="block";
};

document.getElementById("findPkemon").addEventListener("click",pageFindPoke);

const pokelist = () => {
  document.getElementById("card").style.display="none";
  document.getElementById("cardPokemon").style.display="none";
  document.getElementById("listPokemon").style.display="block";
};

document.getElementById("pokelist").addEventListener("click",pokelist);
document.getElementById("backPokelist").addEventListener("click",pokelist);

//Template dinamico para flip card con pokemones filtrados
function dinamicPoke(onePokemon){
    let dinamiCard =`
      <div class="card-container">
        <div class="card">
          <div class="side">
            <h2>${onePokemon.name}</h2>
            <img src="${onePokemon.img}">
          </div>
          <div class="back">
            <p id="heightPokeFind">Talla:${onePokemon.height}</p>
            <p id="weightPokeFind">Peso:${onePokemon.weight}</p>
            <p id="typePokeFind">Tipo:${onePokemon.type}</p>
            <p id="weaknessesPokeFind">Debilidades:${onePokemon.weaknesses}</p>
          </div>
        </div>
      </div>
      `;
    return dinamiCard;
  }

//Imprime los pokemones filtrados en el template dinamico
let card = document.getElementById("listaPoke");

function showCards (data,card) {
  let pokemonSpace = " ";
    for (let onePokemon of data) {
      pokemonSpace = pokemonSpace + dinamicPoke(onePokemon);
      }
  card.innerHTML = pokemonSpace;
    return pokemonSpace;
}

//Para hacer arreglo con el valor de los botones para hacer filtrado segun tipo
let arrayButtons = Array.from(document.getElementsByClassName("typeButton"));
const pokeData = POKEMON.pokemon;
let currentPokeType = '';

for(let i=0; i < arrayButtons.length; i++) {
  let buttonsValue = arrayButtons[i];
  buttonsValue.addEventListener("click",() => {
    currentPokeType = buttonsValue.value;
    drawPokemonOfType(currentPokeType);
  });
}

function drawPokemonOfType(pokeType) {
  let orderType = getOrderType();
  let filteredPokemon = window.loversData.filPokeType(pokeData,pokeType);
  let orderedPokemon = orderPoke(filteredPokemon, orderType);
  showCards(orderedPokemon,card);
}

function getOrderType() {
  let orderType = '';
  if (document.getElementById('order-A').checked) {
    orderType = document.getElementById('order-A').value;
  }
  if (document.getElementById('order-B').checked) {
    orderType = document.getElementById('order-B').value;
  }

  return orderType;
}

//Funcion para order. FUNCIONA.
const orderPoke = (pokemons, orderType) => {
  let orderedPokemon = window.loversData.sortPoke(pokemons, orderType);
  return orderedPokemon;
};

const showOrderPoke = () => {
  if (currentPokeType !== '')
  {
    drawPokemonOfType(currentPokeType);
  }
};

document.getElementById("pokemonOrder").addEventListener("click",showOrderPoke);

const averCandyPrint = () => {
  let averResul = window.loversData.averCandy(POKEMON.pokemon);
  document.getElementById("candy").innerHTML = averResul;
  console.log(averResul);
};
document.getElementById("candys").addEventListener("click",averCandyPrint);




 