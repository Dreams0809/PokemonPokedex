document.querySelector('#button1').addEventListener('click',getTeam1)

function getTeam1(){

    const pokemonTeam1 = document.querySelector('h1').value.toLowerCase()

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonTeam1}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
            

        document.querySelector('#attackTeam1').innerText = data.stats[1].base_stat
        document.querySelector('#defenseTeam1').innerText = data.stats[2].base_stat
        document.querySelector('#typeTeam1').innerText = data.types[0].type.name.toUpperCase()
        
        
    })
    .catch(err => {
        console.log(`error ${err}`)
     });

}

