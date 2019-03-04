/*window.pokemon = {
  filter : (dataPokemon, condition) => {
    const typePoke = dataPokemon.filter (data => data.type[0] === condition || data.type[1] === condition)
    const items = typePoke.map(type => type.name);  
    console.log(items);
    //return items  
  }
  
}*/

//Nueva funcion para filtrar por tipo
const filPokeType = (dataPokemon,condition) => {
      console.log();
      const typePoke = dataPokemon.filter (data => data.type[0] === condition || data.type[1] === condition)
      console.log(typePoke);
      const items = typePoke.map(type => type.name); 
      showCards(typePoke, card);
    return items;     
};


//Funcion para iterar con for y buscar pokemon. 
/*const findPoke = () => {
  let condition = "Pikachu";
  for (let i=0; i<dataPokemon.length; i++) {
    let allPokemon = dataPokemon[i];
    if (allPokemon.name === condition){
    allPokemon.name};  
    console.log(allPokemon.name);
  }
};*/









