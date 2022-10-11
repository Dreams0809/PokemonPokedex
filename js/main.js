document.querySelector('button').addEventListener('click',getPokemon)

function getPokemon(){

  const pokemon = document.querySelector('input').value.toLowerCase()
  // const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
        
    document.querySelector('h2').innerText = data.name.toUpperCase()
    document.querySelector('img').src = data.sprites.other["official-artwork"].front_default
    document.querySelector('#type').innerText = data.types[0].type.name.toUpperCase()
    document.querySelector('#attack').innerText = data.stats[1].base_stat
    document.querySelector('#defense').innerText = data.stats[2].base_stat



  })
  .catch(err => {
    console.log(`error ${err}`)
 });




}






