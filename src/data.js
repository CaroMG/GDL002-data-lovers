//Nueva funcion para filtrar por tipo.
const filPokeType = (dataPokemon,condition) => {
  const typePoke = dataPokemon.filter (data => data.type[0] === condition || data.type[1] === condition);
  return typePoke;
};

//Funcion para order. FUNCIONA.
const sortPoke = (pokemons, orderType) => {
switch(orderType) {
case 'A':
  return pokemons.slice().sort((a,b)=>{
    if(a.name > b.name){
      return 1;
    }
    if(a.name < b.name){
      return -1;
    }
  });
case 'Z':
return pokemons.slice().sort((a,b)=>{
  if(a.name > b.name){
    return -1;
  }
  if(a.name < b.name){
    return 1;
  }
});
case '':
  return pokemons;
}
};

//Funcion para promediar cantidad de candy_count
const averCandy = (pokeData) => {
let pokeAll = pokeData;
let filtered = PokeAll.filter(elemt => elemt.candy_count);
// pokeAll.map(elemt => elemt.candy_count);
// let averPokeRedu = pokeAll.reduce(function(accumalatore,valueNext){accumalatore+valueNext;});
// let averPokeCandy = averPokeRedu/pokeAll.length;
console.log(filtered)
// return averPokeCandy;
};

window.loversData = {
filPokeType: filPokeType,
sortPoke: sortPoke,
averCandy: averCandy
};











