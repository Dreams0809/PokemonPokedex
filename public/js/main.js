document.querySelector('button').addEventListener('click',getPokemon)

function getPokemon(){

  const pokemon = document.querySelector('input').value.toLowerCase()
  // const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    
    document.querySelector('#name').innerText = data.name.toUpperCase()    
    document.querySelector('img').src = data.sprites.other["official-artwork"].front_default
    document.querySelector('#type').innerText = data.types[0].type.name.toUpperCase()
    document.querySelector('#attack').innerText = data.stats[1].base_stat
    document.querySelector('#defense').innerText = data.stats[2].base_stat
    
    if(data.types[0].type.name.toUpperCase() === 'WATER'){
      document.querySelector('#type').style.color = 'blue'
      document.querySelector('body').style.backgroundImage = "url('https://media.nationalgeographic.org/assets/photos/380/216/1c9ab248-0c9c-413d-b0c8-ce8aec56b821_c173-0-1826-1308_r800x633.jpg?96ed7f9566b7ff80376a33c65e148cfbde5cf2a3')"
      document.querySelector('body').style.backgroundRepeat = 'no-repeat'
      document.querySelector('body').style.backgroundSize = 'contain'
    }

    if(data.types[0].type.name.toUpperCase() === 'FIRE'){
      document.querySelector('h1').style.color = 'white'
      document.querySelector('#attack').style.color = 'red'
      document.querySelector('#defense').style.color = 'red'
      document.querySelector('.type').style.color = 'black'
      document.querySelector('.attack').style.color = 'black'
      document.querySelector('.defense').style.color = 'black'
      document.querySelector('#type').style.color = 'Red'
      document.querySelector('body').style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/443/960/991/fire-background-flames-wallpaper-preview.jpg')"
      document.querySelector('body').style.backgroundRepeat = 'no-repeat'
      document.querySelector('body').style.backgroundSize = 'contain'
    }
    
    if(data.types[0].type.name.toUpperCase() === 'GRASS'){
      document.querySelector('#type').style.color = '#004953'
      document.querySelector('#attack').style.color = '#004953'
      document.querySelector('#defense').style.color = '#ADFF2F'
      document.querySelector('.name').style.color = 'green'
      document.querySelector('h1').style.color = 'green'
      document.querySelector('body').style.backgroundImage = "url('https://wallpapercave.com/dwp1x/MTFGvNm.jpg')"
      document.querySelector('body').style.backgroundRepeat = 'no-repeat'
      document.querySelector('body').style.backgroundSize = 'contain'
    }
    
    if(data.types[0].type.name.toUpperCase() === 'ELECTRIC'){
      document.querySelector('#type').style.color = 'Yellow'
      document.querySelector('#attack').style.color = 'Yellow'
      document.querySelector('#defense').style.color = 'Yellow' 
      document.querySelector('h1').style.color = '#f5c71a'
      document.querySelector('.name').style.color = '#f5c71a'
      document.querySelector('.type').style.color = '#999900'
      document.querySelector('.attack').style.color = '#999900'
      document.querySelector('.defense').style.color = '#999900'
      document.querySelector('body').style.backgroundImage = "url('https://www.gettyimages.in/detail/video/4k-gold-yellow-square-blurred-abstract-concert-stock-footage/1232893618')"
      document.querySelector('body').style.backgroundRepeat = 'no-repeat'
      document.querySelector('body').style.backgroundSize = 'contain'
    }
    
    if(data.types[0].type.name.toUpperCase() === 'GHOST'){
      document.querySelector('h1').style.color = 'Grey'
      document.querySelector('#type').style.color = 'Grey'
      document.querySelector('#attack').style.color = 'Grey'
      document.querySelector('#defense').style.color = 'Grey'
      document.querySelector('.type').style.color = 'Grey'
      document.querySelector('.attack').style.color = 'Grey'
      document.querySelector('.defense').style.color = 'Grey'
      document.querySelector('.name').style.color = 'Grey'
      document.querySelector('body').style.backgroundImage = "url('https://wallpaperset.com/w/full/e/1/1/54167.jpg')"
      document.querySelector('body').style.backgroundRepeat = 'no-repeat'
      document.querySelector('body').style.backgroundSize = 'contain'
    }
    
    if(data.types[0].type.name.toUpperCase() === 'ICE'){
      document.querySelector('#type').style.color = '#aad4e5'
      document.querySelector('#attack').style.color = '#aad4e5'
      document.querySelector('#defense').style.color = '#aad4e5'
      document.querySelector('.type').style.color = '#aad4e5'
      document.querySelector('.attack').style.color = '#aad4e5'
      document.querySelector('.defense').style.color = '#aad4e5'
      document.querySelector('h1').style.color = '#aad4e5'
      document.querySelector('.name').style.color = '#aad4e5'
      document.querySelector('body').style.backgroundImage = "url('https://i.pinimg.com/originals/31/b7/fa/31b7fa3e136fc9d116597d4b21154854.jpg')"
      document.querySelector('body').style.backgroundRepeat = 'no-repeat'
      document.querySelector('body').style.backgroundSize = 'contain'
    }

  


})
  .catch(err => {
    console.log(`error ${err}`)
 });




}

console.log('Choose your Pokemon')










